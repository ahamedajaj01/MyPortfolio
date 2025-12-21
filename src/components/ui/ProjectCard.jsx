export default function ProjectCard({ project }) {
  return (
    <div
      className="
        group rounded-2xl
        border border-slate-200 dark:border-slate-800
        bg-white dark:bg-slate-900
        overflow-hidden
        hover:border-violet-500/40
        transition
      "
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full w-full object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        />
        <span className="
          absolute right-3 top-3
          rounded-md bg-white/70 dark:bg-slate-900/70
          px-2 py-0.5 text-xs
          text-slate-700 dark:text-slate-300
          backdrop-blur
        ">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="
          text-lg font-semibold
          text-slate-900 dark:text-white
        ">
          {project.title}
        </h3>

        <p className="
          text-sm
          text-slate-600 dark:text-slate-400
        ">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="
                rounded-full
                bg-slate-100 text-slate-700
                dark:bg-slate-800 dark:text-slate-300
                px-3 py-1 text-xs
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            rounded-lg
            bg-violet-600 px-4 py-2
            text-sm font-medium text-white
            hover:bg-violet-500
          "
        >
          Live Demo →
        </a>
      </div>
    </div>
  );
}
