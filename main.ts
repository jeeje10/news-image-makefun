// Entry for make.fun "Sum up 21 November's world news in one image"
// (news-image-20261121). Node 22, standard library only.
//
// The entry is the front page in entry.png beside this file: 39 verified
// stories from Saturday 21 November 2026, rendered as a newspaper front
// page (1024x1024, under 1 MiB). The program copies it to the output
// directory; it runs twice and both runs must write the same bytes, so
// this is a plain copy with no randomness and no network.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(outDir, "entry.png"),
);
