// Entry for make.fun competition "Make the AI judge feel awe"
// (make-the-ai-judge-feel-awe-20261121-1600).
// Writes one short relaxing text to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Late light is pooling on a windowsill nobody watches. " +
  "The sea folds itself into the shore, and the shore keeps giving it back, " +
  "and above them both the sky widens past every name we gave it — " +
  "stars arriving one by one, patient as dust settling on a road no one walks anymore.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
