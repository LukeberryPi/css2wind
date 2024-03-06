import { useEvaluation } from "@/hooks";
import { Arrow, Check, Close } from "@/icons";
import { getRandomKey } from "@/utils";
import { useState, useEffect } from "react";
import { dict8 } from "../../v1";

const initialState = {
  correct: false,
  incorrect: false,
  notSubmitted: true,
};

export default function Play() {
  const [currentProperty, setCurrentProperty] = useState("");
  const [attempt, setAttempt] = useState("");

  const {
    state,
    evaluateTranslation,
    mutate: mutateTranslationStatus,
  } = useEvaluation(initialState);
  const { correct, incorrect, notSubmitted } = state;

  useEffect(() => {
    setCurrentProperty(getRandomKey(dict8));
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const attempt = event.currentTarget.value;
    setAttempt(attempt);
  };

  const resetInput = (afterMilisseconds = 800) => {
    setTimeout(() => {
      setAttempt("");
      setCurrentProperty(getRandomKey(dict8));
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

      if (!evaluation) {
        setAttempt("");
        return;
      }

      resetInput();
    }
  };

  const handleReturnClick = (translation: string) => {
    const evaluation = evaluateTranslation(translation.trim(), currentProperty);

    if (!evaluation) {
      setAttempt("");
      document.activeElement instanceof HTMLElement
        ? document.getElementById("play-input")?.focus()
        : null;
      return;
    }

    document.activeElement instanceof HTMLElement
      ? document.getElementById("play-input")?.focus()
      : null;
    resetInput();
  };

  return (
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
            className="data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:border-greenGo data-[incorrect=true]:border-alertRed data-[not-submitted=true]:border-berryBlue data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[not-submitted=true]:text-berryBlue w-[420px] origin-center border p-5 text-xl transition-colors"
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
            className="data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:border-greenGo data-[incorrect=true]:border-alertRed data-[incorrect=true]:text-alertRed data-[correct=true]:text-greenGo relative w-[420px] origin-center border transition-colors"
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
              onClick={() => handleReturnClick(attempt)}
              className="data-[correct=true]:ring-greenGo data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[incorrect=true]:ring-alertRed hover:zinc-900 absolute right-0 h-full w-28 text-lg text-zinc-200 ring-1 ring-zinc-300 transition-all focus:outline-none active:ring data-[not-submitted=true]:hover:bg-zinc-800"
            >
              return
            </button>
          </div>
          <span>&#34;</span>
        </div>
      </div>
    </section>
  );
}
