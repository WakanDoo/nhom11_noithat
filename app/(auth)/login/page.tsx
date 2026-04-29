import AuthForm from "@/components/auth/AuthForm";
import { asset } from "@/lib/asset";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#f4efe6] text-[#171717]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${asset("/bg.png")})` }}
      />
      <div className="absolute inset-0 bg-[rgba(24,19,15,0.38)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_35%)]" />

      <section className="relative z-10 grid min-h-screen lg:grid-cols-[1fr_minmax(480px,620px)]">
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
