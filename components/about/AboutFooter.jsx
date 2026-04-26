export default function AboutFooter({ footer }) {
  return (
    <footer className="mt-1 bg-[#0f0f0f] px-3 py-2 text-[7px] tracking-[0.06em] text-[#ddd6cc]">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-white/90">
          <span>{footer.copyright}</span>
          {footer.links.map((link) => (
            <span key={link} className="text-white/80">
              | {link}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span className="mr-1 text-[6px] text-white/80">{footer.social[0]}</span>
          {footer.social.slice(1).map((item) => (
            <span
              key={item}
              className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-white text-[7px] font-semibold text-black"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
