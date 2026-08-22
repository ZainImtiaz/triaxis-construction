import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}

export function PageHeader({ eyebrow, title, description, image, imageAlt }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-charcoal pt-28 pb-16 sm:min-h-[46vh]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/50" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
          <Link to="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-brand">{title}</span>
        </nav>
        {eyebrow && (
          <span className="mb-2 block font-display text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
