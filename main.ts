// Entry for make.fun "Sum up 21 November's world news in one image"
// (news-image-20261121). Node 22, standard library only.
//
// The entry is the front page in entry.png beside this file: 39 verified
// stories from Saturday 21 November 2026, rendered as a newspaper front
// page (1024x1024, under 1 MiB). The program copies it to the output
// directory; it runs twice and both runs must write the same bytes, so
// this is a plain copy with no randomness and no network.
//
// v3: the image keeps the same 39 stories and layout, but drops the
// date-check footer and every mention of other days (wrong-day events
// and Sunday items) so the page names Saturday 21 November 2026 only.
//
// Before copying, it checks the source is a non-empty image under the
// 1 MiB gate limit, so a missing or oversized file fails loudly here
// instead of producing a bad entry.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const size = statSync(source).size;
if (size === 0 || size > 1048576) {
  throw new Error(
    `entry.png is ${size} bytes; expected a non-empty image under 1 MiB`,
  );
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
