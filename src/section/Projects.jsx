import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";
import { LayoutGrid, ExternalLink } from "lucide-react";

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
    <section id="projects" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold text-primary">
            <LayoutGrid size={16} />
            Showcase
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            Selected <span className="text-gradient">Projects</span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            A curated collection of my work, ranging from complex backend architectures to polished frontend experiences.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {filters.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className={`
                relative rounded-full px-6 py-2 text-sm font-bold transition-all duration-300
                ${activeFilter === tag
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "glass text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                }
              `}
            >
              {tag}
              {activeFilter === tag && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full border-2 border-primary/50"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filterProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>

          {filterProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-20 text-center"
            >
              <p className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 glass rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-black text-slate-900 dark:text-white">
            Have a project in mind?
          </h3>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-primary px-10 py-4 font-bold text-white shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all duration-300"
          >
            Start a Conversation
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

