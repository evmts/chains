---
description: Code generation project for blockchain chain constants. Uses Bun for TypeScript and Zig for native support.
globs: "*.ts, *.tsx, *.zig, *.html, *.css, *.js, *.jsx, package.json, build.zig, build.zig.zon"
alwaysApply: true
---

# Chains - Blockchain Constants Library

This project generates blockchain network constants from the DefiLlama chainlist for both Zig and TypeScript.

## Core Principles

1. **Use Bun for TypeScript** - All TypeScript tooling uses Bun instead of Node.js
2. **Code Generation** - Chain constants are generated, never manually edited
3. **Dual Language Support** - Maintain feature parity between Zig and TypeScript
4. **Type Safety** - Leverage strong typing in both languages

## Development Guidelines

### Using Bun (TypeScript)

Default to using Bun instead of Node.js:

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Bun automatically loads .env, so don't use dotenv.

## APIs

- `Bun.serve()` supports WebSockets, HTTPS, and routes. Don't use `express`.
- `bun:sqlite` for SQLite. Don't use `better-sqlite3`.
- `Bun.redis` for Redis. Don't use `ioredis`.
- `Bun.sql` for Postgres. Don't use `pg` or `postgres.js`.
- `WebSocket` is built-in. Don't use `ws`.
- Prefer `Bun.file` over `node:fs`'s readFile/writeFile
- Bun.$`ls` instead of execa.

## Testing

Use `bun test` to run tests.

```ts#index.test.ts
import { test, expect } from "bun:test";

test("hello world", () => {
  expect(1).toBe(1);
});
```

## Frontend

Use HTML imports with `Bun.serve()`. Don't use `vite`. HTML imports fully support React, CSS, Tailwind.

Server:

```ts#index.ts
import index from "./index.html"

Bun.serve({
  routes: {
    "/": index,
    "/api/users/:id": {
      GET: (req) => {
        return new Response(JSON.stringify({ id: req.params.id }));
      },
    },
  },
  // optional websocket support
  websocket: {
    open: (ws) => {
      ws.send("Hello, world!");
    },
    message: (ws, message) => {
      ws.send(message);
    },
    close: (ws) => {
      // handle close
    }
  },
  development: {
    hmr: true,
    console: true,
  }
})
```

HTML files can import .tsx, .jsx or .js files directly and Bun's bundler will transpile & bundle automatically. `<link>` tags can point to stylesheets and Bun's CSS bundler will bundle.

```html#index.html
<html>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="./frontend.tsx"></script>
  </body>
</html>
```

With the following `frontend.tsx`:

```tsx#frontend.tsx
import React from "react";

// import .css files directly and it works
import './index.css';

import { createRoot } from "react-dom/client";

const root = createRoot(document.body);

export default function Frontend() {
  return <h1>Hello, world!</h1>;
}

root.render(<Frontend />);
```

Then, run index.ts

```sh
bun --hot ./index.ts
```

For more information, read the Bun API docs in `node_modules/bun-types/docs/**.md`.

## Working with This Project

### Code Generation (`scripts/generate.ts`)

The main code generation script:
- Reads from `lib/chainlist/constants/additionalChainRegistry/chainid-*.js`
- Parses chain data objects using eval (safe context - static files)
- Generates `src/chains.zig` with Zig structs and constants
- Generates `src/chains.ts` with TypeScript interfaces and constants

**Key functions:**
- `loadChainData()`: Loads and parses all chain files from chainlist submodule
- `generateZigCode()`: Creates Zig module with Chain/NativeCurrency/Explorer structs
- `generateTypeScriptCode()`: Creates TypeScript module with interfaces and constants
- `sanitizeForZig()` / `sanitizeForTypeScript()`: Converts chain names to valid identifiers

### Generated Files (DO NOT EDIT MANUALLY)

- `src/chains.zig`: Generated Zig constants
- `src/chains.ts`: Generated TypeScript constants

Always regenerate using `bun run generate` after updating the chainlist submodule.

### Zig Build System

- `build.zig`: Configures the Zig build with module exports and test runners
- `src/root.zig`: Module entry point that re-exports chains.zig
- `src/main.zig`: Example executable that demonstrates usage
- Run with: `zig build run`
- Test with: `zig build test`

### Git Submodule

The `lib/chainlist` directory is a git submodule pointing to DefiLlama/chainlist:
- Update: `git submodule update --remote lib/chainlist`
- After updating, regenerate: `bun run generate`

## Naming Conventions

- **TypeScript**: camelCase for variables, PascalCase for types
- **Zig**: snake_case for variables/fields, PascalCase for types
- **Constants**: SCREAMING_SNAKE_CASE in both (e.g., `CHAIN_ID_ETH_1`)
- **Chain identifiers**: Sanitized from chain shortName + chainId suffix

## Common Tasks

### Add support for a new chain
1. Ensure it exists in the chainlist submodule
2. Run `bun run generate`
3. Test with `bun test` and `zig build test`

### Update chain data
```bash
git submodule update --remote lib/chainlist
bun run generate
zig build test
```

### Debug generation issues
- Check `scripts/generate.ts` parsing logic
- Verify chainlist file format in `lib/chainlist/constants/additionalChainRegistry/`
- Use `console.error()` in generate.ts for debugging
