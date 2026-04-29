import RevealSection from "@/components/about/RevealSection";
import Image from "next/image";

export default function Promise() {
  return (
    <RevealSection
      className="promise-section split-section"
      aria-labelledby="promise-title"
    >
      <span className="decor-ring promise-ring" aria-hidden="true" />
      <div className="section-image kitchen-image image-hover">
        <Image
          src="/assets/images/kitchen.jpg"
          alt="Modern OWLHOME kitchen with warm lighting"
          fill
          sizes="(max-width: 1024px) 100vw, 408px"
        />
      </div>
      <article className="promise-card">
        <p className="card-kicker">Our Commitment</p>
        <h2 id="promise-title">Our Promise</h2>
        <p>
          &quot;At OWLHOME, we don&apos;t just design rooms&mdash;we create
          sanctuaries. Spaces where memories are made, stories unfold, and life
          happens. Let us help you write the next chapter of your home&apos;s
          story.&quot;
        </p>
        <a href="#" className="promise-link">
          <span />
          Make it yours
        </a>
      </article>
    </RevealSection>
  );
}
