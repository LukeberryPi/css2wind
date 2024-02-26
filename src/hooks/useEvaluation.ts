import { propertyDictionary } from "@/v1";
import { useReducer } from "react";

type State = {
  correct: boolean;
  incorrect: boolean;
  notSubmitted: boolean;
};
type Action = {
  type: "correct" | "incorrect" | "not_submitted";
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "correct": {
      return {
        ...state,
        correct: true,
        incorrect: false,
        notSubmitted: false,
      };
    }
    case "incorrect": {
      return {
        ...state,
        correct: false,
        incorrect: true,
        notSubmitted: false,
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
};

export const useEvaluation = (initialState: State) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const evaluateTranslation = (
    attempt: string,
    cssProperty: string
  ): Action["type"] | undefined => {
    if (!attempt) {
      return;
    }

    if (propertyDictionary[cssProperty].includes(attempt)) {
      dispatch({ type: "correct" });
      return "correct";
    }

    if (!propertyDictionary[cssProperty].includes(attempt)) {
      dispatch({ type: "incorrect" });
      return "incorrect";
    }
  };

  return {
    state,
    evaluateTranslation,
    mutate: dispatch,
  };
};
