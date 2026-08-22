import { Handshake, Gem, Sparkles, Users2, BadgeCheck } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { StatsSection } from "../components/StatsSection";
import { usePageMeta } from "../hooks/usePageMeta";
import { aboutPageHeaderImage, aboutStoryImage, leadershipTeam, certifications } from "../data/media";

const CORE_VALUES = [
  {
    icon: Handshake,
    title: "Integrity",
    description: "Always acting in our clients' best interests with honesty and transparency.",
  },
  {
    icon: Gem,
    title: "Quality",
    description: "Ensuring that every element, from materials to labor, meets the highest standards.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Leveraging modern tools, practices, and design thinking to stay ahead.",
  },
  {
    icon: Users2,
    title: "Customer-Centricity",
    description: "Listening to our clients and delivering tailored, results-driven solutions.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function About() {
  usePageMeta({
    title: "About Us",
    description:
      "TriAxis Construction is a PEC C5-registered construction firm in Lahore, Pakistan. Learn about our story, mission, vision, values, and leadership.",
    ogImage: aboutPageHeaderImage,
  });

  return (
    <>
      <PageHeader
        eyebrow="About TriAxis"
        title="We Don't Just Build Structures — We Build Trust"
        description="A progressive, quality-driven construction firm based in Lahore, Pakistan, committed to setting new benchmarks of excellence, integrity, and innovation."
        image={aboutPageHeaderImage}
        imageAlt="Brick building under construction with structural formwork, a TriAxis Construction project"
      />

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24">
        <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="text-lg leading-relaxed text-ink-muted">
            TriAxis Construction is a progressive and quality-driven construction firm based in
            Pakistan, committed to setting new benchmarks of excellence, integrity, and innovation
            in the industry. As a full-service construction company, we specialize in delivering
            high-quality, sustainable, and cost-effective solutions for residential, commercial,
            and industrial projects — leveraging modern practices, skilled craftsmanship, and a
            commitment to precision, safety, and client satisfaction.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            The firm is led by <strong className="text-charcoal">Muhammad Husnain Imran</strong>,
            Chief Executive Officer, and <strong className="text-charcoal">Uphaz Fazal</strong>,
            Managing Director. Their combined vision and leadership ensure TriAxis Construction
            consistently delivers projects that stand as symbols of durability, functionality, and
            modern design.
          </p>
        </Reveal>
      </section>

      {/* Our Story */}
      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <Reveal>
            <img
              src={aboutStoryImage}
              alt="TriAxis Construction team laying brick foundations on an active job site"
              className="aspect-[4/3] w-full rounded-sm object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle eyebrow="Our Story" title="Built on Real Projects, Not Just Promises" />
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              TriAxis Construction is registered with the Pakistan Engineering Council (PEC
              C5/30788) and has built a track record delivering work across Lahore, Sheikhupura,
              and Gujranwala — from residential renovations and ground-up homes to commercial
              buildings and specialized water infrastructure for clients including WWF Pakistan
              and Indigo Developers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Rather than claiming a legacy we haven't earned, we let our project record speak for
              itself — every completed job adds to a growing history of dependable, on-schedule
              construction work delivered across Punjab.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:px-10">
          <Reveal className="rounded-sm bg-charcoal p-10">
            <h2 className="font-display text-2xl font-bold text-white">Our Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              To provide dependable, high-quality construction services that transform ideas into
              enduring structures — delivering excellence at every stage, from concept and
              planning to execution and final handover, through transparent project management and
              technical precision.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-sm bg-brand p-10">
            <h2 className="font-display text-2xl font-bold text-white">Our Vision</h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              To become a benchmark of excellence in Pakistan's construction industry, shaping the
              future of urban and suburban living through intelligent design, superior
              craftsmanship, and ethical business practices — leaving behind a legacy of trust,
              durability, and modernity in every community we serve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionTitle
              eyebrow="Our Mission Pillars"
              title="Our Core Values"
              description="At TriAxis Construction, we don't just build structures — we build trust, purpose, and the foundation for better living."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal
                  key={value.title}
                  delay={index * 80}
                  className="rounded-sm border border-charcoal/10 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-base font-bold text-charcoal">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionTitle eyebrow="Meet the Team" title="Our Leadership" align="center" />
          </Reveal>
          <div className="mt-14 flex flex-wrap justify-center gap-8">
            {leadershipTeam.map((member, index) => (
              <Reveal key={member.name} delay={index * 80} className="w-56 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-charcoal font-display text-2xl font-bold text-brand-light">
                  {initials(member.name)}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-charcoal">{member.name}</h3>
                <p className="text-sm text-brand-dark">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <StatsSection dark />
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionTitle eyebrow="Credentials" title="Certifications & Licenses" align="center" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <Reveal
                key={cert.title}
                delay={index * 100}
                className="flex items-start gap-4 rounded-sm border border-charcoal/10 bg-white p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-charcoal text-brand-light">
                  <BadgeCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-charcoal">{cert.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{cert.subtitle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
