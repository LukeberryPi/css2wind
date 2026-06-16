import { Play } from "@/components";
import { DEFAULT_GAME_MODE, gameRegistry } from "@/game";

export const metadata = {
  title: "css2wind | Home",
  description: "A minigame for learning Tailwind CSS.",
  applicationName: "css2wind",
  referrer: "origin-when-cross-origin",
  keywords: ["Tailwind", "CSS", "Bootstrap", "Style", "HTML"],
  authors: { name: "Luke Berry" },
  creator: "Luke Berry",
  publisher: "Luke Berry",
  openGraph: {
    type: "website",
    images: "https://www.css2wind.com/og-home.png",
    siteName: "css2wind",
    title: "css2wind | A minigame for learning Tailwind CSS",
    description: "A minigame for learning Tailwind CSS",
  },
  twitter: {
    card: "summary_large_image",
    title: "css2wind, a minigame for learning Tailwind CSS",
    description: "A minigame for learning Tailwind CSS.",
    images: { url: "https://www.css2wind.com/og-home.png" },
  },
  // verification: {
  //   google: "pWGXfs8mFFqr-ZqzvuVT82rztzmghIcc6gwy_qklleo",
  // },
};

export default async function Home() {
  return (
    <main className="container mx-auto flex flex-col justify-center text-center">
      <Play
        defaultMode={DEFAULT_GAME_MODE}
        dictionaries={{
          "tailwind-v3": gameRegistry["tailwind-v3"].dictionary,
          "tailwind-v4": gameRegistry["tailwind-v4"].dictionary,
        }}
      />
    </main>
  );
}
