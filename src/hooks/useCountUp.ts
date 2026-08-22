import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface UseCountUpOptions {
  duration?: number;
  active: boolean;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(target: number, { duration = 1800, active }: UseCountUpOptions): number {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!active || hasRunRef.current) return;

    if (prefersReducedMotion) {
      hasRunRef.current = true;
      setValue(target);
      return;
    }

    hasRunRef.current = true;
    let frameId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, duration, target, prefersReducedMotion]);

  return value;
}
