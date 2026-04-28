"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { CartBadgeLink } from "@/components/CartBadgeLink";

export function Header() {
  return (
    <div className="w-full flex flex-col bg-white">
      <header className="w-full min-h-[88px] grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-6 px-4 md:px-6 lg:px-10 py-4 lg:pb-2 border-b border-black/10">
        {/* Left Nav */}
        <nav className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 flex-wrap order-2 lg:order-1 text-[11px] uppercase tracking-[0.12em]">
          <Link href="/menu" className="inline-flex items-center gap-1.5 text-black hover:opacity-60">
            <Menu className="h-3.5 w-3.5" />
            MENU
          </Link>
          <Link href="/search" className="inline-flex items-center gap-1.5 text-black hover:opacity-60">
            <Search className="h-3.5 w-3.5" />
            SEARCH
          </Link>
        </nav>

        {/* Logo */}
        <div className="text-center order-1 lg:order-2">
          <Link href="/" className="font-serif text-[clamp(36px,5vw,56px)] leading-none tracking-[0.15em] text-black">
            OWLHOME
          </Link>
        </div>

        {/* Right Nav */}
        <nav className="flex items-center justify-center lg:justify-end gap-4 md:gap-6 flex-wrap order-3 text-[11px] uppercase tracking-[0.12em]">
          <Link href="/products" className="hidden md:inline text-black hover:opacity-60">PRODUCTS</Link>
          <Link href="/construction" className="hidden md:inline text-black hover:opacity-60">CONSTRUCTION</Link>
          <CartBadgeLink>
            <ShoppingCart className="h-3.5 w-3.5" />
          </CartBadgeLink>
          <Link href="/login" className="text-black hover:opacity-60">
            <User className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[300px] md:min-h-[360px] lg:min-h-[440px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/contactus.png)" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center px-6 py-6">
          <h1 className="font-serif text-[32px] leading-9 md:text-[44px] lg:text-[56px] font-medium text-white tracking-wide m-0">
            Contact Us
          </h1>
          <p className="text-base md:text-lg italic font-normal text-white m-0">
            Let&apos;s create your perfect space together
          </p>
        </div>
      </section>
    </div>
  );
}

