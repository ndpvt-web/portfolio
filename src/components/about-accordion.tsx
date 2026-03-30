"use client";

import { useState } from "react";

const items = [
  {
    headline: "Spent $20,000 on Claude Code API in 40 days.",
    detail: null,
  },
  {
    headline: "Built Mac Bridge & Browser Agent for HappyCapy AI ($10M raised). Shipped to 50,000+ users.",
    detail: null,
  },
  {
    headline: "Connected Claude Code to my desktop for computer use \u2014 Anthropic released that as a feature 2 weeks later.",
    detail: null,
  },
  {
    headline: "Automated iOS app builds by connecting Xcode to Claude Code \u2014 Manus AI released that as their feature 4 days later.",
    detail: null,
  },
  {
    headline: "15 million views on Reddit in 4 weeks. Organic. No ads.",
    detail:
      "Ran HappyCapy\u2019s global product launch marketing. Built a system that reverse-engineers how ChatGPT and Perplexity decide what to recommend, then got us into those recommendations.",
  },
  {
    headline: "Guest speaker at HappyCapy\u2019s Hong Kong launch. $100M+ valued startup, 200+ people \u2014 VCs, investors, builders.",
    detail: null,
  },
  {
    headline: "Built an AI agency that runs completely on its own.",
    detail:
      "8 agents, 24/7. Find businesses without websites, build sites, send outreach, close deals. No human in the loop. 24% conversion rate.",
  },
  {
    headline: "Testing Atlas right now \u2014 world\u2019s first desktop agent that learns from its own mistakes.",
    detail:
      "Without changing the model weights or fine tuning. Every session it gets smarter.",
  },
  {
    headline: "Built a self-learning layer on Claude Code.",
    detail:
      "Hooks into every action, catches every mistake, never repeats it. 514 rules learned on its own in just a few days of use.",
  },
  {
    headline: "Studying at HKU on a 100% scholarship.",
    detail: null,
  },
];

export default function AboutAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-0">
      {items.map((item, i) => {
        const isOpen = open === i;
        const hasDetail = item.detail !== null;

        return (
          <div key={i} className="border-b border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => hasDetail && setOpen(isOpen ? null : i)}
              className={`w-full text-left py-3 flex items-start gap-3 ${
                hasDetail ? "cursor-pointer" : "cursor-default"
              }`}
              style={{ fontSize: "var(--text-body)", lineHeight: 1.6 }}
            >
              {hasDetail && (
                <span
                  className="text-[var(--accent)] mt-0.5 transition-transform duration-200 shrink-0"
                  style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              )}
              <span className="text-[var(--text-primary)]">{item.headline}</span>
            </button>
            {hasDetail && (
              <div
                className="overflow-hidden transition-all duration-200"
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p
                  className="text-[var(--text-secondary)] pb-3 pl-6"
                  style={{ fontSize: "var(--text-body)", lineHeight: 1.6 }}
                >
                  {item.detail}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
