import { Check, Close, Minus } from "@/icons";

type ScoreboardProps = { score: any[] };

export default function Scoreboard({ score }: ScoreboardProps) {
  const iconMap: Record<string, React.ReactNode> = {
    not_submitted: <Minus className="h-6 w-6 md:h-8 md:w-8 " />,
    correct: <Check className="h-6 w-6 fill-greenGo md:h-8 md:w-8" />,
    incorrect: <Close className="h-6 w-6 fill-alertRed md:h-8 md:w-8" />,
  };

  const correctCount = score.filter((el) => el === "correct").length;

  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:flex-row-reverse">
      <div className="flex max-w-[180px] flex-wrap items-center justify-center gap-4 md:max-w-none">
        {score.map((item, i) => (
          <span key={i}>{iconMap[item]}</span>
        ))}
      </div>
      <span>Your score: {correctCount}/8</span>
    </div>
  );
}
