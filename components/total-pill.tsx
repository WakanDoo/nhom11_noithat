"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { formatVnd } from "@/lib/format";

export function TotalPill({ compact = false }: { compact?: boolean }) {
  const { total } = useCart();

  return (
    <Link
      href="/checkout"
      className={`inline-flex items-center justify-center rounded-full bg-[#111] font-sans text-[13px] font-medium leading-5 text-white shadow-pill transition hover:bg-black ${
        compact ? "h-10 px-5" : "h-[40px] min-w-[122px] px-6"
      }`}
    >
      Total: {total > 0 ? formatVnd(total) : "$0"}
    </Link>
  );
}
