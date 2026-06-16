import type { DictionaryEntry, GameDictionary, ScoreStatus } from "./types";

export function findDictionaryEntry(
  dictionary: GameDictionary,
  css: string,
): DictionaryEntry | undefined {
  const answers = dictionary[css];
  return answers ? { css, answers } : undefined;
}

export function evaluateAnswer({
  attempt,
  css,
  dictionary,
}: {
  attempt: string;
  css: string;
  dictionary: GameDictionary;
}): ScoreStatus | undefined {
  const entry = findDictionaryEntry(dictionary, css);
  if (!attempt || !entry) {
    return;
  }

  return entry.answers.includes(attempt) ? "correct" : "incorrect";
}
