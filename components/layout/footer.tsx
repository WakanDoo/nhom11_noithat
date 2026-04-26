import React from "react";

export function Footer() {
  return (
    <footer className="w-full px-4 md:px-6 lg:px-10 py-8 md:py-10 lg:pt-12 lg:pb-8 bg-[#121212] text-white flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 lg:gap-8">
      <div className="max-w-[320px]">
        <h2 className="font-cormorant text-heading-4 text-white tracking-wide m-0">
          OWLHOME
        </h2>
        <p className="mt-2.5 font-inter text-body-xs text-white/[0.72] m-0">
          Crafting timeless interiors since 2010
        </p>
      </div>
      <div className="flex flex-col items-start gap-2 pt-0.5">
        <p className="font-inter text-label uppercase tracking-[1.2px] text-white/60 m-0">
          Follow Us
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="interactive-link interactive-link-light bg-transparent border-0 p-0 text-white font-inter text-body-xs cursor-pointer hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-4 focus-visible:ring-offset-[#121212]"
          >
            Instagram
          </button>
          <button
            type="button"
            className="interactive-link interactive-link-light bg-transparent border-0 p-0 text-white font-inter text-body-xs cursor-pointer hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-4 focus-visible:ring-offset-[#121212]"
          >
            Pinterest
          </button>
          <button
            type="button"
            className="interactive-link interactive-link-light bg-transparent border-0 p-0 text-white font-inter text-body-xs cursor-pointer hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-4 focus-visible:ring-offset-[#121212]"
          >
            LinkedIn
          </button>
        </div>
      </div>
    </footer>
  );
}

