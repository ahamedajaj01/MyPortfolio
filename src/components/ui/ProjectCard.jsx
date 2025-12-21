export default function ProjectCard({ project }) {
  return (
    <div
      className="
        group rounded-2xl border border-slate-800
        bg-slate-900/40 backdrop-blur
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
            group-hover:scale-105 transition
          "
        />
        <span className="absolute right-3 top-3 text-xs text-slate-300">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-sm text-slate-400">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="
                rounded-full bg-slate-800
                px-3 py-1 text-xs text-slate-300
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.live}
          className="
            inline-flex items-center gap-2
            rounded-lg bg-violet-600 px-4 py-2
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
