"use client";

import { motion } from "framer-motion";

const iconClass =
  "inline-flex h-7 w-7 items-center justify-center text-[15px] text-[#2d2a27]";

export default function AboutNavbar({ logo }) {
  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-30 flex items-center justify-between border-b border-[#ece7df] bg-white/95 px-3 py-3 backdrop-blur"
    >
      <div className="flex w-[68px] items-center gap-2">
        <span className={`${iconClass} text-[18px]`}>☰</span>
      </div>
      <p className="text-center font-serif text-[18px] tracking-[0.26em] text-[#2d2a27]">{logo}</p>
      <div className="flex w-[68px] items-center justify-end gap-2">
        <span className={iconClass}>🛒</span>
        <span className={iconClass}>⌕</span>
      </div>
    </motion.nav>
  );
}
