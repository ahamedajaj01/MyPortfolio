import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "Mobile", "Fullstack", "Frontend", "Game"];

  const filterProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.includes(activeFilter)
        );

  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="
            inline-flex items-center gap-2
            rounded-full bg-violet-500/10
            px-4 py-2 text-sm
            text-violet-500
          ">
            ✦ Featured Work
          </span>

          <h2 className="
            mt-6 text-4xl font-bold
            text-slate-900
            dark:text-white
          ">
            Projects & Case Studies
          </h2>

          <p className="
            mt-4
            text-slate-600
            dark:text-slate-400
          ">
            A showcase of my recent work, from concept to deployment
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`
                rounded-full px-4 py-2 text-sm
                border transition

                ${
                  activeFilter === tag
                    ? "bg-violet-600 text-white border-violet-600"
                    : `
                        border-slate-300 text-slate-700 hover:bg-slate-100
                        dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800
                      `
                }
              `}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filterProjects.length > 0 ? (
            filterProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="
              col-span-full text-center
              text-slate-600
              dark:text-slate-400
            ">
              <p className="text-xl font-medium">
                No projects found
              </p>
              <p className="mt-1 text-sm">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>

        <hr className="mt-24 border-slate-200 dark:border-slate-800" />

        {/* Footer CTA */}
        <div className="mt-32 text-center">
          <h3 className="
            text-2xl font-semibold
            text-slate-900
            dark:text-white
          ">
            Interested in working together?
          </h3>

          <p className="
            mt-3
            text-slate-600
            dark:text-slate-400
          ">
            Let’s discuss your project and create something amazing.
          </p>

          <a
            href="#contact"
            className="
              mt-8 inline-block rounded-xl
              bg-violet-600 px-6 py-3
              font-medium text-white
              hover:bg-violet-500
            "
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
