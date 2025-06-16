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

type Action = BaseAction | CorrectAction | IncorrectAction | CurrentProgressAction

type BaseAction = {
  type: "not_submitted" | "show_correct_answer";
  currentProperty?: string
};

type CorrectAction = {
  type: "correct";
  correctAnswers: string[];
};

type IncorrectAction = {
  type: "incorrect";
  correctAnswers: string[];
};

type CurrentProgressAction = {
  type: "set_current_progress";
  score: Array<Action["type"]>;
}

type NewScore = {
  state: State,
  action: Pick<Action , 'type'>
  currentProperty?: string
}

function handleNewScore({ state, action, currentProperty }: NewScore) {
  const score = state.score.map((item, i, arr) => {
    const firstNotSubmitted = arr.indexOf("not_submitted");

    if (i === firstNotSubmitted) {
      return action.type;
    }

    return item;
  });

  const isGameOver = !state.score.includes('not_submitted')

  localStorage.setItem('sessionProgress', JSON.stringify({
    score,
    currentProperty,
    isGameOver
  }))

  return score
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "correct": {
      const updatedScore = handleNewScore({ state, action })

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
      const updatedScore = handleNewScore({ state, action })

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
      handleNewScore({
        state,
        action,
        currentProperty: action.currentProperty 
      })

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

    case "set_current_progress": {
      return {
        ...state,
        score: action.score,
      }
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
