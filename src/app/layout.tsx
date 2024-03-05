import "./globals.css";
import { Fira_Code } from "next/font/google";
import { Footer, Header } from "../components";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
