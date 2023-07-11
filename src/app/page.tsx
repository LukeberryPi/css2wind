import { Open } from "@/icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-full w-full flex-col justify-center divide-y-2 divide-zinc-700 text-center">
      <section
        id="hero-banner"
        className="mx-auto flex max-w-full flex-col items-center justify-center gap-10 px-2 py-16 sm:max-w-7xl md:py-32"
      >
        <h1 className="break-words text-5xl font-bold text-white md:text-7xl">
          Learn
          <span className="text-berryBlue"> Tailwind </span>
          by playing
        </h1>
        <p className="text-md px-6 text-zinc-400 md:text-xl">
          Dive into the most ergonomic styling framework and{" "}
          <strong className="text-white">boost your development </strong>
          speed through{" "}
          <strong className="text-white">gamified learning</strong>.
        </p>
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
          <Link
            className="text-md w-52 border border-berryBlue bg-inherit py-2 font-medium text-berryBlue underline-offset-4 transition-all hover:underline md:w-auto md:px-6 md:py-4 md:text-xl"
            href="/play"
          >
            Play Now
          </Link>
          <Link
            className="text-md flex w-52 items-center justify-center gap-4 border border-zinc-700 py-2 transition-all hover:border-white md:w-auto md:px-6 md:py-4 md:text-xl"
            href="/help"
          >
            Learn More
            <Open className="fill-white" />
          </Link>
        </div>
      </section>
      <section
        id="benefits"
        className="mx-auto flex max-w-full flex-col items-center justify-center gap-16 border-zinc-700 px-2 py-16 sm:max-w-7xl md:py-32"
      >
        <p className="-m-11 text-lg italic tracking-wider">
          <span className="text-white">Noob?</span>{" "}
          <span className="text-berryBlue">User?</span>{" "}
          <span className="text-purplePlus">Adept?</span>
        </p>
        <h2 className="break-words text-5xl font-bold text-white md:text-6xl">
          Explore. <span className="text-berryBlue">Practice. </span>
          <span className="text-purplePlus">Master. </span>
        </h2>
        <div className="flex w-full flex-col items-center gap-16 md:flex-row">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="text-2xl font-medium text-white md:text-4xl">
              Active Learning
            </h3>
            <p className="text-md text-zinc-400 md:text-lg">
              Games empower players with active decision-making,
              problem-solving, and real-time knowledge application, fostering
              deep understanding and concept retention.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="text-2xl font-medium text-white md:text-4xl">
              Immediate Feedback
            </h3>
            <p className="text-md text-zinc-400 md:text-lg">
              Active games foster decision-making, problem-solving, real-time
              knowledge application, and deeper understanding with concept
              retention.
            </p>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="mx-auto flex w-full max-w-full flex-col gap-16 px-2 py-16 sm:max-w-7xl md:py-32"
      >
        <p className="-m-11 text-lg italic tracking-wider">
          Have doubts?
          <span className="text-berryBlue"> Good!</span>
        </p>
        <h2 className="break-words text-5xl font-bold text-white md:text-6xl">
          Frequently Asked <span className="text-berryBlue">Questions</span>
        </h2>
        <ul className="flex max-w-3xl flex-col gap-6 self-center">
          <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
            <p className="text-lg font-medium md:text-2xl">
              What even is <span className="text-berryBlue">Tailwind?</span>
            </p>
            <p className="text-sm text-zinc-400 md:text-lg">
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.
            </p>
          </li>
          <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
            <p className="text-lg font-medium md:text-2xl">
              Isn&apos;t that just
              <span className="text-berryBlue"> inline styles?</span>
            </p>
            <p className="text-sm text-zinc-400 md:text-lg">
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.
            </p>
          </li>
          <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
            <p className="text-lg font-medium md:text-2xl">
              Why not use <span className="text-berryBlue">Bootstrap </span>
              then?
            </p>
            <p className="text-sm text-zinc-400 md:text-lg">
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.
            </p>
          </li>
          <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
            <p className="text-lg font-medium md:text-2xl">
              Doesn&apos;t the{" "}
              <span className="text-berryBlue"> HTML get ugly?</span>
            </p>
            <p className="text-sm text-zinc-400 md:text-lg">
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
