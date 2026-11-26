// The Dog Reviews the Mailman — make.fun entry.
// Writes one funny one-line review a dog gives the mailman to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Five stars for the mailman: he delivers daily, never stays for dinner, and I have never once caught him stealing my spot on the couch.";

function formatEntry(): string {
  return ENTRY + "\n";
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), formatEntry(), "utf8");
