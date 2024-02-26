import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { House, Info } from "@/icons";

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
        className={`${firaCode.className} flex min-h-screen items-center justify-center bg-black text-white`}
      >
        <nav className="fixed top-0 flex w-full items-center justify-between bg-inherit px-8 py-6 text-lg text-zinc-50">
          <Link href="/" className="flex items-center gap-4">
            <Image alt="A wind vane" src="/logo.svg" height={32} width={32} />
            <span className="text-2xl font-medium">css2wind</span>
          </Link>
          <div className="hidden items-center justify-center gap-10 md:flex">
            <a
              className="flex items-center gap-4 px-4 py-2"
              href="#how-to-play"
            >
              <Info className="fill-zinc-50" />
              how to play
            </a>
            <a
              className="flex items-center gap-4 px-4 py-2 outline outline-zinc-700"
              href="/faq"
            >
              <span>learn about tailwind</span>
            </a>
          </div>
        </nav>
        {children}
        <footer className="fixed bottom-0 flex w-full items-center justify-between bg-inherit px-8 py-6 text-lg">
          <a
            className="px-4 py-2 text-zinc-50 outline outline-zinc-700  hover:outline-zinc-50 "
            target="_blank"
            href="ttps://github.com/LukeberryPi/css2wind"
          >
            contribute on github!
          </a>
          <a
            className="px-4 py-2 text-zinc-50 outline outline-zinc-700  hover:outline-zinc-50 "
            target="_blank"
            href="https://twitter.com/LukeberryPi"
          >
            made by lukeberypi
          </a>
        </footer>
      </body>
    </html>
  );
}
