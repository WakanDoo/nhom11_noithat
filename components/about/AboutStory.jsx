"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutStory({ section }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="pb-8"
    >
      <div className="grid gap-5 sm:grid-cols-2 items-start">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-xl shadow-sm">
          <Image
            src={section.image}
            alt="Interior design"
            width={600}
            height={450}
            className="w-full aspect-[4/3] object-cover"
            unoptimized
          />
        </div>

        {/* CONTENT */}
        <div className="rounded-xl border border-[#efe8dd] bg-white p-5">
          <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#b1936f]">
            {section.label}
          </p>
          <h2 className="mt-2 font-serif text-xl font-semibold text-[#2f2b28]">
            {section.title}
          </h2>
          <p className="mt-3 text-[13px] leading-6 text-[#6a6056]">
            {section.description}
          </p>
          <p className="mt-2 text-[13px] leading-6 text-[#6a6056]">
            {section.description2}
          </p>
          <p className="mt-4 border-t border-[#e8e6e0] pt-3 text-[11px] italic text-[#9b938c]">
            {section.quote}
          </p>
        </div>
      </div>
    </motion.section>
  );
}