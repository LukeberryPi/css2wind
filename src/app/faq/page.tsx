import { Open } from "@/icons";

export default function Faq() {
  return (
    <section className="mx-auto flex w-full max-w-full flex-col gap-20 px-2 py-20 sm:max-w-7xl md:py-32">
      <div className="flex flex-col items-center gap-6">
        <h2 className="break-words text-6xl text-zinc-200 md:text-6xl">
          Frequently Asked Questions
        </h2>
      </div>
      <ul className="flex max-w-3xl flex-col gap-16 self-center">
        <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
          <p className="text-lg text-zinc-200 md:text-2xl">
            What is <span className="text-berryBlue">TailwindCSS?</span>
          </p>
          <p className="text-sm text-zinc-400 md:text-lg">
            TailwindCSS is a utility-first framework with pre-built CSS classes
            for responsive, customizable UIs. It promotes a functional styling
            approach, offering flexibility through direct class manipulation for
            efficient design control.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-200 md:text-lg">
            <span>Read More: </span>
            <a
              className="text-berryBlue flex items-center gap-2 hover:underline hover:underline-offset-2"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              <span>Utility-first Fundamentals</span>
              <Open size={20} />
            </a>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
          <p className="text-lg text-zinc-200 md:text-2xl">
            Isn&apos;t that just
            <span className="text-berryBlue"> inline styles?</span>
          </p>
          <p className="text-sm text-zinc-400 md:text-lg">
            TailwindCSS goes beyond inline styles by providing a predefined
            design system, allowing for consistent UIs with constraints. It
            offers responsive utilities for building fully responsive
            interfaces, unlike inline styles. Tailwind&apos;s state variants
            enable styling hover, focus, and other states not possible with
            inline styles.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-200 md:text-lg">
            <span>Read More: </span>
            <a
              className="text-berryBlue flex items-center gap-2 hover:underline hover:underline-offset-2"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              <span>
                No, Utility Classes Aren&apos;t the Same As Inline Styles
              </span>
              <Open size={20} />
            </a>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
          <p className="text-lg text-zinc-200 md:text-2xl">
            Why not use <span className="text-berryBlue">Bootstrap </span>
            then?
          </p>
          <p className="text-sm text-zinc-400 md:text-lg">
            TailwindCSS uses utility classes directly in HTML for styling
            components, providing flexibility and customization without
            overriding styles or writing custom CSS. It diverges from
            Bootstrap&apos;s pre-defined components, embracing a utility-first
            approach for efficient styling.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-200 md:text-lg">
            <span>Watch this: </span>
            <a
              className="text-berryBlue flex items-center gap-2 hover:underline hover:underline-offset-2"
              target="_blank"
              href="https://youtu.be/CQuTF-bkOgc?si=ENc7vupHcaGrXddW"
            >
              <span>Comparing Modern CSS Solutions</span>
              <Open size={20} />
            </a>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
          <p className="text-lg text-zinc-200 md:text-2xl">
            Doesn&apos;t the
            <span className="text-berryBlue"> HTML get ugly?</span>
          </p>
          <p className="text-sm text-zinc-400 md:text-lg">
            TailwindCSS&apos;s utility classes may increase HTML verbosity, but
            the benefits of scalability, maintainability, rapid development, and
            flexibility outweigh concerns about &quot;ugliness.&quot; It offers
            a functional approach to styling and reduces the need for custom
            CSS.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-200 md:text-lg">
            <span>Read More: </span>
            <a
              className="text-berryBlue flex items-center gap-2 hover:underline hover:underline-offset-2"
              target="_blank"
              href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
            >
              <span>
                CSS Utility Classes and &quot;Separation of Concerns&quot;
              </span>
              <Open size={20} />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
