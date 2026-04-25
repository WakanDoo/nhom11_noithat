import Image from "next/image";
import Link from "next/link";

export default function Related({ products = [], currentId }) {
  const relatedProducts = products
    .filter((product) => product.id !== currentId)
    .slice(0, 3);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-14 md:mt-16 lg:mt-20">
      <h2 className="text-[28px] font-semibold leading-none tracking-tight text-black md:text-[34px] lg:text-[18px]">
        You might also like:
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-3 md:mt-6 md:grid-cols-3 md:gap-5 lg:mt-5 lg:gap-8">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${encodeURIComponent(String(product.id))}`}
            className="group block"
          >
            <div className="relative aspect-[1.15/1] overflow-hidden bg-[#f5f5f3] lg:aspect-[1.2/1]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-contain p-3 transition duration-300 group-hover:scale-105 md:p-4 lg:p-4"
              />
            </div>
            <div className="pt-3 text-black lg:pt-3">
              <h3 className="text-sm font-semibold md:text-base lg:text-[13px] lg:leading-none">
                {product.name}
              </h3>
              <p className="mt-1 text-xs md:text-sm lg:text-[11px] lg:leading-none">
                {new Intl.NumberFormat("vi-VN").format(product.price)} VND
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
