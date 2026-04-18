import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl overflow-hidden glass hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-3">
            <a
              href={project.live}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors shadow-lg"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.github || "#"}
              className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors shadow-lg"
              title="Source Code"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        <span className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 text-xs font-bold"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="pt-4 flex items-center justify-between">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-black text-primary hover:text-primary-dark transition-colors uppercase tracking-widest"
          >
            Case Study <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ArrowRight({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}

