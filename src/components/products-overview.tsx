"use client";

// Trang danh mục sản phẩm - Products Overview
// Animation: stagger fade-in cho sections, scale effect cho featured images
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { categoryMap } from "@/lib/categories";
import { cormorant, roboto } from "@/lib/fonts";
import { fadeInScale, fadeInUp, motionTransition, staggerContainer } from "@/lib/motion";

// Ảnh featured hiển thị bên phải trang
const featuredImages = [
  { src: "/category/products-elegant.jpeg", label: "Elegant" },
  { src: "/category/products-luxury.jpeg", label: "Luxury" },
  { src: "/category/products-timeless.jpeg", label: "Timeless" },
];

// Danh sách các khu vực phòng và slug danh mục tương ứng
const sections = [
  {
    title: "Livingroom",
    items: [
      { slug: "sofa", label: "Sofa" },
      { slug: "tables-chairs", label: "Tables & Chairs" },
      { slug: "tv-cabinets", label: "TV Cabinets & Consoles" },
    ],
  },
  {
    title: "Home Office",
    items: [
      { slug: "office", label: "Desk" },
      { slug: "office-chairs", label: "Office Chairs" },
      { slug: "bookshelf", label: "Bookshelf" },
    ],
  },
  {
    title: "Kitchen",
    items: [{ slug: "dining-table-chairs", label: "Dining Table & Chairs" }],
  },
  {
    title: "Bedroom",
    items: [{ slug: "bed", label: "Bed" }, { slug: "wardrobe", label: "Wardrobe" }],
  },
  {
    title: "Bathroom",
    items: [{ slug: "bath", label: "Bathtub" }, { slug: "mirror", label: "Mirror" }],
  },
];

export function ProductsOverview() {
  return (
    <div className="min-h-screen bg-[#fffdfb] text-black">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-5 pb-0 pt-8 sm:px-8 lg:px-10 lg:pt-9">
        <section className="grid gap-8 lg:grid-cols-[392px_minmax(0,1fr)] lg:gap-10">

          {/* Cột trái: nhãn Products + danh sách sections */}
          <div className="space-y-7 pt-2 lg:pt-5.5">
            {/* Nhãn "Products" fade-in từ dưới lên */}
            <motion.p
              className={`${roboto.className} text-[11px] uppercase tracking-[0.24em] text-black/50`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={motionTransition.smooth}
            >
              Products
            </motion.p>

            {/* Danh sách sections với stagger animation */}
            <motion.div className="space-y-4.5" variants={staggerContainer()} initial="hidden" animate="show">
              {sections.map((section) => (
                <motion.div key={section.title} className="space-y-2.5" variants={fadeInUp}>
                  <h2
                    className={`${roboto.className} text-[24px] font-bold uppercase tracking-[0.08em] text-[#111] sm:text-[28px] lg:text-[31px]`}
                  >
                    {section.title}
                  </h2>

                  {/* Links danh mục với stagger riêng bên trong mỗi section */}
                  <motion.div className="space-y-1.5" variants={staggerContainer(0.06)}>
                    {section.items.map((item) => (
                      <motion.div key={item.slug} variants={fadeInUp}>
                        <Link
                          href={`/category/${item.slug}`}
                          className={`${roboto.className} block text-[20px] uppercase tracking-[0.08em] text-[#111] transition-colors duration-300 hover:text-black/40 hover:tracking-[0.12em] sm:text-[22px] lg:text-[24px]`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Cột phải: 3 ảnh featured với fade-in + scale + hover effect */}
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

                {/* Label chữ overlay phía dưới ảnh */}
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