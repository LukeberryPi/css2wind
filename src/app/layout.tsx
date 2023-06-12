import Image from "next/image";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

export const metadata = {
  title: "css2wind",
  description: "Learn tailwind in a relaxed way!",
};

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`bg-zinc-950 text-zinc-100 ${dmSans.className}`}>
        <nav className="text-white items-center justify-between flex fixed top-0 text-lg bg-zinc-950 w-full px-8 py-5 border-b border-zinc-900">
          <Link
            href="/"
            className="transition-all active:translate-y-1 flex gap-4 items-center"
          >
            <Image src="/logo.png" alt="logo" width={26} height={26} />
          </Link>
          <ul className="flex items-center justify-between gap-10">
            <li>
              <Link
                className="hover:border-zinc-200 border border-zinc-900 transition-all py-2 px-5"
                href="#"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-zinc-200 border border-zinc-900 transition-all py-2 px-5"
                href="#"
              >
                About
              </Link>
            </li>
            <li className="transition-all active:translate-y-1">
              <Link
                className="border hover:bg-berryBlue border-berryBlue hover:text-black text-berryBlue py-2 px-4"
                href="#"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="border-t text-lg border-zinc-900 flex items-center bg-zinc-950 w-full bottom-0 py-5 px-8 justify-between">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="https://github.com/LukeberryPi/css2wind"
                target="_blank"
                className="underline decoration-berryBlue underline-offset-4"
              >
                GitHub
              </Link>
            </li>
            ▪
            <li>
              <Link
                href="https://github.com/LukeberryPi/css2wind"
                target="_blank"
                className="underline decoration-berryBlue underline-offset-4"
              >
                Twitter
              </Link>
            </li>
            ▪
            <li>
              <Link
                href="https://github.com/LukeberryPi/css2wind"
                target="_blank"
                className="underline decoration-berryBlue underline-offset-4"
              >
                Instagram
              </Link>
            </li>
          </ul>
          <p>
            © 2023{" "}
            <a
              className="underline underline-offset-4 decoration-berryBlue"
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
