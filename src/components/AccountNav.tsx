type AccountNavProps = {
  onLogout: () => void;
};

const items = ["ACCOUNT INFORMATION", "ORDERS", "WISHLIST", "SETTINGS"];

export function AccountNav({ onLogout }: AccountNavProps) {
  return (
    <aside className="border-b border-[#111] lg:border-b-0 lg:border-r">
      <nav className="flex overflow-x-auto lg:block">
        {items.map((item) => (
          <button
            className={`min-w-max border-r border-[#111] px-4 py-4 text-left text-[11px] uppercase tracking-editorial lg:block lg:w-full lg:border-b lg:border-r-0 lg:px-0 lg:py-5 ${
              item === "ACCOUNT INFORMATION" ? "font-bold underline underline-offset-4" : "text-[#555] hover:text-[#111]"
            }`}
            key={item}
            type="button"
          >
            {item}
          </button>
        ))}
        <button
          className="min-w-max px-4 py-4 text-left text-[11px] uppercase tracking-editorial text-[#555] hover:text-[#111] lg:block lg:w-full lg:border-b lg:px-0 lg:py-5"
          onClick={onLogout}
          type="button"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}
