import { cssProperties } from '@/leozada';
import { useReducer } from 'react';

type State = {
  correct: boolean;
  incorrect: boolean;
  partial: boolean;
  notSubmitted: boolean;
};
type Action = {
  type: 'correct' | 'incorrect' | 'partial' | 'not_submitted';
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'correct': {
      return {
        ...state,
        correct: true,
        incorrect: false,
        partial: false,
        notSubmitted: false,
      };
    }
    case 'incorrect': {
      return {
        ...state,
        correct: false,
        incorrect: true,
        partial: false,
        notSubmitted: false,
      };
    }
    case 'partial': {
      return {
        ...state,
        correct: false,
        incorrect: false,
        partial: true,
        notSubmitted: false,
      };
    }
    case 'not_submitted': {
      return {
        ...state,
        correct: false,
        incorrect: false,
        partial: false,
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
  ): Action['type'] | undefined => {
    if (!attempt) {
      return;
    }

    if (cssProperties[cssProperty].includes(attempt) && attempt.includes('[')) {
      dispatch({ type: 'partial' });
      return 'partial';
    }

    if (cssProperties[cssProperty].includes(attempt)) {
      dispatch({ type: 'correct' });
      return 'correct';
    }

    if (!cssProperties[cssProperty].includes(attempt)) {
      dispatch({ type: 'incorrect' });
      return 'incorrect';
    }
  };

  return {
    state,
    evaluateTranslation,
    mutate: dispatch,
  };
};
