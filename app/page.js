import AboutFooter from "../components/about/AboutFooter";
import AboutHero from "../components/about/AboutHero";
import AboutNavbar from "../components/about/AboutNavbar";
import AboutPromise from "../components/about/AboutPromise";
import AboutStats from "../components/about/AboutStats";
import AboutStory from "../components/about/AboutStory";
import AboutTeam from "../components/about/AboutTeam";
import AboutWhyChoose from "../components/about/AboutWhyChoose";
import { aboutContent } from "../data/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ed]">
      <AboutNavbar logo={aboutContent.nav.centerLogo} />

      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
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
      </div>

      <AboutFooter footer={aboutContent.footer} />
    </main>
  );
}