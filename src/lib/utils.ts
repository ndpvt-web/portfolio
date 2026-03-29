import { type ClassValue, clsx } from "clsx";

/** Merge class names (Tailwind-safe) */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Animate a number counting up from 0 to target */
export function countUp(
  target: number,
  duration: number,
  onUpdate: (value: number) => void,
  onComplete?: () => void
) {
  const start = performance.now();
  function tick(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    onUpdate(Math.round(target * eased));
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      onComplete?.();
    }
  }
  requestAnimationFrame(tick);
}

/** Check if device supports hover (desktop) */
export function isHoverDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover)").matches;
}
