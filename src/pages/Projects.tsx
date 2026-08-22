import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectFilter } from "../components/ProjectFilter";
import { usePageMeta } from "../hooks/usePageMeta";
import { projects, projectCategories, type ProjectCategory } from "../data/projects";
import { projectsPageHeaderImage } from "../data/media";

export function Projects() {
  usePageMeta({
    title: "Projects",
    description:
      "Browse TriAxis Construction's portfolio of residential, commercial, renovation, and infrastructure projects delivered across Punjab, Pakistan.",
    ogImage: projectsPageHeaderImage,
  });

  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHeader
        eyebrow="Our Portfolio"
        title="Projects We're Proud Of"
        description="A closer look at the residential, commercial, renovation, and infrastructure work TriAxis has delivered across Punjab."
        image={projectsPageHeaderImage}
        imageAlt="TriAxis Construction team laying brick foundations on an active job site"
      />

      <section className="bg-charcoal py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ProjectFilter categories={projectCategories} active={activeCategory} onChange={setActiveCategory} />

          {filteredProjects.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Reveal key={project.slug}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-white/60">
              No projects found in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
