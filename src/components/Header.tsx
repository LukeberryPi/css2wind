"use client";

import { Coffee, House, Open, Script } from "@/icons";
import Tailwind from "@/icons/Tailwind";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const navigateToFaq = (e: any) => {
    e.preventDefault();
    const sure = confirm(
      "You will lose your current game if you go to FAQ. Are you sure?",
    );

    if (!sure) {
      return;
    }

    router.push("/faq");
  };

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-inherit p-6 text-zinc-200">
      <nav className="flex w-full items-center justify-between">
        <Link href="/" className="flex items-center gap-5">
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
          <span className="hidden text-2xl xs:block">css2wind</span>
        </Link>
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://tailwindcss.com/docs/padding"
            target="_blank"
            className="flex items-center gap-3 p-3 text-sky-300 ring-1 ring-sky-300 hover:opacity-80 active:ring"
          >
            <Tailwind />
            <span className="hidden lg:inline">Tailwind Docs</span>
            <Open className="hidden lg:block" />
          </a>
          <a
            href="https://www.buymeacoffee.com/lukeberrypi"
            target="_blank"
            className="flex items-center gap-3 p-3 text-purple-400 ring-1 ring-purple-400 hover:opacity-80 active:ring"
          >
            <Coffee />
            <span className="hidden lg:inline">Buy me a Coffee!</span>
            <Open className="hidden lg:block" />
          </a>
          {pathname === "/faq" && (
            <Link
              className="flex items-center gap-3 p-3 text-sky-300 ring-1 ring-sky-300 active:ring"
              href="/"
            >
              <House />
              <span className="hidden lg:inline">Play Now!</span>
            </Link>
          )}
          {pathname === "/" && (
            <a
              onClick={(e) => navigateToFaq(e)}
              className="flex items-center gap-3 p-3 text-zinc-200 ring-1 ring-zinc-200 hover:opacity-80 active:ring"
              href="/faq"
            >
              <Script className="text-zinc-200" />
              <span className="hidden lg:inline">FAQ</span>
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
