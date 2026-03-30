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

            {/* Stats grid -- scannable in 3 seconds */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "$20K", label: "Claude API in 40 days" },
                { stat: "50K+", label: "users shipped to" },
                { stat: "15M", label: "organic views, no ads" },
                { stat: "8", label: "autonomous agents, 24/7" },
                { stat: "514", label: "rules self-learned" },
                { stat: "100%", label: "HKU scholarship" },
              ].map((item) => (
                <div key={item.stat} className="border border-[var(--border-subtle)] rounded-lg px-4 py-3">
                  <div className="font-bold text-[var(--accent)] text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                    {item.stat}
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Compressed highlights */}
            <ul className="flex flex-col gap-2 text-[var(--text-secondary)]" style={{ fontSize: "var(--text-body)", lineHeight: 1.6 }}>
              <li>
                Built <strong className="text-[var(--text-primary)]">Mac Bridge</strong> &amp;{" "}
                <strong className="text-[var(--text-primary)]">Browser Agent</strong> at{" "}
                <strong className="text-[var(--text-primary)]">HappyCapy AI</strong> ($10M raised).
              </li>
              <li>
                Connected Claude Code to desktop for computer use --{" "}
                <strong className="text-[var(--text-primary)]">Anthropic shipped it 2 weeks later</strong>.
              </li>
              <li>
                Automated iOS builds via Xcode + Claude Code --{" "}
                <strong className="text-[var(--text-primary)]">Manus AI shipped it 4 days later</strong>.
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">Guest speaker</strong>, HappyCapy HK launch. $100M+ startup, 200+ VCs &amp; builders.
              </li>
              <li>
                Autonomous AI agency: finds leads, builds sites, closes deals.{" "}
                <strong className="text-[var(--text-primary)]">24% conversion</strong>. No human in the loop.
              </li>
              <li>
                Building <strong className="text-[var(--text-primary)]">Atlas</strong> -- desktop agent that learns from mistakes without fine-tuning.
              </li>
            </ul>

            <p className="font-mono text-[var(--accent)]" style={{ fontSize: "var(--text-small)" }}>
              Available for consulting.
            </p>

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
