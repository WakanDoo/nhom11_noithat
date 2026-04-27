import type { AccountNavItem } from "../types";

type AccountSidebarProps = {
  activeItem: AccountNavItem;
  onLogout: () => void;
};

const items: AccountNavItem[] = ["ACCOUNT INFORMATION", "ORDERS", "WISHLIST", "SETTINGS", "LOGOUT"];

export function AccountSidebar({ activeItem, onLogout }: AccountSidebarProps) {
  return (
    <aside className="w-full lg:w-64">
      <nav className="flex overflow-x-auto lg:block" aria-label="Account navigation">
        {items.map((item) => {
          const active = item === activeItem;
          const isLogout = item === "LOGOUT";

          return (
            <button
              className={`relative min-h-[49px] min-w-max border-b border-black/10 px-5 py-4 text-left text-[11px] font-medium uppercase leading-[16.5px] tracking-[0.12em] lg:block lg:w-full ${
                active ? "border-l-2 border-l-black font-semibold text-black" : "text-black/50 hover:text-black"
              }`}
              key={item}
              onClick={isLogout ? onLogout : undefined}
              type="button"
            >
              {item}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
