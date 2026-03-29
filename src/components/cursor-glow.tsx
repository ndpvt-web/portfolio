"use client";

import { useEffect, useRef } from "react";
import { useTheme, ACCENT_COLORS } from "@/lib/theme";
import { isHoverDevice } from "@/lib/utils";

export default function CursorGlow() {
  const { accent } = useTheme();
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);
  const enabledRef = useRef(false);

  useEffect(() => {
    enabledRef.current = isHoverDevice();
    if (!enabledRef.current) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      const dx = posRef.current.x - currentRef.current.x;
      const dy = posRef.current.y - currentRef.current.y;
      currentRef.current.x += dx * 0.15;
      currentRef.current.y += dy * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${currentRef.current.x - 5}px, ${currentRef.current.y - 5}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (typeof window !== "undefined" && !isHoverDevice()) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: ACCENT_COLORS[accent].value,
        opacity: 0.5,
        mixBlendMode: "screen",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
    />
  );
}
