"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { formatVnd } from "@/lib/format";

export function TotalBar() {
  const { total, selectedProducts } = useCart();

  return (
    <Link
      href="/checkout"
      className="fixed bottom-5 left-1/2 z-40 flex h-12 -translate-x-1/2 items-center gap-3 rounded-full bg-[#111] px-5 text-[14px] font-medium text-white shadow-pill transition hover:bg-black"
    >
      <ShoppingCart className="h-4 w-4" />
      <span>TOTAL</span>
      <span className="min-w-px text-white/45">|</span>
      <span>{total > 0 ? formatVnd(total) : "$0"}</span>
      <span className="rounded-full bg-white px-2 py-0.5 text-[11px] text-[#111]">{selectedProducts.length}</span>
    </Link>
  );
}
