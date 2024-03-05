"use client";
import { Arrow, Check, Close, Minus } from "@/icons";
import { useEffect, useState } from "react";
import { dict } from "../../v1";
import { getRandomKey } from "@/utils";
import { useEvaluation } from "@/hooks";

const initialState = {
  correct: false,
  incorrect: false,
  notSubmitted: true,
  score: Array(8),
};

export default function Home() {
  const [currentProperty, setCurrentProperty] = useState("");
  const [attempt, setAttempt] = useState("");

  const {
    state,
    evaluateTranslation,
    mutate: mutateTranslationStatus,
  } = useEvaluation(initialState);
  const { correct, incorrect, notSubmitted, score } = state;

  useEffect(() => {
    setCurrentProperty(getRandomKey(dict));
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const attempt = event.currentTarget.value;
    setAttempt(attempt);
  };

  const resetInput = (afterMilisseconds = 800) => {
    setTimeout(() => {
      setCurrentProperty(getRandomKey(dict));
      setAttempt("");
      mutateTranslationStatus({ type: "not_submitted" });
    }, afterMilisseconds);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    translation: string,
  ) => {
    if (event.code == "Enter") {
      event.preventDefault();
      const evaluation = evaluateTranslation(
        translation.trim(),
        currentProperty,
      );

      if (!evaluation) return;

      resetInput();
    }
  };

  const handleEnterClick = (translation: string) => {
    const evaluation = evaluateTranslation(translation.trim(), currentProperty);

    if (!evaluation) return;

    document.activeElement instanceof HTMLElement
      ? document.getElementById("play-input")?.focus()
      : null;
    resetInput();
  };

  return (
    <main className="flex flex-col justify-center text-center">
      <section
        id="play"
        className="mx-auto flex h-screen flex-col items-center justify-center gap-16"
      >
        <h3 className="text-2xl text-zinc-200">
          Translate the <span className="text-berryBlue">CSS property</span> to
          its TailwindCSS equivalent
        </h3>
        <div className="flex items-center justify-center gap-6">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
            .class &#123;
            <span
              data-not-submitted={notSubmitted}
              data-correct={correct}
              data-incorrect={incorrect}
              className="data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:border-greenGo data-[incorrect=true]:border-alertRed data-[not-submitted=true]:border-berryBlue data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[not-submitted=true]:text-berryBlue w-96 origin-center border p-5 text-xl"
            >
              {currentProperty ? currentProperty : "..."}
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
              className="data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:border-greenGo data-[incorrect=true]:border-alertRed data-[incorrect=true]:text-alertRed data-[correct=true]:text-greenGo relative w-96 origin-center border"
            >
              <input
                id="play-input"
                value={attempt}
                onChange={(event) => handleChange(event)}
                onKeyDown={(event) => handleKeyDown(event, attempt)}
                autoFocus
                autoComplete="off"
                data-not-submitted={notSubmitted}
                className="w-full bg-inherit p-5 text-xl focus:outline-none data-[not-submitted=true]:border-zinc-100 data-[not-submitted=true]:text-zinc-200"
              />
              <button
                data-not-submitted={notSubmitted}
                data-correct={correct}
                data-incorrect={incorrect}
                onClick={() => handleEnterClick(attempt)}
                className="data-[correct=true]:ring-greenGo data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[incorrect=true]:ring-alertRed hover:zinc-900 absolute right-0 h-full w-28 text-lg text-zinc-200 ring-1 ring-zinc-300 transition-all focus:outline-none data-[not-submitted=true]:hover:bg-zinc-800"
              >
                return
              </button>
            </div>
            <span>&#34;</span>
          </div>
        </div>
      </section>
      <section className="mx-auto flex h-screen flex-col items-center justify-center">
        <h3 className="text-6xl text-zinc-200">How to Play</h3>
        <p>
          Type the correct tailwind equivalent to the css property on the left!
        </p>
        <div className="flex items-center justify-center gap-6">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
            .class &#123;
            <span
              className={`
                ${notSubmitted && "border-berryBlue text-berryBlue border"}
                ${correct && "border-greenGo text-greenGo border"}
                ${
                  incorrect &&
                  "animate-shake border-alertRed text-alertRed border"
                }
                w-96 origin-center select-all p-5 text-xl `}
            >
              margin-right: 12px
            </span>
            &#125;
          </div>
          {notSubmitted && <Arrow size={32} className="fill-zinc-100" />}
          {correct && <Check size={32} className="fill-greenGo" />}
          {incorrect && (
            <Close size={32} className="animate-shake fill-alertRed " />
          )}
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
            className=&#34;
            <input
              id="tutorial-input"
              value={attempt}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyDown(event, attempt)}
              className={`w-96 origin-center bg-inherit p-5 text-xl focus:outline-none
              ${notSubmitted && "border border-zinc-100 text-zinc-200"}
              ${correct && "animate-lift border-greenGo text-greenGo border"}
              ${
                incorrect &&
                "animate-shake border-alertRed text-alertRed border"
              }`}
            />
            &#34;
          </div>
        </div>
      </section>
    </main>
  );
}
