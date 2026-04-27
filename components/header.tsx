"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { useCart } from "@/components/cart-provider";

export function Header() {
  const { selectedProducts } = useCart();

  return (
    <header className="fixed left-0 top-0 z-30 flex h-[94px] w-full items-center border-b border-[#f5f5f5] bg-white px-4 md:h-[118px] md:px-[18px]">
      <nav className="flex min-w-0 flex-1 items-center gap-2 font-nav text-[14px] font-medium text-[#0a0a0a] sm:gap-3 sm:text-[20px]">
        <button aria-label="Open menu" className="grid h-8 w-8 place-items-center">
          <Menu className="h-5 w-5" strokeWidth={2} />
        </button>
        <Link href="/" className="hidden sm:inline">
          MENU
        </Link>
        <Link href="/" className="hidden sm:inline">
          ABOUT
        </Link>
        <button className="flex items-center gap-1.5" aria-label="Search">
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">SEARCH</span>
        </button>
      </nav>

      <Link
        href="/"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[20%] font-serifBrand text-[34px] font-medium leading-none tracking-[0.096em] text-[#111] sm:text-[50px] lg:text-[62px]"
      >
        OWLHOME
      </Link>

      <nav className="flex flex-1 items-center justify-end gap-3 font-nav text-[14px] font-medium text-[#0a0a0a] sm:gap-4 sm:text-[20px]">
        <Link href="/" className="hidden md:inline">
          PRODUCTS
        </Link>
        <Link href="/" className="hidden lg:inline">
          CONSTRUCTION
        </Link>
        <Link href="/checkout" aria-label="Cart" className="relative grid h-9 w-9 place-items-center">
          <ShoppingCart className="h-5 w-5" strokeWidth={1.8} />
          {selectedProducts.length > 0 ? (
            <span className="absolute -right-1 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-[#111] px-1 text-[10px] leading-none text-white">
              {selectedProducts.length}
            </span>
          ) : null}
        </Link>
        <button aria-label="Account" className="hidden h-9 w-9 place-items-center sm:grid">
          <UserRound className="h-5 w-5" strokeWidth={1.8} />
        </button>
      </nav>
    </header>
  );
}
