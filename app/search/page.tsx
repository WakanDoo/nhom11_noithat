"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

function HeaderBar() {
  return (
    <header className="absolute left-0 top-0 w-full h-[118px] bg-white z-50">
      <div className="absolute left-0 top-0 w-full h-[118px]" />

      <div className="absolute left-[17.79px] top-[76px] w-[18.78px] h-[12px] flex flex-col justify-between">
        <div className="h-[2px] bg-black/90" />
        <div className="h-[2.5px] bg-black/90" />
        <div className="h-[2.5px] bg-black/90" />
      </div>

      <Link href="/">
        <div className="absolute z-50 left-[500px] top-[22px] w-[635.35px] h-[96px] flex items-center">
          <div className="text-[#0A0A0A] [font-family:var(--font-cormorant),_serif] font-medium tracking-[0.08em] text-[64px] leading-[55px]">
            OWLHOME
          </div>
        </div>
      </Link>

      <nav className="absolute left-0 top-0 w-full h-full">
        <a
          href="/menu"
          className="absolute left-[40.53px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          MENU
        </a>
        <a
          href="/#about"
          className="absolute left-[113px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          ABOUT
        </a>

        <Link href="/search" className="flex items-center">
          <svg
            className="absolute left-[195px] top-[71px] w-[24px] h-[24px] text-black"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M16.5 16.5 21 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute left-[221px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]">
            SEARCH
          </div>
        </Link>

        <a
          href="/products"
          className="absolute left-[970px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          PRODUCTS
        </a>
        <Link
          href="/construction"
          className="absolute left-[1098px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          CONSTRUCTION
        </Link>

        <div className="absolute left-[1181px] top-[18px] w-[35px] h-[35px] text-black">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-full h-full" fill="none">
            <path
              d="M7.5 20.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M17 20.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M3.5 4.5h2l2.1 10.5h10.1l2.3-7.5H7.1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute left-[1221px] top-[23px] w-[26px] h-[26px] text-black">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-full h-full" fill="none">
            <path
              d="M12 12a4.25 4.25 0 1 0 0-8.5A4.25 4.25 0 0 0 12 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M4.5 21c1.7-4.3 13.3-4.3 15 0"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

function FooterBar() {
  return (
    <footer className="absolute left-0 top-[1200px] w-full h-[153px]">
      <div className="w-full h-full bg-black" />

      <div className="absolute left-[29px] top-[33px] text-[20px] font-light tracking-[0.05em] text-white [font-family:var(--font-inter),_system-ui]">
        CONTACT
      </div>
      <div className="absolute left-[152px] top-[33px] text-[20px] font-light tracking-[0.05em] text-white [font-family:var(--font-inter),_system-ui]">
        ALL STORES
      </div>
      <div className="absolute left-[304px] top-[33px] text-[20px] font-light tracking-[0.05em] text-white [font-family:var(--font-inter),_system-ui]">
        PRIVACY AND DATA PROTECTION POLICY
      </div>
      <div className="absolute left-[140px] top-[37px] w-[2px] h-[16px] bg-white" />
      <div className="absolute left-[292px] top-[37px] w-[2px] h-[16px] bg-white" />

      <div className="absolute left-[980px] top-[62px] text-[14px] font-normal text-white [font-family:var(--font-inter),_system-ui]">
        Follow us on:
      </div>

      <div className="absolute left-[1077px] top-[9px] w-[83px] h-[117px]">
        <Image src="/figma/home/footer-ig.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute left-[1136px] top-[22px] w-[63px] h-[90px]">
        <Image src="/figma/home/footer-facebook.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute left-[1172px] top-0 w-[95px] h-[135px]">
        <Image src="/figma/home/footer-gmail.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute left-0 top-[38px] w-[81px] h-[115px]">
        <Image src="/figma/home/footer-extra.png" alt="" fill className="object-cover" />
      </div>

      <div className="absolute left-[64px] top-[86px] text-[16px] font-medium text-white [font-family:var(--font-inter),_system-ui]">
        owlhome@gmail.com
      </div>
    </footer>
  );
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const searchResults = products.filter((product) => {
    const searchTerm = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.group.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="flex justify-center bg-white">
      {/* Container chính giữ nguyên 1280px như trang Construction */}
      <div className="relative w-[1280px] min-h-[1457px] bg-white">
        <HeaderBar />

        {/* PHẦN SEARCH (Vị trí giữa màn hình theo ảnh) */}
        <main className="absolute left-0 top-[153px] w-full flex flex-col items-center">
          
          <h1 className="text-[64px] tracking-[0.3em] font-light text-black [font-family:var(--font-cormorant),_serif] mt-[150px] mb-12">
            SEARCH
          </h1>

          <div className="relative w-full max-w-[1100px] px-4">
            {/* Ô chữ nhật nhập liệu */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-[80px] border border-black px-8 text-[24px] outline-none"
            />

            {/* DÁN ĐOẠN NÀY VÀO */}
            {query && (
              <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {searchResults.map((product) => (
                  <div key={product.id} className="w-full">
                    {/* Đây chính là nơi gọi ProductCard để hiện ảnh và tên */}
                    <ProductCard product={product} />
                    
                    {/* Dòng này để hiện thêm danh mục cho rõ ràng */}
                    <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
                      Category: {product.category}
                    </p>
                  </div>
                ))}
                
                {searchResults.length === 0 && (
                  <div className="col-span-full text-center text-gray-400 italic py-10">
                    No products found for "{query}"
                  </div>
                )}
              </div>
            )}
          </div>
        </main>

        <FooterBar />
      </div>
    </div>
  );
}