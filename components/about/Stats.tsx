import RevealSection from "@/components/about/RevealSection";

const stats = [
  {
    value: "500+",
    label: "Projects Completed",
  },
  {
    value: "50+",
    label: "Design Awards",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <RevealSection
      className="stats-section"
      aria-label="OWLHOME statistics"
    >
      {stats.map((stat) => (
        <article className="stat-item" key={stat.label}>
          <span className="stat-halo" aria-hidden="true" />
          <strong>{stat.value}</strong>
          <span className="stat-line" />
          <p>{stat.label}</p>
        </article>
      ))}
    </RevealSection>
  );
}
