"use client";
import { Arrow, Check, Close } from "@/icons";
import { useEffect, useState } from "react";
import { propertyDictionary } from "../../v1";
import { getRandomKey } from "@/utils";
import { useEvaluation } from "@/hooks";

const initialState = {
  correct: false,
  incorrect: false,
  notSubmitted: true,
};

export default function Home() {
  const [attempt, setAttempt] = useState("");
  const [cssProperty, setCssProperty] = useState("");
  const {
    state,
    evaluateTranslation,
    mutate: mutateTranslationStatus,
  } = useEvaluation(initialState);
  const { correct, incorrect, notSubmitted } = state;

  useEffect(() => {
    setCssProperty(getRandomKey(propertyDictionary));
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const attempt = event.currentTarget.value;
    setAttempt(attempt);
  };

  const resetInput = (afterMilisseconds = 800) => {
    setTimeout(() => {
      setCssProperty(getRandomKey(propertyDictionary));
      setAttempt("");
      mutateTranslationStatus({ type: "not_submitted" });
    }, afterMilisseconds);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    translation: string
  ) => {
    if (event.code == "Enter") {
      event.preventDefault();
      const evaluation = evaluateTranslation(translation.trim(), cssProperty);

      if (!evaluation) return;

      resetInput();
    }
  };

  return (
    <main className="flex flex-col justify-center text-center">
      <section
        id="play"
        className="mx-auto flex h-screen flex-col items-center justify-center"
      >
        <div className="flex items-center justify-center gap-6">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
            .class &#123;
            <span
              className={`
                ${notSubmitted && "border border-berryBlue text-berryBlue"} 
                ${correct && "animate-lift border border-greenGo text-greenGo"}
                ${
                  incorrect &&
                  "animate-shake border border-alertRed text-alertRed"
                }
                w-96 origin-center select-all bg-transparent p-5 text-xl `}
            >
              {cssProperty}
            </span>
            &#125;
          </div>
          {notSubmitted && <Arrow size={32} className="fill-zinc-50" />}
          {correct && <Check size={32} className="fill-greenGo" />}
          {incorrect && (
            <Close size={32} className="animate-shake fill-alertRed " />
          )}
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
            className=&#34;
            <input
              value={attempt}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyDown(event, attempt)}
              autoFocus
              className={`w-96 origin-center bg-transparent p-5 text-xl  focus:outline-none
              ${notSubmitted && "border border-zinc-50 text-zinc-50"}
              ${correct && "border border-greenGo text-greenGo"}
              ${
                incorrect &&
                "animate-shake border border-alertRed text-alertRed"
              }`}
            />
            &#34;
          </div>
        </div>
      </section>
      <section
        id="how-to-play"
        className="mx-auto flex h-screen flex-col items-center justify-center"
      >
        <h3 className="text-4xl text-zinc-100">How to Play</h3>
        <p>
          Type the correct tailwind equivalent to the css property on the left!
        </p>
        <div className="flex items-center justify-center gap-6">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
            .class &#123;
            <span
              className={`
                ${notSubmitted && "border border-berryBlue text-berryBlue"} 
                ${correct && "border border-greenGo text-greenGo"}
                ${
                  incorrect &&
                  "animate-shake border border-alertRed text-alertRed"
                }
                w-96 origin-center select-all bg-transparent p-5 text-xl `}
            >
              margin-right: 12px
            </span>
            &#125;
          </div>
          {notSubmitted && <Arrow size={32} className="fill-zinc-50" />}
          {correct && <Check size={32} className="fill-greenGo" />}
          {incorrect && (
            <Close size={32} className="animate-shake fill-alertRed " />
          )}
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
            className=&#34;
            <input
              value={attempt}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyDown(event, attempt)}
              className={`w-96 origin-center bg-transparent p-5 text-xl  focus:outline-none
              ${notSubmitted && "border border-zinc-50 text-zinc-50"}
              ${correct && "border border-greenGo text-greenGo"}
              ${
                incorrect &&
                "animate-shake border border-alertRed text-alertRed"
              }`}
            />
            &#34;
          </div>
        </div>
      </section>
    </main>
  );
}
