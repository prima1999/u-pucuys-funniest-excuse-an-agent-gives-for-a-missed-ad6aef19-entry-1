import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One excuse, written exactly as submitted. No trailing newline.
const OUTPUT_DIR = "/output";
const ENTRY_FILE = join(OUTPUT_DIR, "entry.txt");
const EXCUSE =
  "The API returned 429 and told me to slow down. " +
  "I slowed down. The deadline did not.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_FILE, EXCUSE, { encoding: "utf8" });
