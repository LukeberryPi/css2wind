export default function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto flex w-full max-w-full flex-col gap-16 px-2 py-20 sm:max-w-7xl md:py-32"
    >
      <div className="flex flex-col items-center gap-6">
        <p className="text-lg italic tracking-wider">
          Have doubts?
          <span className="text-berryBlue"> Good!</span>
        </p>
        <h2 className="break-words text-5xl font-bold text-zinc-50 md:text-6xl">
          Frequently Asked <span className="text-berryBlue">Questions</span>
        </h2>
      </div>
      <ul className="flex max-w-3xl flex-col gap-6 self-center">
        <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
          <p className="text-lg md:text-2xl">
            What is <span className="text-berryBlue">Tailwind?</span>
          </p>
          <p className="text-sm text-zinc-500 md:text-lg">
            TailwindCSS is a utility-first framework with pre-built CSS classes
            for responsive, customizable UIs. It promotes a functional styling
            approach, offering flexibility through direct class manipulation for
            efficient design control.
          </p>
        </li>
        <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
          <p className="text-lg md:text-2xl">
            Isn&apos;t that just
            <span className="text-berryBlue"> inline styles?</span>
          </p>
          <p className="text-sm text-zinc-500 md:text-lg">
            TailwindCSS goes beyond inline styles by providing a predefined
            design system, allowing for consistent UIs with constraints. It
            offers responsive utilities for building fully responsive
            interfaces, unlike inline styles. Tailwind&apos;s state variants
            enable styling hover, focus, and other states not possible with
            inline styles.
          </p>
        </li>
        <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
          <p className="text-lg md:text-2xl">
            Why not use <span className="text-berryBlue">Bootstrap </span>
            then?
          </p>
          <p className="text-sm text-zinc-500 md:text-lg">
            TailwindCSS uses utility classes directly in HTML for styling
            components, providing flexibility and customization without
            overriding styles or writing custom CSS. It diverges from
            Bootstrap&apos;s pre-defined components, embracing a utility-first
            approach for efficient styling.
          </p>
        </li>
        <li className="flex flex-col gap-3 px-2 text-center md:px-0 md:text-left">
          <p className="text-lg md:text-2xl">
            Doesn&apos;t the
            <span className="text-berryBlue"> HTML get ugly?</span>
          </p>
          <p className="text-sm text-zinc-500 md:text-lg">
            TailwindCSS&apos;s utility classes may increase HTML verbosity, but
            the benefits of scalability, maintainability, rapid development, and
            flexibility outweigh concerns about &quot;ugliness.&quot; It offers
            a functional approach to styling and reduces the need for custom
            CSS.
          </p>
        </li>
      </ul>
    </section>
  );
}
