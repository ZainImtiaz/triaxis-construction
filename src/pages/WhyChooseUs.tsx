import { PageHeader } from "../components/PageHeader";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { StatsSection } from "../components/StatsSection";
import { CTASection } from "../components/CTASection";
import { Button } from "../components/Button";
import { usePageMeta } from "../hooks/usePageMeta";
import { advantages } from "../data/whyChooseUs";
import { whyChooseUsPageHeaderImage, whyChooseUsImage, ctaBackgroundImage } from "../data/media";

export function WhyChooseUs() {
  usePageMeta({
    title: "Why Choose Us",
    description:
      "Discover why clients trust TriAxis Construction — a PEC-registered firm committed to quality without compromise, innovation, and personalized service.",
    ogImage: whyChooseUsPageHeaderImage,
  });

  return (
    <>
      <PageHeader
        eyebrow="Why TriAxis"
        title="The TriAxis Advantage"
        description="Choosing the right construction partner is about more than delivering a building — it's about trust, quality, and a shared vision."
        image={whyChooseUsPageHeaderImage}
        imageAlt="TriAxis Construction worker in safety gear compacting a gravel base on site"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Reveal
                  key={advantage.title}
                  delay={index * 80}
                  className="rounded-sm border border-charcoal/10 bg-offwhite p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-charcoal text-brand">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-bold text-charcoal">{advantage.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{advantage.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal py-24 sm:py-28">
        <img
          src={whyChooseUsImage}
          alt="TriAxis Construction worker in safety gear collaborating on-site"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionTitle
              eyebrow="Proven Track Record"
              title="Numbers That Reflect Our Commitment"
              align="center"
              light
            />
          </Reveal>
          <div className="mt-14">
            <StatsSection dark />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Let's Talk"
        title="Ready to Build Something Great?"
        description="Let's discuss your next construction project and turn your vision into reality."
        image={ctaBackgroundImage}
        imageAlt="Modern commercial building exterior at dusk"
      >
        <Button as="link" to="/contact" variant="primary">
          Request a Free Quote
        </Button>
      </CTASection>
    </>
  );
}
