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
    <html className="scroll-smooth pt-20 subpixel-antialiased" lang="en">
      <body
        className={`${firaCode.className} min-h-screen bg-black text-white`}
      >
        <nav className="fixed top-0 flex w-full items-center justify-between px-8 py-6 text-lg text-zinc-50">
          <Link
            href="/"
            className="flex items-center gap-4 underline-offset-4 transition-transform group-hover:underline"
          >
            <Image alt="A wind vane" src="/logo.svg" height={32} width={32} />
            <span className="text-2xl font-medium">css2wind</span>
          </Link>
          <ul className="hidden items-center justify-center gap-10 underline-offset-4 group-hover:underline md:flex">
            <li className="border border-zinc-700 transition-all hover:border-zinc-50 ">
              <Link
                className="flex items-center gap-4 px-4 py-2 underline-offset-4 transition-all group-hover:underline"
                href="/"
              >
                <House className="fill-zinc-50" />
                how to play
              </Link>
            </li>
            <li className="border border-zinc-700 transition-all hover:border-zinc-50 ">
              <Link
                className="flex items-center gap-4 px-4 py-2 underline-offset-4 transition-all group-hover:underline"
                href="/help"
              >
                <Info className="fill-zinc-50" />
                learn about tailwind
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="fixed bottom-0 flex w-full items-center justify-between px-8 py-6 text-lg">
          <ul className="hidden items-center gap-10 underline-offset-4 group-hover:underline md:flex">
            <li className="group border border-zinc-50 transition-all ">
              <a
                href="https://github.com/LukeberryPi/css2wind"
                className="flex items-center px-4 py-2 decoration-zinc-50 underline-offset-4 transition-all group-hover:underline"
                target="_blank"
              >
                contribute on github!
              </a>
            </li>
          </ul>
          <a
            className="border border-zinc-700 px-4 py-2 text-zinc-50 transition-all hover:border-zinc-50 "
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
