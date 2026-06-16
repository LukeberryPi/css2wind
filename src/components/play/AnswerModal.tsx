import type { AnswerHistoryItem } from "@/game";
import { Arrow, Close } from "@/icons";

type AnswerModalProps = {
  answerHistory: AnswerHistoryItem[];
  open: boolean;
  onClose: () => void;
};

export default function AnswerModal({ answerHistory, open, onClose }: AnswerModalProps) {
  return (
    <div
      data-show-answer-modal={open}
      className="absolute z-50 hidden w-[300px] flex-col items-center gap-8 overflow-auto border border-zinc-200 bg-black p-4 data-[show-answer-modal=true]:flex tiny:w-[360px] xs:w-[480px] sm:w-[600px] md:w-[760px] lg:w-[900px]"
    >
      <div className="flex w-full justify-between">
        <p className="text-lg">Answers</p>
        <button type="button" onClick={onClose} aria-label="Close answers">
          <Close className="fill-zinc-200" />
        </button>
      </div>

      {answerHistory.map((item, index) => (
        <div key={`${item.css}-${index}`} className="flex w-full justify-between">
          <span className="flex flex-1 items-center justify-start text-sky-300">
            {item.css}
          </span>
          <span className="flex flex-1 items-center justify-center">
            <Arrow className="fill-zinc-200" />
          </span>
          <span className="flex flex-1 items-center justify-end text-greenGo">
            {item.answers[0]}
          </span>
        </div>
      ))}
    </div>
  );
}
