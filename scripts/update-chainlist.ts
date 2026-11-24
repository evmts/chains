import { mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  normalizeRegistryEntry,
  parseSnapshot,
  readRegistryEntry,
} from "./chainlist";

const revision = Bun.argv[2];
if (!revision || !/^[a-f0-9]{40}$/.test(revision)) {
  throw new Error(
    "Usage: bun run update-chainlist <full DefiLlama/chainlist commit SHA>",
  );
}

const response = await fetch(
  `https://codeload.github.com/DefiLlama/chainlist/tar.gz/${revision}`,
  {
    signal: AbortSignal.timeout(60_000),
  },
);
if (!response.ok)
  throw new Error(`Chainlist download failed: HTTP ${response.status}`);

const scratch = await mkdtemp(join(tmpdir(), "chains-source-"));
try {
  const extract = Bun.spawnSync(
    ["tar", "-xz", "--strip-components=1", "-C", scratch],
    {
      stdin: new DataView(await response.arrayBuffer()),
      stderr: "inherit",
    },
  );
  if (extract.exitCode !== 0)
    throw new Error("Cannot extract the chainlist archive");

  const registry = join(scratch, "constants/additionalChainRegistry");
  const files = (await readdir(registry)).filter((file) =>
    /^chainid-\d+\.js$/.test(file),
  );
  const chains = await Promise.all(
    files.map(async (file) => {
      try {
        return normalizeRegistryEntry(
          readRegistryEntry(await Bun.file(join(registry, file)).text(), file),
          file,
        );
      } catch (error) {
        throw new Error(`Cannot read ${file}`, { cause: error });
      }
    }),
  );
  chains.sort((left, right) => left.chainId - right.chainId);
  const snapshot = parseSnapshot({ revision, chains });
  const license = await Bun.file(join(scratch, "LICENCE.md")).text();
  await Bun.write(join(import.meta.dir, "../LICENSE.chainlist"), license);
  await Bun.write(
    join(import.meta.dir, "../data/chainlist.json"),
    `${JSON.stringify(snapshot, null, 2)}\n`,
  );
  console.log(`Recorded ${chains.length} registry entries from ${revision}`);
} finally {
  await rm(scratch, { recursive: true, force: true });
}
