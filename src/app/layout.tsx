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
    <html lang="en">
      <body className={`bg-zinc-950 text-zinc-100 ${dmSans.className}`}>
        <nav className="text-white fixed top-0 text-lg bg-zinc-950 w-full px-6 py-4 border-b border-zinc-800">
          <ul className="flex w-full items-center justify-between">
            <li className="transition-all active:translate-y-1">
              <Link href="/" className="flex gap-4 items-center">
                <h1 className="text-2xl font-bold">css2wind</h1>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="fixed border-t border-zinc-800 flex items-center bg-zinc-950 w-full bottom-0 py-5 justify-center">
          <p>© 2023 LukeberryPi</p>
        </footer>
      </body>
    </html>
  );
}
