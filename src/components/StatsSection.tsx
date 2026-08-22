import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { companyStats, type CompanyStat } from "../data/stats";
import { cx } from "../lib/cx";

interface StatItemProps {
  stat: CompanyStat;
  active: boolean;
  dark: boolean;
}

function StatItem({ stat, active, dark }: StatItemProps) {
  const value = useCountUp(stat.value, { active });
  return (
    <div className="text-center">
      <p className={cx("font-display text-4xl font-extrabold sm:text-5xl", dark ? "text-white" : "text-charcoal")}>
        {value}
        <span className="text-brand">{stat.suffix}</span>
      </p>
      <p className={cx("mt-2 text-sm font-semibold uppercase tracking-wide", dark ? "text-white/60" : "text-ink-muted")}>
        {stat.label}
      </p>
    </div>
  );
}

interface StatsSectionProps {
  dark?: boolean;
  className?: string;
}

export function StatsSection({ dark = false, className }: StatsSectionProps) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={cx("grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4", className)}>
      {companyStats.map((stat) => (
        <StatItem key={stat.label} stat={stat} active={isInView} dark={dark} />
      ))}
    </div>
  );
}
