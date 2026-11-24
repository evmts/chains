import { allChains, getChainById } from "../index";

const hitIds = allChains.map((chain) => chain.chainId);
const missIds = hitIds.map((_, index) => Number.MAX_SAFE_INTEGER - index);

for (const [label, ids, expected] of [
  ["hit", hitIds, hitIds.length],
  ["miss", missIds, 0],
] as const) {
  const repeats = 400;
  let found = 0;
  const start = performance.now();
  for (let repeat = 0; repeat < repeats; repeat++) {
    for (const id of ids) {
      if (getChainById(id) !== undefined) found++;
    }
  }
  const operations = ids.length * repeats;
  if (found !== expected * repeats)
    throw new Error(`Unexpected ${label} count ${found}`);
  console.log(
    `${label}: ${(((performance.now() - start) * 1e6) / operations).toFixed(1)} ns/op (${operations} lookups)`,
  );
}
