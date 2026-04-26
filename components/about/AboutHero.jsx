"use client";
import { motion } from "framer-motion";

export default function AboutHero({ subtitle, title, breadcrumb }) {
  return (
    <header className="py-10 text-center">
      <p className="mb-2 text-[10px] tracking-[0.35em] text-[#b89968] uppercase">
        {subtitle}
      </p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="text-3xl font-semibold tracking-[0.12em] text-[#2f2b28] sm:text-4xl"
      >
        {title}
      </motion.h1>
      <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-[#b89968] to-transparent" />
      <p className="mt-3 text-sm italic text-[#b7ada0]">{breadcrumb}</p>
    </header>
  );
}