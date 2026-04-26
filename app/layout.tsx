import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "OWLHOME - Contact Us",
  description:
    "Crafting timeless interiors since 2010. Contact OWLHOME for your perfect space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}

