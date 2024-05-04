"use client";

import { useEvaluation } from "@/hooks";
import {
  Arrow,
  Check,
  ChevronRight,
  Close,
  Copy,
  Eye,
  Restart,
  Share,
} from "@/icons";
import { getRandomKey } from "@/utils";
import { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import { dict } from "@/app/api/v1/v1";

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
  const [showAnswerModal, setShowAnswerModal] = useState(false);

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
    const timeout = isLastAnswerCorrect ? 900 : 3000;

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

  const showCorrectAnswer = (afterMilisseconds = 900) => {
    setTimeout(() => {
      mutateTranslationStatus({ type: "show_correct_answer" });
    }, afterMilisseconds);
  };

  const resetInput = (afterMilisseconds = 900) => {
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
        showCorrectAnswer(900);
        resetInput(3000);
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
      showCorrectAnswer(900);
      resetInput(3000);

      return;
    }

    resetInput();
  };

  const generateResultText = () => {
    const correctCount = score.filter((el) => el === "correct").length;
    let emojis = "";

    for (let guess of score) {
      if (guess === "correct") {
        emojis += "✅ ";
      } else {
        emojis += "❌ ";
      }
    }

    const text = `I just got ${correctCount}/8 on css2wind.com!\n\n${emojis}`;

    return text;
  };

  const handleCopyClick = () => {
    setResultCopied(true);

    navigator.clipboard.writeText(generateResultText());

    setTimeout(() => {
      setResultCopied(false);
    }, 2500);
  };

  const generateTweetIntent = () => {
    const originalText = generateResultText();

    const CHAR_MAP: Record<string, string> = {
      " ": "%20",
      "\n": "%0A",
    };

    const split = originalText.split("").map((item) => {
      if (item in CHAR_MAP) {
        return CHAR_MAP[item];
      }

      return item;
    });

    return `https://twitter.com/intent/post?text=${split.join("")}`;
  };

  return (
    <div className="mx-auto flex w-fit items-center justify-center">
      <div
        data-show-answer-modal={showAnswerModal}
        className="absolute z-50 hidden w-[300px] flex-col items-center gap-8 overflow-auto border border-zinc-200 bg-black p-4 data-[show-answer-modal=true]:flex tiny:w-[360px] xs:w-[480px] sm:w-[600px] md:w-[760px] lg:w-[900px]"
      >
        <div className="flex w-full justify-between">
          <p className="text-lg">Answers</p>
          <button onClick={() => setShowAnswerModal(false)}>
            <Close className="fill-zinc-200" />
          </button>
        </div>

        {gameOver &&
          showAnswerModal &&
          correctAnswersList.map((item, i) => (
            <div key={i} className="flex w-full justify-between">
              <span className="flex flex-1 items-center justify-start">
                {Object.entries(dict)
                  .filter(([_, v]) => v[0] === item[0])
                  .map((el) => el[0].split(item[0]))}
              </span>
              <span className="flex flex-1 items-center justify-center">→</span>
              <span className="flex flex-1 items-center justify-end">
                {item[0]}
              </span>
            </div>
          ))}
      </div>
      <section
        id="play"
        className="mx-auto flex h-screen flex-col justify-center gap-8 md:gap-16"
      >
        <h3 className="text-lg text-zinc-200 sm:text-2xl">
          Translate the <span className="text-sky-300">CSS property</span> to
          its Tailwind CSS equivalent
        </h3>
        <div
          data-game-over={gameOver}
          className="flex-col items-center justify-center gap-4 pb-6 data-[game-over=false]:flex data-[game-over=true]:hidden tiny:pb-0 md:gap-6 lg:flex-row"
        >
          <div className="flex flex-col items-start gap-2 text-zinc-400">
            <span className="hidden xs:inline">.class &#123;</span>
            <span
              data-not-submitted={notSubmitted}
              data-correct={correct}
              data-incorrect={incorrect}
              data-game-over={gameOver}
              className="flex h-18 w-64 items-center justify-center text-center text-lg ring-1 transition-all data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[not-submitted=true]:text-sky-300 data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed data-[not-submitted=true]:ring-sky-300 tiny:w-80 sm:w-96 md:w-104 md:text-xl"
            >
              {currentProperty ? currentProperty : "..."}
            </span>
            <span className="hidden xs:inline">&#125;</span>
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
          <div className="flex flex-col items-start gap-2 text-zinc-400">
            <span className="hidden xs:inline">className=&#34;</span>
            <div
              data-not-submitted={notSubmitted}
              data-correct={correct}
              data-show-correct-answer={isShowingCorrectAnswer}
              data-incorrect={incorrect}
              className="flex h-18 w-64 items-center justify-between ring-1 ring-zinc-200 transition-all data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[show-correct-answer=true]:text-greenGo data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed tiny:w-80 sm:w-96 md:w-104"
            >
              <div
                data-show-correct-answer={isShowingCorrectAnswer}
                className="relative flex h-full w-full items-center transition-transform duration-200 transform-style-3d data-[show-correct-answer=true]:rotate-x-180"
              >
                <input
                  id="play-input"
                  value={attempt}
                  onChange={(event) => handleChange(event)}
                  onKeyDown={(event) => handleKeyDown(event, attempt)}
                  autoFocus
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  data-not-submitted={notSubmitted}
                  className="h-full w-full bg-inherit px-5 text-lg backface-hidden focus:outline-none data-[not-submitted=true]:text-zinc-200 data-[not-submitted=true]:ring-zinc-200 md:text-xl"
                />
                <input
                  disabled
                  className="absolute h-18 max-w-full bg-inherit bg-zinc-950 px-5 text-lg rotate-x-180 backface-hidden focus:outline-none md:text-xl"
                  value={correctAnswerToDisplay}
                />
              </div>
              <button
                data-not-submitted={notSubmitted}
                data-correct={correct}
                data-incorrect={incorrect}
                onClick={() => handleReturnClick(attempt)}
                className="h-full px-5 text-lg text-zinc-200 ring-1 ring-zinc-200 transition-all focus:outline-none active:ring data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed data-[not-submitted=true]:hover:opacity-80 md:bottom-auto md:top-0 md:h-full md:w-28 md:text-xl"
              >
                <span className="hidden md:inline">return</span>
                <span className="inline md:hidden">
                  <ChevronRight />
                </span>
              </button>
            </div>
            <span className="hidden xs:inline">&#34;</span>
          </div>
        </div>
        <Scoreboard score={score} />
        <div
          data-game-over={gameOver}
          className="hidden flex-col items-center justify-center gap-8 transition-all data-[game-over=true]:flex lg:flex-row"
        >
          <a
            href={generateTweetIntent()}
            target="_blank"
            className="flex w-64 items-center justify-center gap-3 self-center p-3 text-[#1D9BF0] ring-1 ring-[#1D9BF0] hover:opacity-80 active:ring lg:w-fit"
          >
            <Share />
            <span>Share to Twitter</span>
          </a>
          <button
            onClick={handleCopyClick}
            className="flex w-64 items-center justify-center gap-3 self-center p-3 text-zinc-200 ring-1 ring-zinc-200 hover:opacity-80 active:ring lg:w-fit"
          >
            <Copy />
            <span>{resultCopied ? "Copied!" : "Copy Result"}</span>
          </button>
          <button
            onClick={(e: any) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className="flex w-64 items-center justify-center gap-3 self-center p-3 text-sky-300 ring-1 ring-sky-300 hover:opacity-80 active:ring lg:w-fit"
          >
            <Restart />
            <span>Play Again</span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <button
            data-game-over={gameOver}
            onClick={() => setShowAnswerModal((prev) => !prev)}
            className="hidden items-center gap-4 hover:opacity-80 data-[game-over=true]:flex"
          >
            Show answers
            <span data-show-answer-list={showAnswerModal}>
              <Eye />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
