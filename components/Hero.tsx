import RevealSection from "@/components/RevealSection";

export default function Hero() {
  return (
    <RevealSection
      className="intro-section"
    >
      <p className="section-kicker">Discover OWLHOME</p>
      <h1>ABOUT US</h1>
      <span className="gold-divider" aria-hidden="true" />
      <p className="intro-tagline">Make it yours</p>
    </RevealSection>
  );
}
