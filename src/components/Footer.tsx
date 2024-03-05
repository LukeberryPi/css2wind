"use client";

import { Arrow } from "@/icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [tutorialIsVisible, setTutorialIsVisible] = useState<boolean>();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const tutorial = document.getElementById("tutorial-input");

      if (!tutorial) return;

      const boundingClientRect = tutorial.getBoundingClientRect();
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
        className="px-4 py-2 text-zinc-200 hover:outline  hover:outline-zinc-100 "
        target="_blank"
        href="https://github.com/LukeberryPi/css2wind"
      >
        Contribute on Github!
      </a>
      {tutorialIsVisible && pathname === "/" && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-4"
        >
          <span className="text-berryBlue">Play</span>
          <Arrow className="fill-berryBlue -rotate-90" />
        </button>
      )}
      {!tutorialIsVisible && pathname === "/" && (
        <button
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-4"
        >
          <span>How to Play</span>
          <Arrow className="rotate-90 fill-zinc-100" />
        </button>
      )}
      <a
        className="px-4 py-2 text-zinc-200 hover:outline  hover:outline-zinc-100 "
        target="_blank"
        href="https://twitter.com/LukeberryPi"
      >
        Made by LukeberryPi
      </a>
    </footer>
  );
}
