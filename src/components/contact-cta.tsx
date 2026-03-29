"use client";

import { useState } from "react";

const EMAIL = "niveshdandyan@gmail.com";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/niveshdandyan/", display: "linkedin/niveshdandyan" },
  { label: "GitHub (ndpvt-web)", href: "https://github.com/ndpvt-web", display: "github/ndpvt-web" },
  { label: "GitHub (niveshdandyan)", href: "https://github.com/niveshdandyan", display: "github/niveshdandyan" },
];

export default function ContactCta() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-[var(--bg-base)] py-16 md:py-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2
          className="font-semibold text-[var(--text-primary)] mb-2"
          style={{ fontSize: "var(--text-title)" }}
        >
          Get in Touch
        </h2>
        <p className="text-[var(--text-tertiary)] mb-8 text-sm">
          Available for consulting, speaking, and research collaboration.
        </p>

        {/* Email row */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="font-mono text-[var(--text-primary)]">{EMAIL}</span>
          <button
            onClick={handleCopy}
            aria-label={copied ? "Email address copied" : "Copy email address"}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--bg-border)] font-mono text-sm text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-2">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors w-fit"
            >
              {link.display}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
