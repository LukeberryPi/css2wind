import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
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
    <html className="h-full w-full pt-20 scroll-smooth" lang="en">
      <body className={`bg-zinc-950 text-zinc-100 ${firaCode.className}`}>
        <nav className="text-zinc-50 items-center justify-between flex fixed top-0 text-lg w-full px-8 bg-inherit py-5 border-b border-zinc-700">
          <Link
            href="/"
            className="transition-transform active:scale-95 flex gap-4 items-center"
          >
            <Image alt="heart" src="/wind-vane.png" height={40} width={40} />
            <h1 className={`font-bold text-2xl`}>css2wind</h1>
          </Link>

          <ul className="flex items-center gap-10">
            <li className="transition-all hover:border-zinc-200 border border-zinc-700">
              <Link
                className="flex items-center transition-all py-2 px-4"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="transition-all border border-berryBlue">
              <Link
                href="/play"
                className="text-berryBlue flex items-center py-2 px-4"
              >
                Play
              </Link>
            </li>
            <li className="transition-all hover:border-zinc-200 border border-zinc-700">
              <Link
                className="flex items-center transition-all py-2 px-4"
                href="/help"
              >
                Help
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-10">
            <li className="transition-all hover:border-zinc-200 border border-zinc-700">
              <Link
                className="flex items-center gap-4 transition-all py-2 pl-4 pr-3"
                href="/login"
              >
                Login
                <Login size={24} className="fill-zinc-50" />
              </Link>
            </li>
            <li className="group border border-berryBlue">
              <Link className="flex text-berryBlue py-2 px-4" href="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="border-t text-lg border-zinc-700 flex items-center bg-inherit w-full bottom-0 py-5 px-8 justify-between">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="https://github.com/LukeberryPi/css2wind"
                target="_blank"
                className="underline decoration-berryBlue hover:text-zinc-300 decoration transition-all hover:decoration-2 underline-offset-4"
              >
                GitHub
              </Link>
            </li>
            ▪
            <li>
              <Link
                href="https://twitter.com/css2wind"
                target="_blank"
                className="underline decoration-berryBlue hover:text-zinc-300 decoration transition-all hover:decoration-2 underline-offset-4"
              >
                Twitter
              </Link>
            </li>
            ▪
            <li>
              <Link
                href="https://github.com/LukeberryPi/css2wind"
                target="_blank"
                className="underline decoration-berryBlue hover:text-zinc-300 decoration transition-all hover:decoration-2 underline-offset-4"
              >
                Instagram
              </Link>
            </li>
          </ul>
          <p>
            © 2023{" "}
            <a
              className="underline underline-offset-4 hover:text-zinc-300 decoration transition-all hover:decoration-2 decoration-berryBlue"
              href="https://twitter.com/LukeberryPi"
            >
              LukeberryPi
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
