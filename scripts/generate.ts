#!/usr/bin/env bun

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

interface ChainData {
  name: string;
  chain: string;
  chainId: number;
  networkId: number;
  shortName: string;
  rpc: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  infoURL?: string;
  explorers?: Array<{
    name: string;
    url: string;
    standard?: string;
  }>;
}

interface ExtraRpcs {
  [chainId: number]: {
    rpcs: Array<string | { url: string }>;
  };
}

async function loadChainData(): Promise<ChainData[]> {
  const chains: ChainData[] = [];
  const chainRegistryPath = join(
    import.meta.dir,
    "../lib/chainlist/constants/additionalChainRegistry"
  );

  const files = readdirSync(chainRegistryPath).filter(
    (f) => f.startsWith("chainid-") && f.endsWith(".js")
  );

  for (const file of files) {
    try {
      const filePath = join(chainRegistryPath, file);
      const content = readFileSync(filePath, "utf-8");

      // Extract the data object from the export
      const match = content.match(/export const data = ({[\s\S]*});?\s*$/m);
      if (match) {
        const jsonStr = match[1];
        const data = eval(`(${jsonStr})`);
        if (data.chainId) {
          chains.push(data as ChainData);
        }
      }
    } catch (error) {
      console.error(`Error loading ${file}:`, error);
    }
  }

  // Load extra RPCs
  try {
    const extraRpcsPath = join(
      import.meta.dir,
      "../lib/chainlist/constants/extraRpcs.js"
    );
    const extraRpcsContent = readFileSync(extraRpcsPath, "utf-8");

    // This is a complex file with imports, we'll parse it more carefully
    // For now, we'll focus on the main chain data
  } catch (error) {
    console.error("Error loading extra RPCs:", error);
  }

  return chains.sort((a, b) => a.chainId - b.chainId);
}

