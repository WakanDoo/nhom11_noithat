import Image from "next/image";

const rows = [
  ["/picture/construction1/Rectangle 22.png", "/picture/construction1/Rectangle 23.png"],
  ["/picture/construction1/Rectangle 24.png", "/picture/construction1/Rectangle 25.png"],
  ["/picture/construction1/Rectangle 28.png"],
  ["/picture/construction1/Rectangle 27.png", "/picture/construction1/Rectangle 26.png"],
  ["/picture/construction1/Rectangle 29.png"],
] as const;

export default function Construction1() {
  return <ConstructionGallery title="THE EMPIRE PENTHOUSE" rows={rows} />;
}

function ConstructionGallery({ title, rows }: { title: string; rows: readonly (readonly string[])[] }) {
  return (
    <main className="bg-white">
      <div className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-12 h-[2px] w-full bg-black" />
        <div className="py-12 text-center">
          <h1 className="text-[clamp(34px,5vw,64px)] font-medium uppercase tracking-wider text-black [font-family:var(--font-roboto),_system-ui]">
            {title}
          </h1>
        </div>
        <div className="mb-16 h-[2px] w-full bg-black" />

        <div className="space-y-8 pb-20">
          {rows.map((row) => (
            <div key={row.join("|")} className={row.length === 1 ? "relative h-[360px] md:h-[500px]" : "grid gap-4 md:grid-cols-2"}>
              {row.map((src) => (
                <div key={src} className={row.length === 1 ? "absolute inset-0" : "relative aspect-square"}>
                  <Image src={src} alt="" fill className="object-cover" sizes={row.length === 1 ? "100vw" : "(max-width: 768px) 100vw, 50vw"} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
