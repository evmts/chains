import ts from "typescript";

interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

interface Explorer {
  name: string;
  url: string;
  standard?: string;
}

export interface ChainData {
  name: string;
  chain: string;
  chainId: number;
  networkId?: number;
  shortName: string;
  rpc: string[];
  nativeCurrency: NativeCurrency;
  infoURL?: string;
  explorers?: Explorer[];
  [key: string]: unknown;
}

export interface ChainlistSnapshot {
  revision: string;
  chains: ChainData[];
}

function record(value: unknown): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error("Expected an object");
  }
  return value as Record<string, unknown>;
}

function assertString(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string")
    throw new Error(`Expected a string for ${field}`);
}

function assertUint(
  value: unknown,
  field: string,
  max = Number.MAX_SAFE_INTEGER,
): asserts value is number {
  if (
    typeof value !== "number" ||
    !Number.isSafeInteger(value) ||
    value < 0 ||
    value > max
  ) {
    throw new Error(`Expected an unsigned integer for ${field}`);
  }
}

export function validateChain(value: unknown): ChainData {
  const chain = record(value);
  assertString(chain.name, "name");
  assertString(chain.chain, "chain");
  assertString(chain.shortName, "shortName");
  assertUint(chain.chainId, "chainId");
  if (chain.chainId === 0) throw new Error("Expected a positive chainId");
  if (chain.networkId !== undefined) assertUint(chain.networkId, "networkId");
  if (chain.infoURL !== undefined) assertString(chain.infoURL, "infoURL");
  if (
    !Array.isArray(chain.rpc) ||
    chain.rpc.some((rpc) => typeof rpc !== "string")
  ) {
    throw new Error("Expected an array of RPC URLs");
  }
  const currency = record(chain.nativeCurrency);
  assertString(currency.name, "nativeCurrency.name");
  assertString(currency.symbol, "nativeCurrency.symbol");
  assertUint(currency.decimals, "nativeCurrency.decimals", 255);
  if (chain.explorers !== undefined) {
    if (!Array.isArray(chain.explorers))
      throw new Error("Expected an array of explorers");
    for (const item of chain.explorers) {
      const explorer = record(item);
      assertString(explorer.name, "explorer.name");
      assertString(explorer.url, "explorer.url");
      if (explorer.standard !== undefined)
        assertString(explorer.standard, "explorer.standard");
    }
  }
  return chain as ChainData;
}

export function parseSnapshot(value: unknown): ChainlistSnapshot {
  const snapshot = record(value);
  assertString(snapshot.revision, "revision");
  if (!/^[a-f0-9]{40}$/.test(snapshot.revision))
    throw new Error("Expected a full upstream commit SHA");
  if (!Array.isArray(snapshot.chains) || snapshot.chains.length === 0)
    throw new Error("Empty chainlist");
  const chains = snapshot.chains.map(validateChain);
  let previous = -1;
  for (const { chainId } of chains) {
    if (chainId <= previous)
      throw new Error(`Duplicate or out-of-order chain ID ${chainId}`);
    previous = chainId;
  }
  return { revision: snapshot.revision, chains };
}

function literalValue(node: ts.Node): unknown {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))
    return node.text;
  if (ts.isNumericLiteral(node)) {
    const value = Number(node.text);
    if (!Number.isFinite(value))
      throw new Error(`Invalid number ${node.getText()}`);
    return value;
  }
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(literalValue);
  if (ts.isObjectLiteralExpression(node)) {
    const entries = new Map<string, unknown>();
    for (const property of node.properties) {
      if (
        !ts.isPropertyAssignment(property) ||
        !(
          ts.isIdentifier(property.name) ||
          ts.isStringLiteral(property.name) ||
          ts.isNumericLiteral(property.name)
        )
      ) {
        throw new Error(`Expected a literal property in ${property.getText()}`);
      }
      const key = property.name.text;
      if (key === "__proto__")
        throw new Error("Prototype properties are unsupported");
      // JavaScript object literals use the last value for repeated keys.
      entries.set(key, literalValue(property.initializer));
    }
    return Object.fromEntries(entries);
  }
  throw new Error(`Expected a data literal, found ${node.getText()}`);
}

export function readRegistryEntry(source: string, file: string): unknown {
  const syntax = ts.transpileModule(source, {
    fileName: file,
    reportDiagnostics: true,
    compilerOptions: { target: ts.ScriptTarget.ESNext },
  });
  const diagnostic = syntax.diagnostics?.[0];
  if (diagnostic)
    throw new Error(
      ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
    );
  const ast = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.JS,
  );
  const [statement, defaultExport, extra] = ast.statements;
  if (
    extra ||
    (defaultExport &&
      (!ts.isExportAssignment(defaultExport) ||
        defaultExport.isExportEquals ||
        !ts.isIdentifier(defaultExport.expression) ||
        defaultExport.expression.text !== "data"))
  ) {
    throw new Error("Expected only the data export");
  }
  if (
    !statement ||
    !ts.isVariableStatement(statement) ||
    !statement.modifiers?.some(
      (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
    ) ||
    !(statement.declarationList.flags & ts.NodeFlags.Const)
  ) {
    throw new Error("Expected a single exported const declaration");
  }
  const declaration = statement.declarationList.declarations[0];
  if (
    statement.declarationList.declarations.length !== 1 ||
    !declaration ||
    !ts.isIdentifier(declaration.name) ||
    declaration.name.text !== "data" ||
    !declaration.initializer
  ) {
    throw new Error("Expected an exported data object");
  }
  return literalValue(declaration.initializer);
}

export function normalizeRegistryEntry(
  value: unknown,
  file: string,
): ChainData {
  const data = record(value);
  if (data.chain === undefined) data.chain = data.shortName;
  if (Array.isArray(data.rpc)) {
    data.rpc = data.rpc.map((rpc: unknown) =>
      typeof rpc === "string" ? rpc : record(rpc).url,
    );
  }
  const chain = validateChain(data);
  if (file !== `chainid-${chain.chainId}.js`)
    throw new Error(`Chain ID does not match ${file}`);
  return chain;
}
