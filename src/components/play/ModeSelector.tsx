import type { GameDefinition, GameMode } from "@/game";

type ModeSelectorProps = {
  mode: GameMode;
  modes: GameDefinition[];
  onModeChange: (mode: GameMode) => void;
};

export default function ModeSelector({ mode, modes, onModeChange }: ModeSelectorProps) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex border border-zinc-700 text-sm text-zinc-200">
        {modes.map((item) => (
          <button
            key={item.mode}
            type="button"
            aria-pressed={mode === item.mode}
            onClick={() => onModeChange(item.mode)}
            className="px-3 py-2 data-[active=true]:bg-zinc-200 data-[active=true]:text-zinc-950"
            data-active={mode === item.mode}
          >
            {item.shortLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
