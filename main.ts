import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "We sell naming rights to potholes: drivers pay $5 to name the crater that swallowed their tire, and the city fixes named ones first because public shame paves roads faster than budgets do.";

// Design: one sentence, 188 chars. Absurd hook (naming rights to potholes) +
// concrete buyer (drivers, $5) + pay logic (named potholes get fixed first:
// public shame beats budgets). Copy-only: no network, never deletes output dir.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) throw new Error("entry must be 1-200 chars, got " + chars.length);
if (LINE.trim().length === 0) throw new Error("entry must not be only whitespace");
if ((LINE.match(/\./g) || []).length !== 1) throw new Error("entry must be exactly one sentence");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
