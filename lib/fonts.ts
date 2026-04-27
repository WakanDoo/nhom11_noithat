import { Cormorant_Garamond, Inter, Roboto } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-cormorant",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
