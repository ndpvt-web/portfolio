import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/section";
import FeaturedIn from "@/components/featured-in";
import ContactCta from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "About | Nivesh Dandyan",
  description:
    "AI Agent Architect. HKU 100% scholarship. Shipped Mac Bridge and Browser Agent to 50K+ users at HappyCapy.",
};

const MILESTONES = [
  { title: "HKU", description: "100% scholarship", current: false },
  {
    title: "Growth Hacking",
    description: "15M organic views on Reddit in 4 weeks, single account",
    current: false,
  },
  {
    title: "HappyCapy Security",
    description:
      "Found and fixed sandbox security issues via prompt injection testing",
    current: false,
  },
  {
    title: "Shipped to 50K+ Users",
    description: "Mac Bridge + Browser Agent -- solo",
    current: false,
  },
  {
    title: "Guest Speaker",
    description: "HappyCapy Hong Kong launch event",
    current: false,
  },
  {
    title: "Currently",
    description: "Self-evolving computer-use agent (testing phase)",
    current: true,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero section with photo slot */}
      <Section variant="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[var(--bg-code)] border border-[var(--bg-border)]">
            {/* Traffic light dots */}
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

          {/* About text */}
          <div className="flex flex-col gap-6">
            <h1
              className="font-bold text-[var(--text-primary)]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                letterSpacing: "-0.03em",
              }}
            >
              I architect AI agent systems.
            </h1>

            <div
              className="flex flex-col gap-4 text-[var(--text-secondary)]"
              style={{ fontSize: "var(--text-body)", lineHeight: 1.7 }}
            >
              <p>
                Currently at HappyCapy (raised $10M, $1M ARR in 15 days) where I
                shipped Mac Bridge and Browser Agent to 50K+ users -- both solo.
                Drove 15M organic views on Reddit in 4 weeks for growth hacking.
                Served as guest speaker at the Hong Kong launch event.
              </p>
              <p>Studying at HKU on 100% scholarship.</p>
              <p
                className="font-mono text-[var(--accent)]"
                style={{ fontSize: "var(--text-small)" }}
              >
                Available for consulting.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 font-mono" style={{ fontSize: "var(--text-small)" }}>
              <a
                href="https://linkedin.com/in/niveshdandyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ndpvt-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                GitHub (ndpvt-web)
              </a>
              <a
                href="https://github.com/niveshdandyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                GitHub (niveshdandyan)
              </a>
              <a
                href="mailto:niveshdandyan@gmail.com"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                niveshdandyan@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Milestones */}
      <Section variant="mid">
        <h2
          className="font-semibold text-[var(--text-primary)] mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-title)",
          }}
        >
          Milestones
        </h2>
        <ol className="flex flex-col gap-4">
          {MILESTONES.map((m) => (
            <li
              key={m.title}
              className="flex items-baseline gap-4 group"
            >
              <span
                className={`font-mono font-semibold shrink-0 ${
                  m.current
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-primary)]"
                }`}
                style={{ fontSize: "var(--text-small)", minWidth: "10rem" }}
              >
                {m.current && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse mr-2 align-middle" />
                )}
                {m.title}
              </span>
              <span
                className="text-[var(--text-secondary)]"
                style={{ fontSize: "var(--text-body)" }}
              >
                {m.description}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Social proof - reuse FeaturedIn */}
      <Section variant="dark">
        <FeaturedIn />
      </Section>

      {/* Contact */}
      <Section variant="mid" id="contact">
        <ContactCta />
      </Section>
    </>
  );
}
