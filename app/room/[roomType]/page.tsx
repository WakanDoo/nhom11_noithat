import { notFound, redirect } from "next/navigation";
import { getCategorySlug, getFirstCategory, getRoom, getRoomSlug } from "@/data/shop";
import type { RoomId } from "@/types/shop";

type RoomPageProps = {
  params: Promise<{ roomType: string }>;
};

export default async function RoomPage({ params }: RoomPageProps) {
  const { roomType } = await params;
  const room = getRoom(roomType);

  if (!room) {
    notFound();
  }

  const roomId = room.id as RoomId;
  const firstCategory = getFirstCategory(roomId);

  redirect(`/room/${getRoomSlug(roomId)}/${getCategorySlug(roomId, firstCategory)}`);
}
