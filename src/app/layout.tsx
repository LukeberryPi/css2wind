import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { Login, House, Info, Trend } from "@/icons";
import { ClerkProvider, UserButton, currentUser } from "@clerk/nextjs";

export const firaCode = Fira_Code({
  subsets: ["latin"],
});

export const metadata = {
  title: "css2wind",
  description: "Learn tailwind by playing!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: feels wrong to do this at RootLayout and turn it async, is it the best way?
  const user = await currentUser();

  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#79CBE3",
          colorBackground: "#08080a",
          colorTextSecondary: "#a1a1aa",
          colorAlphaShade: "#fafafa",
          colorText: "#fafafa",
          colorTextOnPrimaryBackground: "#09090b",
          colorSuccess: "#4FBF85",
          colorDanger: "#E35454",
          colorWarning: "#F9F871",
          colorInputText: "#fafafa",
          colorInputBackground: "#09090b",
        },
        elements: {
          // trying to remove box shadow from clerk components
          rootBox: "bg-inherit",
          providerIcon__github: "bg-zinc-50 rounded-full",
        },
      }}
    >
      <html className="scroll-smooth pt-20 subpixel-antialiased" lang="en">
        <body
          className={`${firaCode.className} min-h-screen bg-black text-white selection:bg-berryBlue selection:text-black`}
        >
          <nav className="fixed top-0 flex w-full items-center justify-between border-b border-zinc-700 bg-inherit px-8 py-4 text-lg text-zinc-50">
            <Link
              href="/"
              className="flex flex-1 items-center gap-4 underline-offset-4 transition-transform  group-hover:underline"
            >
              <Image alt="A wind vane" src="/logo.svg" height={32} width={32} />
              <span className="text-2xl font-medium">css2wind</span>
            </Link>
            <ul className="hidden items-center justify-center flex-1 gap-10 underline-offset-4 group-hover:underline md:flex">
              <li className="border border-zinc-700 transition-all hover:border-zinc-50 ">
                <Link
                  className="flex items-center gap-4 px-4 py-2 underline-offset-4 transition-all group-hover:underline"
                  href="/"
                >
                  <House className="fill-zinc-50" />
                  Home
                </Link>
              </li>
              <li className="group transition-all ">
                <Link
                  className="flex items-center gap-4 border border-berryBlue bg-inherit px-4 py-2 font-medium text-berryBlue underline-offset-4 transition-all group-hover:underline"
                  href="/play"
                >
                  Play Now
                </Link>
              </li>
              <li className="border border-zinc-700 transition-all hover:border-zinc-50 ">
                <Link
                  className="flex items-center gap-4 px-4 py-2 underline-offset-4 transition-all group-hover:underline"
                  href="/help"
                >
                  <Info className="fill-zinc-50" />
                  Help
                </Link>
              </li>
            </ul>
            <ul className="hidden flex-1 justify-end items-center gap-10 underline-offset-4 group-hover:underline md:flex">
              {!user && (
                <>
                  <li className="border border-zinc-700 transition-all hover:border-zinc-50 ">
                    <Link
                      className="flex items-center gap-4 py-2 pl-4 pr-3 underline-offset-4 transition-all group-hover:underline"
                      href="/login"
                    >
                      Login
                      <Login className="fill-zinc-50" />
                    </Link>
                  </li>
                  <li className="group transition-all ">
                    <Link
                      className="flex border border-berryBlue bg-inherit px-4 py-2 font-medium text-berryBlue underline-offset-4 transition-all group-hover:underline"
                      href="/signup"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li className="active:scale-95">
                    <Link
                      className="flex items-center gap-4 border border-purplePlus bg-inherit px-4 py-2 font-medium text-purplePlus underline-offset-4 hover:underline"
                      href="/storm"
                    >
                      Step Up
                      <Trend className="fill-purplePlus" />
                    </Link>
                  </li>
                  <li className="active:scale-95">
                    <UserButton afterSignOutUrl="/" />
                  </li>
                </>
              )}
            </ul>
          </nav>
          {children}
          <footer className="bottom-0 flex w-full items-center justify-between border-t border-zinc-700 bg-inherit px-8 py-5 text-lg">
            <ul className="hidden items-center gap-10 underline-offset-4 group-hover:underline md:flex">
              <li className="group border border-zinc-50 transition-all ">
                <a
                  href="https://github.com/LukeberryPi/css2wind"
                  className="flex items-center px-4 py-2 decoration-zinc-50 underline-offset-4 transition-all group-hover:underline"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li className="group border border-twitterBlue text-twitterBlue transition-all ">
                <a
                  href="https://twitter.com/css2wind"
                  className="flex items-center px-4 py-2 decoration-twitterBlue underline-offset-4 transition-all group-hover:underline"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
              <li className="group bg-gradient-to-r from-instagramPink via-instagramOrange to-instagramPurple p-px ">
                <div className="h-full w-full bg-black">
                  <a
                    href="https://github.com/LukeberryPi/css2wind"
                    className="flex items-center bg-inherit bg-gradient-to-r from-instagramPink via-instagramOrange to-instagramPurple bg-clip-text px-4 py-2 text-transparent decoration-instagramPink underline-offset-4 transition-all group-hover:underline"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
            <a
              className="border border-zinc-700 px-4 py-2 text-zinc-50 transition-all hover:border-zinc-50 "
              target="_blank"
              href="https://twitter.com/LukeberryPi"
            >
              ©2023 LukeberryPi
            </a>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
