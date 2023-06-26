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
        <h1 className="text-6xl font-medium text-zinc-100">
          Learn Tailwind
          <span className="text-berryBlue"> by playing</span>
        </h1>
        <p className="text-2xl text-zinc-400">
          Dive into the most ergonomic styling framework and{" "}
          <strong className="text-zinc-200">boost your development </strong>
          speed through{" "}
          <strong className="text-zinc-200">gamified learning</strong>.
        </p>
        <div className="flex items-center gap-16">
          <Link
            className="border border-berryBlue px-8 py-4 text-xl text-berryBlue"
            href="/play"
          >
            Play Now
          </Link>
          <Link
            className="flex items-center gap-4 border border-zinc-700 px-8 py-4 text-xl hover:border-zinc-200"
            href="/help"
          >
            Learn More
            <Open size={24} className="fill-zinc-50" />
          </Link>
        </div>
      </section>
      <section
        id="benefits"
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-32 border-zinc-700 py-32"
      >
        <div className="flex w-full items-center gap-16">
          <div className="flex flex-col gap-8 text-left">
            <h3 className="text-5xl font-medium text-zinc-200">
              Immediate Feedback
            </h3>
            <p className="text-xl text-zinc-400">
              Gamified learning offers instant feedback on performance, allowing
              learners to understand their strengths and areas for improvement,
              enabling them to adjust their strategies accordingly.
            </p>
          </div>
          <Image src="/home.png" alt="White square" width={450} height={250} />
        </div>
        <div className="flex w-full items-center gap-16">
          <Image src="/home.png" alt="White square" width={450} height={250} />
          <div className="flex flex-col gap-8 text-left">
            <h3 className="text-5xl font-medium text-zinc-200">
              Active Learning
            </h3>
            <p className="text-xl text-zinc-400">
              Games encourage active participation, requiring players to make
              decisions, solve problems, and apply knowledge in real-time,
              leading to deeper understanding and retention of concepts.
            </p>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="mx-auto flex w-full max-w-7xl flex-col gap-8 py-32"
      >
        <h2 className="self-center text-5xl text-zinc-100">
          Frequently Asked Questions
        </h2>
        <details className="flex w-full max-w-7xl cursor-pointer border border-zinc-700 px-6 py-4 text-left transition-all hover:border-zinc-100">
          <summary className="w-full">How does the details-tag work?</summary>
          <p className="pt-4 text-zinc-400">
            The details tag works as an interactive widget that hides / shows
            content.
          </p>
        </details>
        <details className="flex w-full max-w-7xl cursor-pointer border border-zinc-700 px-6 py-4 text-left transition-all hover:border-zinc-100">
          <summary className="w-full">How does the summary-tag work?</summary>
          <p className="pt-4 text-zinc-400">
            The summary tag works as the heading of the details tag. The summary
            will always be shown and can be clicked to show or hide the other
            content of the details-tag
          </p>
        </details>
        <details className="flex w-full max-w-7xl cursor-pointer border border-zinc-700 px-6 py-4 text-left transition-all hover:border-zinc-100">
          <summary className="w-full">
            What content can I put in the details-tag?
          </summary>
          <p className="pt-4 text-zinc-400">
            You can put any content you want inside of the details-tag, though
            the summary-tag should be the first child.
          </p>
        </details>
        <details className="flex w-full max-w-7xl cursor-pointer border border-zinc-700 px-6 py-4 text-left transition-all hover:border-zinc-100">
          <summary className="w-full">
            Can I have a details-tag open by default?
          </summary>
          <p className="pt-4 text-zinc-400">
            Yes you can, simply add the open attribute to the details-tag
          </p>
        </details>
      </section>
    </main>
  );
}
