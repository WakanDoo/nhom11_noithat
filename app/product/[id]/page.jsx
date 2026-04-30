import ProductDetailSection from "@/features/product-detail/ProductDetailSection";
import { RelatedProducts } from "@/features/product-detail/RelatedProducts";
import { getProductById, products } from "@/data/products";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const ids = new Set();

  products.forEach((product) => {
    const id = String(product.id);
    ids.add(id);
    ids.add(encodeURIComponent(id));
  });

  return Array.from(ids, (id) => ({ id }));
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const gallery = [product.image, ...(product.gallery || [])].filter(
    (image, index, images) => image && images.indexOf(image) === index
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">
      <div className="w-full min-h-screen bg-white">
        <div className="px-5 pb-0 pt-7 md:px-8 md:pt-10 lg:px-10">
          <ProductDetailSection product={product} gallery={gallery} />
          <RelatedProducts products={products} currentId={product.id} />
        </div>
      </div>
    </main>
  );
}
