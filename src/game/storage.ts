import type { AnswerHistoryItem, GameMode, ScoreStatus } from "./types";

export type GameProgress = {
  score: ScoreStatus[];
  currentProperty: string;
  isGameOver: boolean;
  answerHistory: AnswerHistoryItem[];
};

export const createGameStorageKey = (mode: GameMode) => `css2wind:game:${mode}`;

export function readGameProgress(mode: GameMode): GameProgress | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawProgress = window.localStorage.getItem(createGameStorageKey(mode));
  if (!rawProgress) {
    return null;
  }

  try {
    return JSON.parse(rawProgress) as GameProgress;
  } catch {
    window.localStorage.removeItem(createGameStorageKey(mode));
    return null;
  }
}

export function writeGameProgress(mode: GameMode, progress: GameProgress) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(createGameStorageKey(mode), JSON.stringify(progress));
}

export function clearGameProgress(mode: GameMode) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(createGameStorageKey(mode));
}
