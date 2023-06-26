import Link from "next/link";
import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { Login } from "@/icons";
import { House } from "@/icons/House";
import { Info } from "@/icons/Info";

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
    <html
      className="h-full w-full scroll-smooth pt-20 subpixel-antialiased"
      lang="en"
    >
      <body
        className={`bg-zinc-950 text-zinc-100 selection:bg-slate-50 selection:text-zinc-950 ${firaCode.className}`}
      >
        <nav className="fixed top-0 flex w-full select-none items-center justify-between border-b border-zinc-700 bg-inherit px-8 py-5 text-lg text-zinc-50">
          <Link
            href="/"
            className="flex items-center gap-4 transition-transform active:scale-95"
          >
            <Image
              alt="A wind vane"
              src="/wind-vane.png"
              height={40}
              width={40}
            />
            <span className={`text-2xl font-medium`}>css2wind</span>
          </Link>

          <ul className="flex items-center gap-10">
            <li className="border border-zinc-700 transition-all hover:border-zinc-200 active:scale-95">
              <Link
                className="flex items-center gap-4 px-4 py-2 transition-all"
                href="/"
              >
                <House size={24} className="fill-zinc-50" />
                Home
              </Link>
            </li>
            <li className="border border-berryBlue transition-all active:scale-95">
              <Link
                href="/play"
                className="flex items-center gap-4 px-4 py-2 text-berryBlue"
              >
                Play Now
              </Link>
            </li>
            <li className="border border-zinc-700 transition-all hover:border-zinc-200 active:scale-95">
              <Link
                className="flex items-center gap-4 px-4 py-2 transition-all"
                href="/help"
              >
                <Info size={24} className="fill-zinc-50" />
                Help
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-10">
            <li className="border border-zinc-700 transition-all hover:border-zinc-200 active:scale-95">
              <Link
                className="flex items-center gap-4 py-2 pl-4 pr-3 transition-all"
                href="/login"
              >
                Login
                <Login size={24} className="fill-zinc-50" />
              </Link>
            </li>
            <li className="group border border-berryBlue active:scale-95">
              <Link className="flex px-4 py-2 text-berryBlue" href="/Sign Up">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="bottom-0 flex w-full select-none items-center justify-between border-t border-zinc-700 bg-inherit px-8 py-5 text-lg">
          <ul className="flex items-center gap-10">
            <li className="border border-zinc-50 transition-all active:scale-95">
              <a
                href="https://github.com/LukeberryPi/css2wind"
                className="flex items-center px-4 py-2 transition-all"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li className="border border-twitterBlue text-twitterBlue transition-all active:scale-95">
              <a
                href="https://twitter.com/css2wind"
                className="flex items-center px-4 py-2 transition-all"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li className="bg-gradient-to-r from-instagramPink via-instagramOrange to-instagramPurple active:scale-95">
              <a
                href="https://github.com/LukeberryPi/css2wind"
                className="flex items-center bg-inherit px-4 py-2 transition-all"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
          <a
            className="border border-berryBlue px-4 py-2 text-berryBlue transition-all active:scale-95"
            target="_blank"
            href="https://twitter.com/LukeberryPi"
          >
            ©2023 LukeberryPi
          </a>
        </footer>
      </body>
    </html>
  );
}