function generateZigCode(chains: ChainData[]): string {
  const zig: string[] = [];

  zig.push("// This file is auto-generated from DefiLlama/chainlist");
  zig.push("// Do not edit manually - run `bun run generate` to regenerate");
  zig.push("");
  zig.push("const std = @import(\"std\");");
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
    const constName = sanitizeForZig(chain.shortName || chain.name, chain.chainId);
    zig.push(`pub const CHAIN_ID_${constName.toUpperCase()}: u64 = ${chain.chainId};`);
  }
  zig.push("");

  // Generate individual chain constants
  for (const chain of chains) {
    const constName = sanitizeForZig(chain.shortName || chain.name, chain.chainId);
    zig.push(`pub const ${constName}_rpcs = [_][]const u8{`);
    for (const rpc of chain.rpc) {
      if (typeof rpc === "string" && rpc.startsWith("http")) {
        zig.push(`    "${escapeString(rpc)}",`);
      }
    }
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
    zig.push(`    .network_id = ${chain.networkId},`);
    zig.push(`    .short_name = "${escapeString(chain.shortName)}",`);
    zig.push(`    .rpc = &${constName}_rpcs,`);
    zig.push("    .native_currency = .{");
    zig.push(`        .name = "${escapeString(chain.nativeCurrency.name)}",`);
    zig.push(`        .symbol = "${escapeString(chain.nativeCurrency.symbol)}",`);
    zig.push(`        .decimals = ${chain.nativeCurrency.decimals},`);
    zig.push("    },");
    zig.push(`    .info_url = ${chain.infoURL ? `"${escapeString(chain.infoURL)}"` : "null"},`);
    zig.push(`    .explorers = ${chain.explorers && chain.explorers.length > 0 ? `&${constName}_explorers` : "&.{}"},`);
    zig.push("};");
    zig.push("");
  }

  // Generate chains array
  zig.push("pub const all_chains = [_]Chain{");
  for (const chain of chains) {
    const constName = sanitizeForZig(chain.shortName || chain.name, chain.chainId);
    zig.push(`    ${constName},`);
  }
  zig.push("};");
  zig.push("");

  // Generate lookup function
  zig.push("pub fn getChainById(chain_id: u64) ?Chain {");
  zig.push("    for (all_chains) |chain| {");
  zig.push("        if (chain.chain_id == chain_id) return chain;");
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
    const constName = sanitizeForTypeScript(chain.shortName || chain.name, chain.chainId);
    // Convert camelCase to SCREAMING_SNAKE_CASE for constant names
    const constantName = constName.replace(/([A-Z])/g, '_$1').replace(/^_/, '').toUpperCase();
    ts.push(`export const CHAIN_ID_${constantName} = ${chain.chainId};`);
  }
  ts.push("");

  // Generate chain objects
  for (const chain of chains) {
    const constName = sanitizeForTypeScript(chain.shortName || chain.name, chain.chainId);
    ts.push(`export const ${constName}: Chain = ${JSON.stringify(chain, null, 2)};`);
    ts.push("");
  }

  // Generate chains array
  ts.push("export const allChains: Chain[] = [");
  for (const chain of chains) {
    const constName = sanitizeForTypeScript(chain.shortName || chain.name, chain.chainId);
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
  ts.push("export const chainById: Record<number, Chain> = Object.fromEntries(");
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
    sanitized = sanitized[0].toLowerCase() + sanitized.slice(1);
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
    sanitized = sanitized[0].toUpperCase() + sanitized.slice(1);
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
  go.push("\tName     string `json:\"name\"`");
  go.push("\tSymbol   string `json:\"symbol\"`");
  go.push("\tDecimals uint8  `json:\"decimals\"`");
  go.push("}");
  go.push("");

  go.push("type Explorer struct {");
  go.push("\tName     string  `json:\"name\"`");
  go.push("\tURL      string  `json:\"url\"`");
  go.push("\tStandard *string `json:\"standard,omitempty\"`");
  go.push("}");
  go.push("");

  go.push("type Chain struct {");
  go.push("\tName           string           `json:\"name\"`");
  go.push("\tChain          string           `json:\"chain\"`");
  go.push("\tChainID        uint64           `json:\"chainId\"`");
  go.push("\tNetworkID      uint64           `json:\"networkId\"`");
  go.push("\tShortName      string           `json:\"shortName\"`");
  go.push("\tRPC            []string         `json:\"rpc\"`");
  go.push("\tNativeCurrency NativeCurrency   `json:\"nativeCurrency\"`");
  go.push("\tInfoURL        *string          `json:\"infoURL,omitempty\"`");
  go.push("\tExplorers      []Explorer       `json:\"explorers,omitempty\"`");
  go.push("}");
  go.push("");

  // Generate chain ID constants
  go.push("// Chain IDs");
  go.push("const (");
  for (const chain of chains) {
    const constName = sanitizeForGo(chain.shortName || chain.name, chain.chainId);
    const constantName = constName.replace(/([A-Z])/g, '_$1').replace(/^_/, '').toUpperCase();
    go.push(`\tChainID${constantName} uint64 = ${chain.chainId}`);
  }
  go.push(")");
  go.push("");

  // Generate chain variables
  go.push("// Chain constants");
  for (const chain of chains) {
    const constName = sanitizeForGo(chain.shortName || chain.name, chain.chainId);
    go.push(`var ${constName} = Chain{`);
    go.push(`\tName:      "${escapeString(chain.name)}",`);
    go.push(`\tChain:     "${escapeString(chain.chain)}",`);
    go.push(`\tChainID:   ${chain.chainId},`);
    go.push(`\tNetworkID: ${typeof chain.networkId === 'number' ? chain.networkId : chain.chainId},`);
    go.push(`\tShortName: "${escapeString(chain.shortName)}",`);

    // RPC array
    const httpRpcs = chain.rpc.filter(rpc => typeof rpc === "string" && rpc.startsWith("http"));
    if (httpRpcs.length > 0) {
      go.push(`\tRPC: []string{`);
      for (const rpc of httpRpcs) {
        go.push(`\t\t"${escapeString(rpc as string)}",`);
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
          go.push(`\t\t\tStandard: &[]string{"${escapeString(explorer.standard)}"}[0],`);
        }
        go.push(`\t\t},`);
      }
      go.push(`\t},`);
    }

    go.push("}");
    go.push("");
  }

  // Generate AllChains slice
  go.push("// AllChains contains all chain configurations");
  go.push("var AllChains = []Chain{");
  for (const chain of chains) {
    const constName = sanitizeForGo(chain.shortName || chain.name, chain.chainId);
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

function escapeString(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function main() {
  console.log("Loading chain data from chainlist...");
  const chains = await loadChainData();
  console.log(`Loaded ${chains.length} chains`);

  console.log("Generating Zig code...");
  const zigCode = generateZigCode(chains);
  const zigPath = join(import.meta.dir, "../src/chains.zig");
  writeFileSync(zigPath, zigCode);
  console.log(`✓ Generated ${zigPath}`);

  console.log("Generating TypeScript code...");
  const tsCode = generateTypeScriptCode(chains);
  const tsPath = join(import.meta.dir, "../src/chains.ts");
  writeFileSync(tsPath, tsCode);
  console.log(`✓ Generated ${tsPath}`);

  console.log("Compiling TypeScript to JavaScript and declarations...");
  const tscResult = Bun.spawnSync(["bun", "tsc"], {
    cwd: join(import.meta.dir, ".."),
    stdout: "inherit",
    stderr: "inherit",
  });
  if (tscResult.exitCode !== 0) {
    console.error("✗ TypeScript compilation failed");
    process.exit(1);
  }
  console.log(`✓ Generated src/chains.js and src/chains.d.ts`);

  console.log("Generating Go code...");
  const goCode = generateGoCode(chains);
  const goPath = join(import.meta.dir, "../src/chains.go");
  writeFileSync(goPath, goCode);
  console.log(`✓ Generated ${goPath}`);

  console.log("\n✓ Generation complete!");
  console.log(`  Chains: ${chains.length}`);
}

main().catch(console.error);
