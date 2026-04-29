import RevealSection from "@/components/about/RevealSection";
import Image from "next/image";

export default function BrandStory() {
  return (
    <RevealSection
      className="story-section split-section"
      aria-labelledby="brand-story-title"
    >
      <div className="section-image story-image image-hover">
        <Image
          src="/assets/images/brand-story.jpg"
          alt="Luxury OWLHOME living room interior"
          fill
          sizes="(max-width: 1024px) 100vw, 410px"
          priority
        />
      </div>
      <span className="decor-ring story-ring" aria-hidden="true" />
      <article className="content-card story-card">
        <p className="card-kicker">Our Journey</p>
        <h2 id="brand-story-title">Brand Story</h2>
        <p>
          Inspired by the owl &ndash; a symbol of wisdom and vision &ndash; OWLHOME
          redefines how living spaces are created. A home is not merely a place
          to stay, but a personal statement, shaped by identity, emotion, and
          individuality.
        </p>
        <p>
          More than furniture, OWLHOME delivers tailored interior solutions
          through the seamless fusion of modern technology and sophisticated
          design. From concept to reality, we craft spaces that are deeply
          personal, elegantly functional, and distinctly yours.
        </p>
        <blockquote>
          &quot;Design is not just what it looks like. Design is how it works.&quot;
          &mdash; Steve Jobs
        </blockquote>
      </article>
    </RevealSection>
  );
}
