import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ShowroomSection() {
  return (
    <section className="mt-14 flex w-full items-center justify-center overflow-hidden md:mt-16 lg:mt-20">
      <div className="interactive-media reveal-on-scroll relative flex aspect-[16/5] min-h-[220px] w-full items-center justify-center overflow-hidden md:min-h-0">
        <Image
          fill
          sizes="100vw"
          alt="OWLHOME outdoor showroom with yellow lounge seating by the sea"
          src="/showroom.png"
          className="object-cover object-center"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 text-center">
          <h2 className="font-cormorant text-[34px] font-normal leading-[38px] text-white md:text-[40px] md:leading-[44px] lg:text-[44px] lg:leading-[48px]">
            Visit Our Showroom
          </h2>
          <p className="mt-3 max-w-[640px] font-inter text-[13px] font-normal leading-5 text-white md:text-sm">
            Experience our curated collections and meet with our design experts
          </p>
          <Button
            variant="secondary"
            icon
            className="mt-4 h-[42px] min-w-[150px] px-7 text-[12px] leading-none shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:bg-white"
          >
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
}

