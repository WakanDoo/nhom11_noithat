import Image from "next/image";
import Link from "next/link";

function formatPrice(price) {
  const value = Number(price);

  if (!Number.isFinite(value)) {
    return "Contact";
  }

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
}

export default function ProductCard({ product, priority = false }) {
  if (!product) {
    return null;
  }

  if (!product.id) {
    return null;
  }

  const href = `/product/${encodeURIComponent(String(product.id))}`;
  const name = product.name || "Product";
  const category = product.category || "Furniture";
  const image = product.image || "/window.svg";

  return (
    <Link href={href} className="group">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-[17px] font-medium leading-tight text-gray-900 md:text-[18px]">{name}</h3>
        <p className="mt-1 text-[15px] leading-tight text-gray-500 md:text-base">{category}</p>
        <p className="mt-1 text-[15px] font-medium leading-tight text-gray-900 md:text-base">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
