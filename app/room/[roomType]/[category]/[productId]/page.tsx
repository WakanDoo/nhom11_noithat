import { notFound } from "next/navigation";
import { ProductExperience } from "@/app/room/[roomType]/[category]/[productId]/product-experience";
import { getProduct } from "@/data/shop";

type ProductExperiencePageProps = {
  params: Promise<{ roomType: string; category: string; productId: string }>;
};

export default async function ProductExperiencePage({ params }: ProductExperiencePageProps) {
  const { roomType, category, productId } = await params;
  const product = getProduct(roomType, category, productId);

  if (!product) {
    notFound();
  }

  return <ProductExperience product={product} />;
}
