import { SOCIAL_LINKS } from "@/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] mt-24">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-tertiary)]">
          &copy; {year} Nivesh Dandyan
        </p>

        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/ndpvt-web/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors duration-150"
        >
          View source on GitHub
        </a>
      </div>
    </footer>
  );
}
