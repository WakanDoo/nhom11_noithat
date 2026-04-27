import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Roboto } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-roboto"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-brand"
});

export const metadata: Metadata = {
  title: "OWLHOME 3D Interior Shop",
  description: "Explore an interactive 3D interior and shop curated furniture."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${roboto.variable} ${cormorant.variable} font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
