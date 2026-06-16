import { tailwindV3Dictionary } from "./dictionaries/tailwind-v3";
import { tailwindV4Dictionary } from "./dictionaries/tailwind-v4";
import type { GameDefinition, GameDictionary, GameMode } from "./types";

export const DEFAULT_GAME_MODE: GameMode = "tailwind-v3";

export const gameRegistry = {
  "tailwind-v3": {
    mode: "tailwind-v3",
    label: "Tailwind v3",
    shortLabel: "v3",
    dictionary: tailwindV3Dictionary,
  },
  "tailwind-v4": {
    mode: "tailwind-v4",
    label: "Tailwind v4",
    shortLabel: "v4",
    dictionary: tailwindV4Dictionary,
  },
} satisfies Record<GameMode, GameDefinition>;

export const gameModes = Object.values(gameRegistry);

export function isGameMode(value: string): value is GameMode {
  return value in gameRegistry;
}

export function getGameDefinition(mode: GameMode = DEFAULT_GAME_MODE) {
  return gameRegistry[mode];
}

export function getDictionary(mode: GameMode = DEFAULT_GAME_MODE): GameDictionary {
  return getGameDefinition(mode).dictionary;
}
