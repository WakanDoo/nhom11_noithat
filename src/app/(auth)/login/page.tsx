import AuthForm from "@/components/auth/AuthForm";
import Icon from "@/components/ui/Icon";

const leftNav = [
  { label: "MENU", icon: "bars" as const },
  { label: "ABOUT" },
  { label: "SEARCH", icon: "search" as const },
];

const rightNav = ["PRODUCTS", "CONSTRUCTION"];

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4efe6] text-[#171717]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      <div className="absolute inset-0 bg-[rgba(24,19,15,0.38)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_35%)]" />

      <header className="relative z-10 border-b border-white bg-white ">
        <div className="mx-auto flex max-w-375 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <nav className="hidden items-center gap-6 lg:flex">
            {leftNav.map((item) => (
              <button
                key={item.label}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.16em] text-[#171717] transition-colors hover:text-[#c9a96e]"
                type="button"
              >
                {item.icon ? <Icon name={item.icon} size={14} /> : null}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-between gap-4 lg:flex-none">
            <button
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#171717] lg:hidden"
              type="button"
            >
              <Icon name="bars" size={14} />
              MENU
            </button>

            <p className="truncate text-center font-(family-name:--font-brand-serif) text-4xl tracking-[0.18em] sm:text-5xl">
              OWLHOME
            </p>

            <div className="flex items-center gap-3 lg:hidden">
              <button className="rounded-full p-2 transition hover:bg-white/60" type="button">
                <Icon name="cart" size={18} />
              </button>
              <button className="rounded-full p-2 transition hover:bg-white/60" type="button">
                <Icon name="user" size={18} />
              </button>
            </div>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
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

      <section className="relative z-10 grid min-h-[calc(100vh-81px)] lg:grid-cols-[1fr_minmax(480px,620px)]">
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-10 left-10 font-(family-name:--font-brand-serif) text-5xl uppercase tracking-[0.12em] text-white/90">
            Make it yours
          </div>
        </div>

        <div className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-10">
          <AuthForm />
        </div>
      </section>
    </main>
  );
}
