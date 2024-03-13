import { Check, Close, Minus } from "@/icons";

type ScoreboardProps = { score: any[] };

export default function Scoreboard({ score }: ScoreboardProps) {
  const iconMap: Record<string, React.ReactNode> = {
    not_submitted: <Minus size={32} />,
    correct: <Check size={32} className="fill-greenGo" />,
    incorrect: <Close size={32} className="fill-alertRed" />,
  };

  const correctCount = score.filter((el) => el === "correct").length;
  const notSubmittedCount = score.filter((el) => el === "not_submitted").length;

  return (
    <div className="relative flex flex-col justify-center gap-4">
      <div className="flex items-center gap-4">
        {score.map((item, i) => iconMap[item])}
      </div>
      <span>
        Your score: {correctCount}/{8 - notSubmittedCount}
      </span>
    </div>
  );
}
