"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPromise({ section }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="pb-8"
    >
      <div className="grid gap-4 sm:grid-cols-2 items-stretch">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <Image
            src={section.image}
            alt="Kitchen interior"
            width={600}
            height={500}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>

        {/* TEXT */}
        <div className="rounded-xl bg-[#2a2624] p-6 text-white flex flex-col justify-center">
          <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#d8c29f]">
            {section.label}
          </p>
          <h2 className="mt-3 font-serif text-2xl text-white">
            {section.title}
          </h2>
          <p className="mt-3 text-[13px] italic leading-6 text-[#dad0c3]">
            {section.description}
          </p>
          <div className="mt-5 flex items-center gap-3 border-t border-white/20 pt-4">
            <span className="h-px w-8 bg-[#cfb38a]" />
            <span className="text-[10px] tracking-[0.28em] text-[#cfb38a] uppercase">
              {section.cta}
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}