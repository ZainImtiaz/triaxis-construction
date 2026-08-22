import { cx } from "../lib/cx";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  as = "h2",
}: SectionTitleProps) {
  const Heading = as;
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span className="mb-3 block font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">
          {eyebrow}
        </span>
      )}
      <Heading
        className={cx(
          "font-display text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]",
          light ? "text-white" : "text-charcoal",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className={cx("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-white/75" : "text-ink-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}
