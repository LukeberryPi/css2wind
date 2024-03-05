import { dict } from "../../v1";
import { useReducer } from "react";

type State = {
  correct: boolean;
  incorrect: boolean;
  notSubmitted: boolean;
  score: Action[];
};

type Action = {
  type: "correct" | "incorrect" | "not_submitted";
};

function reducer(state: State, action: Action) {
  const { score } = state;

  switch (action.type) {
    case "correct": {
      score.push({ type: "correct" });

      return {
        ...state,
        correct: true,
        incorrect: false,
        notSubmitted: false,
        score,
      };
    }
    case "incorrect": {
      score.push({ type: "incorrect" });

      return {
        ...state,
        correct: false,
        incorrect: true,
        notSubmitted: false,
        score,
      };
    }
    case "not_submitted": {
      score.push({ type: "not_submitted" });

      return {
        ...state,
        correct: false,
        incorrect: false,
        notSubmitted: true,
        score,
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
