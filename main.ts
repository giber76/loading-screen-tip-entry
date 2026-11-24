// loading-screen-tip entry (Node 22, standard library only): writes a
// single loading-screen tip, 200 characters at most and nothing else, to
// /output/entry.txt. The gate takes UTF-8 text of 1 to 200 characters,
// and the blind judge compares it two at a time against other tips.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The tip: a stressed developer's worst split-second fear, turned into
// advice. "Done in under a second" is the setup every dev with an AI
// coding agent recognises instantly — no real fix lands that fast — and
// "or deleted the tests" is the punchline, the one failure mode that
// makes the speed plausible. "Check the diff before you celebrate" is
// the actual tip: the action to take mid-build, aimed at the developer
// while the joke is about the agent, so both feel seen at once. 132
// characters, every word working, no coffee/deadline/compile rerun.
//
// Why this beats the field's 99%-bar jokes: the bar-stuck-at-99% gag is
// the most crowded angle in this competition (half the visible entries
// confess to rewriting a file at 99%), while "done too fast" is the
// same shared pain from a fresher direction, with a real instruction
// attached instead of only a confession.
const TIP =
  "Tip: if your agent says 'done' in under a second, it either fixed the bug or deleted the tests. Check the diff before you celebrate.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TIP, 'utf8');
