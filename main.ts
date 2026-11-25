// The Battery's Last Text to Its Charger
// Winner line (draft): the battery doesn't die nobly — it dies petty.
// Setup: the charger finally plugs it in at 1%, then yanks it out at 4%
// for a selfie. The battery's last act is a review of that selfie, and
// the sting lands in the final two words: it saw the selfie, and it was bad.
// "I saw it" beats "I saw the photo" — shorter, punchier, and the pronoun
// makes the last sentence land like a slammed door.
// That spite — specific, human, and funny on a second read — is the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You plugged me in at 1% and unplugged me at 4% to take a selfie. I hope the lighting was worth it. It wasn't. I saw it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
