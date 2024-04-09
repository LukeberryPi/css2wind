"use client";

import { Heart, More, Open, Tailwind } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const safeNavigate = (e: any, href: string) => {
    e.preventDefault();
    const isHome = pathname === "/";
    let sure = false;

    if (isHome) {
      sure = confirm(
        `You will lose your current game if you go to ${href}. Are you sure?`,
      );

      if (!sure) {
        return;
      }

      router.push(href);
    } else {
      router.push(href);
    }
  };

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-inherit p-6 text-zinc-200">
      <nav className="flex w-full items-center justify-between">
        <Link href="/" className="flex items-center gap-5">
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
          <span className="hidden text-2xl xs:block">css2wind</span>
        </Link>
        <div className="flex items-center justify-center gap-10">
          <a
            className="cursor-pointer hover:opacity-80"
            onClick={(e) => safeNavigate(e, "/")}
          >
            Home
          </a>
          <a
            className="cursor-pointer hover:opacity-80"
            onClick={(e) => safeNavigate(e, "/tutorial")}
          >
            Tutorial
          </a>
          <a
            className="cursor-pointer hover:opacity-80"
            onClick={(e) => safeNavigate(e, "/resources")}
          >
            Resources
          </a>
          <a
            className="cursor-pointer hover:opacity-80"
            onClick={(e) => safeNavigate(e, "/faq")}
          >
            FAQ
          </a>
          <button>
            <More className="hover:opacity-80" />
          </button>
          {/* <a
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
            <Heart />
            <span className="hidden lg:inline">Buy me a Coffee!</span>
            <Open className="hidden lg:block" />
          </a> */}
        </div>
      </nav>
    </header>
  );
}
