import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { services } from "../data/services";
import { servicesPageHeaderImage } from "../data/media";
import { cx } from "../lib/cx";

export function Services() {
  usePageMeta({
    title: "Services",
    description:
      "Explore TriAxis Construction's full range of services — architectural design, structural design, residential and commercial construction, industrial construction, renovation, and custom developments.",
    ogImage: servicesPageHeaderImage,
  });

  return (
    <>
      <PageHeader
        eyebrow="What We Offer"
        title="Our Construction Services"
        description="Comprehensive construction solutions tailored to residential, commercial, and industrial clients."
        image={servicesPageHeaderImage}
        imageAlt="Construction crane against a modern commercial building"
      />

      {services.map((service, index) => {
        const Icon = service.icon;
        const reversed = index % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={cx("py-20 sm:py-24", index % 2 === 0 ? "bg-white" : "bg-offwhite")}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div
                className={cx(
                  "grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20",
                  reversed && "lg:[&>*:first-child]:order-2",
                )}
              >
                <Reveal>
                  <img
                    src={service.image}
                    alt={`${service.title} project by TriAxis Construction`}
                    className="aspect-[4/3] w-full rounded-sm object-cover"
                    loading="lazy"
                  />
                </Reveal>

                <Reveal delay={120}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-charcoal text-brand">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-charcoal sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">{service.description}</p>

                  <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-wide text-charcoal">
                    Key Benefits
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden="true" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-wide text-charcoal">
                    Our Process
                  </h3>
                  <ol className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {service.process.map((step, stepIndex) => (
                      <li key={step.step} className="rounded-sm border border-charcoal/10 bg-white p-4">
                        <span className="font-display text-xs font-bold text-brand-dark">
                          {String(stepIndex + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-1 text-sm font-semibold text-charcoal">{step.step}</p>
                        <p className="mt-1 text-xs leading-relaxed text-ink-muted">{step.description}</p>
                      </li>
                    ))}
                  </ol>

                  <Button as="link" to="/contact" variant="primary" className="mt-9">
                    Get a Quote for This Service
                  </Button>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
