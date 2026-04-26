"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutTeam({ section }) {
  return (
    <section className="px-4 pt-7">
      <p className="text-center text-[8px] tracking-[0.24em] text-[#b1936f]">{section.label}</p>
      <h2 className="mt-1 text-center text-[36px] font-semibold text-[#2f2b28]">{section.title}</h2>

      <div className="mt-4 grid grid-cols-3 gap-x-3 gap-y-5">
        {section.members.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="text-center"
          >
            <div className="overflow-hidden rounded-lg border border-[#ede3d5] bg-[#f5f0e9] shadow-[0_7px_17px_rgba(66,45,20,0.14)]">
              <Image
                src={member.image}
                alt={member.name}
                width={320}
                height={400}
                className="h-36 w-full object-cover"
                unoptimized
              />
            </div>
            <p className="mt-2 text-[8px] font-medium text-[#302c28]">{member.name}</p>
            <p className="text-[7px] uppercase tracking-[0.08em] text-[#000000]">{member.role}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
