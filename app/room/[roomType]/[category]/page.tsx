import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { RoomProductSelector } from "@/components/room-product-selector";
import { getCategory, getProductsByCategory, getRoom } from "@/data/shop";

type ProductListPageProps = {
  params: Promise<{ roomType: string; category: string }>;
};

export default async function ProductListPage({ params }: ProductListPageProps) {
  const { roomType, category } = await params;
  const room = getRoom(roomType);
  const activeCategory = getCategory(roomType, category);

  if (!room || !activeCategory) {
    notFound();
  }

  const visibleProducts = getProductsByCategory(room.id, activeCategory.id);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <RoomProductSelector room={room} category={activeCategory} products={visibleProducts} />
    </main>
  );
}
