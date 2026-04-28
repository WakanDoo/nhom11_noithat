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
export function ProductSidebar({ room, roomType, category, products, selectedProductId, onProductSelect }: ProductSidebarProps) {
  return (
    <aside className="scrollbar-thin overflow-y-auto overflow-x-hidden rounded-[20px] bg-white px-4 pb-8 pt-4 shadow-rail lg:h-[calc(100vh-118px)] lg:min-h-[650px] lg:w-[306px] lg:rounded-l-[20px] lg:rounded-r-none">
      <h2 className="text-[18px] font-medium leading-7 text-[#111]">{room.name}</h2>
      <label className="relative mt-4 block h-[38px]">
        <Search className="absolute left-3 top-[11px] h-4 w-4 text-[#777]" strokeWidth={1.8} />
        <input
          aria-label="Search furniture"
          className="h-full w-full rounded-[14px] bg-[#f7f7f7] pl-10 pr-4 text-[14px] text-[#111] outline-none placeholder:text-[#777]"
          placeholder="Search furniture..."
        />
      </label>

      <div className="mt-[14px] grid gap-[14px] sm:grid-cols-2 lg:grid-cols-1">
        {products.map((product) => {
          const active = product.id === selectedProductId;
          const className = `mx-auto flex h-[232px] w-full min-w-0 max-w-[259px] flex-col overflow-hidden rounded-[14px] border bg-white p-[0.8px] text-left transition ${
            active
              ? "border-[#b2af33] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              : "border-[#e5e5e5] hover:border-[#cfcfcf]"
          }`;
          const content = (
            <>
              <div className="relative flex h-[120px] w-full shrink-0 items-center justify-center overflow-hidden rounded-t-[13px] bg-white">
                <Image src={product.image} alt={product.name} fill sizes="260px" className="object-contain p-2" />
              </div>
              <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-3 py-3">
                <p className="min-w-0 truncate text-[14px] font-semibold leading-5 text-[#111]">{product.name}</p>
                <p className="mt-1 line-clamp-2 min-w-0 overflow-hidden text-[11px] leading-[18px] text-black">
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
