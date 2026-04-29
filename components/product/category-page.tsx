import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product/product-card";
import { categoryMap } from "@/lib/categories";
import { inter, roboto } from "@/lib/fonts";
import { products } from "@/data/products";

const categoryProductKeys: Record<string, string[]> = {
  livingroom: ["sofa", "tables_chairs", "tv_cabinets_consoles"],
  bedroom: ["bed", "wardrobe"],
  sofa: ["sofa"],
  "tables-chairs": ["tables_chairs"],
  "tv-cabinets": ["tv_cabinets_consoles"],
  office: ["desks"],
  "office-chairs": ["office-chairs"],
  bookshelf: ["bookshelves"],
  "dining-table-chairs": ["dining_tables_chairs"],
  bed: ["bed"],
  wardrobe: ["wardrobe"],
  bath: ["bathtub"],
  mirror: ["mirror"],
};

export function CategoryPage({ slug }: { slug: string }) {
  const category = categoryMap[slug];
  if (!category) notFound();

  const categoryProducts = products.filter((product) => {
    const keys = categoryProductKeys[slug] ?? [slug.replace(/-/g, "_")];
    return keys.includes(product.category);
  });

  return (
    <div className={`${inter.className} min-h-screen bg-[#fffdfb] text-black`}>
      <main className="mx-auto w-full max-w-7xl px-5 pb-8 pt-8 sm:px-8 lg:px-10 lg:pt-10">
        <div className="border-b border-black/10 pb-7">
          <p className={`${roboto.className} text-[11px] uppercase tracking-[0.24em] text-black/50`}>
            Home / {category.breadcrumbLabel}
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className={`${roboto.className} text-[32px] font-semibold uppercase tracking-[0.08em] text-[#171717] sm:text-[38px]`}>
                {category.heading}
              </h1>
              <p className="mt-3 max-w-190 text-[15px] leading-7 text-black/62 sm:text-[16px]">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        <section className="grid items-stretch gap-6 py-8 md:grid-cols-2">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              imageHeightClass={slug === "bath" || slug === "mirror" ? "h-[280px] sm:h-[300px]" : "h-[280px] sm:h-[320px]"}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
