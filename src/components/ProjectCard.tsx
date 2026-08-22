import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-sm bg-charcoal"
    >
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={`${project.title} — ${project.category.toLowerCase()} project in ${project.location}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" aria-hidden="true" />

      <span className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
        {project.category}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
          <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
          {project.location}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Project
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
