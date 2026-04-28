"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import type { CategoryId, Product, Room, RoomId } from "@/types/shop";
import { getCategorySlug, getRoomSlug } from "@/data/shop";
import { formatVnd } from "@/lib/format";

type ProductSidebarProps = {
  room: Room;
  roomType: RoomId;
  category: CategoryId;
  products: Product[];
  selectedProductId?: string;
  onProductSelect?: (product: Product) => void;
};

export function ProductSidebar({ room, roomType, category, products, selectedProductId, onProductSelect }: ProductSidebarProps) {
  return (
    <aside className="scrollbar-thin sticky bottom-0 z-30 max-h-[252px] overflow-hidden rounded-t-[20px] bg-white px-4 pb-4 pt-4 shadow-rail md:max-h-[320px] lg:static lg:h-[calc(100vh-118px)] lg:max-h-none lg:min-h-[650px] lg:w-[306px] lg:overflow-y-auto lg:overflow-x-hidden lg:rounded-l-[20px] lg:rounded-r-none lg:pb-8">
      <h2 className="text-[18px] font-medium leading-7 text-[#111]">{room.name}</h2>
      <label className="relative mt-4 block h-[38px]">
        <Search className="absolute left-3 top-[11px] h-4 w-4 text-[#777]" strokeWidth={1.8} />
        <input
          aria-label="Search furniture"
          className="h-full w-full rounded-[14px] bg-[#f7f7f7] pl-10 pr-4 text-[14px] text-[#111] outline-none placeholder:text-[#777]"
          placeholder="Search furniture..."
        />
      </label>

      <div className="mt-[14px] flex gap-[14px] overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-1">
        {products.map((product) => {
          const active = product.id === selectedProductId;
          const className = `flex h-[158px] w-[174px] shrink-0 flex-col overflow-hidden rounded-[14px] border bg-white p-[0.8px] text-left transition sm:mx-auto sm:h-[232px] sm:w-full sm:min-w-0 sm:max-w-[259px] ${
            active
              ? "border-[#b2af33] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              : "border-[#e5e5e5] hover:border-[#cfcfcf]"
          }`;
          const content = (
            <>
              <div className="relative flex h-[78px] w-full shrink-0 items-center justify-center overflow-hidden rounded-t-[13px] bg-white sm:h-[120px]">
                <Image src={product.image} alt={product.name} fill sizes="260px" className="object-contain p-2" />
              </div>
              <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-3 py-2 sm:py-3">
                <p className="min-w-0 truncate text-[14px] font-semibold leading-5 text-[#111]">{product.name}</p>
                <p className="mt-1 hidden min-w-0 overflow-hidden text-[11px] leading-[18px] text-black sm:line-clamp-2 sm:block">
                  {product.description}
                </p>
                <p className="mt-auto shrink-0 truncate text-right text-[14px] font-semibold leading-5 text-black">
                  {formatVnd(product.price)}
                </p>
              </div>
            </>
          );

          if (onProductSelect) {
            return (
              <button key={product.id} type="button" onClick={() => onProductSelect(product)} className={className}>
                {content}
              </button>
            );
          }

          return (
            <Link
              key={product.id}
              href={`/room/${getRoomSlug(roomType)}/${getCategorySlug(roomType, category)}/${product.id}`}
              className={className}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
