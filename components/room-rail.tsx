"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { products, rooms } from "@/data/shop";
import type { Product, RoomId } from "@/types/shop";
import { ProductCard } from "@/components/product-card";

type RoomRailProps = {
  activeRoom: RoomId;
  selectedProductId: string | null;
  selectedIds: string[];
  onRoomSelect: (room: RoomId) => void;
  onProductSelect: (product: Product) => void;
};

export function RoomRail({ activeRoom, selectedProductId, selectedIds, onRoomSelect, onProductSelect }: RoomRailProps) {
  const visibleProducts = products.filter((product) => product.roomId === activeRoom);

  return (
    <aside className="scrollbar-thin flex h-full w-full flex-col gap-[14px] overflow-y-auto overflow-x-hidden rounded-[20px] bg-white px-[15px] py-4 shadow-rail lg:w-[320px]">
      <h2 className="h-7 text-[18px] font-medium leading-7 text-[#111]">Design Your Space by Room</h2>
      <label className="relative block h-[38px] shrink-0">
        <Search className="absolute left-3 top-[10px] h-4 w-4 text-[#777]" />
        <input
          aria-label="Search your room"
          className="h-full w-full rounded-[14px] bg-[#f7f7f7] pl-10 pr-4 text-[14px] text-[#111] outline-none placeholder:text-[#777]"
          placeholder="Search your room"
        />
      </label>

      <div className="grid gap-[14px] sm:grid-cols-2 lg:grid-cols-1">
        {rooms.map((room) => (
          <button
            key={room.id}
            onClick={() => onRoomSelect(room.id)}
            className={`h-[164px] overflow-hidden rounded-[14px] border bg-white p-[0.8px] text-left transition ${
              room.id === activeRoom ? "border-[#111]" : "border-[#e5e5e5] hover:border-[#cfcfcf]"
            }`}
          >
            <div className="relative h-[120px] w-full overflow-hidden rounded-t-[13px] bg-[#f7f7f7]">
              <Image src={room.image} alt={room.name} fill sizes="260px" className="object-cover" priority={room.id === "living"} />
            </div>
            <p className="px-3 pt-3 text-[14px] leading-5 text-[#111]">{room.name}</p>
          </button>
        ))}
      </div>

      <div className="pt-1">
        <h3 className="mb-3 text-[18px] font-medium leading-7 text-[#111]">Products</h3>
        <div className="grid gap-[14px] sm:grid-cols-2 lg:grid-cols-1">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              active={product.id === selectedProductId}
              selected={selectedIds.includes(product.id)}
              onClick={() => onProductSelect(product)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
