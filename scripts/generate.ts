#!/usr/bin/env bun

import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import compatibility from "../data/compatibility.json";
import { type ChainData, parseSnapshot } from "./chainlist";

const root = join(import.meta.dir, "..");
const snapshot = parseSnapshot(
  await Bun.file(join(root, "data/chainlist.json")).json(),
);
const legacy = parseSnapshot(compatibility);
const byId = new Map(legacy.chains.map((chain) => [chain.chainId, chain]));
for (const chain of snapshot.chains) byId.set(chain.chainId, chain);
const chains = Array.from(byId.values()).sort(
  (left, right) => left.chainId - right.chainId,
);
const aliases = Object.entries(compatibility.shortNames).flatMap(
  ([id, oldName]) => {
    const chain = byId.get(Number(id));
    if (!chain)
      throw new Error(`Missing chain ${id} for compatibility alias ${oldName}`);
    return chain.shortName === oldName ? [] : [{ chain, oldName }];
  },
);

function httpRpcs(chain: ChainData): string[] {
  return chain.rpc.filter(
    (rpc) => rpc.startsWith("https://") || rpc.startsWith("http://"),
  );
}

function generateZigCode(chains: ChainData[]): string {
  const zig: string[] = [];

  zig.push("// This file is auto-generated from DefiLlama/chainlist");
  zig.push("// Do not edit manually - run `bun run generate` to regenerate");
  zig.push("");
  // Generate NativeCurrency struct
  zig.push("pub const NativeCurrency = struct {");
  zig.push("    name: []const u8,");
  zig.push("    symbol: []const u8,");
  zig.push("    decimals: u8,");
  zig.push("};");
  zig.push("");

  // Generate Explorer struct
  zig.push("pub const Explorer = struct {");
  zig.push("    name: []const u8,");
  zig.push("    url: []const u8,");
  zig.push("};");
  zig.push("");

  // Generate Chain struct
  zig.push("pub const Chain = struct {");
  zig.push("    name: []const u8,");
  zig.push("    chain: []const u8,");
  zig.push("    chain_id: u64,");
  zig.push("    network_id: u64,");
  zig.push("    short_name: []const u8,");
  zig.push("    rpc: []const []const u8,");
  zig.push("    native_currency: NativeCurrency,");
  zig.push("    info_url: ?[]const u8,");
  zig.push("    explorers: []const Explorer,");
  zig.push("};");
  zig.push("");

  // Generate chain ID constants
  zig.push("// Chain IDs");
  for (const chain of chains) {
    const constName = sanitizeForZig(
      chain.shortName || chain.name,
      chain.chainId,
    );
    zig.push(
      `pub const CHAIN_ID_${constName.toUpperCase()}: u64 = ${chain.chainId};`,
    );
  }
  zig.push("");

  // Generate individual chain constants
  for (const chain of chains) {
    const constName = sanitizeForZig(
      chain.shortName || chain.name,
      chain.chainId,
    );
    zig.push(`pub const ${constName}_rpcs = [_][]const u8{`);
    for (const rpc of httpRpcs(chain)) zig.push(`    "${escapeString(rpc)}",`);
    zig.push("};");
    zig.push("");

    if (chain.explorers && chain.explorers.length > 0) {
      zig.push(`pub const ${constName}_explorers = [_]Explorer{`);
      for (const explorer of chain.explorers) {
        zig.push("    .{");
        zig.push(`        .name = "${escapeString(explorer.name)}",`);
        zig.push(`        .url = "${escapeString(explorer.url)}",`);
        zig.push("    },");
      }
      zig.push("};");
      zig.push("");
    }

    zig.push(`pub const ${constName} = Chain{`);
    zig.push(`    .name = "${escapeString(chain.name)}",`);
    zig.push(`    .chain = "${escapeString(chain.chain)}",`);
    zig.push(`    .chain_id = ${chain.chainId},`);
    zig.push(`    .network_id = ${chain.networkId ?? chain.chainId},`);
    zig.push(`    .short_name = "${escapeString(chain.shortName)}",`);
    zig.push(`    .rpc = &${constName}_rpcs,`);
    zig.push("    .native_currency = .{");
    zig.push(`        .name = "${escapeString(chain.nativeCurrency.name)}",`);
    zig.push(
      `        .symbol = "${escapeString(chain.nativeCurrency.symbol)}",`,
    );
    zig.push(`        .decimals = ${chain.nativeCurrency.decimals},`);
    zig.push("    },");
    zig.push(
      `    .info_url = ${chain.infoURL ? `"${escapeString(chain.infoURL)}"` : "null"},`,
    );
    zig.push(
      `    .explorers = ${chain.explorers && chain.explorers.length > 0 ? `&${constName}_explorers` : "&.{}"},`,
    );
    zig.push("};");
    zig.push("");
  }

  for (const { chain, oldName } of aliases) {
    const oldSymbol = sanitizeForZig(oldName, chain.chainId);
    const newSymbol = sanitizeForZig(chain.shortName, chain.chainId);
    zig.push(
      `pub const CHAIN_ID_${oldSymbol.toUpperCase()} = CHAIN_ID_${newSymbol.toUpperCase()};`,
    );
    zig.push(`pub const ${oldSymbol} = ${newSymbol};`);
    zig.push(`pub const ${oldSymbol}_rpcs = ${newSymbol}_rpcs;`);
    if (chain.explorers?.length)
      zig.push(`pub const ${oldSymbol}_explorers = ${newSymbol}_explorers;`);
    zig.push("");
  }

  // Generate chains array
  zig.push("pub const all_chains = [_]Chain{");
  for (const chain of chains) {
    const constName = sanitizeForZig(
      chain.shortName || chain.name,
      chain.chainId,
    );
    zig.push(`    ${constName},`);
  }
  zig.push("};");
  zig.push("");

  // Generate lookup function
  zig.push("pub fn getChainById(chain_id: u64) ?Chain {");
  zig.push("    var low: usize = 0;");
  zig.push("    var high: usize = all_chains.len;");
  zig.push("    while (low < high) {");
  zig.push("        const middle = low + (high - low) / 2;");
  zig.push("        const chain = all_chains[middle];");
  zig.push("        if (chain.chain_id == chain_id) return chain;");
  zig.push("        if (chain.chain_id < chain_id) {");
  zig.push("            low = middle + 1;");
  zig.push("        } else {");
  zig.push("            high = middle;");
  zig.push("        }");
  zig.push("    }");
  zig.push("    return null;");
  zig.push("}");

  return zig.join("\n");
}

