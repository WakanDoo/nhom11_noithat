import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { basePath } from "@/lib/asset";
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
    icon: `${basePath}/ICON.ico`,
    shortcut: `${basePath}/ICON.ico`,
    apple: `${basePath}/ICON.ico`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${brandSans.variable} ${cormorant.variable} ${inter.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
