"use client";

import { useState } from "react";
import { Arrow, Check, Close } from "@/icons";

export default function Tutorial() {
  const [tutorialAttempt, setTutorialAttempt] = useState("");
  const [tutorialCorrect, setTutorialCorrect] = useState(false);
  const [tutorialIncorrect, setTutorialIncorrect] = useState(false);
  const [tutorialNotSubmitted, setTutorialNotSubmitted] = useState(true);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const attempt = event.currentTarget.value;
    setTutorialAttempt(attempt);
  };

  const evaluateTutorial = (attempt: string) => {
    if (attempt.trim() === "p-3") {
      setTutorialCorrect(true);
      setTutorialIncorrect(false);
      setTutorialNotSubmitted(false);
      return;
    }

    setTutorialCorrect(false);
    setTutorialIncorrect(true);
    setTutorialNotSubmitted(false);
    return;
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    attempt: string,
  ) => {
    if (event.code == "Enter") {
      event.preventDefault();

      if (!attempt.trim()) {
        setTutorialAttempt("");
        return;
      }

      evaluateTutorial(attempt);
      resetInput();
    }
  };

  const handleReturnClick = (attempt: string) => {
    if (!attempt.trim()) {
      setTutorialAttempt("");
      document.activeElement instanceof HTMLElement
        ? document.getElementById("tutorial-input")?.focus()
        : null;
      resetInput();
      return;
    }

    evaluateTutorial(attempt);
    document.activeElement instanceof HTMLElement
      ? document.getElementById("tutorial-input")?.focus()
      : null;
    resetInput();
  };

  const resetInput = (afterMilisseconds = 800) => {
    setTimeout(() => {
      setTutorialAttempt("");
      setTutorialNotSubmitted(true);
      setTutorialCorrect(false);
      setTutorialIncorrect(false);
    }, afterMilisseconds);
  };

  return (
    <section className="mx-auto flex h-screen flex-col items-center justify-center gap-16">
      <p className="text-2xl text-zinc-200">
        Your goal is to guess how to write the{" "}
        <span className="text-berryBlue">CSS property</span> using TailwindCSS
      </p>
      <div className="flex items-center justify-center gap-6">
        <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
          .class &#123;
          <span
            data-tutorial-not-submitted={tutorialNotSubmitted}
            data-tutorial-correct={tutorialCorrect}
            data-tutorial-incorrect={tutorialIncorrect}
            className="data-[tutorial-correct=true]:animate-lift data-[tutorial-incorrect=true]:animate-shake data-[tutorial-correct=true]:border-greenGo data-[tutorial-incorrect=true]:border-alertRed data-[tutorial-not-submitted=true]:border-berryBlue data-[tutorial-correct=true]:text-greenGo data-[tutorial-incorrect=true]:text-alertRed data-[tutorial-not-submitted=true]:text-berryBlue w-[420px] origin-center border p-5 text-xl"
          >
            padding: 12px
          </span>
          &#125;
        </div>
        {tutorialNotSubmitted && <Arrow size={32} className="fill-zinc-100" />}
        {tutorialCorrect && (
          <Check size={32} className="animate-lift fill-greenGo" />
        )}
        {tutorialIncorrect && (
          <Close size={32} className="animate-shake fill-alertRed" />
        )}
        <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
          <span>className=&#34;</span>
          <div
            data-tutorial-not-submitted={tutorialNotSubmitted}
            data-tutorial-correct={tutorialCorrect}
            data-tutorial-incorrect={tutorialIncorrect}
            className="data-[tutorial-correct=true]:animate-lift data-[tutorial-incorrect=true]:animate-shake data-[tutorial-correct=true]:border-greenGo data-[tutorial-incorrect=true]:border-alertRed data-[tutorial-incorrect=true]:text-alertRed data-[tutorial-correct=true]:text-greenGo relative w-[420px] origin-center border"
          >
            <input
              id="tutorial-input"
              value={tutorialAttempt}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyDown(event, tutorialAttempt)}
              autoComplete="off"
              data-tutorial-not-submitted={tutorialNotSubmitted}
              className="w-full bg-inherit p-5 text-xl focus:outline-none data-[tutorial-not-submitted=true]:border-zinc-100 data-[tutorial-not-submitted=true]:text-zinc-200"
            />
            <button
              data-tutorial-not-submitted={tutorialNotSubmitted}
              data-tutorial-correct={tutorialCorrect}
              data-tutorial-incorrect={tutorialIncorrect}
              onClick={() => handleReturnClick(tutorialAttempt)}
              className="data-[tutorial-correct=true]:ring-greenGo data-[tutorial-correct=true]:text-greenGo data-[tutorial-incorrect=true]:text-alertRed data-[tutorial-incorrect=true]:ring-alertRed hover:zinc-900 absolute right-0 h-full w-28 text-lg text-zinc-200 ring-1 ring-zinc-300 transition-all focus:outline-none active:ring data-[tutorial-not-submitted=true]:hover:bg-zinc-800"
            >
              return
            </button>
          </div>
          <span>&#34;</span>
        </div>
      </div>
      <div className="space-y-8 text-lg text-zinc-400">
        <div>
          <p>
            Try typing <span className="text-zinc-100">p-3</span> in the white
            box to the right and pressing enter.
          </p>
          <p>
            That's how you write{" "}
            <span className="text-berryBlue">padding: 12px</span> using
            TailwindCSS!
          </p>
        </div>
        <div>
          <p>Every day there are eight CSS properties to be translated.</p>
          <p>Can you get them all right?</p>
        </div>
      </div>
    </section>
  );
}
