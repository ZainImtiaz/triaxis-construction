import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { cx } from "../lib/cx";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
      className={cx(
        "transition-all duration-700 ease-out",
        isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
