"use client";

import Image from "next/image";
import Link from "next/link";
import { CartBadgeLink } from "@/components/CartBadgeLink";

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M14.5 5.5L8 12l6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
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
  );
}

function ShoppingCartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
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
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
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
  );
}

function OwlhomeLogo() {
  // User request: keep the wordmark straight (not curved).
  return (
    <div className="text-[#0A0A0A] [font-family:var(--font-cormorant),_serif] font-medium tracking-[0.08em] text-[64px] leading-[55px]">
      OWLHOME
    </div>
  );
}

function FigmaVideo({
  mp4Src,
  posterSrc,
  className,
}: {
  mp4Src: string;
  posterSrc: string;
  className?: string;
}) {
  return (
    <video
      className={className}
      poster={posterSrc}
      controls
      playsInline
      preload="metadata"
    >
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
}

export default function Home() { 
  return (
    <div className="flex flex-col flex-1 bg-white">
      <main className="w-full flex justify-center">
        {/* Figma canvas width */}
        <div className="relative w-[1280px] min-h-[2888px] bg-white">
          {/* Top navigation / search bar (y=0..118) */}
          <header className="absolute left-0 top-0 w-full h-[118px] bg-white">
            <div className="absolute left-0 top-0 w-full h-[118px]" />

            {/* Hamburger icon (Figma Group 24): x=17.79 y=78.5 w=18.78 h=12 */}
            <div className="absolute left-[17.79px] top-[76px] w-[18.78px] h-[12px] flex flex-col justify-between">
              <div className="h-[2px] bg-black/90" />
              <div className="h-[2.5px] bg-black/90" />
              <div className="h-[2.5px] bg-black/90" />
            </div>

            {/* OWLHOME (Figma Group 11): x=278.66 y=21.77 w=635.35 h=195.61 */}
            <Link href="/" className="absolute left-[500px] top-[22px] w-[635.35px] h-[96px] flex items-center">
              <OwlhomeLogo />
            </Link>

            <nav className="absolute left-0 top-0 w-full h-full">
              {/* Order per Figma: hamburger, MENU, ABOUT, search icon, SEARCH, OWLHOME, PRODUCTS, CONSTRUCTION */}
              <a
                href="/menu"
                className="absolute left-[40.53px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
              >
                MENU
              </a>
              <a
                href="/about"
                className="absolute left-[113px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
              >
                ABOUT
              </a>

              {/* Search icon + SEARCH label */}
              {/* Cụm SEARCH mới: Click là chuyển trang, không hiện gì thêm */}
              <Link href="/search" className="absolute left-[195px] top-[71px] flex items-center gap-2 cursor-pointer">
                <div className="w-[24px] h-[24px] text-black">
                  <SearchIcon className="w-full h-full" />
                </div>
                <div className="text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]">
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

              {/* Right icons */}
              <CartBadgeLink className="absolute left-[1181px] top-[18px] w-[35px] h-[35px] text-black hover:text-[#c9a96e] transition-colors">
                <ShoppingCartIcon className="w-full h-full" />
              </CartBadgeLink>
              <Link href="/login" className="absolute left-[1221px] top-[23px] w-[26px] h-[26px] text-black hover:text-[#c9a96e] transition-colors">
                <UserIcon className="w-full h-full" />
              </Link>
            </nav>
          </header>
          
          {/* Main content starts at y=118 */}
          <section className="absolute left-0 top-[118px] w-[1280px]">
            {/* Hero (y=0..600) */}
            <div className="relative w-[1280px] h-[600px]">
              <FigmaVideo
                mp4Src="/video/video1.mp4"
                posterSrc="/figma/home/home-hero.png"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute left-[358px] top-[446px] text-[48px] font-light tracking-[0.08em] text-white [font-family:var(--font-inter),_system-ui]">
                THE NEW COLLECTION
              </div>
              <div className="absolute left-[584px] top-[512px] text-[48px] font-light tracking-[0.08em] text-white [font-family:var(--font-inter),_system-ui]">
                2026
              </div>
              {/* Figma line is offset by parent group; net-align to hero edge */}
              <div className="absolute left-0 top-[600px] w-[1280px] h-[2px] bg-black" />
            </div>

            {/* Video 2 block (y=614..1214) */}
            <div className="relative w-[1280px] h-[600px] mt-[14px]">
              <FigmaVideo
                mp4Src="/video/video2.mp4"
                posterSrc="/figma/home/home-video-2.png"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute left-[52px] top-[81px] text-[20px] tracking-[0.08em] text-black [font-family:var(--font-inter),_system-ui]">
                Designed by Sacha Lakic
              </div>
              <div className="absolute left-[43px] top-[112px] flex items-center gap-2 text-black">
                <ChevronLeftIcon className="w-[33px] h-[23px] rotate-180" />
                <span className="text-[20px] tracking-[0.08em] [font-family:var(--font-inter),_system-ui]">
                  more
                </span>
              </div>
              <div className="absolute left-[42px] top-[23px] px-[10px] py-[10px] flex items-center justify-center text-black">
                <span className="text-[40px] font-bold tracking-[0.08em] [font-family:var(--font-inter),_system-ui]">
                  Bubble Curve
                </span>
              </div>
            </div>

            {/* Video 3 block (y=1232..1832) */}
            <div className="relative w-[1280px] h-[600px] mt-[18px]">
              <FigmaVideo
                mp4Src="/videos/home-video-3.mp4"
                posterSrc="/figma/home/home-video-3.png"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute left-[52px] top-[86px] text-[20px] tracking-[0.08em] text-white [font-family:var(--font-inter),_system-ui]">
                Designed by Fritsch &amp; Vivien
              </div>
              <div className="absolute left-[52px] top-[30px] text-[40px] font-bold tracking-[0.08em] text-white [font-family:var(--font-inter),_system-ui]">
                Serpentine
              </div>
              <div className="absolute left-[43px] top-[118px] flex items-center gap-2 text-white">
                <ChevronLeftIcon className="w-[33px] h-[23px] rotate-180" />
                <span className="text-[20px] tracking-[0.08em] [font-family:var(--font-inter),_system-ui]">
                  more
                </span>
              </div>
            </div>

            {/* Tile grid section (y=1848..2536) */}
            {/* Make left tile height match right grid (2 rows × 300 = 600) */}
            <div className="relative w-[1280px] h-[600px] mt-[16px]">
              {/* Left tile */}
              <div className="absolute left-0 top-0 w-[500px] h-[600px]">
                <FigmaVideo
                  mp4Src="/video/video4.mp4"
                  posterSrc="/figma/home/home-video-4.png"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Don't block clicks on the video controls */}
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              </div>

              {/* Right grid */}
              <div className="absolute left-[500px] top-0 w-[780px] h-[600px]">
                {/* Top row */}
                <div className="absolute left-0 top-0 w-[520px] h-[300px]">
                  <Image
                    src="/figma/home/home-tile-petale.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-[16px]">
                    <div className="text-[28px] font-light tracking-[0.05em] text-white text-center [font-family:var(--font-inter),_system-ui]">
                      Pétale
                    </div>
                  </div>
                </div>
                <div className="absolute left-[520px] top-0 w-[260px] h-[300px]">
                  <Image
                    src="/figma/home/home-tile-niwa.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-[16px]">
                    <div className="text-[28px] font-light tracking-[0.05em] text-white text-center [font-family:var(--font-inter),_system-ui]">
                      Niwa
                    </div>
                  </div>
                </div>

                {/* Bottom row */}
                <div className="absolute left-0 top-[300px] w-[260px] h-[300px]">
                  <Image
                    src="/figma/home/home-tile-en-tete.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-[16px]">
                    <div className="text-[28px] font-light tracking-[0.05em] text-white text-center [font-family:var(--font-inter),_system-ui]">
                      En-Tête
                    </div>
                  </div>
                </div>
                <div className="absolute left-[260px] top-[300px] w-[520px] h-[300px]">
                  <Image
                    src="/figma/home/home-tile-trinta.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-[16px]">
                    <div className="text-[28px] font-light tracking-[0.05em] text-white text-center [font-family:var(--font-inter),_system-ui]">
                      Trinta
                    </div>
                  </div>
                </div>

                {/* Arrows */}
                <div className="absolute left-[8px] top-[541px] w-[60px] h-[49px] bg-transparent flex items-center justify-center text-[#363636]">
                  <ChevronLeftIcon className="w-[24px] h-[24px]" />
                </div>
                <div className="absolute left-[425px] top-[541px] w-[60px] h-[49px] bg-transparent flex items-center justify-center text-[#363636] rotate-180">
                  <ChevronLeftIcon className="w-[24px] h-[24px]" />
                </div>
              </div>
            </div>

            {/* Footer info bar (y~2633) */}
            <footer className="relative w-[1280px] h-[153px] mt-[97px]">
              <div className="absolute left-0 top-[10px] w-[1280px] h-[127px] bg-black" />
              <div className="absolute left-[21px] top-[33px] text-[20px] font-light tracking-[0.05em] text-white [font-family:var(--font-inter),_system-ui]">
                <Link href="/contact" className="text-white hover:opacity-80">CONTACT</Link>
              </div>
              <div className="absolute left-[152px] top-[33px] text-[20px] font-light tracking-[0.05em] text-white [font-family:var(--font-inter),_system-ui]">
                ALL STORES
              </div>
              <div className="absolute left-[304px] top-[33px] text-[20px] font-light tracking-[0.05em] text-white [font-family:var(--font-inter),_system-ui]">
                PRIVACY AND DATA PROTEPROTECTION POLICY
              </div>

              <div className="absolute left-[140px] top-[37px] w-[2px] h-[16px] bg-white" />
              <div className="absolute left-[292px] top-[37px] w-[2px] h-[16px] bg-white" />

              <div className="absolute left-[980px] top-[62px] text-[14px] font-normal text-white [font-family:var(--font-inter),_system-ui]">
                Follow us on:
              </div>

              {/* Social images */}
              <div className="absolute left-[1077px] top-[9px] w-[83px] h-[117px]">
                <Image
                  src="/figma/home/footer-ig.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-[1136px] top-[22px] w-[63px] h-[90px]">
                <Image
                  src="/figma/home/footer-facebook.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-[1172px] top-0 w-[95px] h-[135px]">
                <Image
                  src="/figma/home/footer-gmail.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-0 top-[38px] w-[81px] h-[115px]">
                <Image
                  src="/figma/home/footer-extra.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-[64px] top-[86px] text-[16px] font-medium text-white [font-family:var(--font-inter),_system-ui]">
                owlhome@gmail.com
              </div>
            </footer>
          </section>
        </div>
      </main>
    </div>
  );
}
