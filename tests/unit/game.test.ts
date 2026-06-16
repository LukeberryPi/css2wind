import { describe, expect, it } from "vitest";
import { DEFAULT_GAME_MODE, evaluateAnswer, gameRegistry, getDictionary } from "@/game";
import { createGameStorageKey, readGameProgress, writeGameProgress } from "@/game/storage";
import { generateResultText } from "@/components/Play";
import { getRandomKey } from "@/utils";

describe("game registry", () => {
  it("defaults to Tailwind v3", () => {
    expect(DEFAULT_GAME_MODE).toBe("tailwind-v3");
    expect(getDictionary()["align-items: center"]).toEqual(["items-center"]);
  });

  it("keeps Tailwind v4 opt-in and dictionary-backed", () => {
    expect(gameRegistry["tailwind-v4"].shortLabel).toBe("v4");
    expect(getDictionary("tailwind-v4")["align-items: center"]).toEqual(["items-center"]);
  });
});

describe("evaluation", () => {
  it("accepts known answers", () => {
    expect(
      evaluateAnswer({
        attempt: "items-center",
        css: "align-items: center",
        dictionary: getDictionary("tailwind-v3"),
      }),
    ).toBe("correct");
  });

  it("rejects incorrect answers", () => {
    expect(
      evaluateAnswer({
        attempt: "flex",
        css: "align-items: center",
        dictionary: getDictionary("tailwind-v3"),
      }),
    ).toBe("incorrect");
  });
});

describe("mode-scoped storage", () => {
  it("isolates progress by mode", () => {
    writeGameProgress("tailwind-v3", {
      currentProperty: "align-items: center",
      isGameOver: false,
      score: ["correct", "not_submitted"],
      answerHistory: [{ css: "align-items: center", answers: ["items-center"] }],
    });
    writeGameProgress("tailwind-v4", {
      currentProperty: "display: flex",
      isGameOver: false,
      score: ["incorrect", "not_submitted"],
      answerHistory: [{ css: "display: flex", answers: ["flex"] }],
    });

    expect(localStorage.getItem(createGameStorageKey("tailwind-v3"))).not.toEqual(
      localStorage.getItem(createGameStorageKey("tailwind-v4")),
    );
    expect(readGameProgress("tailwind-v3")?.currentProperty).toBe("align-items: center");
    expect(readGameProgress("tailwind-v4")?.currentProperty).toBe("display: flex");
  });
});

describe("random key", () => {
  it("excludes the current key", () => {
    const key = getRandomKey({ a: true, b: true }, "a");
    expect(key).toBe("b");
  });
});

describe("result text", () => {
  it("summarizes score for sharing", () => {
    expect(
      generateResultText([
        "correct",
        "incorrect",
        "correct",
        "not_submitted",
        "not_submitted",
        "not_submitted",
        "not_submitted",
        "not_submitted",
      ]),
    ).toBe("I just got 2/8 on css2wind.com!\n\n✅ ❌ ✅ ❌ ❌ ❌ ❌ ❌ ");
  });
});
