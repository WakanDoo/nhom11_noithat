import Link from "next/link";
import { inter } from "@/lib/fonts";

const footerLinks = [
  { href: "mailto:owlhome@gmail.com", label: "CONTACT" },
  { href: "/products", label: "ALL STORES" },
  { href: "#", label: "PRIVACY AND DATA PROTECTION POLICY" },
] as const;

const socialLinks = [
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    ariaLabel: "Visit Owlhome on Instagram",
    icon: <InstagramIcon />,
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    ariaLabel: "Visit Owlhome on Facebook",
    icon: <FacebookIcon />,
  },
  {
    href: "mailto:owlhome@gmail.com",
    label: "Gmail",
    ariaLabel: "Email Owlhome on Gmail",
    icon: <GmailIcon />,
  },
] as const;

function EnvelopeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-white/72"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M3.5 6.5h17v11h-17z" />
      <path d="M4.5 8l7.5 6 7.5-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.25" cy="6.75" r="1.15" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.4 20.5v-7.1h2.4l.4-2.8h-2.8V8.8c0-.8.3-1.4 1.5-1.4h1.5V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.7v2.1H8.5v2.8h2.3v7.1z" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg aria-hidden="true" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none">
      <path d="M4 7.5l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 7h15v10h-15z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[#050505] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid gap-10 border-t border-white/12 pt-8 sm:gap-12 sm:pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)] lg:items-end">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
            <div className="space-y-8">
              <nav aria-label="Footer" className={`${inter.className} max-w-160`}>
                <ul className="grid gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white/88 sm:text-[12px]">
                  {footerLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center transition-colors duration-300 hover:text-white/62"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <a
                href="mailto:owlhome@gmail.com"
                className={`${inter.className} inline-flex items-center gap-3 text-[15px] font-medium tracking-[-0.02em] text-white transition-colors duration-300 hover:text-white/72 sm:text-[17px]`}
              >
                <EnvelopeIcon />
                <span>owlhome@gmail.com</span>
              </a>
            </div>

            <p className={`${inter.className} text-[10px] uppercase tracking-[0.28em] text-white/36 lg:text-right`}>
              Premium furniture curation
            </p>
          </div>

          <div className="justify-self-start lg:justify-self-end">
            <div className="flex flex-col gap-4 sm:gap-5 lg:items-end">
              <p className={`${inter.className} text-[11px] uppercase tracking-[0.24em] text-white/62 sm:text-[12px]`}>
                Follow us on:
              </p>

              <ul className="flex flex-wrap items-center gap-3">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-label={item.ariaLabel}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group inline-flex h-11 items-center gap-3 rounded-full border border-white/14 bg-white/4 px-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/8"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white text-black transition-colors duration-300 group-hover:bg-[#f4ede8]">
                        {item.icon}
                      </span>
                      <span className={`${inter.className} text-[12px] font-medium tracking-[0.12em] uppercase text-white/90`}>
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