function generateTypeScriptCode(chains: ChainData[]): string {
  const ts: string[] = [];

  ts.push("// This file is auto-generated from DefiLlama/chainlist");
  ts.push("// Do not edit manually - run `bun run generate` to regenerate");
  ts.push("");

  // Generate types
  ts.push("export interface NativeCurrency {");
  ts.push("  name: string;");
  ts.push("  symbol: string;");
  ts.push("  decimals: number;");
  ts.push("  [key: string]: any;");
  ts.push("}");
  ts.push("");

  ts.push("export interface Explorer {");
  ts.push("  name: string;");
  ts.push("  url: string;");
  ts.push("  standard?: string;");
  ts.push("  [key: string]: any;");
  ts.push("}");
  ts.push("");

  ts.push("export interface Chain {");
  ts.push("  name: string;");
  ts.push("  chain: string;");
  ts.push("  chainId: number;");
  ts.push("  networkId?: number;");
  ts.push("  shortName: string;");
  ts.push("  rpc: string[];");
  ts.push("  nativeCurrency: NativeCurrency;");
  ts.push("  infoURL?: string;");
  ts.push("  explorers?: Explorer[];");
  ts.push("  [key: string]: any;");
  ts.push("}");
  ts.push("");

  // Generate chain ID constants
  ts.push("// Chain IDs");
  for (const chain of chains) {
    const constName = sanitizeForTypeScript(
      chain.shortName || chain.name,
      chain.chainId,
    );
    const constantName = screamingSnakeCase(constName);
    ts.push(`export const CHAIN_ID_${constantName} = ${chain.chainId};`);
  }
  ts.push("");

  // Generate chain objects
  for (const chain of chains) {
    const constName = sanitizeForTypeScript(
      chain.shortName || chain.name,
      chain.chainId,
    );
    ts.push(
      `export const ${constName}: Chain = ${JSON.stringify(chain, null, 2)};`,
    );
    ts.push("");
  }

  for (const { chain, oldName } of aliases) {
    const oldSymbol = sanitizeForTypeScript(oldName, chain.chainId);
    const newSymbol = sanitizeForTypeScript(chain.shortName, chain.chainId);
    ts.push(
      `export const CHAIN_ID_${screamingSnakeCase(oldSymbol)} = CHAIN_ID_${screamingSnakeCase(newSymbol)};`,
    );
    ts.push(`export const ${oldSymbol} = ${newSymbol};`);
  }
  ts.push("");

  // Generate chains array
  ts.push("export const allChains: Chain[] = [");
  for (const chain of chains) {
    const constName = sanitizeForTypeScript(
      chain.shortName || chain.name,
      chain.chainId,
    );
    ts.push(`  ${constName},`);
  }
  ts.push("];");
  ts.push("");

  // Generate lookup function
  ts.push("export function getChainById(chainId: number): Chain | undefined {");
  ts.push("  return allChains.find((chain) => chain.chainId === chainId);");
  ts.push("}");
  ts.push("");

  // Generate chain ID to chain map
  ts.push(
    "export const chainById: Record<number, Chain> = Object.fromEntries(",
  );
  ts.push("  allChains.map((chain) => [chain.chainId, chain])");
  ts.push(");");

  return ts.join("\n");
}

