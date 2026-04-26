"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutStory({ section }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="px-4 pt-1"
    >
      <div className="grid gap-3 sm:grid-cols-[0.95fr_1.05fr]">
        <div className="overflow-hidden rounded-xl shadow-[0_8px_22px_rgba(56,39,20,0.16)]">
          <Image
            src={section.image}
            alt="Modern living room interior"
            width={800}
            height={560}
            className="h-[194px] w-full object-cover sm:h-full"
            unoptimized
          />
        </div>
        <div className="rounded-xl border border-[#efe8dd] bg-white p-4 shadow-[0_10px_26px_rgba(71,52,31,0.1)]">
          <p className="text-[8px] font-semibold tracking-[0.24em] text-[#b1936f]">{section.label}</p>
          <h2 className="mt-2 font-serif text-[18px] font-semibold text-[#2f2b28]">{section.title}</h2>
          <p className="mt-2 text-[10px] leading-5 text-[#6a6056]">{section.description}</p>
          <p className="mt-2 text-[10px] leading-5 text-[#6a6056]">{section.description2}</p>
          <p className="mt-2 border-t border-[#e8e6e0] pt-2 text-[8px] italic text-[#9b938c]">{section.quote}</p>
        </div>
      </div>
    </motion.section>
  );
}
