"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ProductGallery({
  gallery,
  images,
  name = "Product",
  desktopTrackRef,
}) {
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
        <div
          ref={desktopTrackRef}
          className="gallery-scroll h-[calc(100vh-118px)] min-h-[520px] overflow-y-auto overscroll-contain pr-2"
        >
          {galleryImages.map((image, index) => (
            <div
              key={`${image}-desktop-${index}`}
              className="flex min-h-[calc(100vh-118px)] items-center justify-center bg-white py-6"
            >
              <div className="relative h-[calc(100vh-200px)] w-full">
                <Image
                  src={image}
                  alt={`${name} view ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="70vw"
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
          className="-mx-5 flex snap-x snap-mandatory overflow-x-auto px-5 [scrollbar-width:none] md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {galleryImages.map((image, index) => (
            <div
              key={`${image}-tablet-${index}`}
              className="relative flex min-h-[320px] min-w-full snap-center items-center justify-center bg-white md:min-h-[520px]"
            >
              <div
                className={`relative w-full ${
                  index === 0
                    ? "h-[290px] max-w-full md:h-[480px]"
                    : "h-[260px] max-w-full md:h-[440px]"
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

        <div className="pointer-events-none relative -mt-8 flex justify-center md:-mt-10">
          <div className="pointer-events-auto flex items-center gap-1.5 md:gap-2">
            {galleryImages.map((_, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to image ${index + 1} of ${galleryImages.length}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => scrollToIndex(index)}
                  className={`rounded-full transition-all duration-200 ${
                    isActive
                      ? "h-2 w-2 bg-black md:h-2.5 md:w-2.5"
                      : "h-1.5 w-1.5 bg-stone-300 hover:bg-stone-500 md:h-2 md:w-2"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
