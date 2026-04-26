export default function AboutFooter({ footer }) {
  return (
    <footer className="w-full bg-[#111] py-5 px-5 text-[#ddd6cc]">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        {/* LEFT */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start">
          <span className="text-[12px] font-medium text-white">{footer.copyright}</span>
          {footer.links.map((link) => (
            <span key={link} className="text-[11px] text-white/50 cursor-pointer hover:text-white transition-colors">
              &nbsp;|&nbsp;{link}
            </span>
          ))}
        </div>

        {/* RIGHT — Follow us + Icons */}
        <div className="flex items-center justify-center gap-2 sm:justify-end">
          <span className="text-[11px] text-white/50 mr-1">Follow us on:</span>

          {/* Instagram */}
          <a href="#" className="flex h-7 w-7 items-center justify-center rounded bg-white text-black hover:bg-[#b89968] hover:text-white transition-colors">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" className="flex h-7 w-7 items-center justify-center rounded bg-white text-black hover:bg-[#b89968] hover:text-white transition-colors">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          {/* Google */}
          <a href="#" className="flex h-7 w-7 items-center justify-center rounded bg-white text-black hover:bg-[#b89968] hover:text-white transition-colors">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z" />
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}