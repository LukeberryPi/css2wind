import { Open } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col justify-center divide-y-2 divide-zinc-800 text-center">
      <section
        id="hero-banner"
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 border-zinc-700 py-36"
      >
        <h1 className="text-6xl font-bold text-zinc-100">
          Learn Tailwind
          <span className="text-berryBlue"> by playing</span>
        </h1>
        <p className="text-2xl text-zinc-400">
          Dive into the most ergonomic styling framework and{" "}
          <strong className="text-zinc-50">boost your development </strong>
          speed through{" "}
          <strong className="text-zinc-50">gamified learning</strong>.
        </p>
        <div className="flex items-center gap-12">
          <Link
            className="border border-berryBlue px-6 py-4 text-xl text-berryBlue decoration-berryBlue decoration-1 underline-offset-4 transition-all hover:underline active:scale-95"
            href="/play"
          >
            Play Now
          </Link>
          <Link
            className="flex items-center gap-4 border border-zinc-700 px-6 py-4 text-xl transition-all hover:border-zinc-50 active:scale-95"
            href="/help"
          >
            Learn More
            <Open size={24} className="fill-zinc-50" />
          </Link>
        </div>
      </section>
      <section
        id="benefits"
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 border-zinc-700 py-32"
      >
        <h2 className="text-6xl font-bold text-zinc-100">
          <span className="text-berryBlue">Playfully</span> master Tailwind!
        </h2>
        <div className="flex items-center gap-16">
          <div className="flex flex-col gap-6 text-left">
            <h3 className="max-w-1/2 text-5xl font-medium text-zinc-50">
              Immediate Feedback
            </h3>
            <p className="text-xl text-zinc-400">
              Active games foster decision-making, problem-solving, real-time
              knowledge application, and deeper understanding with concept
              retention.
            </p>
          </div>
          <Image
            className="h-auto w-auto"
            src="/immediate-feedback.png"
            alt="White square"
            width={400}
            height={225}
          />
        </div>
        <div className="flex w-full items-center gap-16">
          <Image
            className="h-auto w-auto"
            src="/immediate-feedback.png"
            alt="White square"
            width={400}
            height={225}
          />
          <div className="flex flex-col gap-6 text-left">
            <h3 className="max-w-1/2 text-5xl font-medium text-zinc-50">
              Active Learning
            </h3>
            <p className="text-xl text-zinc-400">
              Games empower players with active decision-making,
              problem-solving, and real-time knowledge application, fostering
              deep understanding and concept retention.
            </p>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="mx-auto flex w-full max-w-7xl flex-col gap-16 py-32"
      >
        <h2 className="text-6xl font-bold text-zinc-100">
          Frequently Asked Questions
        </h2>
        <ul className="flex flex-col gap-6">
          <li className="flex flex-col gap-3">
            <p className="text-xl text-berryBlue">What is TailwindCSS?</p>
            <p className="text-zinc-400">
              The div tag works as an interactive widget that hides / shows
              content.
            </p>
          </li>
          <li className="flex flex-col gap-3">
            <p className="text-xl text-berryBlue">What is TailwindCSS?</p>
            <p className="text-zinc-400">
              The div tag works as an interactive widget that hides / shows
              content.
            </p>
          </li>
          <li className="flex flex-col gap-3">
            <p className="text-xl text-berryBlue">What is TailwindCSS?</p>
            <p className="text-zinc-400">
              The div tag works as an interactive widget that hides / shows
              content.
            </p>
          </li>
          <li className="flex flex-col gap-3">
            <p className="text-xl text-berryBlue">What is TailwindCSS?</p>
            <p className="text-zinc-400">
              The div tag works as an interactive widget that hides / shows
              content.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
