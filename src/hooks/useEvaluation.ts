import { dict } from "../app/api/v1/v1";
import { useReducer } from "react";

type State = {
  correct: boolean;
  incorrect: boolean;
  notSubmitted: boolean;
  showCorrectAnswer: boolean;
  correctAnswersList: string[][];
  score: Array<Action["type"]>;
};

type Action = BaseAction | CorrectAction | IncorrectAction;

type BaseAction = {
  type: "not_submitted" | "show_correct_answer";
};

type CorrectAction = {
  type: "correct";
  correctAnswers: string[];
};

type IncorrectAction = {
  type: "incorrect";
  correctAnswers: string[];
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "correct": {
      const updatedScore = state.score.map((item, i, arr) => {
        const firstNotSubmitted = arr.indexOf("not_submitted");

        if (i === firstNotSubmitted) {
          return "correct";
        }

        return item;
      });

      return {
        ...state,
        correct: true,
        incorrect: false,
        notSubmitted: false,
        showCorrectAnswer: false,
        score: updatedScore,
        correctAnswersList: [
          ...state.correctAnswersList,
          action.correctAnswers,
        ],
      };
    }
    case "incorrect": {
      const updatedScore = state.score.map((item, i, arr) => {
        const firstNotSubmitted = arr.indexOf("not_submitted");

        if (i === firstNotSubmitted) {
          return "incorrect";
        }

        return item;
      });

      return {
        ...state,
        correct: false,
        incorrect: true,
        notSubmitted: false,
        score: updatedScore,
        showCorrectAnswer: false,
        correctAnswersList: [
          ...state.correctAnswersList,
          action.correctAnswers,
        ],
      };
    }
    case "not_submitted": {
      return {
        ...state,
        correct: false,
        incorrect: false,
        notSubmitted: true,
        showCorrectAnswer: false,
        correctAnswer: "",
      };
    }

    case "show_correct_answer": {
      return {
        ...state,
        showCorrectAnswer: true,
      };
    }
  }
}

export default function useEvaluation(initialState: State) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const evaluateTranslation = (
    attempt: string,
    cssProperty: string,
  ): Action["type"] | undefined => {
    if (!attempt) {
      return;
    }

    if (dict[cssProperty].includes(attempt)) {
      dispatch({
        type: "correct",
        correctAnswers: dict[cssProperty],
      });

      return "correct";
    }

    if (!dict[cssProperty].includes(attempt)) {
      dispatch({
        type: "incorrect",
        correctAnswers: dict[cssProperty],
      });
      return "incorrect";
    }
  };

  return {
    state,
    evaluateTranslation,
    mutate: dispatch,
  };
}
