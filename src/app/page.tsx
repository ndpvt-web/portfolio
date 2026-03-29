import Hero from "@/components/hero";
import StatsBar from "@/components/stats-bar";
import BentoGrid from "@/components/bento-grid";
import FeaturedIn from "@/components/featured-in";
import CurrentlyWorkingOn from "@/components/currently-working-on";
import ContactCta from "@/components/contact-cta";
import Section from "@/components/section";
import { getProjectsByTier } from "@/data/projects";

export default function HomePage() {
  const heroProjects = getProjectsByTier(1);

  return (
    <>
      <Hero />
      <Section variant="mid">
        <StatsBar />
      </Section>
      <Section variant="dark">
        <BentoGrid projects={heroProjects} />
      </Section>
      <Section variant="mid">
        <FeaturedIn />
      </Section>
      <Section variant="dark">
        <CurrentlyWorkingOn />
      </Section>
      <Section variant="mid" id="contact">
        <ContactCta />
      </Section>
    </>
  );
}
