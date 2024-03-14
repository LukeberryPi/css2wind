"use client";

import { Coffee, House, Script } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 flex w-full items-center justify-between bg-inherit px-6 py-6 text-lg text-zinc-200 md:px-8">
      <Link href="/" className="flex items-center gap-5">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        <span className="hidden text-2xl tiny:block">css2wind</span>
      </Link>
      <div className="flex items-center justify-center gap-6 md:gap-10">
        <a
          href="https://www.buymeacoffee.com/lukeberrypi"
          target="_blank"
          className="flex items-center gap-4 px-3 py-2 text-purple-400 ring-1 ring-purple-400 active:ring md:px-4"
        >
          <Coffee />
          <span className="hidden md:inline">Buy me a Coffee!</span>
        </a>
        {pathname === "/faq" && (
          <Link
            className="flex items-center gap-4 px-3 py-2 text-sky-300 ring-1 ring-sky-300 active:ring md:px-4"
            href="/"
          >
            <House />
            <span className="hidden md:inline">Play Now!</span>
          </Link>
        )}
        {pathname === "/" && (
          <Link
            className="flex items-center gap-4 px-3 py-2 text-zinc-200 ring-1 ring-zinc-200 hover:bg-zinc-800 active:ring md:px-4"
            href="/faq"
          >
            <Script className="text-zinc-200" />
            <span className="hidden md:inline">
              Learn more{" "}
              <span className="hidden lg:inline">about Tailwind CSS</span>
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
