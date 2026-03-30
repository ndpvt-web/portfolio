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
                Spent <strong className="text-[var(--text-primary)]">$20,000 on Claude Code API in 40 days</strong>.
              </p>
              <p>
                Built the <strong className="text-[var(--text-primary)]">Mac Bridge</strong> and{" "}
                <strong className="text-[var(--text-primary)]">Browser Agent</strong> for{" "}
                <strong className="text-[var(--text-primary)]">HappyCapy AI</strong> ($10M raised).
                Shipped to <strong className="text-[var(--text-primary)]">50,000+ users</strong>.
                I connected Claude Code to my desktop and used it for computer use --
                Anthropic released that as a feature 2 weeks later.
                I automated iOS app builds by connecting Xcode to Claude Code through my Mac --
                Manus AI released that as their feature 4 days later.
              </p>
              <p>
                Ran HappyCapy&apos;s global product launch marketing. Built a system that
                reverse-engineers how ChatGPT and Perplexity decide what to recommend, then
                got us into those recommendations. <strong className="text-[var(--text-primary)]">15
                million views on Reddit in 4 weeks</strong>. Organic. No ads.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Guest speaker at HappyCapy&apos;s
                Hong Kong launch</strong>. $100M+ valued startup, 200+ people -- VCs, investors, builders.
              </p>
              <p>
                Built an <strong className="text-[var(--text-primary)]">AI agency that runs completely
                on its own</strong>. 8 agents, 24/7. Find businesses without websites, build sites,
                send outreach, close deals. No human in the loop. 24% conversion rate.
              </p>
              <p>
                Testing <strong className="text-[var(--text-primary)]">Atlas</strong> right now --
                world&apos;s first desktop agent that learns from its own mistakes without changing the
                model weights or fine tuning. Every session it gets smarter.
              </p>
              <p>
                Built a <strong className="text-[var(--text-primary)]">self-learning layer on Claude
                Code</strong>. Hooks into every action, catches every mistake, never repeats it.
                514 rules learned on its own in just a few days of use.
              </p>
              <p>
                Studying at <strong className="text-[var(--text-primary)]">HKU on a 100% scholarship</strong>.
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
