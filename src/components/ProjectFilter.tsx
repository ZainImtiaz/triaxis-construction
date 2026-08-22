import type { ProjectCategory } from "../data/projects";
import { cx } from "../lib/cx";

interface ProjectFilterProps {
  categories: Array<ProjectCategory | "All">;
  active: ProjectCategory | "All";
  onChange: (category: ProjectCategory | "All") => void;
}

export function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={active === category}
          className={cx(
            "rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300",
            active === category
              ? "border-brand bg-brand text-white"
              : "border-white/20 bg-transparent text-white/70 hover:border-brand-light hover:text-brand-light",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
