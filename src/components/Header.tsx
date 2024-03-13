"use client";

import { Coffee, House, Script } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 flex w-full items-center justify-between bg-inherit px-8 py-6 text-lg text-zinc-200">
      <Link href="/" className="flex items-center gap-5">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        <span className="hidden text-2xl sm:block">css2wind</span>
      </Link>
      <div className="hidden items-center justify-center gap-10 md:flex">
        <a
          href="https://www.buymeacoffee.com/lukeberrypi"
          target="_blank"
          className="flex items-center gap-4 px-4 py-2 text-purple-400 ring-1 ring-purple-400 active:ring"
        >
          <Coffee />
          <span>Buy me a Coffee!</span>
        </a>
        {pathname === "/faq" && (
          <Link
            className="flex items-center gap-4 px-4 py-2 text-sky-300 ring-1 ring-sky-300 active:ring"
            href="/"
          >
            <House />
            <span>Play Now!</span>
          </Link>
        )}
        {pathname === "/" && (
          <Link
            className="flex items-center gap-4 px-4 py-2 text-zinc-200 ring-1 ring-zinc-200 hover:bg-zinc-800 active:ring"
            href="/faq"
          >
            <Script className="text-zinc-200" />
            <span>Learn more about Tailwind CSS</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
