import { dict } from "../../v1";
import { useReducer } from "react";

type State = {
  correct: boolean;
  incorrect: boolean;
  notSubmitted: boolean;
  score: Array<Action["type"]>;
};

type Action = {
  type: "correct" | "incorrect" | "not_submitted";
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
        score: updatedScore,
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
      };
    }
    case "not_submitted": {
      return {
        ...state,
        correct: false,
        incorrect: false,
        notSubmitted: true,
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
      dispatch({ type: "correct" });
      return "correct";
    }

    if (!dict[cssProperty].includes(attempt)) {
      dispatch({ type: "incorrect" });
      return "incorrect";
    }
  };

  return {
    state,
    evaluateTranslation,
    mutate: dispatch,
  };
}
