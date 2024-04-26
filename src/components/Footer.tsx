"use client";

import { At, Branch } from "@/icons";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 hidden w-full items-center justify-between bg-inherit p-6 md:flex">
      <a
        className="flex items-center gap-3 p-3 text-zinc-200 hover:opacity-80"
        target="_blank"
        href="https://github.com/LukeberryPi/css2wind"
      >
        <Branch className="text-zinc-200" />
        <span className="hidden sm:inline">Github</span>
      </a>
      <a
        className="flex items-center gap-3 p-3 text-zinc-200 hover:opacity-80"
        target="_blank"
        href="https://twitter.com/LukeberryPi"
      >
        <At className="text-zinc-200" />
        <span className="hidden sm:inline">LukeberryPi</span>
      </a>
    </footer>
  );
}