function sanitizeForZig(name: string, chainId?: number): string {
  let sanitized = name
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .replace(/^(\d)/, "_$1")
    .replace(/_+/g, "_");

  // Append chain ID to ensure uniqueness
  if (chainId !== undefined) {
    sanitized = `${sanitized}_${chainId}`;
  }

  return sanitized;
}

function sanitizeForTypeScript(name: string, chainId?: number): string {
  // Convert to camelCase
  let sanitized = name
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/^(\d)/, "_$1");

  // Ensure first character is lowercase (camelCase convention)
  if (sanitized.length > 0 && sanitized[0] !== "_") {
    sanitized = sanitized.charAt(0).toLowerCase() + sanitized.slice(1);
  }

  // Append chain ID to ensure uniqueness
  if (chainId !== undefined) {
    sanitized = `${sanitized}${chainId}`;
  }

  return sanitized;
}

function sanitizeForGo(name: string, chainId?: number): string {
  // Convert to PascalCase for exported identifiers
  let sanitized = name
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/^(\d)/, "_$1");

  // Ensure first character is uppercase (PascalCase convention)
  if (sanitized.length > 0 && sanitized[0] !== "_") {
    sanitized = sanitized.charAt(0).toUpperCase() + sanitized.slice(1);
  }

  // Append chain ID to ensure uniqueness
  if (chainId !== undefined) {
    sanitized = `${sanitized}${chainId}`;
  }

  return sanitized;
}

