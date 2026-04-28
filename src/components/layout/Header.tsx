import Link from "next/link";
import Icon from "@/components/ui/Icon";

const leftNav = [
  { label: "MENU", icon: "bars" as const, href: "/menu" },
  { label: "ABOUT", href: "/about" },
  { label: "SEARCH", icon: "search" as const, href: "/search" },
];

const rightNav = ["PRODUCTS", "CONSTRUCTION"] as const;

export default function Header() {
  return (
    <header className="relative z-10 border-gray-300 bg-white">
      <div className="mx-auto flex max-w-400 items-center justify-between gap-4 px-4 py-4 sm:px-6 xl:px-10">
        <nav className="hidden items-center gap-6 xl:flex">
          {leftNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.16em] text-[#171717] transition-colors hover:text-[#c9a96e]"
            >
              {item.icon ? <Icon name={item.icon} size={14} /> : null}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex min-w-0 flex-1 items-center justify-between gap-4 xl:flex-none">
          <button
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#171717] xl:hidden"
            type="button"
          >
            <Icon name="bars" size={14} />
            MENU
          </button>

          <p className="truncate text-center font-(family-name:--font-brand-serif) text-4xl tracking-[0.18em] text-[#171717] sm:text-5xl">
            OWLHOME
          </p>

          <div className="flex items-center gap-2 xl:hidden">
            <button className="rounded-full p-2 transition hover:bg-white/60" type="button">
              <Icon name="cart" size={18} />
            </button>
            <button className="rounded-full p-2 transition hover:bg-white/60" type="button">
              <Icon name="user" size={18} />
            </button>
          </div>
        </div>

        <nav className="hidden items-center gap-6 xl:flex">
          {rightNav.map((item) => (
            <button
              key={item}
              className="text-sm font-semibold tracking-[0.16em] text-[#171717] transition-colors hover:text-[#c9a96e]"
              type="button"
            >
              {item}
            </button>
          ))}
          <button className="rounded-full p-2 transition hover:bg-white/60" type="button">
            <Icon name="cart" size={18} />
          </button>
          <button className="rounded-full p-2 transition hover:bg-white/60" type="button">
            <Icon name="user" size={18} />
          </button>
        </nav>
      </div>
    </header>
  );
}
