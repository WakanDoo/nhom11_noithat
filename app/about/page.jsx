import AboutFooter from "../../components/about/AboutFooter";
import AboutHero from "../../components/about/AboutHero";
import AboutNavbar from "../../components/about/AboutNavbar";
import AboutPromise from "../../components/about/AboutPromise";
import AboutStats from "../../components/about/AboutStats";
import AboutStory from "../../components/about/AboutStory";
import AboutTeam from "../../components/about/AboutTeam";
import AboutWhyChoose from "../../components/about/AboutWhyChoose";
import { aboutContent } from "../../data/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ed]">
      <div className="mx-auto w-full max-w-[420px] bg-[#fbf8f3] shadow-[0_0_0_1px_#efe8dd] md:max-w-[900px] lg:max-w-[1120px]">
        <AboutNavbar logo={aboutContent.nav.centerLogo} />
        <AboutHero
          subtitle={aboutContent.hero.subtitle}
          title={aboutContent.hero.title}
          breadcrumb={aboutContent.hero.breadcrumb}
        />
        <AboutStory section={aboutContent.story} />
        <AboutWhyChoose section={aboutContent.expertise} />
        <AboutPromise section={aboutContent.promise} />
        <AboutTeam section={aboutContent.team} />
        <AboutStats stats={aboutContent.stats} />
        <AboutFooter footer={aboutContent.footer} />
      </div>
    </main>
  );
}
