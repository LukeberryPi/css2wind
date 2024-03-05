"use client";
import { Tutorial } from "@/components";
import Play from "@/components/Play";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center">
      <Play />
      <Tutorial />
    </main>
  );
}
