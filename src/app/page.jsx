import Header from "@/components/Header";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
export default function Home() {
  return (
    <div className="bg-white">
      <Header breadcrumb={[{ label: "Home" }]} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-8 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        {products.map((p, index) => (
          <ProductCard key={p.id} product={p} priority={index < 4} />
        ))}
      </div>
    </div>
  );
}
