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
            Professional Experience
          </h2>

          <p className="mt-4 text-slate-400">
            Real-world development experience alongside academic and
            training-based work.
          </p>
        </div>

        <div className="mt-20 space-y-12 max-w-3xl mx-auto">
          {/* ================= Internship Experience ================= */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-lg">
            {/* Timeline Dot */}
            <span className="absolute -left-3 top-10 h-6 w-6 rounded-full border-4 border-slate-950 bg-violet-500" />

            <h3 className="text-xl font-semibold text-white">
              Full-Stack Developer Intern
            </h3>

            <p className="mt-1 text-slate-300">Leaftclutch Technologies</p>

            <p className="mt-1 text-sm text-slate-400">
              August 2025 – Present
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>
                • Worked on backend development for production web applications,
                implementing REST APIs and integrating relational databases used
                by internal systems.
              </li>
              <li>
                • Developed FastAPI-based admin APIs with request validation,
                role-aware access, and database operations for managing system
                data.
              </li>
              <li>
                • Designed and maintained backend business logic, relational
                data models, and stable API contracts in collaboration with
                frontend developers.
              </li>
              <li>
                • Collaborated with team members using Git and pull requests,
                resolving merge conflicts and participating in code reviews as
                part of a shared codebase.
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Python", "FastAPI", "Django", "REST APIs", "SQL", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* ================= Freelance Experience ================= */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-lg">
            {/* Timeline Dot */}
            <span className="absolute -left-3 top-10 h-6 w-6 rounded-full border-4 border-slate-950 bg-indigo-500" />

            <h3 className="text-xl font-semibold text-white">
              Freelance Full-Stack Developer
            </h3>

            <p className="mt-1 text-slate-300">Independent / Contract-based</p>

            <p className="mt-1 text-sm text-slate-400">2025 – Present</p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>
                • Delivered backend features for client web applications based
                on business requirements
                <span className="text-slate-400">
                  {" "}
                  (project details under NDA)
                </span>
                .
              </li>
              <li>
                • Designed REST APIs, authentication flows, and relational
                database schemas using Python frameworks.
              </li>
              <li>
                • Implemented CRUD operations, role-based access, and data
                validation for real-world use cases.
              </li>
              <li>
                • Communicated directly with clients to clarify requirements,
                provide updates, and deliver features.
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Python", "Flask", "Django", "FastAPI", "REST APIs", "SQL", "React", "Git"
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ================= Training Experience ================= */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-lg">
            {/* Timeline Dot */}
            <span className="absolute -left-3 top-10 h-6 w-6 rounded-full border-4 border-slate-950 bg-slate-500" />

            <h3 className="text-xl font-semibold text-white">
              Python & Django Training Projects
            </h3>

            <p className="mt-1 text-slate-300">Broadway Infosys</p>

            <p className="mt-1 text-sm text-slate-400">
              August 2025 – November 2025
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>
                • Built backend features using Django and Django REST Framework,
                including authentication and CRUD APIs.
              </li>
              <li>
                • Designed and integrated REST APIs with frontend clients using
                React and JavaScript.
              </li>
              <li>
                • Worked with MySQL and SQLite using Django ORM for database
                modeling and queries.
              </li>
              <li>
                • Used Git, GitHub, Postman, and VS Code for development and
                debugging workflows.
              </li>
              <li>
                • Developed multiple small full-stack projects following MVC
                architecture and clean code principles.
              </li>
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
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
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
