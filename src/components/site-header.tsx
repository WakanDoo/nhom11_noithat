import Link from "next/link";
import { cormorant, roboto } from "@/lib/fonts";
import { CartBadgeLink } from "@/components/CartBadgeLink";

const leftNavItems = [
  { href: "/menu", label: "Menu" },
  { href: "#", label: "About" },
  { href: "/search", label: "Search" },
];

const rightNavItems = [
  { href: "/products", label: "Products" },
  { href: "/construction", label: "Construction" },
];

function MenuIcon() {
  return (
    <span className="relative h-3 w-4.75" aria-hidden="true">
      <span className="absolute left-0 top-0 h-px w-full bg-black" />
      <span className="absolute left-0 top-1.25 h-px w-full bg-black" />
      <span className="absolute left-0 top-2.5 h-px w-full bg-black" />
    </span>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="10.5" cy="10.5" r="5.75" />
      <path d="M15 15L20 20" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3.5 4.5H5.5L7.3 14H17.8L19.7 7.2H8.1" />
      <circle cx="10" cy="18.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="18.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg aria-hidden="true" className="h-5.25 w-5.25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="7.5" r="3.15" />
      <path d="M5.8 19.2C7.2 16.2 9.3 14.8 12 14.8C14.7 14.8 16.8 16.2 18.2 19.2" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-black/8 bg-white">
      <div className="mx-auto flex min-h-23 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:hidden lg:px-10">
        <Link
          href="/menu"
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
        >
          <MenuIcon />
        </Link>

        <Link
          href="/"
          className={`${cormorant.className} shrink-0 text-center text-[31px] leading-none tracking-[0.12em] text-[#1f1917] sm:text-[35px]`}
        >
          OWLHOME
        </Link>

        <div className="flex items-center gap-3 text-black">
          <Link href="/search" aria-label="Search"><SearchIcon /></Link>
          <Link href="/products" className={`${roboto.className} text-[10px] uppercase tracking-[0.22em] text-black/75`}>
            Products
          </Link>
        </div>
      </div>

      <div className="relative mx-auto hidden h-29.5 w-full max-w-7xl lg:block">
        <div className="absolute left-4.5 top-16.75 flex items-center gap-3.5 text-[#0a0a0a]">
          <Link href={leftNavItems[0].href} className="flex items-center gap-1">
            <MenuIcon />
            <span className={`${roboto.className} text-[20px] font-medium uppercase leading-none`}>{leftNavItems[0].label}</span>
          </Link>

          <Link href={leftNavItems[1].href} className={`${roboto.className} text-[20px] font-medium uppercase leading-none text-[#0a0a0a]`}>
            {leftNavItems[1].label}
          </Link>

          <Link href={leftNavItems[2].href} className={`${roboto.className} flex items-center gap-1.25 text-[20px] font-medium uppercase leading-none text-[#0a0a0a]`}>
            <SearchIcon />
            <span>{leftNavItems[2].label}</span>
          </Link>
        </div>

        <Link
          href="/"
          className={`${cormorant.className} absolute left-1/2 top-5.5 -translate-x-1/2 text-center text-[54px] leading-none tracking-[0.08em] text-[#17120f]`}
        >
          OWLHOME
        </Link>

        <div className="absolute right-4.5 top-8.75 flex items-start gap-3 text-black">
          <CartBadgeLink><CartIcon /></CartBadgeLink>
          <Link href="/login" aria-label="Account"><UserIcon /></Link>
        </div>

        <div className="absolute right-4.5 top-17.25 flex items-center gap-3.5">
          <Link href={rightNavItems[0].href} className={`${roboto.className} text-[20px] font-medium uppercase leading-none text-[#0a0a0a]`}>
            {rightNavItems[0].label}
          </Link>

          <Link href={rightNavItems[1].href} className={`${roboto.className} text-[20px] font-medium uppercase leading-none text-[#0a0a0a]`}>
            {rightNavItems[1].label}
          </Link>
        </div>
      </div>
    </header>
  );
}
