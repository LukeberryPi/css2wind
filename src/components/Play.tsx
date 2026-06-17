"use client";

import { useEvaluation } from "@/hooks";
import { gameModes, getDictionary, type GameDictionary, type GameMode, type ScoreStatus } from "@/game";
import { clearGameProgress, readGameProgress } from "@/game/storage";
import { getRandomKey } from "@/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import Scoreboard from "./Scoreboard";
import AnswerModal from "./play/AnswerModal";
import ModeSelector from "./play/ModeSelector";
import PromptInputRow from "./play/PromptInputRow";
import ResultActions from "./play/ResultActions";

const initialScore: ScoreStatus[] = Array.from({ length: 8 }, () => "not_submitted");

const initialState = {
  correct: false,
  incorrect: false,
  notSubmitted: true,
  score: initialScore,
  showCorrectAnswer: false,
  answerHistory: [],
};

export function generateResultText(score: ScoreStatus[]) {
  const correctCount = score.filter((item) => item === "correct").length;
  const emojis = score.map((item) => (item === "correct" ? "✅" : "❌")).join(" ");

  return `I just got ${correctCount}/8 on css2wind.com!\n\n${emojis} `;
}

function generateTweetIntent(score: ScoreStatus[]) {
  return `https://twitter.com/intent/post?text=${encodeURIComponent(
    generateResultText(score),
  )}`;
}

export default function Play({
  defaultMode,
  dictionaries,
}: {
  defaultMode: GameMode;
  dictionaries: Record<GameMode, GameDictionary>;
}) {
  const [mode, setMode] = useState<GameMode>(defaultMode);
  const dictionary = useMemo(() => dictionaries[mode] ?? getDictionary(mode), [dictionaries, mode]);
  const [currentProperty, setCurrentProperty] = useState("");
  const [attempt, setAttempt] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [resultCopied, setResultCopied] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [gameOver, setIsGameOver] = useState(false);
  const timeoutRefs = useRef<number[]>([]);

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
    answerHistory,
  } = state;

  const queueTimeout = (callback: () => void, delay: number) => {
    const timeout = window.setTimeout(() => {
      timeoutRefs.current = timeoutRefs.current.filter((item) => item !== timeout);
      callback();
    }, delay);
    timeoutRefs.current.push(timeout);
  };

  const clearQueuedTimeouts = () => {
    timeoutRefs.current.forEach((timeout) => window.clearTimeout(timeout));
    timeoutRefs.current = [];
  };

  const lastCorrectAnswers = answerHistory.at(-1)?.answers;
  const areAnswersLongerThanInput = lastCorrectAnswers
    ? lastCorrectAnswers.join(", ").length >= 23
    : false;
  const correctAnswerToDisplay = areAnswersLongerThanInput
    ? lastCorrectAnswers?.at(0)
    : lastCorrectAnswers?.join(", ");

  useEffect(() => {
    const sessionProgress = readGameProgress(mode);

    if (!sessionProgress) {
      setCurrentProperty(getRandomKey(dictionary));
      setIsGameOver(false);
      mutateTranslationStatus({
        type: "set_current_progress",
        score: initialScore,
        answerHistory: [],
      });
      return;
    }

    setCurrentProperty(sessionProgress.currentProperty);
    setIsGameOver(sessionProgress.isGameOver);
    mutateTranslationStatus({
      type: "set_current_progress",
      score: sessionProgress.score,
      answerHistory: sessionProgress.answerHistory ?? [],
    });
  }, [dictionary, mode, mutateTranslationStatus]);

  useEffect(() => {
    const hasNotSubmittedScore = score.some((item) => item === "not_submitted");
    if (hasNotSubmittedScore) {
      return;
    }

    const isLastAnswerCorrect = score.at(-1) === "correct";
    const timeout = isLastAnswerCorrect ? 900 : 3000;
    const timer = window.setTimeout(() => {
      setIsGameOver(true);
    }, timeout);

    return () => window.clearTimeout(timer);
  }, [score]);

  useEffect(() => {
    return () => {
      clearQueuedTimeouts();
    };
  }, []);

  const submitAttempt = () => {
    if (inputDisabled) {
      return;
    }

    const evaluation = evaluateTranslation({
      attempt: attempt.trim(),
      css: currentProperty,
      dictionary,
      mode,
    });

    if (!evaluation) {
      setAttempt("");
      return;
    }

    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.getElementById("play-input")?.focus();
    }

    if (evaluation === "incorrect") {
      showCorrectAnswer(900);
      resetInput(3000);
      return;
    }

    resetInput();
  };

  const showCorrectAnswer = (afterMilliseconds = 900) => {
    queueTimeout(() => {
      mutateTranslationStatus({ type: "show_correct_answer" });
    }, afterMilliseconds);
  };

  const resetInput = (afterMilliseconds = 900) => {
    setInputDisabled(true);

    queueTimeout(() => {
      setAttempt("");
      const randomProperty = getRandomKey(dictionary, currentProperty);

      setCurrentProperty(randomProperty);
      mutateTranslationStatus({
        type: "not_submitted",
        currentProperty: randomProperty,
        mode,
      });
      setInputDisabled(false);
    }, afterMilliseconds);
  };

  const handleModeChange = (nextMode: GameMode) => {
    clearQueuedTimeouts();
    setMode(nextMode);
    setAttempt("");
    setInputDisabled(false);
    setShowAnswerModal(false);
  };

  const handleCopyClick = async () => {
    setResultCopied(true);
    await navigator.clipboard?.writeText(generateResultText(score));

    queueTimeout(() => {
      setResultCopied(false);
    }, 2500);
  };

  const playAgain = () => {
    clearGameProgress(mode);
    setAttempt("");
    setShowAnswerModal(false);
    setCurrentProperty(getRandomKey(dictionary));
    setIsGameOver(false);
    mutateTranslationStatus({
      type: "set_current_progress",
      score: initialScore,
      answerHistory: [],
    });
  };

  return (
    <div className="mx-auto flex w-fit items-center justify-center">
      <AnswerModal
        answerHistory={answerHistory}
        open={gameOver && showAnswerModal}
        onClose={() => setShowAnswerModal(false)}
      />
      <section
        id="play"
        className="mx-auto flex h-screen flex-col justify-center gap-6 md:gap-10"
      >
        <ModeSelector mode={mode} modes={gameModes} onModeChange={handleModeChange} />
        <h3 className="text-lg text-zinc-200 sm:text-2xl">
          Translate the <span className="text-sky-300">CSS property</span> to its Tailwind CSS
          equivalent
        </h3>
        <PromptInputRow
          attempt={attempt}
          correct={correct}
          incorrect={incorrect}
          notSubmitted={notSubmitted}
          showCorrectAnswer={isShowingCorrectAnswer}
          currentProperty={currentProperty}
          correctAnswerToDisplay={correctAnswerToDisplay}
          gameOver={gameOver}
          onAttemptChange={(nextAttempt) => {
            if (!inputDisabled) {
              setAttempt(nextAttempt);
            }
          }}
          onSubmit={submitAttempt}
        />
        <Scoreboard score={score} />
        <ResultActions
          gameOver={gameOver}
          resultCopied={resultCopied}
          tweetIntent={generateTweetIntent(score)}
          showAnswerModal={showAnswerModal}
          onCopy={handleCopyClick}
          onPlayAgain={playAgain}
          onToggleAnswers={() => setShowAnswerModal((previous) => !previous)}
        />
      </section>
    </div>
  );
}
