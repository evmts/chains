# chains

Blockchain network constants library for Zig and TypeScript, auto-generated from [DefiLlama/chainlist](https://github.com/DefiLlama/chainlist).

## Overview

This repository provides a dual-language library that exposes blockchain chain constants generated from the DefiLlama chainlist submodule. The code generation script (`scripts/generate.ts`) parses the chainlist data and outputs type-safe constants for both Zig and TypeScript/JavaScript environments.

## Features

- 🔄 Auto-generated from the official DefiLlama chainlist
- 🦎 Native Zig support with static type safety
- 📦 TypeScript/JavaScript support via Bun
- 🔍 Type-safe chain lookups by ID
- 📊 163+ blockchain networks with RPC endpoints, native currencies, and explorers
- 🎯 Constant exports for every chain ID

## Installation

### Prerequisites

- [Bun](https://bun.sh) for TypeScript/JavaScript
- [Zig](https://ziglang.org) 0.15.x for Zig

### Setup

```bash
# Clone with submodules
git clone --recursive <your-repo-url>

# Or if already cloned
git submodule update --init --recursive

# Install dependencies
bun install
```

## Usage

### TypeScript/JavaScript

```typescript
import { allChains, getChainById, CHAIN_ID_FLR_14 } from "chains";

// Get all chains
console.log(`Total chains: ${allChains.length}`);

// Lookup by chain ID
const flare = getChainById(14);
console.log(flare?.name); // "Flare Mainnet"
console.log(flare?.nativeCurrency.symbol); // "FLR"

// Use constants
console.log(CHAIN_ID_FLR_14); // 14
```

### Zig

```zig
const std = @import("std");
const chains = @import("chains");

pub fn main() !void {
    // Get all chains
    std.debug.print("Total chains: {d}\n", .{chains.all_chains.len});

    // Lookup by chain ID
    if (chains.getChainById(14)) |chain| {
        std.debug.print("Name: {s}\n", .{chain.name});
        std.debug.print("Symbol: {s}\n", .{chain.native_currency.symbol});
    }
}
```

#### Using as a Zig dependency

In your `build.zig.zon`:

```zig
.{
    .name = "your-project",
    .version = "0.1.0",
    .dependencies = .{
        .chains = .{
            .url = "https://github.com/yourusername/chains/archive/<commit-hash>.tar.gz",
            .hash = "...",
        },
    },
}
```

In your `build.zig`:

```zig
const chains_dep = b.dependency("chains", .{
    .target = target,
    .optimize = optimize,
});
exe.root_module.addImport("chains", chains_dep.module("chains"));
```

## Development

### Project Structure

```
chains/
├── src/
│   ├── chains.ts       # Generated TypeScript constants
│   ├── chains.zig      # Generated Zig constants
│   ├── root.zig        # Zig module entry point
│   └── main.zig        # Zig example executable
├── scripts/
│   └── generate.ts     # Code generation script
├── lib/
│   └── chainlist/      # Git submodule (DefiLlama/chainlist)
└── build.zig           # Zig build configuration
```

### Regenerate Chain Constants

The generation process reads from `lib/chainlist/constants/additionalChainRegistry/` and produces type-safe constants for both languages.

Update the chainlist submodule and regenerate:

```bash
# Update chainlist data
git submodule update --remote lib/chainlist

# Regenerate constants
bun run generate
```

This will:
1. Parse all `chainid-*.js` files from the chainlist submodule
2. Generate `src/chains.zig` with Zig constants and structs
3. Generate `src/chains.ts` with TypeScript constants and interfaces

### Build

```bash
# TypeScript
bun run build

# Zig
zig build

# Run example
zig build run
```

### Test

```bash
# Zig tests
zig build test
```

## Data Structure

Each chain includes:

- **name**: Full chain name
- **chain**: Short identifier
- **chainId** / **chain_id**: EIP-155 chain ID
- **networkId** / **network_id**: Network ID
- **shortName** / **short_name**: Short name
- **rpc**: Array of RPC endpoints (HTTP/HTTPS URLs)
- **nativeCurrency** / **native_currency**: Native currency details (name, symbol, decimals)
- **infoURL** / **info_url**: Chain information URL (optional)
- **explorers**: Block explorer URLs with names (optional)

### Generated Constants

For each chain, the following constants are generated:

**TypeScript:**
- `CHAIN_ID_<NAME>`: Chain ID constant (e.g., `CHAIN_ID_FLR_14`)
- `<name>`: Chain object with all data
- `allChains`: Array of all chains
- `chainById`: Record mapping chain IDs to chain objects
- `getChainById(chainId)`: Lookup function

**Zig:**
- `CHAIN_ID_<NAME>`: Chain ID constant (e.g., `CHAIN_ID_FLR_14`)
- `<name>`: Chain struct with all data
- `<name>_rpcs`: RPC endpoints array
- `<name>_explorers`: Explorers array (if available)
- `all_chains`: Array of all chains
- `getChainById(chain_id)`: Lookup function

## License

Chain data sourced from [DefiLlama/chainlist](https://github.com/DefiLlama/chainlist).
