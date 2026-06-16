import { tailwindV3Dictionary } from "./tailwind-v3";
import type { GameDictionary } from "../types";

// Tailwind v4 keeps the utility surface used by this minigame compatible with
// v3 for the current entries. Add explicit differences here only when verified.
export const tailwindV4Dictionary = {
  ...tailwindV3Dictionary,
} satisfies GameDictionary;
