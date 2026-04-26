"use client";

import { useEffect, useRef } from "react";
import ProductGallery from "./ProductGallery";

function formatPrice(price) {
  return `${new Intl.NumberFormat("vi-VN").format(price)} VND`;
}

function ShareIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

export default function ProductDetailSection({ product, gallery }) {
  const sectionRef = useRef(null);
  const desktopGalleryRef = useRef(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    function getWheelDelta(event) {
      const mainDelta =
        Math.abs(event.deltaY) >= Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;

      if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
        return mainDelta * 16;
      }

      if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
        return mainDelta * window.innerHeight;
      }

      return mainDelta;
    }

    function handleWindowWheel(event) {
      if (!desktopQuery.matches) {
        return;
      }

      const section = sectionRef.current;
      const galleryTrack = desktopGalleryRef.current;

      if (!section || !galleryTrack) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const isSectionVisible =
        rect.top < window.innerHeight && rect.bottom > 0;

      if (!isSectionVisible) {
        return;
      }

      const delta = getWheelDelta(event);

      if (!delta) {
        return;
      }

      const maxScroll = galleryTrack.scrollHeight - galleryTrack.clientHeight;

      if (maxScroll <= 0) {
        return;
      }

      const canScrollUp = delta < 0 && galleryTrack.scrollTop > 0;
      const canScrollDown =
        delta > 0 && galleryTrack.scrollTop < maxScroll - 1;

      if (!canScrollUp && !canScrollDown) {
        return;
      }

      event.preventDefault();
      galleryTrack.scrollTop = Math.max(
        0,
        Math.min(maxScroll, galleryTrack.scrollTop + delta)
      );
    }

    window.addEventListener("wheel", handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWindowWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-10"
    >
      <ProductGallery
        gallery={gallery}
        name={product.name}
        desktopTrackRef={desktopGalleryRef}
      />

      <aside className="md:mt-4 lg:sticky lg:top-5 lg:mt-0 lg:self-start lg:pt-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-[28px] font-bold leading-tight md:text-[36px] lg:text-[42px]">
              {product.name}
            </h1>
            <p className="mt-3 text-[22px] font-bold leading-none md:text-[26px] lg:text-[28px]">
              {formatPrice(product.price)}
            </p>
          </div>
          <button
            type="button"
            aria-label="Share product"
            className="mt-0.5 shrink-0 text-stone-700 md:mt-1 lg:mt-4"
          >
            <ShareIcon />
          </button>
        </div>

        <div className="mt-5 text-[14px] leading-7 md:text-[15px] lg:mt-6 lg:text-[14px] lg:leading-[1.7]">
          <p className="border-b border-stone-200 py-2">
            <span className="font-semibold">Designed by:</span>{" "}
            <span className="text-stone-700">{product.designedBy}</span>
          </p>
          <p className="border-b border-stone-200 py-2">
            <span className="font-semibold">Size:</span>{" "}
            <span className="text-stone-700">{product.size}</span>
          </p>
          <p className="border-b border-stone-200 py-2">
            <span className="font-semibold">Material:</span>{" "}
            <span className="text-stone-700">{product.material}</span>
          </p>
        </div>

        <div className="mt-5 md:mt-6 lg:mt-6">
          <h2 className="text-[20px] font-bold leading-none md:text-[22px] lg:text-[20px]">
            Product details
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-stone-700 md:text-[16px] lg:max-w-[42ch] lg:text-[15px] lg:leading-[1.6]">
            {product.description}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2 md:mt-6 lg:mt-7 lg:flex-row lg:items-center lg:gap-3">
          <button
            type="button"
            className="w-full rounded-full bg-black px-6 py-2.5 text-[15px] font-medium text-white transition hover:bg-stone-800 lg:w-auto lg:min-w-[132px] lg:py-3"
          >
            Add to cart
          </button>
          <button
            type="button"
            className="w-full rounded-full border border-black px-6 py-2.5 text-[15px] font-medium text-black transition hover:bg-stone-50 lg:w-auto lg:min-w-[132px] lg:py-3"
          >
            Buy now
          </button>
        </div>
      </aside>
    </section>
  );
}
