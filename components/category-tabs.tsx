import Link from "next/link";
import type { Category, CategoryId, RoomId } from "@/types/shop";
import { getCategorySlug, getRoomSlug } from "@/data/shop";

type CategoryTabsProps = {
  roomType: RoomId;
  categories: Category[];
  activeCategory?: CategoryId;
};

export function CategoryTabs({ roomType, categories, activeCategory }: CategoryTabsProps) {
  return (
    <div className="scrollbar-thin flex gap-3 overflow-x-auto rounded-[20px] border border-[#e5e5e5] bg-white p-2">
      {categories.map((category) => {
        const active = category.id === activeCategory;
        return (
          <Link
            key={`${category.roomId}-${category.id}`}
            href={`/room/${getRoomSlug(roomType)}/${getCategorySlug(roomType, category.id)}`}
            className={`flex h-11 shrink-0 items-center justify-center rounded-full px-5 text-[14px] font-medium leading-5 transition ${
              active ? "bg-[#111] text-white" : "bg-[#f7f7f7] text-[#111] hover:bg-[#eeeeee]"
            }`}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}
