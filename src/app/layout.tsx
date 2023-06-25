import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { Fira_Code } from "next/font/google";

export const pixelBerry = localFont({
  src: "../../public/pixel-berry.ttf",
  display: "swap",
});

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
    <html className="scroll-smooth" lang="en">
      <body className={`bg-zinc-950 text-zinc-100 ${firaCode.className}`}>
        <nav className="text-zinc-50 items-center justify-between flex fixed top-0 text-lg bg-zinc-950 w-full px-8 py-5 border-b border-zinc-800">
          <Link
            href="/"
            className="transition-transform active:scale-95 flex gap-4 items-center"
          >
            <Image alt="heart" src="/wind-vane.png" height={32} width={32} />
            <h1 className={` font-bold text-2xl`}>css2wind</h1>
          </Link>
          <ul className="flex items-center justify-between gap-10">
            <li>
              <Link
                className="hover:border-zinc-200 border border-zinc-700 transition-all py-3 px-6"
                href="#"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-zinc-200 border border-zinc-700 transition-all py-3 px-6"
                href="#"
              >
                About
              </Link>
            </li>
            <li className="transition-all active:translate-y-1">
              <Link
                className="border hover:bg-berryBlue border-berryBlue hover:text-black text-berryBlue py-3 px-6"
                href="#"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="border-t text-lg border-zinc-700 flex items-center bg-zinc-950 w-full bottom-0 py-5 px-8 justify-between">
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
