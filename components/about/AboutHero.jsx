"use client";

import { motion } from "framer-motion";

export default function AboutHero({ subtitle, title, breadcrumb }) {
  return (
    <header className="px-5 pt-5 pb-4 text-center">
      <p className="mb-1 text-[8px] tracking-[0.3em] text-[#b89968]">{subtitle}</p>
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="text-[34px] font-semibold tracking-[0.08em] text-[#2f2b28]"
      >
        {title}
      </motion.h1>
      <div className="mx-auto mt-1 h-px w-16 bg-gradient-to-r from-transparent via-[#b89968] to-transparent" />
      <p className="mt-2 text-[11px] italic text-[#b7ada0]">{breadcrumb}</p>
    </header>
  );
}
