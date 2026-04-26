"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutWhyChoose({ section }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="px-4 pt-4"
    >
      <div className="relative rounded-xl border border-[#efe7da] bg-white p-4 pb-28 shadow-[0_11px_25px_rgba(64,44,19,0.1)] sm:pb-6">
        <p className="text-[8px] font-semibold tracking-[0.24em] text-[#b1936f]">{section.label}</p>
        <h2 className="mt-2 text-center font-serif text-[22px] text-[#2f2b28]">{section.title}</h2>
        <ul className="mt-3 space-y-3 text-[10px] leading-5 text-[#645c52]">
          {section.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#b18b58]" />
              <span>
                <span className="font-medium text-[11px] text-[#b18b58]">{point.split("|")[0]}</span>
                <span className="block mt-1">{point.split("|")[1]}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="absolute right-4 -bottom-8 w-[45%] min-w-[140px] overflow-hidden rounded-xl border border-[#eadfce] shadow-[0_9px_20px_rgba(43,31,19,0.16)] sm:static sm:mt-4 sm:w-[200px]">
          <Image
            src={section.image}
            alt="Bedroom interior"
            width={500}
            height={500}
            className="h-[180px] w-full object-cover sm:h-full"
            unoptimized
          />
        </div>
      </div>
    </motion.section>
  );
}
