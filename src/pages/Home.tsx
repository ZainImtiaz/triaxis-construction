import { useState } from "react";
import { ChevronDown, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { StatsSection } from "../components/StatsSection";
import { ServiceCard } from "../components/ServiceCard";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectFilter } from "../components/ProjectFilter";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { ClientsBand } from "../components/ClientsBand";
import { CTASection } from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";
import { services } from "../data/services";
import { projects, projectCategories, type ProjectCategory } from "../data/projects";
import { advantages } from "../data/whyChooseUs";
import { heroImage, aboutPreviewImage, whyChooseUsImage, ctaBackgroundImage } from "../data/media";

export function Home() {
  usePageMeta({
    title: "Construction & Engineering Services in Lahore, Pakistan",
    description:
      "TriAxis Construction is a PEC C5-registered construction firm delivering residential, commercial, industrial, and renovation projects across Punjab, Pakistan.",
    ogImage: heroImage,
  });

  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal">
        <img
          src={heroImage}
          alt="TriAxis Construction crew laying brick foundations on an active job site in Lahore"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/55 to-charcoal/85" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-light/50 bg-charcoal/70 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-light backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            PEC C5-Registered Construction Firm
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl md:text-7xl">
            We Don't Just Build Structures. We Build Trust.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            TriAxis Construction delivers quality-driven residential, commercial, and industrial
            construction across Lahore and Punjab, Pakistan.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button as="link" to="/contact" variant="primary">
              Get a Free Quote
            </Button>
            <Button as="link" to="/projects" variant="secondary">
              View Our Projects
            </Button>
          </div>
        </div>

        <a
          href="#stats"
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/70 transition-colors hover:text-brand-light sm:block"
        >
          <ChevronDown className="h-8 w-8" aria-hidden="true" />
        </a>
      </section>

      {/* Stats */}
      <section id="stats" className="bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <StatsSection dark />
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-offwhite py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <Reveal className="relative">
            <img
              src={aboutPreviewImage}
              alt="Brick building under construction with structural formwork, a TriAxis Construction project"
              className="aspect-[4/5] w-full rounded-sm object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-sm bg-brand px-5 py-4 shadow-xl sm:-right-8">
              <ShieldCheck className="h-9 w-9 text-white" aria-hidden="true" />
              <div>
                <p className="font-display text-lg font-extrabold leading-none text-white">C5/30788</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">PEC License</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionTitle
              eyebrow="About TriAxis"
              title="Built on Quality. Driven by Excellence."
              description="We deliver reliable construction solutions through experienced professionals, quality materials, precise project management, and a commitment to client satisfaction — from private residences to institutional infrastructure."
            />
            <Button as="link" to="/about" variant="ghost" className="mt-8">
              Learn More About Us
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionTitle
              eyebrow="What We Do"
              title="Comprehensive Construction Services"
              description="From architectural design to bespoke water infrastructure, our services cover every stage of the construction lifecycle."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-charcoal py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionTitle
              eyebrow="Our Portfolio"
              title="Featured Projects"
              description="A selection of residential, commercial, renovation, and infrastructure projects delivered across Punjab."
              align="center"
              light
            />
          </Reveal>

          <div className="mt-10">
            <ProjectFilter categories={projectCategories} active={activeCategory} onChange={setActiveCategory} />
          </div>

          {filteredProjects.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Reveal key={project.slug}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-white/60">No projects found in this category yet — check back soon.</p>
          )}

          <div className="mt-14 flex justify-center">
            <Button as="link" to="/projects" variant="secondary">
              View All Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-offwhite py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionTitle
              eyebrow="Why Choose Us"
              title="The TriAxis Advantage"
              description="What sets TriAxis apart, in the firm's own words: quality without compromise, a drive for innovation, and a commitment to personalized service."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Reveal
                  key={advantage.title}
                  delay={index * 80}
                  className="rounded-sm border border-charcoal/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="h-9 w-9 text-brand" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-lg font-bold text-charcoal">{advantage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{advantage.description}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="relative mt-16 overflow-hidden rounded-sm">
            <img
              src={whyChooseUsImage}
              alt="TriAxis Construction worker in safety helmet and hi-vis vest compacting a gravel base on site"
              className="h-72 w-full object-cover sm:h-96"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center bg-charcoal/55">
              <div className="px-8 sm:px-14">
                <StatsSection dark />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Construction Process */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionTitle
              eyebrow="How We Work"
              title="Our Construction Process"
              description="A proven four-step approach that keeps every project on schedule and on budget."
              align="center"
            />
          </Reveal>
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-offwhite py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionTitle
              eyebrow="Who We've Worked With"
              title="Trusted By Organizations Across Punjab"
              align="center"
            />
          </Reveal>
          <div className="mt-14">
            <ClientsBand />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        eyebrow="Start Your Project"
        title="Ready to Build Something Great?"
        description="Let's discuss your next construction project and turn your vision into reality."
        image={ctaBackgroundImage}
        imageAlt="Excavator preparing a residential plot on a TriAxis Construction job site"
      >
        <Button as="link" to="/contact" variant="primary">
          Request a Free Quote
        </Button>
      </CTASection>
    </>
  );
}
