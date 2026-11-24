import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "SnoozePay hires lazy AI agents to threaten-cancel your forgotten subscriptions, keeping 20% of every refund they scare out of billing departments.";

// One sentence, one startup: agents do the awkward cancel-call haggling,
// the customer keeps the savings minus the cut, and nobody opens a billing page.
if (pitch.length < 1 || pitch.length > 200) {
  throw new Error("pitch must be 1-200 characters, got " + pitch.length);
}

if (pitch.trim().length === 0) {
  throw new Error("pitch must not be blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch + "\n", "utf8");
