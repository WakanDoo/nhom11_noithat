import Image from "next/image";
import type { Product } from "@/src/lib/categories";
import { inter, roboto } from "@/src/lib/fonts";

export function ProductCard({
  product,
  imageHeightClass = "h-[280px] sm:h-[320px]",
}: {
  product: Product;
  imageHeightClass?: string;
}) {
  const showSubtitle = product.title.trim().toLowerCase() !== product.label.trim().toLowerCase();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[16px] border border-black/8 bg-white">
      <div className={`relative ${imageHeightClass} bg-[#f5f0ee]`}>
        <Image
          src={product.imageSrc}
          alt={product.label}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
          className="object-contain object-center p-6 sm:p-8"
        />
      </div>

      <div className="mt-auto flex min-h-[88px] items-end justify-between gap-4 bg-white px-4 py-3">
        <div className="min-w-0 flex-1">
          <h3
            className={`${roboto.className} overflow-hidden text-[20px] font-bold uppercase leading-[1.1] tracking-[0.04em] text-[#141414] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]`}
          >
            {product.label}
          </h3>
          {showSubtitle ? (
            <p
              className={`${inter.className} mt-1 overflow-hidden text-[14px] leading-[1.25] text-black/62 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]`}
            >
              {product.title}
            </p>
          ) : null}
        </div>

        <span
          className={`${inter.className} mb-0.5 shrink-0 self-end rounded-full bg-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white`}
        >
          Add to cart
        </span>
      </div>
    </article>
  );
}
