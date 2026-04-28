import BrandStory from "@/components/about/BrandStory";
import Expertise from "@/components/about/Expertise";
import AboutFooter from "@/components/about/Footer";
import Founders from "@/components/about/Founders";
import AboutHeader from "@/components/about/Header";
import Hero from "@/components/about/Hero";
import Promise from "@/components/about/Promise";
import Stats from "@/components/about/Stats";

export const metadata = {
  title: "OWLHOME - About Us",
  description: "Discover OWLHOME and meet the visionaries behind the brand.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <main id="about" className="about-page">
        <div className="page-content">
          <Hero />
          <BrandStory />
          <Expertise />
          <Promise />
          <Founders />
          <Stats />
        </div>
      </main>
      <AboutFooter />
    </>
  );
}
