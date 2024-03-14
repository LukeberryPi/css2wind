import { Tutorial, Play } from "@/components";

export const metadata = {
  title: "css2wind | Home",
  description: "A minigame for learning Tailwind CSS",
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
};

export default function Home() {
  return (
    <main className="container flex flex-col justify-center px-6 text-center">
      <Play />
      <Tutorial />
    </main>
  );
}
