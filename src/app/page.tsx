"use client";

import { Tutorial, Play } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center">
      <Play />
      <Tutorial />
    </main>
  );
}
