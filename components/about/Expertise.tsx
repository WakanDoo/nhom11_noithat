import RevealSection from "@/components/about/RevealSection";
import Image from "next/image";

export default function Expertise() {
  return (
    <RevealSection
      className="why-section split-section"
      aria-labelledby="why-title"
    >
      <article className="content-card why-card">
        <p className="card-kicker">Our Expertise</p>
        <h2 id="why-title">Why Choose OWLHOME?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Personalization at its Core</h3>
            <p>
              Every project begins with you&mdash;your lifestyle, your taste,
              your dreams. Our designers take the time to understand what makes
              your space truly yours, creating environments that reflect who you
              are.
            </p>
          </div>
          <div className="feature-item">
            <h3>Advanced 3D Visualization</h3>
            <p>
              See your space come to life before it&apos;s built. Our
              state-of-the-art 3D rendering technology allows you to walk
              through your future home, make adjustments in real-time, and
              perfect every detail.
            </p>
          </div>
          <div className="feature-item">
            <h3>AI-Powered Design Assistance</h3>
            <p>
              Our intelligent design platform learns from your preferences,
              suggesting furniture, colors, and layouts that match your style
              while staying within your budget.
            </p>
          </div>
        </div>
      </article>
      <span className="decor-ring why-ring" aria-hidden="true" />
      <div className="section-image bedroom-image image-hover">
        <Image
          src="/assets/images/bedroom.jpg"
          alt="Calm OWLHOME bedroom with warm wood flooring"
          fill
          sizes="(max-width: 1024px) 100vw, 419px"
        />
      </div>
    </RevealSection>
  );
}
