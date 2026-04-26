"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fffdfb] flex flex-col items-center justify-center px-5 text-center">
      
      {/* Số 404 lớn */}
      <motion.h1
        className="text-[120px] leading-none text-[#4A3728] font-bold sm:text-[160px] lg:text-[200px]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Tiêu đề */}
      <motion.h2
        className="mt-2 text-[16px] uppercase tracking-[0.2em] text-[#111] sm:text-[18px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        Page Not Found
      </motion.h2>

      {/* Mô tả */}
      <motion.p
        className="mt-4 max-w-sm text-[14px] text-black/50 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
      >
        Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
      </motion.p>

      {/* Nút Back to Home */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-block border border-[#4A3728] px-8 py-3 text-[12px] uppercase tracking-[0.2em] text-[#4A3728] transition-all duration-300 hover:bg-[#4A3728] hover:text-[#fffdfb]"
        >
          Back to Home
        </Link>
      </motion.div>

    </div>
  );
}