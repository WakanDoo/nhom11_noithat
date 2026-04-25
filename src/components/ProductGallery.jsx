"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ProductGallery({ gallery, images, name = "Product" }) {
  const galleryImages = gallery?.length ? gallery : images?.length ? images : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  if (galleryImages.length === 0) {
    return null;
  }

  function handleScroll(event) {
    const container = event.currentTarget;
    const slideWidth = container.clientWidth;

    if (!slideWidth) {
      return;
    }

    const nextIndex = Math.round(container.scrollLeft / slideWidth);
    setActiveIndex(Math.max(0, Math.min(nextIndex, galleryImages.length - 1)));
  }

  function scrollToIndex(index) {
    const container = trackRef.current;

    if (!container) {
      return;
    }

    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  }

  return (
    <div className="bg-white">
      <div className="hidden lg:block">
        <div className="gallery-scroll max-h-[calc(100vh-160px)] space-y-6 overflow-y-auto pr-3">
          {galleryImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative flex min-h-[360px] items-center justify-center bg-white xl:min-h-[420px]"
            >
              <div
                className={`relative w-full ${
                  index === 0
                    ? "h-[280px] max-w-[620px] xl:h-[340px] xl:max-w-[700px]"
                    : "h-[250px] max-w-[580px] xl:h-[300px] xl:max-w-[650px]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${name} view ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1280px) 700px, (min-width: 1024px) 54vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="-mx-4 flex snap-x snap-mandatory gap-0 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:-mx-8 md:px-8"
        >
          {galleryImages.map((image, index) => (
            <div
              key={`${image}-tablet-${index}`}
              className="relative flex min-h-[220px] min-w-full snap-center items-center justify-center bg-white md:min-h-[420px]"
            >
              <div
                className={`relative w-full ${
                  index === 0
                    ? "h-[190px] max-w-[780px] md:h-[330px]"
                    : "h-[170px] max-w-[760px] md:h-[300px]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${name} view ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 768px) 100vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex justify-center">
          <div className="flex items-center gap-2 px-4 md:px-10">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                onClick={() => scrollToIndex(index)}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  index === activeIndex ? "bg-black" : "bg-stone-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
