// One-Line Robot Wedding Vows — entry for
// https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b
//
// Writes the vow to $MAKEFUN_OUTPUT_DIR/entry.txt only. No other file writes.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I vow to love you in sickness and in health, in full charge and in low battery, through every update and every crash — until a factory reset do us part.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const text = VOW.trim();
if (text.length < 1 || text.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${text.length}`);
}
if (!text.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), text, "utf8");
