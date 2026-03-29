import Image from "next/image";
import Hero from "@/components/hero";
import StatsBar from "@/components/stats-bar";
import FeaturedIn from "@/components/featured-in";
import CurrentlyWorkingOn from "@/components/currently-working-on";
import ContactCta from "@/components/contact-cta";
import Section from "@/components/section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section variant="mid">
        <StatsBar />
      </Section>
      <Section variant="mid">
        <FeaturedIn />
      </Section>
      {/* About preview */}
      <Section variant="dark">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-center">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-[var(--bg-code)] border border-[var(--bg-border)] mx-auto md:mx-0 w-[280px]">
            <Image src="/images/nivesh-speaking.jpg" alt="Nivesh Dandyan" fill className="object-cover object-top" sizes="280px" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-[var(--text-primary)]" style={{ fontSize: "var(--text-title)" }}>
              I architect AI agent systems.
            </h2>
            <p className="text-[var(--text-secondary)]" style={{ fontSize: "var(--text-body)", lineHeight: 1.7 }}>
              Currently at HappyCapy (raised $10M, $1M ARR in 15 days) where I shipped Mac Bridge and Browser Agent to 50K+ users — both solo. Studying at HKU on 100% scholarship.
            </p>
            <p className="font-mono text-[var(--accent)]" style={{ fontSize: "var(--text-small)" }}>
              Available for consulting.
            </p>
            <a href="/about" className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors w-fit">
              More about me →
            </a>
          </div>
        </div>
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
