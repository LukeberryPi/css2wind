"use client";
import { Alert, Arrow, Check, Close, Zap } from "@/icons";
import { useEffect, useState } from "react";
import { propertyDictionary } from "@/v1";
import { getRandomKey } from "@/utils";
import { useEvaluation } from "@/hooks";

const initialState = {
  correct: false,
  incorrect: false,
  partial: false,
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
  const { correct, incorrect, partial, notSubmitted } = state;

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
    <main className="flex flex-col justify-center divide-y-2 divide-zinc-700 text-center">
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 py-[268px]">
        <div className="flex items-center justify-center gap-6">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
            .class &#123;
            <span
              className={`
                ${
                  notSubmitted &&
                  "border border-berryBlue font-medium text-berryBlue"
                } 
                ${correct && "border border-greenGo font-medium text-greenGo"}
                ${
                  partial &&
                  "border border-yellowYes font-medium text-yellowYes"
                }
                ${
                  incorrect &&
                  "animate-shake border border-alertRed font-medium text-alertRed"
                }
                w-96 origin-center select-all bg-transparent p-5 text-xl transition-all`}
            >
              {cssProperty}
            </span>
            &#125;
          </div>
          {notSubmitted && <Arrow size={32} className="fill-white" />}
          {correct && <Check size={32} className="fill-greenGo" />}
          {partial && <Alert size={32} className="fill-yellowYes" />}
          {incorrect && (
            <Close
              size={32}
              className="animate-shake fill-alertRed transition-all"
            />
          )}
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-400">
            className=&#34;
            <input
              value={attempt}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyDown(event, attempt)}
              autoFocus
              className={`transition-al w-96 origin-center bg-transparent p-5 text-xl focus:outline-none
              ${notSubmitted && "border border-white font-medium text-white"}
              ${correct && "border border-greenGo font-medium text-greenGo"}
              ${partial && "border border-yellowYes font-medium text-yellowYes"}
              ${
                incorrect &&
                "animate-shake border border-alertRed font-medium text-alertRed"
              }`}
            />
            &#34;
          </div>
        </div>
      </section>
    </main>
  );
}
