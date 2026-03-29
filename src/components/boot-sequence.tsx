"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "$ initializing portfolio...",
  "> loading projects... done",
  "> loading experiments... done",
  "> loading vision... done",
  "> welcome.",
];

const LINE_DELAY_MS = 500;
const FADE_DELAY_MS = LINES.length * LINE_DELAY_MS + 400;

export function BootSequence() {
  const [visible, setVisible] = useState(false);
  const [shownLines, setShownLines] = useState<number>(0);
  const [fading, setFading] = useState(false);

  const dismiss = useCallback(() => {
    sessionStorage.setItem("boot-played", "1");
    setFading(true);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("boot-played")) return;
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((_, i) => {
      const t = setTimeout(() => {
        if (!cancelled) setShownLines(i + 1);
      }, i * LINE_DELAY_MS + 200);
      timers.push(t);
    });

    const fadeTimer = setTimeout(() => {
      if (!cancelled) dismiss();
    }, FADE_DELAY_MS);
    timers.push(fadeTimer);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!fading ? (
        <motion.div
          key="boot"
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: "var(--bg-base)" }}
          onClick={dismiss}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="font-mono text-sm w-full max-w-lg px-8">
            {LINES.slice(0, shownLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="leading-7"
                style={{
                  color:
                    line.startsWith("$")
                      ? "var(--accent)"
                      : line.startsWith(">")
                      ? "var(--text-secondary)"
                      : "var(--text-primary)",
                }}
              >
                {line}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="boot-fade"
          className="fixed inset-0 z-50"
          style={{ backgroundColor: "var(--bg-base)" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onAnimationComplete={() => setVisible(false)}
        />
      )}
    </AnimatePresence>
  );
}
