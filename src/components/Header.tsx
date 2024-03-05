"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 flex w-full items-center justify-between bg-inherit px-8 py-6 text-lg text-zinc-200">
      <Link href="/" className="flex items-center gap-4">
        <span className="text-2xl">css2wind</span>
      </Link>
      <div className="hidden items-center justify-center gap-10 md:flex">
        {pathname === "/faq" && (
          <Link
            className="text-berryBlue ring-berryBlue px-4 py-2 ring-1 active:ring"
            href="/"
          >
            Play Now!
          </Link>
        )}
        {pathname === "/" && (
          <Link
            className="flex items-center gap-4 px-4 py-2 hover:bg-zinc-800"
            href="/faq"
          >
            Learn more about TailwindCSS
          </Link>
        )}
      </div>
    </nav>
  );
}
