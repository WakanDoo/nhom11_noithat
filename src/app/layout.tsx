import type { Metadata } from "next";
import "./globals.css";
import { cormorant, inter, roboto } from "@/src/lib/fonts";

export const metadata: Metadata = {
  title: "Owlhome",
  description: "Premium furniture collections by Owlhome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
