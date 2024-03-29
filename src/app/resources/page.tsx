import { Open } from "@/icons";

export default function Resources() {
  return (
    <main className="container mx-auto my-36 flex w-full flex-col gap-20 px-6">
      <h2 className="text-center text-5xl text-zinc-200 md:text-6xl">
        Resources
      </h2>
      <ul className="mx-auto flex max-w-[800px] flex-col gap-20">
        <li id="what" className="flex flex-col gap-5 px-2 md:px-0 md:text-left">
          <h3 className="text-2xl text-zinc-200 sm:text-4xl">
            Tailwind Intellisense
          </h3>
          <p className="text-lg text-zinc-400 sm:text-xl">
            This VS Code extension allows auto-completion while you write
            Tailwind classes! This boosts productivity and can even teach you
            new utilities! It is also useful for finding out what CSS a utility
            hovering
          </p>
          <div className="flex flex-col gap-2 text-left text-zinc-200 sm:flex-row sm:text-lg md:text-xl">
            <span>Read More: </span>
            <a
              className="flex items-start gap-2 text-sky-300 underline hover:opacity-80 sm:gap-2"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              <span>Utility-first Fundamentals</span>
              <Open className="shrink-0 self-center" />
            </a>
          </div>
        </li>
        <li
          id="inline"
          className="flex flex-col gap-5 px-2 md:px-0 md:text-left"
        >
          <h3 className="text-2xl text-zinc-200 sm:text-4xl">
            Isn&apos;t that just{" "}
            <span className="bg-sky-300 px-2 font-black text-zinc-900">
              inline
            </span>
            <span className="bg-sky-300 px-2 font-black text-zinc-900">
              styles?
            </span>
          </h3>
          <p className="text-lg text-zinc-400 sm:text-xl">
            Although similar, Tailwind CSS and inline styling have key
            differences. For example, it is impossible to use{" "}
            <span className="text-zinc-200">media queries</span> and{" "}
            <span className="text-zinc-200">state selectors</span> inline. In
            Tailwind CSS this is trivial with{" "}
            <span className="text-zinc-200">lg:</span> (for when screens are
            bigger than a certain width) and{" "}
            <span className="text-zinc-200">hover:</span> (to change styles when
            the user hovers their mouse over something).
          </p>
          <div className="flex flex-col gap-2 text-zinc-200 sm:flex-row sm:text-lg md:text-xl">
            <span className="shrink-0">Read More: </span>
            <a
              className="flex items-center gap-2 text-sky-300 underline hover:opacity-80"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              <span>Utility classes vs inline styles</span>
              <Open className="shrink-0 self-center" />
            </a>
          </div>
        </li>
        <li
          id="bootstrap"
          className="flex flex-col gap-5 px-2 md:px-0 md:text-left"
        >
          <h3 className="text-2xl text-zinc-200 sm:text-4xl">
            Why not use{" "}
            <span className="bg-sky-300 px-2 font-black text-zinc-900">
              Bootstrap
            </span>{" "}
            then?
          </h3>
          <p className="text-lg text-zinc-400 sm:text-xl">
            Bootstrap is a{" "}
            <span className="text-zinc-200">component library:</span> it decides
            how a button looks and customization is secondary. Tailwind CSS
            isn&apos;t, since it provides small pieces of CSS, called{" "}
            <span className="text-zinc-200">utilities</span>, so you can style a
            button from scratch — and make it look however you please.
          </p>
          <div className="flex flex-col gap-2 text-zinc-200 sm:flex-row sm:text-lg md:text-xl">
            <span>Watch this: </span>
            <a
              className="flex items-center gap-2 text-sky-300 underline hover:opacity-80"
              target="_blank"
              href="https://youtu.be/CQuTF-bkOgc?si=ENc7vupHcaGrXddW"
            >
              <span>Comparing Modern CSS Solutions</span>
              <Open className="shrink-0 self-center" />
            </a>
          </div>
        </li>
        <li id="html" className="flex flex-col gap-3 px-2 md:px-0 md:text-left">
          <h3 className="text-2xl text-zinc-200 sm:text-4xl">
            Doesn&apos;t the{" "}
            <span className="bg-sky-300 px-2 font-black text-zinc-900">
              HTML
            </span>
            <span className="bg-sky-300 px-2 font-black text-zinc-900">
              get
            </span>
            <span className="bg-sky-300 px-2 font-black text-zinc-900">
              ugly?
            </span>
          </h3>
          <p className="text-lg text-zinc-400 sm:text-xl">
            Yes, it does! This is a trade-off that Tailwind CSS embraces: it
            sacrifices pretty HTML for{" "}
            <span className="text-zinc-200">styling consistency</span> and{" "}
            <span className="text-zinc-200"> ease of maintenance </span>that
            comes with colocation — having markdown and styles at the same
            place.
          </p>
          <div className="flex flex-col items-start gap-2 text-zinc-200 sm:flex-row sm:text-lg md:text-xl">
            <span>Read More: </span>
            <a
              className="flex items-center gap-2 text-sky-300 underline hover:opacity-80"
              target="_blank"
              href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
            >
              <span>CSS and &quot;Separation of Concerns&quot;</span>
              <Open className="shrink-0 self-center" />
            </a>
          </div>
        </li>
      </ul>
    </main>
  );
}
