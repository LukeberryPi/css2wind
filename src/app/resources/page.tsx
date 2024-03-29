import { Open } from "@/icons";

export const metadata = {
  title: "css2wind | Frequently Asked Questions",
  description: "Learn more about Tailwind CSS.",
  applicationName: "css2wind",
  referrer: "origin-when-cross-origin",
  keywords: ["Tailwind", "CSS", "Bootstrap", "Style", "HTML"],
  authors: { name: "Luke Berry" },
  creator: "Luke Berry",
  publisher: "Luke Berry",
  openGraph: {
    type: "website",
    images: "https://www.css2wind.com/og-faq.png",
    siteName: "css2wind",
    title: "css2wind | Frequently Asked Questions",
    description: "Learn more about Tailwind CSS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "css2wind, a minigame for learning Tailwind CSS",
    description:
      "What is Tailwind? Isn't that just inline styles? Isn't that just Bootstrap? Doesn't the HTMl get ugly?",
    images: { url: "https://www.css2wind.com/og-faq.png" },
  },
  verification: {
    google: "pWGXfs8mFFqr-ZqzvuVT82rztzmghIcc6gwy_qklleo",
  },
};

export default function Resources() {
  return (
    <main className="container mx-auto my-36 flex w-full flex-col gap-20 px-6">
      <h2 className="text-center text-5xl text-zinc-200 md:text-6xl">
        Resources
      </h2>
      <ul className="mx-auto flex max-w-[800px] flex-col gap-20">
        <li className="flex flex-col gap-5 md:px-0 md:text-left">
          <h3 className="text-2xl text-zinc-200 sm:text-4xl">
            Tailwind CSS Intellisense
          </h3>
          <p className="text-lg text-zinc-400 sm:text-xl">
            This VS Code extension enables auto-completion while you write
            Tailwind CSS classes! This boosts productivity and can even teach
            you new utilities! It is also useful for finding out what CSS a
            utility represents by simply hovering it.
          </p>
          <div className="flex flex-col gap-2 text-left text-zinc-200 sm:flex-row sm:text-lg md:text-xl">
            <span>Read More: </span>
            <a
              className="flex items-start gap-2 text-sky-300 underline hover:opacity-80 sm:gap-2"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              <span>Tailwind Intellisense Extension</span>
              <Open className="shrink-0 self-center" />
            </a>
          </div>
        </li>
        <li className="flex flex-col gap-5 md:px-0 md:text-left">
          <h3 className="text-2xl text-zinc-200 sm:text-4xl">
            prettier-plugin-tailwindcss
          </h3>
          <p className="text-lg text-zinc-400 sm:text-xl">
            This is an npm package with one goal: automatically sorting your
            Tailwind CSS utilities. Why does this matter? It assures that there
            is no unpredictable behavior with utilities applying the same
            styles. Keeping the order consistent also improves refactoring and
            readability.
          </p>
          <div className="flex flex-col gap-2 text-zinc-200 sm:flex-row sm:text-lg md:text-xl">
            <span className="shrink-0">Read More: </span>
            <a
              className="flex items-center gap-2 text-sky-300 underline hover:opacity-80"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              prettier-plugin-tailwindcss
              <Open className="shrink-0 self-center" />
            </a>
          </div>
        </li>
        <li className="flex flex-col gap-5 md:px-0 md:text-left">
          <h3 className="text-2xl text-zinc-200 sm:text-4xl">
            Tailwind Typography
          </h3>
          <p className="text-lg text-zinc-400 sm:text-xl">
            This depednency is pure magic. It turns unstyled markdown into
            well-structured, consistently styled text. Forget setting
            font-weights for your titles and paddings for your paragraphs:
            Tailwind Typography has got you covered.
          </p>
          <div className="flex flex-col gap-2 text-zinc-200 sm:flex-row sm:text-lg md:text-xl">
            <span>Read more: </span>
            <a
              className="flex items-center gap-2 text-sky-300 underline hover:opacity-80"
              target="_blank"
              href="https://youtu.be/CQuTF-bkOgc?si=ENc7vupHcaGrXddW"
            >
              <span>Tailwind Typography</span>
              <Open className="shrink-0 self-center" />
            </a>
          </div>
        </li>
      </ul>
      <div className="flex flex-col gap-4">
        <h4 className="text-lg md:text-2xl">Take it to the next level:</h4>
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
