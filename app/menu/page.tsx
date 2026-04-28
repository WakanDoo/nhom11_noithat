"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Tách HeaderBar ra để dễ quản lý, thay đổi div SEARCH thành Link
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
        <Link
          href="/menu"
          className="absolute left-[40.53px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          MENU
        </Link>
        <Link
          href="/#about"
          className="absolute left-[113px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          ABOUT
        </Link>

        {/* Cụm Search: Khi nhấn vào icon hoặc chữ đều nhảy sang trang /search */}
        <Link href="/search" className="flex items-center">
          <svg
            className="absolute left-[195px] top-[71px] w-[24px] h-[24px] text-black cursor-pointer"
            viewBox="0 0 24 24"
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
          <div className="absolute left-[221px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui] cursor-pointer">
            SEARCH
          </div>
        </Link>

        <Link
          href="/products"
          className="absolute left-[970px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          PRODUCTS
        </Link>
        <Link
          href="/construction"
          className="absolute left-[1098px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          CONSTRUCTION
        </Link>

        <div className="absolute left-[1181px] top-[18px] w-[35px] h-[35px] text-black cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
            <path d="M7.5 20.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17 20.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3.5 4.5h2l2.1 10.5h10.1l2.3-7.5H7.1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute left-[1221px] top-[23px] w-[26px] h-[26px] text-black cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
            <path d="M12 12a4.25 4.25 0 1 0 0-8.5A4.25 4.25 0 0 0 12 12Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4.5 21c1.7-4.3 13.3-4.3 15 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default function MenuPage() {
  // Đã xóa bỏ các useState cho Search vì không còn dùng ở đây nữa
  return (
    <div className="flex flex-col flex-1 bg-white">
      <main className="w-full flex justify-center">
        <div className="relative w-[1280px] h-[732px] bg-white">
          <HeaderBar />

          {/* Top divider line */}
          <div className="absolute left-0 top-[119px] w-[1280px] h-[1px] bg-black" />

          {/* Left menu column */}
          <div className="absolute left-0 top-[119px] w-[404px] h-[613px]">
            <div className="absolute left-[8px] top-[147px] w-[282.01px] h-[1px] bg-black" />
            <div className="absolute left-[8px] top-[342px] w-[282.01px] h-[1px] bg-black" />

            <div className="absolute left-[8px] top-[55px] text-[27px] font-bold text-[#0A0A0A] [font-family:var(--font-inter),_system-ui] leading-[1.1672]">
              <Link href="/contact" className="text-[#0A0A0A] hover:opacity-70">CONTACT</Link>
            </div>
            <div className="absolute left-[7px] top-[101px] text-[27px] font-bold text-[#0A0A0A] [font-family:var(--font-inter),_system-ui] leading-[1.1672]">
              MY ACCOUNT
            </div>

            <div className="absolute left-[9px] top-[163px] text-[27px] font-bold text-[#0A0A0A] [font-family:var(--font-inter),_system-ui] leading-[1.1672]">
              PRODUCTS
            </div>
            <Link 
              href="/construction" 
              className="absolute left-[9px] top-[209px] text-[27px] font-bold text-[#0A0A0A] [font-family:var(--font-inter),_system-ui] leading-[1.1672] hover:text-gray-600 transition-colors"
            >
              CONSTRUCTION
            </Link>
            <div className="absolute left-[9px] top-[255px] text-[27px] font-bold text-[#0A0A0A] [font-family:var(--font-inter),_system-ui] leading-[1.1672]">
              ABOUT
            </div>
            <div className="absolute left-[9px] top-[296px] text-[27px] font-bold text-[#0A0A0A] [font-family:var(--font-inter),_system-ui] leading-[1.1672]">
              <Link href="/3d" className="hover:text-gray-600 transition-colors">
                3D MODELS
              </Link>
            </div>

            <div className="absolute left-[8px] top-[360px] text-[27px] font-bold text-[#0A0A0A] [font-family:var(--font-inter),_system-ui] leading-[1.1672]">
              SHOPPING CART
            </div>
            <div className="absolute left-[8px] top-[406px] text-[26px] font-bold text-[#0A0A0A] [font-family:var(--font-inter),_system-ui] leading-[1.1672]">
              Schedule Design Appointment
            </div>
          </div>

          {/* Right image columns */}
          <div className="absolute left-[404px] top-[119px] w-[876px] h-[613px]">
            <div className="absolute left-0 top-0 w-[292px] h-[612px]">
              <Image
                src="/figma/menu/menu-col-2.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute left-[292px] top-0 w-[292px] h-[613px]">
              <Image
                src="/figma/menu/menu-col-1-b335c3.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute left-[584px] top-0 w-[292px] h-[613px]">
              <Image
                src="/figma/menu/menu-col-3-7ab2c1.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}