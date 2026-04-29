import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/categories";
import { asset } from "@/lib/asset";
import { inter, roboto } from "@/lib/fonts";

export function ProductCard({
  product,
  imageHeightClass = "h-[280px] sm:h-[320px]",
}: {
  product: Product;
  imageHeightClass?: string;
}) {
  const label = product.label ?? product.name;
  const title = product.title ?? product.name;
  const description = product.description ?? "";
  const showSubtitle = title.trim().toLowerCase() !== label.trim().toLowerCase();
  const descriptionExcerpt = description.length > 100 ? `${description.slice(0, 100).trim()}...` : description;
  const href = `/product/${encodeURIComponent(String(product.id))}`;

  return (
    <Link href={href} className="block">
      <article className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-black/8 bg-white transition-shadow duration-300 hover:shadow-lg">
        <div className={`relative ${imageHeightClass} bg-[#f5f0ee]`}>
          <Image
            src={asset(product.image)}
            alt={label}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
            className="object-contain object-center p-6 sm:p-8"
          />
        </div>

        <div className="mt-auto flex min-h-[140px] flex-col justify-between gap-3 bg-white px-4 py-4">
          <div className="min-w-0 flex-1">
            <h3
              className={`${roboto.className} overflow-hidden text-[20px] font-bold uppercase leading-[1.1] tracking-[0.04em] text-[#141414] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]`}
            >
              {label}
            </h3>
            {showSubtitle ? (
              <p
                className={`${inter.className} mt-2 overflow-hidden text-[14px] leading-[1.5] text-black/62 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]`}
              >
                {title}
              </p>
            ) : null}
            {descriptionExcerpt ? (
              <p className={`${inter.className} mt-3 text-[13px] leading-[1.5] text-black/60`}>
                {descriptionExcerpt}
              </p>
            ) : null}
          </div>

          <span
            className={`${inter.className} mb-0.5 inline-flex shrink-0 self-start items-center rounded-full bg-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 group-hover:bg-black/90`}
          >
            View details
          </span>
        </div>
      </article>
    </Link>
  );
}
