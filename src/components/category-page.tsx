import { notFound } from "next/navigation";
import { ProductCard } from "@/src/components/product-card";
import { SiteFooter } from "@/src/components/site-footer";
import { SiteHeader } from "@/src/components/site-header";
import { categoryMap } from "@/src/lib/categories";
import { inter, roboto } from "@/src/lib/fonts";

export function CategoryPage({ slug }: { slug: string }) {
  const category = categoryMap.get(slug);
  if (!category) notFound();

  return (
    <div className={`${inter.className} min-h-screen bg-[#fffdfb] text-black`}>
      <SiteHeader />
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
          {category.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              imageHeightClass={slug === "bath" || slug === "mirror" ? "h-[280px] sm:h-[300px]" : "h-[280px] sm:h-[320px]"}
            />
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