function generateGoCode(chains: ChainData[]): string {
  const go: string[] = [];

  go.push("// This file is auto-generated from DefiLlama/chainlist");
  go.push("// Do not edit manually - run `bun run generate` to regenerate");
  go.push("");
  go.push("package chains");
  go.push("");

  // Generate types
  go.push("type NativeCurrency struct {");
  go.push('\tName     string `json:"name"`');
  go.push('\tSymbol   string `json:"symbol"`');
  go.push('\tDecimals uint8  `json:"decimals"`');
  go.push("}");
  go.push("");

  go.push("type Explorer struct {");
  go.push('\tName     string  `json:"name"`');
  go.push('\tURL      string  `json:"url"`');
  go.push('\tStandard *string `json:"standard,omitempty"`');
  go.push("}");
  go.push("");

  go.push("type Chain struct {");
  go.push('\tName           string           `json:"name"`');
  go.push('\tChain          string           `json:"chain"`');
  go.push('\tChainID        uint64           `json:"chainId"`');
  go.push('\tNetworkID      uint64           `json:"networkId"`');
  go.push('\tShortName      string           `json:"shortName"`');
  go.push('\tRPC            []string         `json:"rpc"`');
  go.push('\tNativeCurrency NativeCurrency   `json:"nativeCurrency"`');
  go.push('\tInfoURL        *string          `json:"infoURL,omitempty"`');
  go.push('\tExplorers      []Explorer       `json:"explorers,omitempty"`');
  go.push("}");
  go.push("");

  // Generate chain ID constants
  go.push("// Chain IDs");
  go.push("const (");
  for (const chain of chains) {
    const constName = sanitizeForGo(
      chain.shortName || chain.name,
      chain.chainId,
    );
    const constantName = screamingSnakeCase(constName);
    go.push(`\tChainID${constantName} uint64 = ${chain.chainId}`);
  }
  go.push(")");
  go.push("");

  // Generate chain variables
  go.push("// Chain constants");
  for (const chain of chains) {
    const constName = sanitizeForGo(
      chain.shortName || chain.name,
      chain.chainId,
    );
    go.push(`var ${constName} = Chain{`);
    go.push(`\tName:      "${escapeString(chain.name)}",`);
    go.push(`\tChain:     "${escapeString(chain.chain)}",`);
    go.push(`\tChainID:   ${chain.chainId},`);
    go.push(`\tNetworkID: ${chain.networkId ?? chain.chainId},`);
    go.push(`\tShortName: "${escapeString(chain.shortName)}",`);

    // RPC array
    const rpcs = httpRpcs(chain);
    if (rpcs.length > 0) {
      go.push(`\tRPC: []string{`);
      for (const rpc of rpcs) {
        go.push(`\t\t"${escapeString(rpc)}",`);
      }
      go.push(`\t},`);
    } else {
      go.push(`\tRPC: []string{},`);
    }

    // Native currency
    go.push(`\tNativeCurrency: NativeCurrency{`);
    go.push(`\t\tName:     "${escapeString(chain.nativeCurrency.name)}",`);
    go.push(`\t\tSymbol:   "${escapeString(chain.nativeCurrency.symbol)}",`);
    go.push(`\t\tDecimals: ${chain.nativeCurrency.decimals},`);
    go.push(`\t},`);

    // Info URL
    if (chain.infoURL) {
      const infoURL = escapeString(chain.infoURL);
      go.push(`\tInfoURL: &[]string{"${infoURL}"}[0],`);
    }

    // Explorers
    if (chain.explorers && chain.explorers.length > 0) {
      go.push(`\tExplorers: []Explorer{`);
      for (const explorer of chain.explorers) {
        go.push(`\t\t{`);
        go.push(`\t\t\tName: "${escapeString(explorer.name)}",`);
        go.push(`\t\t\tURL:  "${escapeString(explorer.url)}",`);
        if (explorer.standard) {
          go.push(
            `\t\t\tStandard: &[]string{"${escapeString(explorer.standard)}"}[0],`,
          );
        }
        go.push(`\t\t},`);
      }
      go.push(`\t},`);
    }

    go.push("}");
    go.push("");
  }

  for (const { chain, oldName } of aliases) {
    const oldSymbol = sanitizeForGo(oldName, chain.chainId);
    const newSymbol = sanitizeForGo(chain.shortName, chain.chainId);
    go.push(
      `const ChainID${screamingSnakeCase(oldSymbol)} = ChainID${screamingSnakeCase(newSymbol)}`,
    );
    go.push(`var ${oldSymbol} = ${newSymbol}`);
  }
  go.push("");

  // Generate AllChains slice
  go.push("// AllChains contains all chain configurations");
  go.push("var AllChains = []Chain{");
  for (const chain of chains) {
    const constName = sanitizeForGo(
      chain.shortName || chain.name,
      chain.chainId,
    );
    go.push(`\t${constName},`);
  }
  go.push("}");
  go.push("");

  // Generate lookup function
  go.push("// GetChainByID returns a chain by its chain ID");
  go.push("func GetChainByID(chainID uint64) *Chain {");
  go.push("\tfor i := range AllChains {");
  go.push("\t\tif AllChains[i].ChainID == chainID {");
  go.push("\t\t\treturn &AllChains[i]");
  go.push("\t\t}");
  go.push("\t}");
  go.push("\treturn nil");
  go.push("}");
  go.push("");

  // Generate chain ID map
  go.push("// ChainByID is a map of chain ID to Chain");
  go.push("var ChainByID = func() map[uint64]*Chain {");
  go.push("\tm := make(map[uint64]*Chain)");
  go.push("\tfor i := range AllChains {");
  go.push("\t\tm[AllChains[i].ChainID] = &AllChains[i]");
  go.push("\t}");
  go.push("\treturn m");
  go.push("}()");

  return go.join("\n");
}

