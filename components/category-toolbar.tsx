import Link from "next/link";
import { Armchair, Bath, BedDouble, DoorClosed, House, LibraryBig, Monitor, ScanFace, Sofa, Table2, Utensils } from "lucide-react";
import type { CategoryId, RoomId } from "@/types/shop";
import { getCategorySlug, getRoomCategories, getRoomSlug } from "@/data/shop";

type CategoryToolbarProps = {
  roomType: RoomId;
  activeCategory: CategoryId;
};
const iconMap: Record<CategoryId, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  sofa: Sofa,
  bed: BedDouble,

export function CategoryToolbar({ roomType, activeCategory }: CategoryToolbarProps) {
  const categories = getRoomCategories(roomType);
  const roomSlug = getRoomSlug(roomType);

  return (
    <div className="absolute right-[14px] top-[132px] z-20 flex w-14 flex-col gap-2 rounded-[16px] bg-white/90 p-2 shadow-[0_4px_10px_rgba(0,0,0,0.2)] backdrop-blur">
      <Link
        href="/"
        aria-label="Home"
        className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#111] text-white shadow-[0_4px_2px_rgba(0,0,0,0.25)]"
      >
        <House className="h-5 w-5" strokeWidth={1.9} />
      </Link>
      {categories.map((category) => {
        const Icon = iconMap[category.id] ?? House;
        const active = category.id === activeCategory;
        return (
          <Link
            key={`${category.roomId}-${category.id}`}
            href={`/room/${roomSlug}/${getCategorySlug(roomType, category.id)}`}
            aria-label={category.name}
            className={`grid h-10 w-10 place-items-center rounded-[14px] bg-white text-[#111] transition ${
              active ? "border border-[#b2af33]" : "border border-transparent hover:border-[#e5e5e5]"
            }`}
          >
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </Link>
        );
      })}
    </div>
  );
}
