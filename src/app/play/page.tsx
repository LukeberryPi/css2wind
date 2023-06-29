"use client";
import { Arrow, Zap } from "@/icons";
import { useState } from "react";

export default function PlayPage() {
  const [currentTranslation, setCurrentTranslation] = useState<string>("");
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [incorrect, setIncorrect] = useState<boolean | null>(null);

  const notSubmitted = correct === null && incorrect === null;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const currentTranslation = event.currentTarget.value;
    setCurrentTranslation(currentTranslation);
  };

  function evaluateTranslation(translation: string) {
    if (!translation) {
      return;
    }

    if (translation === "flex-col") {
      setCorrect(true);
      setIncorrect(false);
      return;
    }

    setCorrect(false);
    setIncorrect(true);
    return;
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    translation: string
  ) => {
    if (event.key == " " || event.code == "Space") {
      event.preventDefault();
      evaluateTranslation(translation);
    }
  };

  return (
    <main className="flex flex-col justify-center divide-y-2 divide-zinc-800 text-center">
      <section
        id="translate-ongoing"
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 py-[268px]"
      >
        <div className="flex items-center gap-4">
          <Zap className="fill-yellowYes" size={24} />
          <h2>
            <span className="font-medium">Tip: </span>While the user is
            translating
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            .class &#123;
            <span
              className={`${
                notSubmitted && "border border-berryBlue text-berryBlue"
              } ${correct && "border border-greenGo text-greenGo"}
              ${
                incorrect && "border border-alertRed text-alertRed"
              } bg-transparent p-5 text-xl`}
            >
              flex-direction: column;
            </span>
            &#125;
          </div>
          <Arrow className="mx-8 fill-zinc-50" />
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            className=&#34;
            <input
              value={currentTranslation}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyDown(event, currentTranslation)}
              className={`${
                notSubmitted && "border border-zinc-50 text-zinc-50"
              } ${correct && "border border-greenGo text-greenGo"}
              ${
                incorrect && "border border-alertRed text-alertRed"
              } bg-transparent p-5 text-xl focus:outline-none`}
            />
            &#34;
          </div>
        </div>
        <p>{currentTranslation}</p>
        <p>{`correct: ${correct?.toString()}`}</p>
        <p>{`incorrect: ${incorrect?.toString()}`}</p>
        <p>{`notSubmitted: ${notSubmitted?.toString()}`}</p>
      </section>
    </main>
  );
}
