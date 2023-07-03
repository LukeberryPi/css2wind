import { Open } from "@/icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-full w-full flex-col justify-center divide-y-2 divide-zinc-800 text-center">
      <section
        id="hero-banner"
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 border-zinc-700 py-32"
      >
        <h1 className="break-words text-3xl font-bold text-zinc-100 md:text-6xl">
          Learn Tailwind
          <span className="text-berryBlue"> by playing</span>
        </h1>
        <p className="text-xl text-zinc-400">
          Dive into the most ergonomic styling framework and{" "}
          <strong className="text-white">boost your development </strong>
          speed through{" "}
          <strong className="text-white">gamified learning</strong>.
        </p>
        <div className="flex items-center gap-12">
          <Link
            className="border border-berryBlue bg-berryBlue px-6 py-4 text-xl font-bold text-black underline-offset-4 transition-all hover:underline active:scale-95"
            href="/play"
          >
            Play Now
          </Link>
          <Link
            className="flex items-center gap-4 border border-zinc-700 px-6 py-4 text-xl transition-all hover:border-white active:scale-95"
            href="/help"
          >
            Learn More
            <Open size={24} className="fill-white" />
          </Link>
        </div>
      </section>
      <section
        id="benefits"
        className="mx-auto hidden max-w-7xl flex-col items-center justify-center gap-16 border-zinc-700 py-32 md:flex"
      >
        <h2 className="break-words text-3xl font-bold text-zinc-100 md:text-6xl">
          Explore. <span className="text-berryBlue">Practice. </span>Master.
        </h2>
        <div className="flex items-center gap-16">
          <div className="flex shrink flex-col gap-6 text-left">
            <h3 className="text-4xl font-bold text-white">
              Immediate Feedback
            </h3>
            <p className="text-lg text-zinc-400">
              Active games foster decision-making, problem-solving, real-time
              knowledge application, and deeper understanding with concept
              retention.
            </p>
          </div>
          <div className="flex shrink flex-col gap-6 text-left">
            <h3 className="text-4xl font-bold text-white">
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
            <h3 className="text-4xl font-bold text-white">Active Learning</h3>
            <p className="text-lg text-zinc-400">
              Games empower players with active decision-making,
              problem-solving, and real-time knowledge application, fostering
              deep understanding and concept retention.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-left">
            <h3 className="text-4xl font-bold text-white">Active Learning</h3>
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
        <h2 className="break-words text-3xl font-bold text-zinc-100 md:text-6xl">
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
