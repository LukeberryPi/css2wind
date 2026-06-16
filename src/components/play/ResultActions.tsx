import { Copy, Eye, Restart, Share } from "@/icons";

type ResultActionsProps = {
  gameOver: boolean;
  resultCopied: boolean;
  tweetIntent: string;
  showAnswerModal: boolean;
  onCopy: () => void;
  onPlayAgain: () => void;
  onToggleAnswers: () => void;
};

export default function ResultActions({
  gameOver,
  resultCopied,
  tweetIntent,
  showAnswerModal,
  onCopy,
  onPlayAgain,
  onToggleAnswers,
}: ResultActionsProps) {
  return (
    <>
      <div
        data-game-over={gameOver}
        className="hidden flex-col items-center justify-center gap-8 transition-all data-[game-over=true]:flex lg:flex-row"
      >
        <a
          href={tweetIntent}
          target="_blank"
          className="flex w-64 items-center justify-center gap-3 self-center p-3 text-[#1D9BF0] ring-1 ring-[#1D9BF0] hover:opacity-80 active:ring lg:w-fit"
        >
          <Share />
          <span>Share to Twitter</span>
        </a>
        <button
          type="button"
          onClick={onCopy}
          className="flex w-64 items-center justify-center gap-3 self-center p-3 text-zinc-200 ring-1 ring-zinc-200 hover:opacity-80 active:ring lg:w-fit"
        >
          <Copy />
          <span>{resultCopied ? "Copied!" : "Copy Result"}</span>
        </button>
        <button
          type="button"
          onClick={onPlayAgain}
          className="flex w-64 items-center justify-center gap-3 self-center p-3 text-sky-300 ring-1 ring-sky-300 hover:opacity-80 active:ring lg:w-fit"
        >
          <Restart />
          <span>Play Again</span>
        </button>
      </div>
      <div className="flex flex-col items-center gap-8">
        <button
          type="button"
          data-game-over={gameOver}
          onClick={onToggleAnswers}
          className="hidden items-center gap-4 hover:opacity-80 data-[game-over=true]:flex"
        >
          Show answers
          <span data-show-answer-list={showAnswerModal}>
            <Eye />
          </span>
        </button>
      </div>
    </>
  );
}
