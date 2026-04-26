"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPromise({ section }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="px-4 pt-5"
    >
      <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-xl shadow-[0_8px_20px_rgba(54,35,17,0.16)]">
          <Image
            src={section.image}
            alt="Kitchen interior"
            width={800}
            height={560}
            className="h-[158px] w-full object-cover sm:h-full"
            unoptimized
          />
        </div>
        <div className="rounded-xl bg-[#2a2624] p-4 text-white shadow-[0_11px_25px_rgba(23,18,14,0.4)]">
          <p className="text-[8px] font-semibold tracking-[0.24em] text-[#d8c29f]">{section.label}</p>
          <h2 className="mt-2 font-serif text-[20px]">{section.title}</h2>
          <p className="mt-2 text-[10px] italic leading-5 text-[#dad0c3]">{section.description}</p>
          <div className="mt-3 flex items-center gap-2 border-t border-white/20 pt-2">
            <span className="h-px w-8 bg-[#cfb38a]" />
            <span className="text-[8px] tracking-[0.24em] text-[#cfb38a]">{section.cta}</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
