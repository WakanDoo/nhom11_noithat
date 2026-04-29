import RevealSection from "@/components/about/RevealSection";
import Image from "next/image";
import { asset } from "@/lib/asset";

const founders = [
  {
    name: "Lê Thị Hải Nhi",
    id: "24126164",
    image: "founder-hainhi.jpg",
  },
  {
    name: "Trần Thị Na",
    id: "24126141",
    image: "founder-nha.jpg",
  },
  {
    name: "Đỗ Thị Yến Nhi",
    id: "24126161",
    image: "founder-yennhi.jpg",
  },
  {
    name: "Nguyễn Viết Nam",
    id: "24126142",
    image: "founder-vietnam.jpg",
  },
  {
    name: "Đỗ Quốc Khánh",
    id: "24126089",
    image: "founder-quockhanh.jpg",
  },
  {
    name: "Trần Quốc Huy",
    id: "24126099",
    image: "founder-quochuy.jpg",
  },
];

export default function Founders() {
  return (
    <RevealSection
      className="founders-section"
      aria-labelledby="founders-title"
    >
      <div className="founders-heading">
        <p className="section-kicker">Meet The Visionaries</p>
        <h2 id="founders-title">Founded by 6 Members</h2>
        <span className="gold-divider" aria-hidden="true" />
      </div>
      <div className="founder-grid">
        {founders.map((founder) => (
          <article className="founder-card" key={founder.id}>
            <div className="founder-photo image-hover">
              <Image
                src={asset(`/assets/images/${founder.image}`)}
                alt={founder.name}
                fill
                loading="eager"
                sizes="(max-width: 640px) 100vw, 342px"
              />
            </div>
            <h3>{founder.name}</h3>
            <p>{founder.id}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
