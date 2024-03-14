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
      if (typeof document !== undefined) {
        document.activeElement instanceof HTMLElement
          ? document.getElementById("tutorial-input")?.focus()
          : null;
      }
      resetInput();
      return;
    }

    evaluateTutorial(attempt);

    if (typeof document !== undefined) {
      document.activeElement instanceof HTMLElement
        ? document.getElementById("tutorial-input")?.focus()
        : null;
    }

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
    <section className="mx-auto flex h-screen flex-col items-center justify-center gap-12 md:gap-16">
      <h3 className="text-lg text-zinc-200 sm:text-2xl">
        Your goal is to guess how to write the{" "}
        <span className="text-sky-300">CSS property</span> using Tailwind CSS
      </h3>
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-6">
        <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
          .class &#123;
          <span
            data-tutorial-not-submitted={tutorialNotSubmitted}
            data-tutorial-correct={tutorialCorrect}
            data-tutorial-incorrect={tutorialIncorrect}
            className="min-w-52 grow origin-center p-5 text-lg ring-1 transition-all data-[tutorial-correct=true]:animate-lift data-[tutorial-incorrect=true]:animate-shake data-[tutorial-correct=true]:text-greenGo data-[tutorial-incorrect=true]:text-alertRed data-[tutorial-not-submitted=true]:text-sky-300 data-[tutorial-correct=true]:ring-greenGo data-[tutorial-incorrect=true]:ring-alertRed data-[tutorial-not-submitted=true]:ring-sky-300 md:text-xl"
          >
            padding: 12px
          </span>
          &#125;
        </div>
        {tutorialNotSubmitted && (
          <Arrow className="h-6 w-6 rotate-90 fill-zinc-200 md:h-8 md:w-8 md:rotate-0" />
        )}
        {tutorialCorrect && (
          <Check className="h-6 w-6 animate-lift fill-greenGo md:h-8 md:w-8" />
        )}
        {tutorialIncorrect && (
          <Close className="h-6 w-6 animate-shake fill-alertRed md:h-8 md:w-8" />
        )}
        <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
          <span>className=&#34;</span>
          <div
            data-tutorial-not-submitted={tutorialNotSubmitted}
            data-tutorial-correct={tutorialCorrect}
            data-tutorial-incorrect={tutorialIncorrect}
            className="min-w-52 relative grow origin-center ring-1 ring-zinc-200 transition-all data-[tutorial-correct=true]:animate-lift data-[tutorial-incorrect=true]:animate-shake data-[tutorial-correct=true]:text-greenGo data-[tutorial-incorrect=true]:text-alertRed data-[tutorial-correct=true]:ring-greenGo data-[tutorial-incorrect=true]:ring-alertRed"
          >
            <input
              id="tutorial-input"
              value={tutorialAttempt}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyDown(event, tutorialAttempt)}
              autoComplete="off"
              placeholder="click here!"
              data-tutorial-not-submitted={tutorialNotSubmitted}
              className="w-full bg-inherit p-5 text-lg focus:outline-none data-[tutorial-not-submitted=true]:text-zinc-200 data-[tutorial-not-submitted=true]:ring-zinc-200 md:text-xl"
            />
            <button
              data-tutorial-not-submitted={tutorialNotSubmitted}
              data-tutorial-correct={tutorialCorrect}
              data-tutorial-incorrect={tutorialIncorrect}
              onClick={() => handleReturnClick(tutorialAttempt)}
              className="absolute right-0 h-full w-28 text-lg text-zinc-200 ring-1 ring-zinc-200 transition-all focus:outline-none active:ring data-[tutorial-correct=true]:text-greenGo data-[tutorial-incorrect=true]:text-alertRed data-[tutorial-correct=true]:ring-greenGo data-[tutorial-incorrect=true]:ring-alertRed data-[tutorial-not-submitted=true]:hover:bg-zinc-800 md:text-xl"
            >
              return
            </button>
          </div>
          <span>&#34;</span>
        </div>
      </div>
      <div className="space-y-4 text-sm text-zinc-400 md:space-y-8 md:text-lg">
        <div>
          <p>
            Try typing <span className="text-zinc-200">p-3</span> in the white
            box and pressing enter.
          </p>
          <p>
            That&apos;s how you write{" "}
            <span className="text-sky-300">padding: 12px</span> using Tailwind
            CSS!
          </p>
        </div>
        <div>
          <p>There are eight CSS properties to be translated.</p>
          <p>Can you get them all right?</p>
        </div>
      </div>
    </section>
  );
}
