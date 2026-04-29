import Image from "next/image";

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
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
    <video className={className} poster={posterSrc} controls playsInline preload="metadata">
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-[1280px] overflow-hidden bg-white">
        <section className="relative min-h-[420px] w-full border-b-2 border-black sm:min-h-[520px] lg:h-[600px]">
          <FigmaVideo
            mp4Src="/video/video1.mp4"
            posterSrc="/figma/home/home-hero.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-4 bottom-[88px] text-center text-[clamp(30px,4vw,48px)] font-light tracking-[0.08em] text-white [font-family:var(--font-inter),_system-ui]">
            THE NEW COLLECTION
          </div>
          <div className="absolute inset-x-4 bottom-[34px] text-center text-[clamp(30px,4vw,48px)] font-light tracking-[0.08em] text-white [font-family:var(--font-inter),_system-ui]">
            2026
          </div>
        </section>

        <section className="relative mt-[14px] min-h-[420px] w-full sm:min-h-[520px] lg:h-[600px]">
          <FigmaVideo
            mp4Src="/video/video2.mp4"
            posterSrc="/figma/home/home-video-2.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute left-5 top-8 text-[clamp(26px,3.2vw,40px)] font-bold tracking-[0.08em] text-black [font-family:var(--font-inter),_system-ui] sm:left-10">
            Bubble Curve
          </div>
          <div className="absolute left-5 top-[96px] text-[18px] tracking-[0.08em] text-black [font-family:var(--font-inter),_system-ui] sm:left-13 sm:text-[20px]">
            Designed by Sacha Lakic
          </div>
          <div className="absolute left-5 top-[132px] flex items-center gap-2 text-black sm:left-11">
            <ChevronLeftIcon className="h-[23px] w-[33px] rotate-180" />
            <span className="text-[20px] tracking-[0.08em] [font-family:var(--font-inter),_system-ui]">more</span>
          </div>
        </section>

        <section className="relative mt-[18px] min-h-[420px] w-full sm:min-h-[520px] lg:h-[600px]">
          <FigmaVideo
            mp4Src="/video/video3.mp4"
            posterSrc="/figma/home/home-video-3.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute left-5 top-8 text-[clamp(28px,3.2vw,40px)] font-bold tracking-[0.08em] text-white [font-family:var(--font-inter),_system-ui] sm:left-13">
            Serpentine
          </div>
          <div className="absolute left-5 top-[94px] text-[18px] tracking-[0.08em] text-white [font-family:var(--font-inter),_system-ui] sm:left-13 sm:text-[20px]">
            Designed by Fritsch &amp; Vivien
          </div>
          <div className="absolute left-5 top-[132px] flex items-center gap-2 text-white sm:left-11">
            <ChevronLeftIcon className="h-[23px] w-[33px] rotate-180" />
            <span className="text-[20px] tracking-[0.08em] [font-family:var(--font-inter),_system-ui]">more</span>
          </div>
        </section>

        <section className="mt-4 grid w-full bg-white lg:h-[600px] lg:grid-cols-[500px_minmax(0,1fr)]">
          <div className="relative min-h-[380px] lg:min-h-0">
            <FigmaVideo
              mp4Src="/video/video4.mp4"
              posterSrc="/figma/home/home-video-4.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/25" />
          </div>

          <div className="grid min-h-[760px] grid-cols-1 sm:min-h-[600px] sm:grid-cols-3 sm:grid-rows-2 lg:min-h-0">
            <div className="relative min-h-[300px] sm:col-span-2">
              <Image src="/figma/home/home-tile-petale.png" alt="" fill className="object-cover" />
              <TileLabel>PÃ©tale</TileLabel>
            </div>
            <div className="relative min-h-[300px]">
              <Image src="/figma/home/home-tile-niwa.png" alt="" fill className="object-cover" />
              <TileLabel>Niwa</TileLabel>
            </div>
            <div className="relative min-h-[300px]">
              <Image src="/figma/home/home-tile-en-tete.png" alt="" fill className="object-cover" />
              <TileLabel>En-TÃªte</TileLabel>
            </div>
            <div className="relative min-h-[300px] sm:col-span-2">
              <Image src="/figma/home/home-tile-trinta.png" alt="" fill className="object-cover" />
              <TileLabel>Trinta</TileLabel>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function TileLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-x-4 bottom-4 text-center text-[28px] font-light tracking-[0.05em] text-white [font-family:var(--font-inter),_system-ui]">
      {children}
    </div>
  );
}
