import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    href: "/construction/the-empire",
    title: "THE EMPIRE PENTHOUSE",
    image: "/figma/construction/construction-card-1-2d8bcc.png",
    description:
      "Imagine a living space that feels open and free-spirited, infused with luxury and modern elegance, where every detail reflects the refinement and passion of a young couple. This penthouse is not merely a place to live, but a statement of lifestyle and personal identity",
  },
  {
    href: "/construction/the-glamorous",
    title: "THE GLAMOROUS BLACK APARTMENT",
    image: "/figma/construction/construction-card-2-4e2a73.png",
    description:
      "The villa carries the essence of a rustic village, blended with a classic style. Its architectural details may appear simple at first glance, yet they embody sophistication and elegance, from the design to the choice of materials",
  },
  {
    href: "/construction/the-zeit",
    title: "THE ZEIT PENTHOUSE",
    image: "/figma/construction/construction-card-3.png",
    description:
      "Interior design is not merely about decorating a home; it is a reflection of a lifestyle and the values that both the designer and the client believe in. The choice of space, colors, materials, as well as the arrangement, all contribute to a unique identity, bringing emotion and a sense of connection between people and their living environment",
  },
] as const;

export default function Construction() {
  return (
    <main className="bg-white">
      <div className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <div className="h-[2px] w-full bg-black" />

        <div className="py-12 text-center">
          <h1 className="text-[clamp(42px,6vw,64px)] font-medium uppercase tracking-wider text-black [font-family:var(--font-roboto),_system-ui]">
            CONSTRUCTION
          </h1>
        </div>

        <div className="mb-8 h-[2px] w-full bg-black" />

        <div className="space-y-15 pb-10 pt-5">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="block">
              <article className="grid cursor-pointer items-center gap-6 transition hover:opacity-80 md:grid-cols-2">
                <div className="relative min-h-[320px] md:h-[500px]">
                  <Image src={project.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>

                <div className="min-w-0">
                  <h2 className="mb-4 text-xl font-bold">{project.title}</h2>
                  <p className="leading-relaxed text-gray-500">{project.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
