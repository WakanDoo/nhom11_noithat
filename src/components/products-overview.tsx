"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/src/components/site-footer";
import { SiteHeader } from "@/src/components/site-header";
import { categoryMap } from "@/src/lib/categories";
import { cormorant, roboto } from "@/src/lib/fonts";
import { fadeInScale, fadeInUp, motionTransition, staggerContainer } from "@/src/lib/motion";

const featuredImages = [
  { src: "/category/products-elegant.jpeg", label: "Elegant" },
  { src: "/category/products-luxury.jpeg", label: "Luxury" },
  { src: "/category/products-timeless.jpeg", label: "Timeless" },
];

const sections = [
  { title: "Livingroom", items: ["sofa", "tables-chairs", "tv-cabinets"] },
  { title: "Home Office", items: ["office", "office-chairs", "bookshelf"] },
  { title: "Kitchen", items: ["dining-table-chairs"] },
  { title: "Bedroom", items: ["bed", "wardrobe"] },
  { title: "Bathroom", items: ["bath", "mirror"] },
];

export function ProductsOverview() {
  return (
    <div className="min-h-screen bg-[#fffdfb] text-black">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-5 pb-0 pt-8 sm:px-8 lg:px-10 lg:pt-9">
        <section className="grid gap-8 lg:grid-cols-[392px_minmax(0,1fr)] lg:gap-10">
          <div className="space-y-7 pt-2 lg:pt-5.5">
            <motion.p
              className={`${roboto.className} text-[11px] uppercase tracking-[0.24em] text-black/50`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={motionTransition.smooth}
            >
              Products
            </motion.p>

            <motion.div className="space-y-4.5" variants={staggerContainer()} initial="hidden" animate="show">
              {sections.map((section) => (
                <motion.div key={section.title} className="space-y-2.5" variants={fadeInUp}>
                  <h2
                    className={`${roboto.className} text-[24px] font-bold uppercase tracking-[0.08em] text-[#111] sm:text-[28px] lg:text-[31px]`}
                  >
                    {section.title}
                  </h2>

                  <motion.div className="space-y-1.5" variants={staggerContainer(0.06)}>
                    {section.items.map((slug) => {
                      const category = categoryMap.get(slug);
                      if (!category) return null;

                      return (
                        <motion.div key={slug} variants={fadeInUp}>
                          <Link
                            href={`/category/${slug}`}
                            className={`${roboto.className} block text-[20px] uppercase tracking-[0.08em] text-[#111] transition-colors duration-300 hover:text-black/40 hover:tracking-[0.12em] sm:text-[22px] lg:text-[24px]`}
                          >
                            {category.heading}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div className="grid gap-6 sm:grid-cols-3 lg:gap-6" variants={staggerContainer(0.1)} initial="hidden" animate="show">
            {featuredImages.map((image, index) => (
              <motion.div
                key={image.label}
                className="relative overflow-hidden bg-[#f3ece7]"
                variants={fadeInScale}
                transition={{ ...motionTransition.featured, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`relative min-h-105 ${
                    index === 0 ? "aspect-236/908" : index === 1 ? "aspect-236/886" : "aspect-236/923"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.label}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500"
                    priority={index === 0}
                  />
                </div>

                <p
                  className={`${cormorant.className} pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-[34px] uppercase tracking-[0.08em] text-[#f3ece7] sm:text-[38px] lg:text-[41px]`}
                >
                  {image.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
