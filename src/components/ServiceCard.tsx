import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <div className="group flex flex-col rounded-sm border border-charcoal/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-charcoal text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-charcoal">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="mt-6 font-display text-xl font-bold text-charcoal">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{service.shortDescription}</p>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-brand-dark transition-colors hover:text-charcoal"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </div>
  );
}
