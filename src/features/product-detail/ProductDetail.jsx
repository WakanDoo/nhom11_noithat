import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import { RelatedProducts } from "./RelatedProducts";

export default function ProductDetail({ product, related }) {
  return (
    <div className="max-w-6xl mx-auto">
      {/* TOP SECTION */}
      <div className="grid grid-cols-2 gap-10">
        <ProductGallery images={product.gallery} name={product.name} />
        <ProductInfo product={product} />
      </div>

      {/* RELATED */}
      <div className="mt-20">
        <h2 className="text-xl font-bold mb-4">
          Related Products
        </h2>
        <RelatedProducts products={related} />
      </div>
    </div>
  );
}
