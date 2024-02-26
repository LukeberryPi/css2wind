"use client";

import { Arrow } from "@/icons";
import { useEffect, useState } from "react";

export default function Footer() {
  const [tutorialIsVisible, setTutorialIsVisible] = useState<boolean>();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("tutorial-input");

      if (!element) return;

      const boundingClientRect = element.getBoundingClientRect();
      const isVisible =
        boundingClientRect.top >= 0 &&
        boundingClientRect.bottom <= window.innerHeight;
      setTutorialIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-between bg-inherit px-8 py-6 text-lg">
      <a
        className="px-4 py-2 text-zinc-100 hover:outline  hover:outline-zinc-100 "
        target="_blank"
        href="ttps://github.com/LukeberryPi/css2wind"
      >
        Contribute on Github!
      </a>
      {tutorialIsVisible ? (
        <a
          href="#play-input"
          className="flex cursor-pointer items-center gap-4"
        >
          <span className="text-berryBlue">Play</span>
          <Arrow className="-rotate-90 fill-berryBlue" />
        </a>
      ) : (
        <a
          href="#tutorial-input"
          className="flex cursor-pointer items-center gap-4"
        >
          <span>How to Play</span>
          <Arrow className="rotate-90 fill-white" />
        </a>
      )}
      <a
        className="px-4 py-2 text-zinc-100 hover:outline  hover:outline-zinc-100 "
        target="_blank"
        href="https://twitter.com/LukeberryPi"
      >
        Made by LukeberryPi
      </a>
    </footer>
  );
}
