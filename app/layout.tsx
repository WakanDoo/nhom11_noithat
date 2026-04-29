import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { cormorant, inter, roboto } from "@/lib/fonts";
import "./globals.css";

const brandSans = Manrope({
  variable: "--font-brand-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OWLHOME",
  description: "Furniture showroom experience built with Next.js",
  icons: {
    icon: "/owl.png",
    shortcut: "/owl.png",
    apple: "/owl.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${brandSans.variable} ${cormorant.variable} ${inter.variable} ${roboto.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
