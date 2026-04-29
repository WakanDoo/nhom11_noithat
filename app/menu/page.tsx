import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: "CONTACT", href: "/contact" },
  { label: "MY ACCOUNT", href: "/account" },
  { label: "PRODUCTS", href: "/products" },
  { label: "CONSTRUCTION", href: "/construction" },
  { label: "ABOUT", href: "/about" },
  { label: "3D MODELS", href: "/3d" },
  { label: "SHOPPING CART", href: "/cart" },
] as const;

const menuImages = [
  "/figma/menu/menu-col-2.png",
  "/figma/menu/menu-col-1-b335c3.png",
  "/figma/menu/menu-col-3-7ab2c1.png",
] as const;

export default function MenuPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto grid w-full max-w-[1280px] border-t border-black lg:min-h-[613px] lg:grid-cols-[404px_minmax(0,1fr)]">
        <nav className="flex flex-col gap-5 border-b border-black/15 px-4 py-10 lg:border-b-0 lg:py-14" aria-label="Menu page">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[24px] font-bold leading-[1.1672] text-[#0A0A0A] transition-colors hover:text-black/60 [font-family:var(--font-inter),_system-ui] sm:text-[27px] ${
                index === 2 || index === 6 ? "border-t border-black/70 pt-5" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="grid min-h-[720px] grid-cols-1 sm:min-h-[613px] sm:grid-cols-3">
          {menuImages.map((src, index) => (
            <div key={src} className="relative min-h-[240px] sm:min-h-0">
              <Image src={src} alt="" fill className="object-cover" priority={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
