"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureCard {
  source: string;
  caption: string;
  quote: string;
  stats: string;
  imagePath: string;
}

const FEATURES: FeatureCard[] = [
  {
    source: "LinkedIn",
    caption: "HappyCapy Hong Kong Launch -- Guest Speaker",
    quote: "Demoed live AI agent systems to founders, investors, and the Hong Kong tech community.",
    stats: "29 reactions, 8 reposts",
    imagePath: "/images/linkedin-capybar-launch.png",
  },
  {
    source: "X (Twitter)",
    caption: "The crowd couldn't handle it -- HappyCapy X",
    quote: "The room went quiet when the agent started controlling the screen autonomously.",
    stats: "558 views, 11 likes",
    imagePath: "/images/x-happycapy-crowd.png",
  },
  {
    source: "Xiaohongshu",
    caption: "Agent Skills demo -- viral feature",
    quote: "Featured for demonstrating practical AI agent skills to a Chinese-speaking audience.",
    stats: "12 likes, 17 shares",
    imagePath: "/images/xiaohongshu-speaking.png",
  },
  {
    source: "LinkedIn",
    caption: "Reddit Growth Skill -- viral post by HappyCapy",
    quote: "Built a skill that optimizes posts for Reddit virality. Every draft reviewed by 12 AI agents.",
    stats: "29 reactions, reposted by Nivesh",
    imagePath: "/images/linkedin-reddit-skill.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function FeaturedIn() {
  return (
    <section className="w-full bg-[var(--bg-surface)] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-semibold text-[var(--text-primary)] mb-8"
          style={{ fontSize: "var(--text-title)" }}
        >
          Featured In
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {FEATURES.map((card, i) => (
            <motion.div
              key={card.source}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={cardVariants}
              className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-code)] overflow-hidden flex flex-col"
            >
              {/* Terminal chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--bg-border)]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[var(--text-tertiary)]" style={{ fontSize: "var(--text-caption)" }}>
                  {card.source}
                </span>
              </div>

              {/* Image - show full, no crop */}
              <div className="relative bg-[var(--bg-elevated)] border-b border-[var(--bg-border)]">
                <Image
                  src={card.imagePath}
                  alt={card.caption}
                  width={600}
                  height={800}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                <p className="font-semibold text-[var(--text-primary)] text-sm leading-snug">
                  {card.caption}
                </p>
                <p className="text-[var(--text-secondary)] text-sm italic leading-relaxed flex-1">
                  &ldquo;{card.quote}&rdquo;
                </p>
                <p className="font-mono text-[var(--accent)] mt-auto" style={{ fontSize: "var(--text-caption)" }}>
                  {card.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
