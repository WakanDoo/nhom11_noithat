"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/shop";
import { formatVnd } from "@/lib/format";

type ProductCardProps = {
  product: Product;
  active?: boolean;
  selected?: boolean;
  href?: string;
  onClick?: () => void;
};

export function ProductCard({ product, active = false, selected = false, href, onClick }: ProductCardProps) {
  const content = (
    <>
      <div className="relative flex h-[120px] w-full shrink-0 items-center justify-center overflow-hidden rounded-t-[13px] bg-white">
        <Image src={product.image} alt={product.name} fill sizes="260px" className="object-contain p-3" />
        {selected ? (
          <span className="absolute right-2 top-2 rounded-full bg-[#111] px-2 py-1 text-[11px] font-medium text-white">
            Selected
          </span>
        ) : null}
      </div>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-3 py-3">
        <p className="min-w-0 truncate text-[14px] font-semibold leading-5 text-[#111]">{product.name}</p>
        <p className="mt-1 line-clamp-2 min-w-0 overflow-hidden text-[11px] leading-[18px] text-black">{product.description}</p>
        <p className="mt-auto shrink-0 truncate text-right text-[14px] font-semibold leading-5 text-black">{formatVnd(product.price)}</p>
      </div>
    </>
  );

  const className = `flex h-[232px] w-full min-w-0 flex-col overflow-hidden rounded-[14px] border bg-white p-[0.8px] text-left transition ${
    active ? "border-[#111] shadow-[0_8px_24px_rgba(0,0,0,0.12)]" : "border-[#e5e5e5] hover:border-[#cfcfcf]"
  }`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex h-[232px] w-full min-w-0 flex-col overflow-hidden rounded-[14px] border bg-white p-[0.8px] text-left transition ${
        active ? "border-[#111] shadow-[0_8px_24px_rgba(0,0,0,0.12)]" : "border-[#e5e5e5] hover:border-[#cfcfcf]"
      }`}
    >
      {content}
    </button>
  );
}
