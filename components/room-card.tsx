import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/types/shop";
import { getRoomSlug } from "@/data/shop";

export function RoomCard({ room }: { room: Room }) {
  return (
    <Link
      href={`/room/${getRoomSlug(room.id)}`}
      className="flex h-[174px] w-full min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#e5e5e5] bg-white p-[0.8px] text-left transition hover:border-[#111]"
    >
      <div className="relative h-[128px] w-full shrink-0 overflow-hidden rounded-t-[13px] bg-[#f7f7f7]">
        <Image src={room.image} alt={room.name} fill sizes="270px" className="object-cover object-center" />
      </div>
      <p className="min-w-0 truncate px-3 py-3 text-[14px] leading-5 text-[#111]">{room.name}</p>
    </Link>
  );
}
