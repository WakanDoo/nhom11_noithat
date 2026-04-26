"use client";
import { motion } from "framer-motion";

export default function AboutStats({ stats }) {
  return (
    <section className="pb-10">
      <div className="grid grid-cols-3 rounded-xl border border-[#eee5d8] bg-white px-2 py-6 shadow-md">
        {stats.map((stat, i) => (
          <motion.article
            key={stat.label}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`py-2 text-center ${i < stats.length - 1 ? "border-r border-[#eee5d8]" : ""}`}
          >
            <p className="font-serif text-3xl font-medium text-[#b08a56]">
              {stat.value}
            </p>
            <div className="mx-auto mt-2 h-px w-8 bg-[#e8e6e0]" />
            <p className="mt-2 text-[10px] tracking-[0.18em] text-[#8c7e6a] uppercase">
              {stat.label}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}