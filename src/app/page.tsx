import Image from "next/image";
import Hero from "@/components/hero";
import FeaturedIn from "@/components/featured-in";
import CurrentlyWorkingOn from "@/components/currently-working-on";
import ContactCta from "@/components/contact-cta";
import Section from "@/components/section";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About */}
      <Section variant="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[var(--bg-code)] border border-[var(--bg-border)]">
            <div className="absolute top-4 left-4 flex gap-1.5 z-10">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <Image
              src="/images/nivesh-speaking.jpg"
              alt="Nivesh Dandyan speaking at HappyCapy Hong Kong launch event"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2
              className="font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display)", letterSpacing: "-0.03em" }}
            >
              I architect AI agent systems.
            </h2>

            <div className="flex flex-col gap-4 text-[var(--text-secondary)]" style={{ fontSize: "var(--text-body)", lineHeight: 1.7 }}>
              <p>
                Currently at <strong className="text-[var(--text-primary)]">HappyCapy</strong> (raised
                $10M, hit $1M ARR in 15 days) where I single-handedly shipped two flagship
                products -- <strong className="text-[var(--text-primary)]">Mac Bridge</strong> and{" "}
                <strong className="text-[var(--text-primary)]">Browser Agent</strong> -- now
                serving <strong className="text-[var(--text-primary)]">50,000+ users</strong>.
              </p>
              <p>
                On the growth side, I drove <strong className="text-[var(--text-primary)]">15M organic
                views on Reddit in 4 weeks</strong> from a single account. Identified and patched
                critical sandbox security vulnerabilities through prompt injection testing before
                they reached production. Served as <strong className="text-[var(--text-primary)]">guest
                speaker at the HappyCapy Hong Kong launch</strong>, demoing live AI agent systems
                to founders, investors, and the local tech community.
              </p>
              <p>
                Studying at <strong className="text-[var(--text-primary)]">HKU on a 100%
                scholarship</strong>. Currently building a self-evolving computer-use agent
                that learns from its own mistakes -- in testing phase now.
              </p>
              <p className="font-mono text-[var(--accent)]" style={{ fontSize: "var(--text-small)" }}>
                Available for consulting.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 font-mono" style={{ fontSize: "var(--text-small)" }}>
              <a href="https://linkedin.com/in/niveshdandyan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/ndpvt-web" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                GitHub (ndpvt-web)
              </a>
              <a href="https://github.com/niveshdandyan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                GitHub (niveshdandyan)
              </a>
              <a href="mailto:niveshdandyan@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                niveshdandyan@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Tagline divider */}
      <Section variant="mid">
        <p
          className="font-bold text-[var(--text-primary)] text-center whitespace-nowrap"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
        >
          Building self-evolving AI systems for complex workflows.
        </p>
      </Section>

      <Section variant="dark">
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
