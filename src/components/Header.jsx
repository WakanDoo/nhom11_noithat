"use client";

import Image from "next/image";
import Link from "next/link";

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M3 6.5h18v2H3zm0 4.5h18v2H3zm0 4.5h18v2H3z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export default function Header({ breadcrumb = [], showHero = false }) {
  return (
    <div className="w-full bg-white">
      <header className="grid min-h-[58px] w-full grid-cols-[1fr_auto_1fr] items-center gap-3 px-3 py-3 md:min-h-[64px] md:px-6 lg:min-h-[78px] lg:items-end lg:px-4 lg:pb-3">
        {/* Left Nav */}
        <nav className="flex items-center justify-start gap-3 text-[12px] font-semibold uppercase text-black md:gap-4 md:text-[13px] lg:gap-3 lg:text-[13px]">
          <button
            type="button"
            className="inline-flex items-center gap-1 bg-transparent p-0"
          >
            <MenuIcon />
            <span className="hidden lg:inline">Menu</span>
          </button>
          <button
            type="button"
            className="hidden bg-transparent p-0 lg:inline-flex"
          >
            About
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1 bg-transparent p-0"
          >
            <SearchIcon />
            <span className="hidden lg:inline">Search</span>
          </button>
        </nav>

        {/* Logo */}
        <div className="text-center">
          <Link
            href="/"
            className="font-serif text-[18px] font-medium uppercase leading-none tracking-[0.22em] text-black md:text-[23px] lg:text-[44px]"
          >
            OWLHOME
          </Link>
        </div>

        {/* Right Nav */}
        <nav className="flex items-center justify-end gap-2 text-[12px] font-semibold uppercase text-black md:gap-3 md:text-[13px] lg:gap-4 lg:text-[13px]">
          <button
            type="button"
            className="hidden bg-transparent p-0 lg:inline-flex"
          >
            Products
          </button>
          <button
            type="button"
            className="hidden bg-transparent p-0 lg:inline-flex"
          >
            Construction
          </button>
          <button
            type="button"
            aria-label="Shopping cart"
            className="inline-flex h-5 w-5 items-center justify-center bg-transparent p-0"
          >
            <Image
              width={18}
              height={18}
              sizes="18px"
              alt=""
              src="/icon-shopping-cart.svg"
              className="h-4 w-4 lg:h-5 lg:w-5"
            />
          </button>
          <button
            type="button"
            aria-label="User"
            className="inline-flex h-5 w-5 items-center justify-center bg-transparent p-0"
          >
            <Image
              width={18}
              height={18}
              sizes="18px"
              alt=""
              src="/icon-user.svg"
              className="h-4 w-4 lg:h-5 lg:w-5"
            />
          </button>
        </nav>
      </header>

      {breadcrumb.length > 0 ? (
        <nav className="px-3 pb-2 text-[12px] text-stone-700 md:px-8 md:text-[13px] lg:-mt-3 lg:px-9 lg:pb-0 lg:text-[13px]">
          <ol className="flex flex-wrap items-center gap-1">
            {breadcrumb.map((item, index) => (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1">
                {item.href ? (
                  <Link href={item.href} className="hover:text-black">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < breadcrumb.length - 1 ? <span>/</span> : null}
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      {showHero ? (
        <section className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden md:min-h-[360px] lg:min-h-[440px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/contactus.png)" }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-2 px-6 py-6 text-center">
            <h1 className="m-0 font-serif text-[32px] font-medium leading-9 tracking-wide text-white">
              Contact Us
            </h1>
            <p className="m-0 text-base italic text-white">
              Let&apos;s create your perfect space together
            </p>
          </div>
        </section>
      ) : null}
    </div>
  );
}
