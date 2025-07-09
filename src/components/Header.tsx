"use client";

import { Close, More, Open } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const safeNavigate = (e: any, href: string) => {
    e.preventDefault();
    const isHome = pathname === "/";
    let sure = false;

    if (isHome && href === "/") {
      setMobileNavOpen(false);
      return;
    }

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

    setMobileNavOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-inherit p-6 text-zinc-200">
        <nav className="flex w-full items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <span className="block text-2xl md:hidden lg:block">css2wind</span>
          </Link>
          <div className="hidden items-center justify-center gap-8 md:flex">
            <a
              className="cursor-pointer p-2 hover:opacity-80"
              onClick={(e) => safeNavigate(e, "/")}
            >
              Play
            </a>
            <a
              className="cursor-pointer p-2 hover:opacity-80"
              onClick={(e) => safeNavigate(e, "/tutorial")}
            >
              Tutorial
            </a>
            <a
              className="cursor-pointer p-2 hover:opacity-80"
              onClick={(e) => safeNavigate(e, "/resources")}
            >
              Resources
            </a>
            <a
              className="cursor-pointer p-2 hover:opacity-80"
              onClick={(e) => safeNavigate(e, "/faq")}
            >
              FAQ
            </a>
            <a
              className="flex cursor-pointer items-center gap-2 p-2 hover:opacity-80"
              href="https://tailwindcss.com/docs/padding"
              target="_blank"
            >
              Docs
              <Open className="size-5" />
            </a>
          </div>
          <button
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="flex hover:opacity-80 md:hidden"
          >
            {mobileNavOpen ? (
              <Close className="size-8 fill-zinc-200" />
            ) : (
              <More />
            )}
          </button>
        </nav>
        {mobileNavOpen && (
          <div className="absolute top-20 z-10 flex h-screen w-screen flex-col gap-8 bg-inherit py-8 pl-0 pr-6 text-lg">
            <div className="flex flex-col justify-between">
              <ul className="flex flex-col gap-6">
                <li onClick={(e) => safeNavigate(e, "/")}>
                  <a>Play</a>
                </li>
                <li onClick={(e) => safeNavigate(e, "/tutorial")}>
                  <a>Tutorial</a>
                </li>
                <li onClick={(e) => safeNavigate(e, "/resources")}>
                  <a>Resources</a>
                </li>
                <li onClick={(e) => safeNavigate(e, "/faq")}>
                  <a>FAQ</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://tailwindcss.com/docs/padding"
                    className="flex items-center gap-3"
                  >
                    Docs <Open className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://buymeacoffee.com/lukeberrypi"
                    className="flex items-center gap-3"
                  >
                    Donate <Open className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/LukeberryPi/css2wind"
                    className="flex items-center gap-3"
                  >
                    Github <Open className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/LukeberryPi"
                    className="flex items-center gap-3"
                  >
                    LukeberryPi <Open className="size-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
