import BrandStory from "@/components/BrandStory";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promise from "@/components/Promise";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
