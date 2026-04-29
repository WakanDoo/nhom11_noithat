import { asset } from "@/lib/asset";

export function ContactHeroSection() {
  return (
    <section className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden md:min-h-[360px] lg:min-h-[440px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${asset("/contactus.png")})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 px-6 py-6 text-center">
        <h1 className="m-0 font-serif text-[32px] font-medium leading-9 tracking-wide text-white md:text-[44px] lg:text-[56px]">
          Contact Us
        </h1>
        <p className="m-0 text-base font-normal italic text-white md:text-lg">
          Let&apos;s create your perfect space together
        </p>
      </div>
    </section>
  );
}
