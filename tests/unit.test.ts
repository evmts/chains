import { expect, test } from "bun:test";
import * as chains from "../index";
import {
  normalizeRegistryEntry,
  parseSnapshot,
  readRegistryEntry,
  validateChain,
} from "../scripts/chainlist";

const revision = "0".repeat(40);

function flare() {
  return structuredClone(chains.flr14);
}

test("exports refreshed chain data through the TypeScript entry point", () => {
  expect(chains.getChainById(chains.CHAIN_ID_FLR14)).toBe(chains.flr14);
  expect(chains.flr14.name).toBe("Flare Mainnet");
  expect(chains.flr14.nativeCurrency.symbol).toBe("FLR");
  expect(chains.chainById[14]).toBe(chains.flr14);
  expect(chains.getChainById(88088)?.rpc).toContain("https://rpc.plusmain.net");
  expect(chains.getChainById(0)).toBeUndefined();
});

test("keeps published identifiers for renamed and removed entries", () => {
  expect(chains.cross612055).toBe(chains.one612055);
  expect(chains.CHAIN_ID_CROSS612055).toBe(chains.CHAIN_ID_ONE612055);
  expect(chains.getChainById(chains.CHAIN_ID_ALPEN2892)).toBe(chains.alpen2892);
});

test("reads literal upstream data with comments and a default export", () => {
  expect(
    readRegistryEntry(
      "// comment\nexport const data = { value: 'a', value: 'b', items: [true, null, 1,] }; export default data;",
      "chainid-14.js",
    ),
  ).toEqual({ value: "b", items: [true, null, 1] });
  for (const source of [
    "export const data = { name: String('dynamic') };",
    "export const data = { ...something };",
    "export const data = { get name() { return 'x'; } };",
    "export const data = {}; throw new Error('side effect');",
    "export const data = { duplicateSyntax: };",
  ]) {
    expect(() => readRegistryEntry(source, "chainid-14.js")).toThrow();
  }
});

test("normalizes missing chain labels and RPC objects", () => {
  const entry = {
    ...flare(),
    chain: undefined,
    rpc: [{ url: "https://example.com" }],
  };
  expect(normalizeRegistryEntry(entry, "chainid-14.js")).toMatchObject({
    chain: "flr",
    rpc: ["https://example.com"],
  });
  expect(() => normalizeRegistryEntry(entry, "chainid-15.js")).toThrow(
    "Chain ID does not match",
  );
});

test("rejects invalid catalogs and records", () => {
  const chain = flare();
  expect(() => parseSnapshot({ revision, chains: [] })).toThrow(
    "Empty chainlist",
  );
  expect(() => parseSnapshot({ revision, chains: [chain, chain] })).toThrow(
    "Duplicate or out-of-order",
  );
  expect(() =>
    parseSnapshot({ revision, chains: [chain, { ...chain, chainId: 9 }] }),
  ).toThrow("Duplicate or out-of-order");
  expect(() => parseSnapshot({ revision: "main", chains: [chain] })).toThrow(
    "full upstream commit SHA",
  );
  expect(() =>
    validateChain({ ...chain, explorers: [{ name: "missing URL" }] }),
  ).toThrow("explorer.url");
  expect(() =>
    validateChain({
      ...chain,
      nativeCurrency: { ...chain.nativeCurrency, decimals: 256 },
    }),
  ).toThrow("decimals");
});
