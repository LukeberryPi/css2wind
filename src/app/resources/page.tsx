export const metadata = {
  title: "css2wind | Resources",
  description: "Understand the tools that make Tailwind CSS amazing.",
  applicationName: "css2wind",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Tailwind",
    "CSS",
    "shadcn",
    "cva",
    "prettier",
    "plugin",
    "extension",
  ],
  authors: { name: "Luke Berry" },
  creator: "Luke Berry",
  publisher: "Luke Berry",
  openGraph: {
    type: "website",
    // TODO: create new og image for resources
    images: "https://www.css2wind.com/og-resources.png",
    siteName: "css2wind",
    title: "css2wind | Resources",
    description: "Understand the tools that make Tailwind CSS amazing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "css2wind, a minigame for learning Tailwind CSS",
    description:
      "What is Tailwind Intellisense? prettier-plugin-tailwindcss? Tailwind Merge? shadcn/ui?",
    images: { url: "https://www.css2wind.com/og-resources.png" },
  },
  verification: {
    // TODO: new verif id for route
    google: "lalalala",
  },
};

export default function Resources() {
  return (
    <main className="container mx-auto my-36 flex w-full flex-col gap-20 px-6">
      <h2 className="text-center text-4xl text-zinc-200">Resources</h2>
      <ul className="mx-auto max-w-[800px] space-y-20">
        <li className="flex flex-col gap-5 text-lg sm:text-xl md:px-0 md:text-left">
          <h3 className="text-zinc-200">Tailwind CSS Intellisense</h3>
          <p className="text-zinc-400">
            This VS Code extension enables auto-completion while you write
            Tailwind CSS classes! This boosts productivity and can even teach
            you new utilities! It is also useful for finding out what CSS a
            utility represents by simply hovering it.
          </p>
          <span>
            Read More:{" "}
            <a
              className="text-sky-300 underline hover:opacity-80 sm:gap-2"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              Tailwind Intellisense Extension
            </a>
          </span>
        </li>
        <li className="flex flex-col gap-5 text-lg sm:text-xl md:px-0 md:text-left">
          <h3 className="text-zinc-200">prettier-plugin-tailwindcss</h3>
          <p className="text-zinc-400">
            This is an npm package with one goal: automatically sorting your
            Tailwind CSS utilities. Why does this matter? It assures that there
            is no unpredictable behavior with utilities applying the same
            styles. Keeping the order consistent also improves refactoring and
            readability.
          </p>
          <span>
            Read More:{" "}
            <a
              className="text-sky-300 underline hover:opacity-80 sm:gap-2"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              prettier-plugin-tailwindcss
            </a>
          </span>
        </li>
        <li className="flex flex-col gap-5 text-lg sm:text-xl md:px-0 md:text-left">
          <h3 className="text-zinc-200">Tailwind Typography</h3>
          <p className="text-zinc-400">
            This depednency is pure magic. It turns unstyled markdown into
            well-structured, consistently styled text. Forget setting
            font-weights for your titles and paddings for your paragraphs:
            Tailwind Typography has got you covered.
          </p>
          <span>
            Read More:{" "}
            <a
              className="text-sky-300 underline hover:opacity-80 sm:gap-2"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              Tailwind Typography
            </a>
          </span>
        </li>
      </ul>
      <div className="mx-auto flex max-w-[800px] flex-col gap-4 text-lg sm:text-xl">
        <h4 className="text-zinc-200">More resources:</h4>
        <ul className="space-y-4">
          <li className="text-zinc-400">
            <span className="text-zinc-200">shadcn/ui:</span> copy and paste
            handcrafted UI components that are 100% customizable with Tailwind
            CSS.
          </li>
          <li className="text-zinc-400">
            <span className="text-zinc-200">Tailwind Merge:</span> overwrite
            Tailwind CSS utilities consistently and predictably.
          </li>
          <li className="text-zinc-400">
            <span className="text-zinc-200">Class Variance Authority:</span>{" "}
            achieve variants such as default, warning, and danger buttons with
            Tailwind CSS.
          </li>
        </ul>
      </div>
    </main>
  );
}
