import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { Login } from "@/icons";

export const firaCode = Fira_Code({
  subsets: ["latin"],
});

export const metadata = {
  title: "css2wind ̖́-",
  description: "Learn tailwind by playing!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full w-full scroll-smooth pt-20" lang="en">
      <body className={`bg-zinc-950 text-zinc-100 ${firaCode.className}`}>
        <nav className="fixed top-0 flex w-full items-center justify-between border-b border-zinc-700 bg-inherit px-8 py-5 text-lg text-zinc-50">
          <Link
            href="/"
            className="flex items-center gap-4 transition-transform active:scale-95"
          >
            <Image alt="heart" src="/wind-vane.png" height={40} width={40} />
            <span className={`text-2xl font-bold`}>css2wind</span>
          </Link>

          <ul className="flex items-center gap-10">
            <li className="border border-zinc-700 transition-all hover:border-zinc-200">
              <Link
                className="flex items-center px-4 py-2 transition-all"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="border border-berryBlue transition-all">
              <Link
                href="/play"
                className="flex items-center px-4 py-2 text-berryBlue"
              >
                Play
              </Link>
            </li>
            <li className="border border-zinc-700 transition-all hover:border-zinc-200">
              <Link
                className="flex items-center px-4 py-2 transition-all"
                href="/help"
              >
                Help
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-10">
            <li className="border border-zinc-700 transition-all hover:border-zinc-200">
              <Link
                className="flex items-center gap-4 py-2 pl-4 pr-3 transition-all"
                href="/login"
              >
                Login
                <Login size={24} className="fill-zinc-50" />
              </Link>
            </li>
            <li className="group border border-berryBlue">
              <Link className="flex px-4 py-2 text-berryBlue" href="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="bottom-0 flex w-full items-center justify-between border-t border-zinc-700 bg-inherit px-8 py-5 text-lg">
          <ul className="flex items-center gap-8">
            <li className="border border-zinc-700 transition-all hover:border-zinc-200">
              <a
                href="https://github.com/LukeberryPi/css2wind"
                className="flex items-center px-4 py-2 transition-all"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            ▪
            <li className="border border-zinc-700 transition-all hover:border-zinc-200">
              <a
                href="https://twitter.com/css2wind"
                className="flex items-center px-4 py-2 transition-all"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            ▪
            <li className="border border-zinc-700 transition-all hover:border-zinc-200">
              <a
                href="https://github.com/LukeberryPi/css2wind"
                className="flex items-center px-4 py-2 transition-all"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
          <p>
            ©2023{" "}
            <a className="" href="https://twitter.com/LukeberryPi">
              LukeberryPi
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
