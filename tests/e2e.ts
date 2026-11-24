import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { allChains } from "../index";

function run(command: string[], cwd: string) {
  const result = Bun.spawnSync(command, {
    cwd,
    stdout: "inherit",
    stderr: "inherit",
  });
  if (result.exitCode !== 0) throw new Error(`Failed: ${command.join(" ")}`);
}

const root = join(import.meta.dir, "..");
const consumer = await mkdtemp(join(tmpdir(), "chains-consumer-"));
try {
  run(
    [
      process.execPath,
      "pm",
      "pack",
      "--filename",
      join(consumer, "chains.tgz"),
      "--quiet",
    ],
    root,
  );
  await Bun.write(
    join(consumer, "package.json"),
    JSON.stringify({
      name: "chains-package-smoke-test",
      private: true,
      type: "module",
      dependencies: { "@tevm/chains": "file:./chains.tgz" },
    }),
  );
  await Bun.write(
    join(consumer, "index.ts"),
    `
import { allChains, chainById, CHAIN_ID_FLR14, getChainById, type Chain } from "@tevm/chains";
const chain: Chain | undefined = getChainById(CHAIN_ID_FLR14);
if (chain?.nativeCurrency.symbol !== "FLR" || chainById[14] !== chain ||
    allChains.length !== ${allChains.length} || getChainById(Number.MAX_SAFE_INTEGER) !== undefined) {
  throw new Error("Installed package returned unexpected chain data");
}
`,
  );
  run(
    [process.execPath, "install", "--ignore-scripts", "--omit=peer"],
    consumer,
  );
  run(
    [
      process.execPath,
      join(root, "node_modules/typescript/bin/tsc"),
      "--noEmit",
      "--strict",
      "--target",
      "esnext",
      "--module",
      "node16",
      "index.ts",
    ],
    consumer,
  );
  run([process.execPath, "index.ts"], consumer);
  console.log("Packed npm package declarations and runtime passed");
} finally {
  await rm(consumer, { recursive: true, force: true });
}
