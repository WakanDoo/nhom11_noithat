"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutWhyChoose({ section }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="pb-8"
    >
      <div className="rounded-xl border border-[#efe7da] bg-white shadow-sm">
        <div className="grid sm:grid-cols-2 items-center">
          {/* TEXT */}
          <div className="p-6">
            <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#b1936f]">
              {section.label}
            </p>
            <h2 className="mt-2 font-serif text-xl font-semibold text-[#2f2b28]">
              {section.title}
            </h2>
            <ul className="mt-4 space-y-4">
              {section.points.map((point) => {
                const [heading, body] = point.split("|");
                return (
                  <li key={heading} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b18b58]" />
                    <span>
                      <span className="block text-[13px] font-semibold text-[#b18b58]">
                        {heading}
                      </span>
                      <span className="mt-0.5 block text-[12px] leading-5 text-[#645c52]">
                        {body}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-r-xl">
            <Image
              src={section.image}
              alt="Bedroom interior"
              width={500}
              height={500}
              className="w-full h-full aspect-square object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}