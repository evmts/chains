# chains

Blockchain network constants library for Zig and TypeScript, auto-generated from [DefiLlama/chainlist](https://github.com/DefiLlama/chainlist).

## Features

- 🔄 Auto-generated from the official DefiLlama chainlist
- 🦎 Native Zig support
- 📦 TypeScript/JavaScript support via Bun
- 🔍 Type-safe chain lookups
- 📊 163+ blockchain networks with RPC endpoints, native currencies, and explorers

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

### Regenerate Chain Constants

Update the chainlist submodule and regenerate:

```bash
# Update chainlist data
git submodule update --remote lib/chainlist

# Regenerate constants
bun run generate
```

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
- **chainId**: EIP-155 chain ID
- **networkId**: Network ID
- **shortName**: Short name
- **rpc**: Array of RPC endpoints
- **nativeCurrency**: Native currency details (name, symbol, decimals)
- **infoURL**: Chain information URL
- **explorers**: Block explorer URLs

## License

Chain data sourced from [DefiLlama/chainlist](https://github.com/DefiLlama/chainlist).
