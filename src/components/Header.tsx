"use client";

type HeaderProps = {
  onAccountClick: () => void;
};

export function Header({ onAccountClick }: HeaderProps) {
  return (
    <header className="relative z-30 border border-[#111] bg-white">
      <div className="grid min-h-[82px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-3 py-4 sm:px-5 lg:min-h-[121px] lg:px-[18px]">
        <nav className="flex min-w-0 items-center gap-4 text-[14px] font-semibold uppercase tracking-normal text-[#0a0a0a] sm:gap-6 lg:text-[20px]">
          <button className="flex items-center gap-1" type="button">
            <span className="flex h-[18px] w-[18px] flex-col justify-center gap-[3px]" aria-hidden="true">
              <span className="h-[3px] w-full bg-[#111]" />
              <span className="h-[3px] w-full bg-[#111]" />
              <span className="h-[3px] w-full bg-[#111]" />
            </span>
            Menu
          </button>
          <button className="hidden sm:inline" type="button">
            About
          </button>
          <button className="hidden items-center gap-2 sm:flex" type="button">
            <SearchIcon />
            Search
          </button>
        </nav>

        <a
          href="/account"
          className="font-serif text-[32px] uppercase leading-none tracking-[0.12em] sm:text-[48px] lg:text-[64px]"
        >
          OWLHOME
        </a>

        <nav className="flex min-w-0 items-center justify-end gap-4 text-[14px] font-semibold uppercase tracking-normal text-[#0a0a0a] sm:gap-6 lg:text-[20px]">
          <button className="hidden lg:inline" type="button">
            Products
          </button>
          <button className="hidden lg:inline" type="button">
            Construction
          </button>
          <button aria-label="Cart" className="hidden sm:block" type="button">
            <CartIcon />
          </button>
          <button aria-label="Account" onClick={onAccountClick} type="button">
            <UserIcon />
          </button>
        </nav>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24">
      <circle cx="10.5" cy="10.5" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 5 5" stroke="currentColor" strokeLinecap="square" strokeWidth="1.8" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8 lg:h-[35px] lg:w-[35px]" fill="none" viewBox="0 0 35 35">
      <path d="M7 7h3.2l2.7 15.3h14.4L30 10.5H12" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15" cy="29" r="1.8" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="26" cy="29" r="1.8" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 28 28">
      <circle cx="14" cy="8.2" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 24c1.1-5 4-7.5 8.5-7.5s7.4 2.5 8.5 7.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
