"use client";

import Image from "next/image";
import React from "react";

export function Header() {
  return (
    <div className="w-full flex flex-col bg-white">
      <header className="w-full min-h-[88px] grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-6 px-4 md:px-6 lg:px-10 py-4 lg:pb-2">
        {/* Left Nav */}
        <nav className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 flex-wrap order-2 lg:order-1">
          <button
            type="button"
            className="interactive-link inline-flex items-center gap-1.5 font-inter text-body-xs font-medium text-owl-black tracking-wide bg-transparent border-0 p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-owl-black/20 focus-visible:ring-offset-4"
          >
            <span className="inline-flex items-center justify-center w-3.5 text-xs leading-none">
              &#9776;
            </span>
            MENU
          </button>
          <button
            type="button"
            className="interactive-link inline-flex items-center gap-1.5 font-inter text-body-xs font-medium text-owl-black tracking-wide bg-transparent border-0 p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-owl-black/20 focus-visible:ring-offset-4"
          >
            ABOUT
          </button>
          <button
            type="button"
            className="interactive-link inline-flex items-center gap-1.5 font-inter text-body-xs font-medium text-owl-black tracking-wide bg-transparent border-0 p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-owl-black/20 focus-visible:ring-offset-4"
          >
            <span className="inline-flex items-center justify-center w-3.5 text-xs leading-none">
              &#9906;
            </span>
            SEARCH
          </button>
        </nav>

        {/* Logo */}
        <div className="text-center order-1 lg:order-2">
          <span className="font-cormorant text-[clamp(44px,5vw,60px)] leading-none font-normal tracking-[1.4px] text-owl-black">
            OWLHOME
          </span>
        </div>

        {/* Right Nav */}
        <nav className="flex items-center justify-center lg:justify-end gap-4 md:gap-6 flex-wrap order-3">
          <button
            type="button"
            className="interactive-link inline-flex items-center gap-1.5 font-inter text-body-xs font-medium text-owl-black tracking-wide bg-transparent border-0 p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-owl-black/20 focus-visible:ring-offset-4"
          >
            PRODUCTS
          </button>
          <button
            type="button"
            className="interactive-link inline-flex items-center gap-1.5 font-inter text-body-xs font-medium text-owl-black tracking-wide bg-transparent border-0 p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-owl-black/20 focus-visible:ring-offset-4"
          >
            CONSTRUCTION
          </button>
          <button
            type="button"
            className="interactive-button w-6 h-6 inline-flex items-center justify-center rounded-full bg-transparent border-0 p-0 cursor-pointer hover:bg-owl-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-owl-black/20 focus-visible:ring-offset-4"
          >
            <Image
              width={20}
              height={20}
              sizes="24px"
              alt="Shopping cart"
              src="/icon-shopping-cart.svg"
              className="w-5 h-5"
            />
          </button>
          <button
            type="button"
            className="interactive-button w-6 h-6 inline-flex items-center justify-center rounded-full bg-transparent border-0 p-0 cursor-pointer hover:bg-owl-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-owl-black/20 focus-visible:ring-offset-4"
          >
            <Image
              width={20}
              height={20}
              sizes="24px"
              alt="User"
              src="/icon-user.svg"
              className="w-5 h-5"
            />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="interactive-media relative w-full min-h-[300px] md:min-h-[360px] lg:min-h-[440px] flex items-center justify-center overflow-hidden">
        <div
          data-media-image
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/contactus.png)" }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center px-6 py-6">
          <h1 className="font-cormorant text-[32px] leading-9 md:text-display-sm lg:text-display-md font-medium text-white tracking-wide m-0">
            Contact Us
          </h1>
          <p className="font-inter text-base md:text-body-lg italic font-normal text-[#FFFFFF] m-0">
            Let&apos;s create your perfect space together
          </p>
        </div>
      </section>
    </div>
  );
}

