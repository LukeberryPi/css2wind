import { PlayIcon } from "@/icons/PlayIcon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col pt-20 flex h-full w-full text-center justify-center">
      <section
        id="hero-banner"
        className="border-b container mx-auto border-zinc-900 flex flex-col gap-10 items-center justify-center py-36"
      >
        <h1 className="text-6xl font-bold text-zinc-100">
          Learn Tailwind
          <span className="text-berryBlue"> by playing</span>
        </h1>
        <p className="text-2xl text-zinc-400">
          Dive into the most ergonomic styling framework and{" "}
          <strong className="text-zinc-200">boost your development </strong>
          speed through{" "}
          <strong className="text-zinc-200">gamified learning</strong>.
        </p>
        <div className="flex gap-16 items-center">
          <Link
            href="/play"
            className="flex border active:translate-y-1 group items-center gap-2 transition-all hover:bg-berryBlue border-berryBlue py-4 pr-8 pl-5"
          >
            <PlayIcon />
            <p className="text-xl group-hover:text-black text-berryBlue">
              Play Now
            </p>
          </Link>
          <a
            className="hover:border-zinc-200 border border-zinc-900 py-4 px-8 text-xl"
            href="#faq"
          >
            Learn More
          </a>
        </div>
      </section>
      <section
        id="benefits"
        className="border-b max-w-5xl mx-auto border-zinc-900 flex flex-col gap-32 items-center justify-center py-32"
      >
        <div className="flex items-center gap-32 w-full">
          <div className="flex text-left flex-col">
            <h3 className="text-5xl text-zinc-200 font-medium">
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
        <div className="flex items-center gap-32 w-full">
          <Image src="/home.png" alt="White square" width={400} height={225} />
          <div className="flex text-left flex-col">
            <h3 className="text-5xl text-zinc-200 font-medium">
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
        className="flex flex-col gap-8 py-32 mx-auto min-w-[1024px]"
      >
        <h2 className="text-5xl font-medium self-center text-zinc-100">
          Frequently Asked Questions
        </h2>
        <details
          open
          className="max-w-5xl flex text-left border hover:border-zinc-100 transition-all border-zinc-800 w-full py-4 px-6 cursor-pointer"
        >
          <summary className="w-full">How does the details-tag work?</summary>
          <p className="pt-4 text-zinc-400">
            The details tag works as an interactive widget that hides / shows
            content.
          </p>
        </details>
        <details className="cursor-pointer max-w-5xl flex text-left border hover:border-zinc-100 transition-all border-zinc-800 w-full py-4 px-6">
          <summary className="w-full">How does the summary-tag work?</summary>
          <p className="pt-4 text-zinc-400">
            The summary tag works as the heading of the details tag. The summary
            will always be shown and can be clicked to show or hide the other
            content of the details-tag
          </p>
        </details>
        <details className="cursor-pointer max-w-5xl flex text-left border hover:border-zinc-100 transition-all border-zinc-800 w-full py-4 px-6">
          <summary className="w-full">
            What content can I put in the details-tag?
          </summary>
          <p className="pt-4 text-zinc-400">
            You can put any content you want inside of the details-tag, though
            the summary-tag should be the first child.
          </p>
        </details>
        <details className="cursor-pointer max-w-5xl flex text-left border hover:border-zinc-100 transition-all border-zinc-800 w-full py-4 px-6">
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
