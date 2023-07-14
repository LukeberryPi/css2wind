"use client";
import {
  Alert,
  Arrow,
  Check,
  Close,
  Copy,
  MultipleNotes,
  Restart,
  Swap,
  Zap,
} from "@/icons";
import { useEffect, useState } from "react";
import { propertyDictionary } from "../../leozada";
import { getRandomKey } from "@/utils";
import { useEvaluation } from "@/hooks";

const initialState = {
  correct: false,
  incorrect: false,
  partial: false,
  notSubmitted: true,
};

export default function PlayPage() {
  const [attempt, setAttempt] = useState<string>("");
  const [cssProperty, setCssProperty] = useState<string>("");
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
    if (event.key == " " || event.code == "Space") {
      event.preventDefault();
      const evaluation = evaluateTranslation(translation, cssProperty);

      if (!evaluation) return;
      resetInput();
    }
  };

  return (
    <main className="flex flex-col justify-center divide-y-2 divide-zinc-700 text-center">
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 py-[268px]">
        <div className="flex items-center justify-center gap-6">
          <button className="flex items-center justify-center gap-4 border border-berryBlue p-4 text-berryBlue underline-offset-4 transition-all hover:underline">
            <Copy className="fill-berryBlue" />
            Copy CSS
          </button>
          <button className="flex items-center justify-center gap-4 border border-purplePlus p-4 text-purplePlus underline-offset-4 transition-all hover:underline">
            <Swap className="fill-purplePlus" />
            Swap translation
          </button>
          <button className="flex items-center justify-center gap-4 border border-purplePlus p-4 text-purplePlus underline-offset-4 transition-all hover:underline">
            <MultipleNotes className="fill-purplePlus" />
            Open documentation
          </button>
          <button className="flex items-center justify-center gap-4 border border-white p-4 text-white underline-offset-4 hover:underline">
            <Restart className="fill-white" />
            Restart game
          </button>
        </div>
        <div className="flex items-center gap-8">
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
                w-96 origin-center select-all bg-transparent p-5 text-xl transition-all selection:bg-berryBlue selection:text-black`}
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
        <div className="flex items-center gap-4">
          <Zap className="fill-yellowYes" />
          <h2>
            <span className="font-bold">Tip: </span>While the user is
            translating
          </h2>
        </div>
      </section>
    </main>
  );
}