function screamingSnakeCase(name: string): string {
  return name
    .replace(/([A-Z])/g, "_$1")
    .replace(/^_/, "")
    .toUpperCase();
}

function escapeString(value: string): string {
  return value.replace(/["\\\u0000-\u001f\u007f]/g, (character) => {
    if (character === '"' || character === "\\") return `\\${character}`;
    if (character === "\n") return "\\n";
    if (character === "\r") return "\\r";
    if (character === "\t") return "\\t";
    return `\\x${character.charCodeAt(0).toString(16).padStart(2, "0")}`;
  });
}

function run(command: string[], stdin?: string): string {
  const result = Bun.spawnSync(command, {
    cwd: root,
    stdin: stdin === undefined ? "ignore" : Buffer.from(stdin),
    stderr: "inherit",
  });
  const output = result.stdout.toString();
  if (result.exitCode !== 0) throw new Error(`${command[0]} failed\n${output}`);
  return output;
}

const args = Bun.argv.slice(2);
if (args.length > 1 || (args.length === 1 && args[0] !== "--check")) {
  throw new Error("Usage: bun run generate [--check]");
}
const check = args[0] === "--check";
const scratch = await mkdtemp(join(tmpdir(), "chains-generate-"));
try {
  const typescript = generateTypeScriptCode(chains);
  await Bun.write(join(scratch, "chains.ts"), typescript);
  await Bun.write(
    join(scratch, "tsconfig.json"),
    JSON.stringify({
      extends: join(root, "tsconfig.build.json"),
      compilerOptions: { rootDir: ".", outDir: "out" },
      include: ["chains.ts"],
    }),
  );
  run([
    process.execPath,
    join(root, "node_modules/typescript/bin/tsc"),
    "-p",
    join(scratch, "tsconfig.json"),
  ]);
  const outputs = {
    "chains.ts": typescript,
    "chains.js": await Bun.file(join(scratch, "out/chains.js")).text(),
    "chains.d.ts": await Bun.file(join(scratch, "out/chains.d.ts")).text(),
    "chains.zig": run(["zig", "fmt", "--stdin"], generateZigCode(chains)),
    "chains.go": run(["gofmt"], generateGoCode(chains)),
  };
  const stale: string[] = [];
  for (const [name, output] of Object.entries(outputs)) {
    const path = join(root, "src", name);
    if (check) {
      const file = Bun.file(path);
      if (!(await file.exists()) || (await file.text()) !== output)
        stale.push(`src/${name}`);
    } else {
      await Bun.write(path, output);
    }
  }
  if (stale.length)
    throw new Error(`Run bun run generate to refresh: ${stale.join(", ")}`);
  console.log(
    `${check ? "Verified" : "Generated"} ${chains.length} chain constants from ${snapshot.revision}`,
  );
} finally {
  await rm(scratch, { recursive: true, force: true });
}
