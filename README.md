# chains

Chain IDs, RPC URLs, native currencies and explorers from the [DefiLlama Chainlist additional registry](https://github.com/DefiLlama/chainlist/tree/main/constants/additionalChainRegistry), available as TypeScript, Zig and Go constants. Lookups use local data and do not contact RPC endpoints.

## TypeScript and JavaScript

```sh
bun add @tevm/chains
```

```ts
import {
  CHAIN_ID_FLR14,
  allChains,
  chainById,
  getChainById,
} from "@tevm/chains";

const flare = getChainById(CHAIN_ID_FLR14);
console.log(flare?.nativeCurrency.symbol); // FLR
console.log(chainById[14]?.name); // Flare Mainnet
console.log(allChains.length);
```

`getChainById` returns `undefined` for an unknown ID. The package ships ESM and TypeScript declarations.

## Zig

Use Zig 0.15.1 or 0.15.2. From a Zig project, fetch a pinned commit from this repository:

```sh
zig fetch --save=chains https://github.com/evmts/chains/archive/<commit-sha>.tar.gz
```

Add the dependency in your `build.zig`:

```zig
const chains_dep = b.dependency("chains", .{ .target = target, .optimize = optimize });
exe.root_module.addImport("chains", chains_dep.module("chains"));
```

```zig
const chains = @import("chains");
const flare = chains.getChainById(chains.chains.CHAIN_ID_FLR_14);
```

`getChainById` returns `null` for an unknown ID. `chains.all_chains` holds the full registry in chain ID order.

## Go

Use Go 1.23.4 or newer. Install a tagged release or use `@main` for the current `main` snapshot:

```sh
go get github.com/evmts/chains/src@main
```

```go
import "github.com/evmts/chains/src"

flare := chains.GetChainByID(chains.ChainIDFLR14)
```

`GetChainByID` returns `nil` for an unknown ID. `AllChains` is the ordered registry and `ChainByID` is its ID index.

## Data source and compatibility

[data/chainlist.json](data/chainlist.json) records the source commit and the registry snapshot. [data/compatibility.json](data/compatibility.json) retains records removed since the first release and aliases for renamed constants. Retained records use their historical metadata. The upstream license is included in [LICENSE.chainlist](LICENSE.chainlist).

TypeScript preserves upstream metadata and all RPC URL schemes. Zig and Go expose HTTP and HTTPS RPC URLs and use the chain ID when upstream omits the network ID. The snapshot uses `shortName` when upstream omits `chain` and reads `url` from structured RPC entries. Treat all exported chain records and collections as read-only.

## Development

Install Bun 1.4.1, Zig 0.15.2 and Go 1.23.4. CI uses these versions. The checked-in snapshot makes ordinary builds and generation independent of the current upstream repository.

```sh
bun install --frozen-lockfile
bun run lint
bun run typecheck
bun run check:generated
bun run build
zig build
zig fmt --check build.zig build.zig.zon src/*.zig
go build ./...
go vet ./...
```

```sh
bun run test
bun run test:property
zig build test
go test ./...
go test ./src -run '^$' -fuzz '^FuzzGetChainByID$' -fuzztime 5s -parallel 2
bun run test:e2e # Installs and typechecks the packed npm package in a fresh project.
zig build run    # Runs the Zig example against the public module.
bun run bench
zig build bench
go test ./src -run '^$' -bench '^BenchmarkLookup$' -benchtime 200ms
```

The benchmarks exercise successful and unsuccessful lookups. CI checks their results and reports timings without machine-specific thresholds.

### Refresh the snapshot

```sh
bun run update-chainlist <full-DefiLlama-chainlist-commit-sha>
bun run generate
bun run check:generated
```

Review the source revision and generated changes together. `generate` rebuilds the TypeScript, JavaScript, declarations, Zig and Go files. `check:generated` reports any differences without modifying those files.
