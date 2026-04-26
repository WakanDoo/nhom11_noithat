"use client";

export default function AboutNavbar({ logo }) {
  return (
    <nav className="w-full border-b border-[#e0d8ce] bg-[#f7f3ed]">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">

        {/* LEFT — Hamburger + Search */}
        <div className="flex items-center gap-5">

          {/* Hamburger — 3 gạch đậm */}
          <button className="flex flex-col justify-center gap-[5px]">
            <span className="block h-[2px] w-6 bg-[#1a1a1a]" />
            <span className="block h-[2px] w-6 bg-[#1a1a1a]" />
            <span className="block h-[2px] w-6 bg-[#1a1a1a]" />
          </button>

          {/* Search — kính lúp */}
          <button className="text-[#1a1a1a]">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="10" cy="10" r="7" />
              <line x1="15.5" y1="15.5" x2="22" y2="22" />
            </svg>
          </button>

        </div>

        {/* CENTER — Logo serif */}
        <span className="font-serif text-[17px] font-normal tracking-[0.4em] text-[#1a1a1a]">
          {logo}
        </span>

        {/* RIGHT — Cart + User */}
        <div className="flex items-center gap-5 text-[#1a1a1a]">

          {/* Shopping Cart */}
          <button>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>

          {/* User */}
          <button>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </button>

        </div>

      </div>
    </nav>
  );
}