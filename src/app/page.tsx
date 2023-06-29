import { Open } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-full w-full flex-col justify-center divide-y-2 divide-zinc-800 text-center">
      <section
        id="hero-banner"
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 border-zinc-700 py-32"
      >
        <h1 className="text-6xl font-bold text-zinc-100">
          Learn Tailwind
          <span className="text-berryBlue"> by playing</span>
        </h1>
        <p className="text-xl text-zinc-400">
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
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 border-zinc-700 py-32"
      >
        <h2 className="text-6xl font-bold text-zinc-100">
          Explore. <span className="text-berryBlue">Practice. </span>Master.
        </h2>
        <div className="flex items-center gap-16">
          <div className="flex shrink flex-col gap-6 text-left">
            <h3 className="text-4xl font-bold text-zinc-50">
              Immediate Feedback
            </h3>
            <p className="text-lg text-zinc-400">
              Active games foster decision-making, problem-solving, real-time
              knowledge application, and deeper understanding with concept
              retention.
            </p>
          </div>
          <div className="flex shrink flex-col gap-6 text-left">
            <h3 className="text-4xl font-bold text-zinc-50">
              Immediate Feedback
            </h3>
            <p className="text-lg text-zinc-400">
              Active games foster decision-making, problem-solving, real-time
              knowledge application, and deeper understanding with concept
              retention.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-16">
          <div className="flex flex-col gap-6 text-left">
            <h3 className="text-4xl font-bold text-zinc-50">Active Learning</h3>
            <p className="text-lg text-zinc-400">
              Games empower players with active decision-making,
              problem-solving, and real-time knowledge application, fostering
              deep understanding and concept retention.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-left">
            <h3 className="text-4xl font-bold text-zinc-50">Active Learning</h3>
            <p className="text-lg text-zinc-400">
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
        <ul className="flex max-w-prose flex-col gap-6 self-center">
          <li className="flex flex-col gap-3 text-left">
            <p className="text-xl text-berryBlue">What is TailwindCSS?</p>
            <p className="text-zinc-400">
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.
            </p>
          </li>
          <li className="flex flex-col gap-3 text-left">
            <p className="text-xl text-berryBlue">
              Isn&apos;t that just inline styles?
            </p>
            <p className="text-zinc-400">
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.
            </p>
          </li>
          <li className="flex flex-col gap-3 text-left">
            <p className="text-xl text-berryBlue">
              Why not use Bootstrap then?
            </p>
            <p className="text-zinc-400">
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.
            </p>
          </li>
          <li className="flex flex-col gap-3 text-left">
            <p className="text-xl text-berryBlue">
              Doesn&apos;t the HTML get ugly?
            </p>
            <p className="text-zinc-400">
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
