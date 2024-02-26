import "./globals.css";
import Link from "next/link";
import { Fira_Code } from "next/font/google";
import { Info } from "@/icons";

export const firaCode = Fira_Code({
  subsets: ["latin"],
});

export const metadata = {
  title: "css2wind",
  description: "Learn tailwind by playing!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="min-h-screen scroll-smooth subpixel-antialiased" lang="en">
      <body
        className={`${firaCode.className} flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-100`}
      >
        <nav className="fixed top-0 flex w-full items-center justify-between bg-inherit px-8 py-6 text-lg text-zinc-100">
          <Link href="/" className="flex items-center gap-4">
            {/* <Image alt="A wind vane" src="/logo.svg" height={32} width={32} /> */}
            <span className="text-2xl">css2wind</span>
          </Link>
          <div className="hidden items-center justify-center gap-10 md:flex">
            <a
              className="flex items-center gap-4 px-4 py-2 hover:outline hover:outline-zinc-100"
              href="#how-to-play"
            >
              <Info className="fill-zinc-100" />
              How to Play
            </a>
            <a
              className="flex items-center gap-4 px-4 py-2 hover:outline hover:outline-zinc-100"
              href="/faq"
            >
              <span>Doubts on Tailwind?</span>
            </a>
          </div>
        </nav>
        {children}
        <footer className="fixed bottom-0 flex w-full items-center justify-between bg-inherit px-8 py-6 text-lg">
          <a
            className="px-4 py-2 text-zinc-100 hover:outline  hover:outline-zinc-100 "
            target="_blank"
            href="ttps://github.com/LukeberryPi/css2wind"
          >
            Contribute on Github!
          </a>
          <a></a>
          <a
            className="px-4 py-2 text-zinc-100 hover:outline  hover:outline-zinc-100 "
            target="_blank"
            href="https://twitter.com/LukeberryPi"
          >
            Made by LukeberryPi
          </a>
        </footer>
      </body>
    </html>
  );
}
