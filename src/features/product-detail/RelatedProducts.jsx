import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price);
}

export function getRelated(products = [], currentProduct) {
  if (!currentProduct) {
    return [];
  }

  return products
    .filter(
      (p) =>
        p.category === currentProduct.category &&
        p.id !== currentProduct.id
    )
    .slice(0, 3);
}

export function RelatedProducts({ products = [], currentId }) {
  const currentProduct = products.find((p) => p.id === currentId);
  const related = currentId ? getRelated(products, currentProduct) : products.slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-7 md:mt-4 lg:mt-16">
      <h2 className="mb-4 text-[24px] font-bold leading-none md:text-[28px] lg:mb-7 lg:text-[34px]">
        You might also like:
      </h2>
      <div className="flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0 lg:gap-14">
        {related.map((product) => (
          <Link
            key={product.id}
            href={`/product/${encodeURIComponent(String(product.id))}`}
            className="group min-w-full snap-start md:min-w-0"
          >
            <div className="relative aspect-[1.22/1] overflow-hidden bg-[#f6f5f3]">
              <Image
                src={asset(product.image)}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 768px) 31vw, 70vw"
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-105 md:p-4"
              />
            </div>
            <div className="pt-3 text-black">
              <h3 className="text-base font-bold leading-tight md:text-[17px]">
                {product.name}
              </h3>
              <p className="mt-1 text-[15px] font-semibold leading-tight md:text-base">
                {formatPrice(product.price)} VND
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
