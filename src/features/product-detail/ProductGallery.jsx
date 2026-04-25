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
      <div className="hidden lg:flex lg:min-h-[520px] lg:items-center lg:justify-center lg:pt-12">
        <div className="relative h-[330px] w-full max-w-[720px] xl:h-[360px] xl:max-w-[780px]">
          <Image
            src={galleryImages[0]}
            alt={`${name} view 1`}
            fill
            priority
            sizes="(min-width: 1280px) 760px, (min-width: 1024px) 60vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>

      <div className="lg:hidden">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="-mx-5 flex snap-x snap-mandatory overflow-x-auto px-5 [scrollbar-width:none] md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {galleryImages.map((image, index) => (
            <div
              key={`${image}-tablet-${index}`}
              className="relative flex min-h-[210px] min-w-full snap-center items-center justify-center bg-white md:min-h-[420px]"
            >
              <div
                className={`relative w-full ${
                  index === 0
                    ? "h-[175px] max-w-[335px] md:h-[330px] md:max-w-[700px]"
                    : "h-[155px] max-w-[315px] md:h-[300px] md:max-w-[660px]"
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

        <div className="-mt-1 flex justify-center md:-mt-2">
          <div className="flex items-center gap-1.5 px-4 md:px-10">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                onClick={() => scrollToIndex(index)}
                className={`h-1.5 w-1.5 rounded-full transition md:h-2 md:w-2 ${
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
