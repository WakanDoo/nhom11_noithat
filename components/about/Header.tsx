"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { CartBadgeLink } from "@/components/CartBadgeLink";
import { UserNavLink } from "@/components/UserNavLink";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-black/10">
      <div className="relative w-full max-w-[1280px] mx-auto h-[118px] flex items-end pb-[18px] px-4 md:px-6">

        {/* Left nav */}
        <nav className="flex items-center gap-5 text-[20px] font-medium tracking-[0.08em] text-[#0A0A0A]">
          <Link href="/menu" className="flex items-center gap-1.5 hover:opacity-60">
            <Menu className="h-[18px] w-[18px]" />
            MENU
          </Link>
          <Link href="/about" className="hover:opacity-60">ABOUT</Link>
          <Link href="/search" className="flex items-center gap-1.5 hover:opacity-60">
            <Search className="h-[18px] w-[18px]" />
            SEARCH
          </Link>
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 bottom-[22px] text-[#0A0A0A] font-serif font-medium tracking-[0.08em] text-[54px] leading-none whitespace-nowrap"
        >
          OWLHOME
        </Link>

        {/* Right nav */}
        <nav className="ml-auto flex items-center gap-5 text-[20px] font-medium tracking-[0.08em] text-[#0A0A0A]">
          <Link href="/products" className="hidden md:inline hover:opacity-60">PRODUCTS</Link>
          <Link href="/construction" className="hidden md:inline hover:opacity-60">CONSTRUCTION</Link>
          <CartBadgeLink>
            <ShoppingCart className="h-[22px] w-[22px]" />
          </CartBadgeLink>
          <UserNavLink iconClassName="h-[22px] w-[22px]" />
        </nav>
      </div>
    </header>
  );
}
