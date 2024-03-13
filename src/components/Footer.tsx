"use client";

import { Arrow } from "@/icons";
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
    <footer className="fixed bottom-0 flex w-full items-center justify-between bg-inherit px-8 py-6 text-lg">
      <a
        className="px-4 py-2 text-zinc-200 hover:bg-zinc-800"
        target="_blank"
        href="https://github.com/LukeberryPi/css2wind"
      >
        Contribute on Github!
      </a>
      {tutorialIsVisible && pathname === "/" && (
        <button
          onClick={() => scroll("top")}
          className="ring-berryBlue active:ring-3 flex items-center gap-4 px-4 py-2 ring-1 active:ring"
        >
          <span className="text-berryBlue">Play Now!</span>
          <Arrow className="fill-berryBlue -rotate-90" />
        </button>
      )}
      {!tutorialIsVisible && pathname === "/" && (
        <button
          onClick={() => scroll("bottom")}
          className="flex items-center gap-4 px-4 py-2 ring-1 ring-zinc-100 hover:bg-zinc-800 active:ring"
        >
          <span className="text-zinc-200">How to Play?</span>
          <Arrow className="rotate-90 fill-zinc-100" />
        </button>
      )}
      <a
        className="px-4 py-2 text-zinc-200 hover:bg-zinc-800"
        target="_blank"
        href="https://twitter.com/LukeberryPi"
      >
        Made by LukeberryPi
      </a>
    </footer>
  );
}
