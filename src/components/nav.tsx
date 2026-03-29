"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import MobileNav from "./mobile-nav";

export default function Nav() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY < 10) {
      setVisible(true);
    } else if (currentY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-transform duration-300",
          visible ? "translate-y-0" : "-translate-y-full"
        )}
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div
          className="bg-[var(--bg-surface)]/80 border-b border-[var(--border-subtle)]"
        >
          <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="font-mono text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-150"
            >
              ND
            </Link>

            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = !item.external && pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "relative text-sm transition-colors duration-150 pb-0.5",
                      isActive
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--accent)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                className="md:hidden text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
