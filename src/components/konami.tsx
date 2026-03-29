"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function Konami() {
  const [visible, setVisible] = useState(false);
  const sequenceRef = useRef<string[]>([]);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);

      sequenceRef.current = [...sequenceRef.current, e.key].slice(-KONAMI.length);

      if (sequenceRef.current.join(",") === KONAMI.join(",")) {
        sequenceRef.current = [];
        setVisible(true);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => setVisible(false), 3000);
        return;
      }

      resetTimerRef.current = setTimeout(() => {
        sequenceRef.current = [];
      }, 2000);
    }

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="konami-toast"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
          aria-live="polite"
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9998] font-mono text-sm px-5 py-3 rounded-lg border border-[var(--accent)] bg-[var(--bg-elevated)] text-[var(--accent)] shadow-lg pointer-events-none"
        >
          &gt; You found it. Welcome to the inner loop.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
