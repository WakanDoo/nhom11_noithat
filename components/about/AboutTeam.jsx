"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutTeam({ section }) {
  return (
    <section className="pb-8">
      <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#b1936f]">
        {section.label}
      </p>
      <h2 className="mt-2 text-center text-2xl font-semibold text-[#2f2b28]">
        {section.title}
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {section.members.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ y: -4 }}
            className="text-center"
          >
            <div className="overflow-hidden rounded-xl border border-[#ede3d5] bg-[#f5f0e9]">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={380}
                className="aspect-[3/4] w-full object-cover"
                unoptimized
              />
            </div>
            <p className="mt-2 text-[13px] font-medium text-[#2f2b28]">
              {member.name}
            </p>
            <p className="text-[11px] tracking-[0.12em] text-[#6f6a63]">
              {member.role}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}