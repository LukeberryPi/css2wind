import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const retroGaming = localFont({
  src: "../../public/retro-gaming.woff2",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
