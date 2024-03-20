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
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-inherit px-6 py-6 text-lg text-zinc-200 md:px-8">
      <nav className="flex w-full items-center justify-between">
        <Link href="/" className="flex items-center gap-5">
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
          <span className="hidden text-2xl tiny:block">css2wind</span>
        </Link>
        <div className="flex items-center justify-center gap-6 md:gap-10">
          <a
            href="https://tailwind.com/docs/padding"
            target="_blank"
            className="flex items-center gap-4 px-3 py-2 text-sky-300 ring-1 ring-sky-300 hover:bg-zinc-800 active:ring md:px-4"
          >
            <Tailwind />
            <span className="hidden lg:inline">Tailwind Docs</span>
            <Open className="hidden lg:block" />
          </a>
          <a
            href="https://www.buymeacoffee.com/lukeberrypi"
            target="_blank"
            className="flex items-center gap-4 px-3 py-2 text-purple-400 ring-1 ring-purple-400 hover:bg-zinc-800 active:ring md:px-4"
          >
            <Coffee />
            <span className="hidden lg:inline">Buy me a Coffee!</span>
            <Open className="hidden lg:block" />
          </a>
          {pathname === "/faq" && (
            <Link
              className="flex items-center gap-4 px-3 py-2 text-sky-300 ring-1 ring-sky-300 active:ring md:px-4"
              href="/"
            >
              <House />
              <span className="hidden lg:inline">Play Now!</span>
            </Link>
          )}
          {pathname === "/" && (
            <a
              onClick={(e) => navigateToFaq(e)}
              className="flex items-center gap-4 px-3 py-2 text-zinc-200 ring-1 ring-zinc-200 hover:bg-zinc-800 active:ring md:px-4"
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
