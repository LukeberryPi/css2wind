"use client";
import { Arrow, Check, Close, Restart, Zap } from "@/icons";
import { useEffect, useState } from "react";
import { cssProperties } from "../../leozada";
import { getRandomKey } from "@/utils";

export default function PlayPage() {
  const [attempt, setAttempt] = useState<string>("");
  const [cssProperty, setCssProperty] = useState<string>("");
  const [correct, setCorrect] = useState<boolean>(false);
  const [incorrect, setIncorrect] = useState<boolean>(false);
  const [notSubmitted, setNotSubmitted] = useState<boolean>(true);

  useEffect(() => {
    setNotSubmitted(!correct && !incorrect);
  }, [setNotSubmitted, correct, incorrect]);

  useEffect(() => {
    setCssProperty(getRandomKey(cssProperties));
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const attempt = event.currentTarget.value;
    setAttempt(attempt);
  };

  const evaluateTranslation = (attempt: string) => {
    if (!attempt) {
      return;
    }

    if (cssProperties[cssProperty].includes(attempt)) {
      setCorrect(true);
      setIncorrect(false);

      setTimeout(() => {
        setCorrect(false);
        setIncorrect(false);
        setCssProperty(getRandomKey(cssProperties));
        setAttempt("");
      }, 800);
      return;
    }

    setCorrect(false);
    setIncorrect(true);

    setTimeout(() => {
      setCorrect(false);
      setIncorrect(false);
      setCssProperty(getRandomKey(cssProperties));
      setAttempt("");
    }, 800);
  };

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
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 py-[268px]">
        <div className="flex items-center gap-4">
          <Zap className="fill-yellowYes" size={24} />
          <h2>
            <span className="font-medium">Tip: </span>While the user is
            translating
          </h2>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            .class &#123;
            <span
              className={`${
                notSubmitted && "border border-berryBlue text-berryBlue"
              } ${correct && "border border-greenGo text-greenGo"}
              ${
                incorrect &&
                "animate-shake border border-alertRed text-alertRed"
              } w-96 origin-center bg-transparent p-5 text-xl transition-all`}
            >
              {cssProperty};
            </span>
            &#125;
          </div>
          {notSubmitted && <Arrow className="fill-zinc-50" />}
          {correct && <Check className="fill-greenGo" />}
          {incorrect && (
            <Close className="animate-shake fill-alertRed transition-all" />
          )}
          <div className="flex cursor-default flex-col items-start gap-2 text-zinc-500">
            className=&#34;
            <input
              value={attempt}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyDown(event, attempt)}
              autoFocus
              className={`${
                notSubmitted && "border border-zinc-50 text-zinc-50"
              } ${correct && "border border-greenGo text-greenGo"}
              ${
                incorrect &&
                "animate-shake border border-alertRed text-alertRed"
              } transition-al w-96 origin-center bg-transparent p-5 text-xl focus:outline-none`}
            />
            &#34;
          </div>
        </div>
        <button className="flex items-center gap-4 border border-zinc-700 p-4 transition-all hover:border-zinc-50">
          <Restart size={24} className="fill-zinc-50" />
          <p className="text-zinc-50">Restart</p>
        </button>
      </section>
    </main>
  );
}
