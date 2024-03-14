"use client";

import { Arrow, At, Branch } from "@/icons";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);
  const [tutorialIsVisible, setTutorialIsVisible] = useState<boolean>(false);
  const pathname = usePathname();

  const tutorialCurrentlyOnScreen = useCallback(() => {
    let tutorial;

    if (document && isClient) {
      tutorial = document.getElementById("tutorial-input");
    }

    if (!tutorial) return false;

    const boundingClientRect = tutorial.getBoundingClientRect();
    const isVisible =
      boundingClientRect.top >= 0 &&
      boundingClientRect.bottom <= window.innerHeight;

    return isVisible;
  }, [isClient]);

  useEffect(() => {
    setTutorialIsVisible(tutorialCurrentlyOnScreen());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setTutorialIsVisible(tutorialCurrentlyOnScreen);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tutorialCurrentlyOnScreen, setTutorialIsVisible]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scroll = (to: "top" | "bottom") => {
    if (typeof document !== undefined || isClient) {
      window.scrollTo({
        top: to === "top" ? 0 : document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="fixed bottom-0 z-50 flex w-full items-center justify-between bg-inherit px-6 py-6 text-lg md:px-8">
      <a
        className="flex items-center gap-4 px-4 py-2 text-zinc-200 hover:bg-zinc-800"
        target="_blank"
        href="https://github.com/LukeberryPi/css2wind"
      >
        <Branch className="text-zinc-200" />
        <span className="hidden sm:inline md:text-lg">Github</span>
      </a>
      {tutorialIsVisible && pathname === "/" && (
        <button
          onClick={() => scroll("top")}
          className="flex items-center gap-4 px-4 py-2 ring-1 ring-sky-300 active:ring"
        >
          <span className="hidden text-sky-300 tiny:inline md:text-lg">
            Play Now!
          </span>
          <Arrow className="-rotate-90 fill-sky-300" />
        </button>
      )}
      {!tutorialIsVisible && pathname === "/" && (
        <button
          onClick={() => scroll("bottom")}
          className="flex items-center gap-4 px-4 py-2 ring-1 ring-zinc-200 hover:bg-zinc-800 active:ring"
        >
          <span className="hidden text-zinc-200 tiny:inline md:text-lg">
            How to Play?
          </span>
          <Arrow className="rotate-90 fill-zinc-200" />
        </button>
      )}
      <a
        className="flex items-center gap-4 px-4 py-2 text-zinc-200 hover:bg-zinc-800"
        target="_blank"
        href="https://twitter.com/LukeberryPi"
      >
        <At className="text-zinc-200" />
        <span className="hidden sm:inline md:text-lg">LukeberryPi</span>
      </a>
    </footer>
  );
}
