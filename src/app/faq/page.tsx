import { Open } from "@/icons";

export default function Faq() {
  return (
    <section className="container mx-auto flex w-full max-w-full flex-col gap-20 px-6 py-20 md:py-32">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-center text-5xl text-zinc-200 md:text-6xl">
          Frequently Asked Questions
        </h2>
      </div>
      <ul className="flex max-w-3xl shrink-0 flex-col gap-20 self-center">
        <li className="flex flex-col gap-5 px-2 md:px-0 md:text-left">
          <h3 className="text-lg text-zinc-200 md:text-3xl">
            What is{" "}
            <span className="bg-sky-300 px-2 py-px font-black text-zinc-900">
              Tailwind CSS?
            </span>
          </h3>
          <p className="text-zinc-400 md:text-lg">
            Tailwind CSS is a utility-first framework with pre-built CSS classes
            for responsive, customizable UIs. It promotes a functional styling
            approach, offering flexibility through direct class manipulation for
            efficient design control.
          </p>
          <div className="flex flex-col gap-2 text-left text-zinc-200 sm:flex-row md:text-lg">
            <span>Read More: </span>
            <a
              className="flex items-start gap-2 text-sky-300 hover:underline hover:underline-offset-2 sm:gap-2"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              <span>Utility-first Fundamentals</span>
              <Open size={20} className="shrink-0 self-center" />
            </a>
          </div>
        </li>
        <li className="flex flex-col gap-5 px-2 md:px-0 md:text-left">
          <h3 className="text-lg text-zinc-200 md:text-3xl">
            Isn&apos;t that just{" "}
            <span className="bg-sky-300 px-2 py-px font-black text-zinc-900">
              inline styles?
            </span>
          </h3>
          <p className="text-zinc-400 md:text-lg">
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
          <div className="flex flex-col gap-2 text-zinc-200 sm:flex-row md:text-lg">
            <span>Read More: </span>
            <a
              className="flex items-center gap-2 text-sky-300 hover:underline hover:underline-offset-2"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              <span>
                No, utility classes aren&apos;t the same as inline styles
              </span>
              <Open size={20} className="shrink-0 self-center" />
            </a>
          </div>
        </li>
        <li className="flex flex-col gap-5 px-2 md:px-0 md:text-left">
          <h3 className="text-lg text-zinc-200 md:text-3xl">
            Why not use{" "}
            <span className="bg-sky-300 px-2 py-px font-black text-zinc-900">
              Bootstrap
            </span>{" "}
            then?
          </h3>
          <p className="text-zinc-400 md:text-lg">
            Bootstrap is a{" "}
            <span className="text-zinc-200">component library:</span> it decides
            how a button looks and customization is secondary. Tailwind CSS
            isn&apos;t, since it provides small pieces of CSS, called{" "}
            <span className="text-zinc-200">utilities</span>, so you can style a
            button from scratch — and make it look however you please.
          </p>
          <div className="flex items-center gap-2 text-zinc-200 md:text-lg">
            <span>Watch this: </span>
            <a
              className="flex items-center gap-2 text-sky-300 hover:underline hover:underline-offset-2"
              target="_blank"
              href="https://youtu.be/CQuTF-bkOgc?si=ENc7vupHcaGrXddW"
            >
              <span>Comparing Modern CSS Solutions</span>
              <Open size={20} className="shrink-0 self-center" />
            </a>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-2 md:px-0 md:text-left">
          <h3 className="text-lg text-zinc-200 md:text-3xl">
            Doesn&apos;t the{" "}
            <span className="bg-sky-300 px-2 py-px font-black text-zinc-900">
              {" "}
              HTML get ugly?
            </span>
          </h3>
          <p className="text-zinc-400 md:text-lg">
            Yes it does! This is a trade-off that Tailwind CSS embraces: it
            sacrifices pretty HTML for{" "}
            <span className="text-zinc-200">styling consistency</span> and{" "}
            <span className="text-zinc-200"> ease of maintenance </span>that
            comes with colocation — having markdown and styles at the same
            place.
          </p>
          <div className="flex items-center gap-2 text-zinc-200 md:text-lg">
            <span>Read More: </span>
            <a
              className="flex items-center gap-2 text-sky-300 hover:underline hover:underline-offset-2"
              target="_blank"
              href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
            >
              <span>
                CSS Utility Classes and &quot;Separation of Concerns&quot;
              </span>
              <Open size={20} className="shrink-0 self-center" />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
