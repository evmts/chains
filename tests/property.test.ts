import { expect, test } from "bun:test";
import { allChains, chainById, flr14, getChainById } from "../index";
import { validateChain } from "../scripts/chainlist";

function rng(seed: number) {
  return () => (seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0);
}

test("the registry is strictly ordered and every chain round-trips through both lookups", () => {
  let previous = -1;
  for (const chain of allChains) {
    expect(chain.chainId).toBeGreaterThan(previous);
    expect(validateChain(chain)).toBe(chain);
    expect(chainById[chain.chainId]).toBe(chain);
    expect(getChainById(chain.chainId)).toBe(chain);
    previous = chain.chainId;
  }
  expect(Object.keys(chainById)).toHaveLength(allChains.length);
});

test("lookup agrees with the index for seeded 32-bit and safe-integer IDs", () => {
  const next = rng(54);
  for (let i = 0; i < 2_048; i++) {
    const id =
      i % 2 === 0 ? next() % 10_000 : (next() & 0x1fffff) * 2 ** 32 + next();
    expect(getChainById(id)).toBe(chainById[id]);
  }
  for (const id of [-1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
    expect(getChainById(id)).toBeUndefined();
  }
});

test("validation accepts the full safe integer range and rejects invalid IDs", () => {
  const next = rng(99);
  for (let i = 0; i < 256; i++) {
    const chainId = (next() & 0x1fffff) * 2 ** 32 + next();
    expect(validateChain({ ...flr14, chainId }).chainId).toBe(chainId);
    expect(() => validateChain({ ...flr14, chainId: -(chainId + 1) })).toThrow(
      "chainId",
    );
    expect(() =>
      validateChain({
        ...flr14,
        chainId: Number.MAX_SAFE_INTEGER + 1 + chainId,
      }),
    ).toThrow("chainId");
  }
  expect(
    validateChain({ ...flr14, chainId: Number.MAX_SAFE_INTEGER }).chainId,
  ).toBe(Number.MAX_SAFE_INTEGER);
});
