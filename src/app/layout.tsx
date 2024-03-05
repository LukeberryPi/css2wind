import "./globals.css";
import Link from "next/link";
import { Fira_Code } from "next/font/google";
import { Footer } from "../components";

const firaCode = Fira_Code({
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
  return (
    <html className="min-h-screen scroll-smooth subpixel-antialiased" lang="en">
      <body
        className={`${firaCode.className} flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-200`}
      >
        <nav className="fixed top-0 flex w-full items-center justify-between bg-inherit px-8 py-6 text-lg text-zinc-200">
          <Link href="/" className="flex items-center gap-4">
            <span className="text-2xl">css2wind</span>
          </Link>
          <div className="hidden items-center justify-center gap-10 md:flex">
            <a
              className="flex items-center gap-4 px-4 py-2 hover:outline hover:outline-zinc-100"
              href="/faq"
            >
              Learn more about TailwindCSS
            </a>
          </div>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
