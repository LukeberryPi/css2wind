import { Arrow, Check, ChevronRight, Close } from "@/icons";

type PromptInputRowProps = {
  attempt: string;
  correct: boolean;
  incorrect: boolean;
  notSubmitted: boolean;
  showCorrectAnswer: boolean;
  currentProperty: string;
  correctAnswerToDisplay?: string;
  gameOver: boolean;
  onAttemptChange: (attempt: string) => void;
  onSubmit: () => void;
};

export default function PromptInputRow({
  attempt,
  correct,
  incorrect,
  notSubmitted,
  showCorrectAnswer,
  currentProperty,
  correctAnswerToDisplay,
  gameOver,
  onAttemptChange,
  onSubmit,
}: PromptInputRowProps) {
  return (
    <div
      data-game-over={gameOver}
      className="flex-col items-center justify-center gap-4 pb-6 data-[game-over=false]:flex data-[game-over=true]:hidden tiny:pb-0 md:gap-6 lg:flex-row"
    >
      <div className="flex flex-col items-start gap-2 text-zinc-400">
        <span className="hidden xs:inline">.class &#123;</span>
        <span
          data-testid="css-prompt"
          data-not-submitted={notSubmitted}
          data-correct={correct}
          data-incorrect={incorrect}
          data-game-over={gameOver}
          className="flex h-18 w-64 items-center justify-center text-center text-lg ring-1 transition-all data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[not-submitted=true]:text-sky-300 data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed data-[not-submitted=true]:ring-sky-300 tiny:w-80 sm:w-96 md:w-104 md:text-xl"
        >
          {currentProperty || "..."}
        </span>
        <span className="hidden xs:inline">&#125;</span>
      </div>
      {notSubmitted && (
        <Arrow className="h-6 w-6 fill-zinc-100 rotate-90 md:h-8 md:w-8 lg:rotate-0" />
      )}
      {correct && <Check className="h-6 w-6 animate-lift fill-greenGo md:h-8 md:w-8" />}
      {incorrect && <Close className="h-6 w-6 animate-shake fill-alertRed md:h-8 md:w-8" />}
      <div className="flex flex-col items-start gap-2 text-zinc-400">
        <span className="hidden xs:inline">className=&#34;</span>
        <div
          data-not-submitted={notSubmitted}
          data-correct={correct}
          data-show-correct-answer={showCorrectAnswer}
          data-incorrect={incorrect}
          className="flex h-18 w-64 items-center justify-between ring-1 ring-zinc-200 transition-all data-[correct=true]:animate-lift data-[incorrect=true]:animate-shake data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[show-correct-answer=true]:text-greenGo data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed tiny:w-80 sm:w-96 md:w-104"
        >
          <div
            data-show-correct-answer={showCorrectAnswer}
            className="relative flex h-full w-full transform-style-3d items-center transition-transform duration-200 data-[show-correct-answer=true]:rotate-x-180"
          >
            <input
              id="play-input"
              value={attempt}
              onChange={(event) => onAttemptChange(event.currentTarget.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  onSubmit();
                }
              }}
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              data-not-submitted={notSubmitted}
              aria-label="Tailwind class answer"
              className="h-full w-full bg-inherit px-5 text-lg backface-hidden focus:outline-none data-[not-submitted=true]:text-zinc-200 data-[not-submitted=true]:ring-zinc-200 md:text-xl"
            />
            <input
              disabled
              aria-label="Correct answer"
              className="absolute h-18 max-w-full bg-zinc-950 px-5 text-lg rotate-x-180 backface-hidden focus:outline-none md:text-xl"
              value={correctAnswerToDisplay ?? ""}
            />
          </div>
          <button
            type="button"
            data-not-submitted={notSubmitted}
            data-correct={correct}
            data-incorrect={incorrect}
            onClick={onSubmit}
            className="h-full px-5 text-lg text-zinc-200 ring-1 ring-zinc-200 transition-all focus:outline-none active:ring data-[correct=true]:text-greenGo data-[incorrect=true]:text-alertRed data-[correct=true]:ring-greenGo data-[incorrect=true]:ring-alertRed data-[not-submitted=true]:hover:opacity-80 md:bottom-auto md:top-0 md:h-full md:w-28 md:text-xl"
          >
            <span className="hidden md:inline">return</span>
            <span className="inline md:hidden">
              <ChevronRight />
            </span>
          </button>
        </div>
        <span className="hidden xs:inline">&#34;</span>
      </div>
    </div>
  );
}
