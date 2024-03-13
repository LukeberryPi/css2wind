"use client";

import { useEvaluation } from "@/hooks";
import { Arrow, Check, Close, Copy } from "@/icons";
import { getRandomKey } from "@/utils";
import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";

const initialScore = Array(8).fill("not_submitted");

const initialState = {
  correct: false,
  incorrect: false,
  notSubmitted: true,
  score: initialScore,
};

export const dict8: Record<string, string[]> = {
  "align-items: baseline": ["items-baseline"],
  "display: none": ["hidden"],
  "flex-direction: column": ["flex-col"],
  "height: 40px": ["h-10", "h-[40px]"],
  "justify-content: space-between": ["justify-between"],
  "margin-left: 1px": ["ml-px", "ml-[1px]"],
  "max-height: 4px": ["max-h-1"],
  "z-index: 50": ["z-50"],
};

export default function Play() {
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
  const { correct, incorrect, notSubmitted, score } = state;

  // work around animation transitions for smooth rendering of copy button
  useEffect(() => {
    const notSubmittedCount = score.filter(
      (el) => el === "not_submitted",
    ).length;
    setTimeout(() => {
      setIsGameOver(notSubmittedCount === 0);
    }, 840);
  }, [score]);

  useEffect(() => {
    setCurrentProperty(getRandomKey(dict8));
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (inputDisabled) {
      return;
    }

    const attempt = event.currentTarget.value;
    setAttempt(attempt);
  };

  const resetInput = (afterMilisseconds = 800) => {
    setInputDisabled(true);
    setTimeout(() => {
      setAttempt("");
      setCurrentProperty(getRandomKey(dict8));
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

    if (event.code == "Enter") {
      event.preventDefault();
      const evaluation = evaluateTranslation(
        translation.trim(),
        currentProperty,
      );

      if (!evaluation) {
        setAttempt("");
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

    resetInput();
  };

  const handleCopyClick = () => {
    setResultCopied(true);
    const correctCount = score.filter((el) => el === "correct").length;
    let emojis = "";

    for (let guess of score) {
      if (guess === "correct") {
        emojis += "✅";
      } else {
        emojis += "❌";
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
      className="mx-auto flex h-screen flex-col items-center justify-center gap-16"
    >
      <h3 className="text-2xl text-zinc-200">
        Translate the <span className="text-sky-300">CSS property</span> to its
        Tailwind CSS equivalent
      </h3>
      <div className="flex items-center justify-center gap-6">
        <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
          .class &#123;
          <span
            data-not-submitted={notSubmitted}
            data-correct={correct}
            data-incorrect={incorrect}
            className="w-[420px] origin-center p-5 text-xl ring-1 transition-all data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[not-submitted=true]:text-sky-300 data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed data-[not-submitted=true]:ring-sky-300"
          >
            {gameOver ? (
              <span>Game over!</span>
            ) : currentProperty ? (
              currentProperty
            ) : (
              "..."
            )}
          </span>
          &#125;
        </div>
        {notSubmitted && <Arrow size={32} className="fill-zinc-100" />}
        {correct && <Check size={32} className="animate-lift fill-greenGo" />}
        {incorrect && (
          <Close size={32} className="animate-shake fill-alertRed" />
        )}
        <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
          <span>className=&#34;</span>
          <div
            data-not-submitted={notSubmitted}
            data-correct={correct}
            data-incorrect={incorrect}
            className="relative w-[420px] origin-center ring-1 ring-zinc-200 transition-all data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed"
          >
            <input
              id="play-input"
              disabled={gameOver}
              value={gameOver ? "Share your result!" : attempt}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyDown(event, attempt)}
              autoFocus
              autoComplete="off"
              data-not-submitted={notSubmitted}
              className="w-full bg-inherit p-5 text-xl focus:outline-none data-[not-submitted=true]:text-zinc-200 data-[not-submitted=true]:ring-zinc-200"
            />
            <button
              data-not-submitted={notSubmitted}
              data-correct={correct}
              data-incorrect={incorrect}
              disabled={gameOver}
              onClick={() => handleReturnClick(attempt)}
              className="absolute right-0 h-full w-28 text-lg text-zinc-200 ring-1 ring-zinc-200 transition-all focus:outline-none active:ring disabled:hidden data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed data-[not-submitted=true]:hover:bg-zinc-800"
            >
              return
            </button>
            <button
              disabled={!gameOver}
              onClick={handleCopyClick}
              className={`absolute right-0 top-0 flex h-full ${
                resultCopied ? "w-40" : "w-32"
              } items-center justify-center gap-4 text-lg text-zinc-200 ring-1 ring-zinc-200 transition-all hover:bg-zinc-800 active:ring disabled:hidden`}
            >
              <Copy />
              {resultCopied ? "Copied!" : "Copy"}
            </button>
          </div>
          <span>&#34;</span>
        </div>
      </div>
      <Scoreboard score={score} />
      {/* debug copy
        <button onClick={handleCopyClick}>copy</button> */}
    </section>
  );
}
