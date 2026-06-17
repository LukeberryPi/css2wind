import { evaluateAnswer, findDictionaryEntry } from "@/game";
import type { AnswerHistoryItem, GameDictionary, GameMode, ScoreStatus } from "@/game";
import { writeGameProgress } from "@/game/storage";
import { useReducer } from "react";

export type EvaluationState = {
  correct: boolean;
  incorrect: boolean;
  notSubmitted: boolean;
  showCorrectAnswer: boolean;
  answerHistory: AnswerHistoryItem[];
  score: ScoreStatus[];
};

type Action =
  | {
      type: "correct" | "incorrect";
      entry: AnswerHistoryItem;
      currentProperty: string;
      mode: GameMode;
    }
  | {
      type: "not_submitted";
      currentProperty: string;
      mode: GameMode;
    }
  | { type: "show_correct_answer" }
  | {
      type: "set_current_progress";
      score: ScoreStatus[];
      answerHistory: AnswerHistoryItem[];
    };

function getUpdatedScore(score: ScoreStatus[], status: ScoreStatus) {
  return score.map((item, index, allItems) => {
    const firstNotSubmitted = allItems.indexOf("not_submitted");
    return index === firstNotSubmitted ? status : item;
  });
}

function reducer(state: EvaluationState, action: Action): EvaluationState {
  switch (action.type) {
    case "correct":
    case "incorrect": {
      const updatedScore = getUpdatedScore(state.score, action.type);
      const answerHistory = [...state.answerHistory, action.entry];
      const isGameOver = !updatedScore.includes("not_submitted");

      writeGameProgress(action.mode, {
        score: updatedScore,
        currentProperty: action.currentProperty,
        isGameOver,
        answerHistory,
      });

      return {
        ...state,
        correct: action.type === "correct",
        incorrect: action.type === "incorrect",
        notSubmitted: false,
        showCorrectAnswer: false,
        score: updatedScore,
        answerHistory,
      };
    }
    case "not_submitted": {
      writeGameProgress(action.mode, {
        score: state.score,
        currentProperty: action.currentProperty,
        isGameOver: !state.score.includes("not_submitted"),
        answerHistory: state.answerHistory,
      });

      return {
        ...state,
        correct: false,
        incorrect: false,
        notSubmitted: true,
        showCorrectAnswer: false,
      };
    }
    case "show_correct_answer":
      return {
        ...state,
        showCorrectAnswer: true,
      };
    case "set_current_progress":
      return {
        ...state,
        score: action.score,
        answerHistory: action.answerHistory,
      };
  }
}

export default function useEvaluation(initialState: EvaluationState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const evaluateTranslation = ({
    attempt,
    css,
    dictionary,
    mode,
  }: {
    attempt: string;
    css: string;
    dictionary: GameDictionary;
    mode: GameMode;
  }): ScoreStatus | undefined => {
    const result = evaluateAnswer({ attempt, css, dictionary });
    const entry = findDictionaryEntry(dictionary, css);

    if (!result || !entry) {
      return;
    }

    if (result === "correct") {
      dispatch({ type: "correct", entry, currentProperty: css, mode });
      return "correct";
    }

    dispatch({ type: "incorrect", entry, currentProperty: css, mode });
    return "incorrect";
  };

  return {
    state,
    evaluateTranslation,
    mutate: dispatch,
  };
}
