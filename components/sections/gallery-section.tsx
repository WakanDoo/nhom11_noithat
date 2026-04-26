import Image from "next/image";

const images = [
  {
    src: "/ctact.png",
    alt: "Gallery image showing interior design",
  },
  {
    src: "/ImageWithFallback@2x.png",
    alt: "Gallery image showing furniture collection",
  },
  {
    src: "/ImageWithFallback1@2x.png",
    alt: "Gallery image showing room styling",
  },
];

export function GallerySection() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-10 pb-4 md:pb-6 lg:pb-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {images.map((img) => (
          <div
            key={img.src}
            className="interactive-media reveal-on-scroll w-full aspect-gallery overflow-hidden rounded-2xl"
          >
            <Image
              loading="lazy"
              width={380}
              height={260}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt={img.alt}
              src={img.src}
              className="w-full h-full object-cover block"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

