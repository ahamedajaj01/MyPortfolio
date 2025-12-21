export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
            ✦ Experience
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Practical Experience & Training
          </h2>

          <p className="mt-4 text-slate-400">
            Hands-on experience building backend systems, APIs, and full-stack
            applications using modern web technologies.
          </p>
        </div>

        {/* Experience Card */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="
            relative rounded-2xl border border-slate-800
            bg-slate-900/40 p-8
            bg:backdrop-blur-lg
          ">

            {/* Timeline dot */}
            <span className="
              absolute -left-3 top-10
              h-6 w-6 rounded-full
              border-4 border-slate-950
              bg-violet-500
            " />

            {/* Title */}
            <h3 className="text-xl font-semibold text-white">
              Web Development Trainee (Python / Django)
            </h3>

            {/* Company */}
            <p className="mt-1 text-slate-300">
              Broadways Infosys Nepal · Internship
            </p>

            {/* Meta */}
            <p className="mt-1 text-sm text-white bg:text-white">
              Sep 2025 – Dec 2025 · 4 months · Kathmandu, Nepal (Hybrid)
            </p>

            {/* Responsibilities */}
            <ul className="mt-6 space-y-3 text-white dark:text-slate-400">
              <li>• Built backend features using Django and Django REST Framework, including authentication and CRUD APIs.</li>
              <li>• Designed and integrated REST APIs with frontend clients using React and JavaScript.</li>
              <li>• Worked with MySQL and SQLite using Django ORM for database modeling and queries.</li>
              <li>• Used Git, GitHub, Postman, and VS Code for daily development and debugging workflows.</li>
              <li>• Developed multiple small full-stack projects following MVC architecture and clean code principles.</li>
            </ul>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Python",
                "Django",
                "Django REST Framework",
                "React",
                "JavaScript",
                "SQL",
                "Git",
                "Postman",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full bg-slate-800
                    px-3 py-1 text-xs text-slate-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
