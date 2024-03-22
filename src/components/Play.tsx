"use client";

import { useEvaluation } from "@/hooks";
import { Arrow, Check, Close, Copy, Restart } from "@/icons";
import { getRandomKey } from "@/utils";
import { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";

const initialScore = Array(8).fill("not_submitted");

const initialState = {
  correct: false,
  incorrect: false,
  notSubmitted: true,
  score: initialScore,
  showCorrectAnswer: false,
  correctAnswersList: [],
};

export default function Play({
  propertyDictionary,
}: {
  propertyDictionary: Record<string, string[]>;
}) {
  const [currentProperty, setCurrentProperty] = useState("");
  const [attempt, setAttempt] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [resultCopied, setResultCopied] = useState(false);
  const [gameOver, setIsGameOver] = useState(false);

  const {
    state,
    evaluateTranslation,
    mutate: mutateTranslationStatus,
  } = useEvaluation(initialState);
  const {
    correct,
    incorrect,
    notSubmitted,
    score,
    showCorrectAnswer: isShowingCorrectAnswer,
    correctAnswersList,
  } = state;

  const lastCorrectAnswers = correctAnswersList.at(-1);
  const areAnswersLongerThanInput = lastCorrectAnswers
    ? lastCorrectAnswers?.join(", ").length >= 23
    : false;

  const correctAnswerToDisplay = areAnswersLongerThanInput
    ? lastCorrectAnswers?.at(0)
    : lastCorrectAnswers?.join(", ");

  // work around animation transitions for smooth rendering of copy button
  useEffect(() => {
    const hasNotSubmittedScore = score.some((el) => el === "not_submitted");
    if (hasNotSubmittedScore) return;

    const isLastAnswerCorrect = score.at(-1) === "correct";
    const timeout = isLastAnswerCorrect ? 800 : 2400;

    setTimeout(() => {
      setIsGameOver(true);
    }, timeout);
  }, [score]);

  useEffect(() => {
    setCurrentProperty(getRandomKey(propertyDictionary));
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (inputDisabled) {
      return;
    }

    const attempt = event.currentTarget.value;
    setAttempt(attempt);
  };

  const showCorrectAnswer = (afterMilisseconds = 800) => {
    setTimeout(() => {
      mutateTranslationStatus({ type: "show_correct_answer" });
    }, afterMilisseconds);
  };

  const resetInput = (afterMilisseconds = 800) => {
    setInputDisabled(true);

    setTimeout(() => {
      setAttempt("");
      setCurrentProperty(
        getRandomKey(
          Object.fromEntries(
            Object.entries(propertyDictionary).filter(
              ([key, _]) => key !== currentProperty,
            ),
          ),
        ),
      );
      mutateTranslationStatus({ type: "not_submitted" });
      setInputDisabled(false);
    }, afterMilisseconds);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    translation: string,
  ) => {
    if (inputDisabled) {
      return;
    }

    if (event.key == "Enter") {
      event.preventDefault();
      const evaluation = evaluateTranslation(
        translation.trim(),
        currentProperty,
      );

      if (!evaluation) {
        setAttempt("");
        return;
      }

      if (evaluation === "incorrect") {
        showCorrectAnswer(800);
        resetInput(2400);

        return;
      }

      resetInput();
    }
  };

  const handleReturnClick = (translation: string) => {
    const evaluation = evaluateTranslation(translation.trim(), currentProperty);

    if (!evaluation) {
      setAttempt("");
      return;
    }

    if (typeof document === undefined) {
      return;
    }

    const someElementHasFocus = document.activeElement instanceof HTMLElement;

    if (someElementHasFocus) {
      document.getElementById("play-input")?.focus();
    }

    if (evaluation === "incorrect") {
      showCorrectAnswer(800);
      resetInput(2400);

      return;
    }

    resetInput();
  };

  const handleCopyClick = () => {
    setResultCopied(true);
    const correctCount = score.filter((el) => el === "correct").length;
    let emojis = "";

    for (let guess of score) {
      if (guess === "correct") {
        emojis += "✅ ";
      } else {
        emojis += "❌ ";
      }
    }

    const text = `I just got ${correctCount}/8 on css2wind.com!

${emojis}`;

    navigator.clipboard.writeText(text);

    setTimeout(() => {
      setResultCopied(false);
    }, 2500);
  };

  return (
    <section
      id="play"
      className="relative mx-auto flex h-screen flex-col justify-center gap-8 md:gap-16"
    >
      <h3 className="text-lg text-zinc-200 sm:text-2xl">
        Translate the <span className="text-sky-300">CSS property</span> to its
        Tailwind CSS equivalent
      </h3>
      <div className="flex flex-col items-center justify-center gap-4 pb-6 tiny:pb-0 md:gap-6 lg:flex-row">
        <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
          <span className="hidden tiny:inline">.class &#123;</span>
          <span
            data-not-submitted={notSubmitted}
            data-correct={correct}
            data-incorrect={incorrect}
            data-game-over={gameOver}
            className="relative data-[game-over=true]:justify-between data-[game-over=true]:flex w-64 origin-center p-5 text-lg ring-1 transition-all data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[not-submitted=true]:text-sky-300 data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed data-[not-submitted=true]:ring-sky-300 tiny:w-80 sm:w-96 md:w-[420px] md:text-xl"
          >
            {gameOver ? (
              <span>Game over!</span>
            ) : currentProperty ? (
              currentProperty
            ) : (
              "..."
            )}
            <button data-game-over={gameOver} className="hidden absolute right-0 top-0 data-[game-over=true]:flex h-full w-fit items-center justify-center gap-3 pr-5 pl-4 ring-1 ring-sky-300 bg-inherit hover:bg-zinc-800">
              <Restart />
              <span>Play Again</span>
            </button>
          </span>
          <span className="hidden tiny:inline">&#125;</span>
        </div>
        {notSubmitted && (
          <Arrow className="h-6 w-6 fill-zinc-100 rotate-90 md:h-8 md:w-8 lg:rotate-0" />
        )}
        {correct && (
          <Check className="h-6 w-6 animate-lift fill-greenGo md:h-8 md:w-8" />
        )}
        {incorrect && (
          <Close className="h-6 w-6 animate-shake fill-alertRed md:h-8 md:w-8" />
        )}
        <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
          <span className="hidden tiny:inline">className=&#34;</span>
          <div
            data-not-submitted={notSubmitted}
            data-correct={correct}
            data-show-correct-answer={isShowingCorrectAnswer}
            data-incorrect={incorrect}
            className="relative w-64 origin-center ring-1 ring-zinc-200 transition-all data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[show-correct-answer=true]:text-greenGo data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed tiny:w-80 sm:w-96 md:w-[420px]"
          >
            <div
              data-show-correct-answer={isShowingCorrectAnswer}
              className={`relative bg-zinc-950 duration-500 transform-style-3d data-[show-correct-answer=true]:rotate-x-180`}
            >
              <input
                id="play-input"
                disabled={gameOver}
                value={gameOver ? "Share your result!" : attempt}
                onChange={(event) => handleChange(event)}
                onKeyDown={(event) => handleKeyDown(event, attempt)}
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="true"
                data-not-submitted={notSubmitted}
                className="w-full bg-inherit bg-zinc-950 p-5 text-lg backface-hidden focus:outline-none data-[not-submitted=true]:text-zinc-200 data-[not-submitted=true]:ring-zinc-200 md:text-xl"
              />
              <input
                disabled
                className="absolute inset-0 w-full  bg-inherit  bg-zinc-950 p-5 text-lg rotate-x-180 backface-hidden focus:outline-none  data-[not-submitted=true]:text-zinc-200 data-[not-submitted=true]:ring-zinc-200 md:text-xl"
                value={correctAnswerToDisplay}
              />
            </div>
            <button
              data-not-submitted={notSubmitted}
              data-correct={correct}
              data-incorrect={incorrect}
              disabled={gameOver}
              onClick={() => handleReturnClick(attempt)}
              className="absolute -bottom-[29px] right-0 w-24 text-lg text-zinc-200 ring-1 ring-zinc-200 transition-all focus:outline-none active:ring disabled:hidden data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed md:bottom-auto md:top-0 md:h-full md:w-28 md:text-xl data-[not-submitted=true]:md:hover:bg-zinc-800"
            >
              return
            </button>
            <button
              disabled={!gameOver}
              onClick={handleCopyClick}
              className={`absolute -bottom-[33px] right-0 flex h-8 md:top-0 md:h-full ${
                resultCopied ? "px-6" : "px-5"
              } items-center justify-center gap-2 text-lg text-zinc-200 ring-1 ring-zinc-200 transition-all active:ring disabled:hidden md:gap-4 md:text-xl md:hover:bg-zinc-800`}
            >
              <Copy className="h-6 w-6" />
              {resultCopied ? "Copied!" : "Copy"}
            </button>
          </div>
          <span className="hidden tiny:inline">&#34;</span>
        </div>
      </div>
      <Scoreboard score={score} />
      <button
        data-game-over={gameOver}
        onClick={(e: any) => {
          e.preventDefault();
          window.location.href = "/";
        }}
        className="hidden w-fit items-center justify-between gap-4 self-center px-4 py-2 text-sky-300 ring-1 ring-sky-300 active:ring data-[game-over=true]:hidden"
      >
        <Restart />
        Play Again
      </button>
      {/* debug */}
      {/* <button onClick={handleCopyClick}>copy</button>
      <button onClick={() => setIsGameOver(true)}> end game</button> */}
    </section>
  );
}
