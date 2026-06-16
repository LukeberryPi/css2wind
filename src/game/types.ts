export type GameMode = "tailwind-v3" | "tailwind-v4";

export type DictionaryEntry = {
  css: string;
  answers: string[];
};

export type GameDictionary = Record<string, string[]>;

export type GameDefinition = {
  mode: GameMode;
  label: string;
  shortLabel: string;
  dictionary: GameDictionary;
};

export type ScoreStatus = "not_submitted" | "correct" | "incorrect";

export type AnswerHistoryItem = DictionaryEntry;
