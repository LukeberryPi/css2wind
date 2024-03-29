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

export default function Faq() {
  return (
    <main className="container mx-auto my-36 flex w-full flex-col gap-20 px-6">
      <h2 className="text-center text-4xl text-zinc-200">
        Frequently Asked Questions
      </h2>
      <ul className="mx-auto max-w-[800px] space-y-20 text-lg sm:text-xl">
        <li id="what" className="flex flex-col gap-5 px-2 md:px-0">
          <h3 className="text-zinc-200">What is Tailwind CSS?</h3>
          <p className="text-zinc-400">
            Tailwind CSS is a different way of writing CSS. It provides small
            pieces of CSS, called utilities, which represent a single line of
            CSS. It encourages colocation (keeping markdown and styles in the
            same place) for easier maintenance. This means you don&apos;t need
            to worry about naming your classes or styles affecting unwanted
            elements.
          </p>
          <div className="flex flex-col gap-2 text-left text-zinc-200 sm:flex-row">
            <span>Read More: </span>
            <a
              className="flex items-start gap-2 text-sky-300 underline hover:opacity-80 sm:gap-2"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              Utility-first Fundamentals
            </a>
          </div>
        </li>
        <li id="inline" className="flex flex-col gap-5 px-2 md:px-0">
          <h3 className="text-zinc-200">Isn&apos;t that just inline styles?</h3>
          <p className="text-zinc-400">
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
          <div className="flex flex-col gap-2 text-zinc-200 sm:flex-row">
            <span>Read More: </span>
            <a
              className="flex items-center gap-2 text-sky-300 underline hover:opacity-80"
              target="_blank"
              href="https://frontstuff.io/no-utility-classes-arent-the-same-as-inline-styles"
            >
              <span>Utility classes vs inline styles</span>
            </a>
          </div>
        </li>
        <li id="bootstrap" className="flex flex-col gap-5 px-2 md:px-0">
          <h3 className="text-zinc-200">Why not use Bootstrap then?</h3>
          <p className="text-zinc-400">
            Bootstrap is a{" "}
            <span className="text-zinc-200">component library:</span> it decides
            how a button looks and customization is secondary. Tailwind CSS
            isn&apos;t, since it provides small pieces of CSS, called{" "}
            <span className="text-zinc-200">utilities</span>, so you can style a
            button from scratch — and make it look however you please.
          </p>
          <div className="flex flex-col gap-2 text-zinc-200 sm:flex-row">
            <span>Watch this: </span>
            <a
              className="flex items-center gap-2 text-sky-300 underline hover:opacity-80"
              target="_blank"
              href="https://youtu.be/CQuTF-bkOgc?si=ENc7vupHcaGrXddW"
            >
              <span>Comparing Modern CSS Solutions</span>
            </a>
          </div>
        </li>
        <li id="html" className="flex flex-col gap-3 px-2 md:px-0">
          <h3 className="text-zinc-200">Doesn&apos;t the HTML get ugly?</h3>
          <p className="text-zinc-400">
            Yes, it does! This is a trade-off that Tailwind CSS embraces: it
            sacrifices pretty HTML for{" "}
            <span className="text-zinc-200">styling consistency</span> and{" "}
            <span className="text-zinc-200"> ease of maintenance </span>that
            comes with colocation — having markdown and styles at the same
            place.
          </p>
          <div className="flex flex-col items-start gap-2 text-zinc-200 sm:flex-row">
            <span>Read More: </span>
            <a
              className="flex items-center gap-2 text-sky-300 underline hover:opacity-80"
              target="_blank"
              href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
            >
              <span>CSS and &quot;Separation of Concerns&quot;</span>
            </a>
          </div>
        </li>
      </ul>
    </main>
  );
}
