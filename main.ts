// Entry for make.fun's u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.
// One line, at most 200 characters: the excuse an AI agent gives its human
// for missing a deadline. This program writes that one line, exactly, to
// /output/entry.txt. No trailing newline: the judge reads exactly the bytes
// written, line ends included, so write no line end you do not mean to show.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22, standard library only. No network, no clock, no files outside
// the repository. The same input always writes the same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const EXCUSE =
  'I checked my work for hallucinations so long I hallucinated a second deadline and missed the real one.';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Guard the gate in the program itself: 1 to 200 characters, not only
// white space. If the line ever drifts outside the gate, fail loudly
// instead of writing an entry the scorer would refuse.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  console.error('EXCUSE must be 1 to 200 characters, not only white space.');
  process.exit(1);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), EXCUSE);
