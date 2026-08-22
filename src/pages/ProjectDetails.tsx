import { useParams } from "react-router-dom";
import { MapPin, CalendarDays, Ruler, Clock3, CheckCircle2, Wrench, Building2 } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { getProjectBySlug } from "../data/projects";
import { projectsPageHeaderImage } from "../data/media";

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  usePageMeta({
    title: project ? project.title : "Project Not Found",
    description: project ? project.summary : "The project you're looking for could not be found.",
    ogImage: project ? project.thumbnail : projectsPageHeaderImage,
  });

  if (!project) {
    return (
      <section className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-charcoal">Project Not Found</h1>
        <p className="mt-4 text-ink-muted">
          We couldn't find the project you're looking for. It may have been moved or renamed.
        </p>
        <Button as="link" to="/projects" variant="primary" className="mt-8">
          Back to Projects
        </Button>
      </section>
    );
  }

  const statCards = [
    { icon: Ruler, label: "Project Size", value: project.stats.projectSize },
    { icon: Clock3, label: "Duration", value: project.stats.duration },
    { icon: CheckCircle2, label: "Status", value: project.stats.status },
    { icon: CalendarDays, label: "Timeline", value: project.completionDate },
  ];

  return (
    <>
      <PageHeader
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        image={project.thumbnail}
        imageAlt={`${project.title} — ${project.category.toLowerCase()} project in ${project.location}`}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((stat) => {
              const Icon = stat.icon;
              return (
                <Reveal
                  key={stat.label}
                  className="rounded-sm border border-charcoal/10 bg-offwhite p-6 text-center"
                >
                  <Icon className="mx-auto h-6 w-6 text-brand-dark" aria-hidden="true" />
                  <p className="mt-3 font-display text-lg font-bold text-charcoal">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    {stat.label}
                  </p>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-20">
            <Reveal className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-charcoal">Project Overview</h2>
              <div className="mt-5 space-y-4">
                {project.description.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-ink-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-sm border border-charcoal/10 bg-offwhite p-7">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-charcoal">
                  Project Details
                </h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-2.5 text-ink-muted">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden="true" />
                    {project.location}
                  </li>
                  <li className="flex items-start gap-2.5 text-ink-muted">
                    <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden="true" />
                    {project.completionDate}
                  </li>
                  {project.client && (
                    <li className="flex items-start gap-2.5 text-ink-muted">
                      <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden="true" />
                      Client: {project.client}
                    </li>
                  )}
                </ul>

                <h3 className="mt-7 font-display text-sm font-bold uppercase tracking-wide text-charcoal">
                  Services Provided
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {project.servicesProvided.map((service) => (
                    <li key={service} className="flex items-start gap-2.5 text-ink-muted">
                      <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden="true" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-2xl font-bold text-charcoal">Project Gallery</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.gallery.map((image, index) => (
              <Reveal
                key={image}
                delay={index * 80}
                className={index === 0 ? "sm:col-span-2" : undefined}
              >
                <img
                  src={image}
                  alt={`${project.title} gallery photo ${index + 1}`}
                  className="aspect-video w-full rounded-sm object-cover"
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-charcoal">Have a Similar Project in Mind?</h2>
        <p className="mx-auto mt-3 max-w-lg text-ink-muted">
          Tell us about your project and we'll put together a free, no-obligation quote.
        </p>
        <Button as="link" to="/contact" variant="primary" className="mt-7">
          Request a Free Quote
        </Button>
      </section>
    </>
  );
}
