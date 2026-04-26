"use client";

import { motion } from "framer-motion";

export default function AboutStats({ stats }) {
  return (
    <section className="px-4 py-7">
      <div className="grid gap-3 grid-cols-3 rounded-xl border border-[#eee5d8] bg-white px-2 py-5 shadow-[0_9px_20px_rgba(64,45,20,0.1)]">
        {stats.map((stat) => (
          <motion.article
            key={stat.label}
            whileHover={{ y: -5, scale: 1.02 }}
            className="py-1 text-center"
          >
            <p className="font-serif text-[34px] font-medium text-[#b08a56]">{stat.value}</p>
            <div className="mx-auto mt-1 h-px w-6 bg-[#e8e6e0]" />
            <p className="mt-1 text-[7px] tracking-[0.14em] text-[#8c7e6a]">{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
