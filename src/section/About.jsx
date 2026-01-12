import { skills } from "../data/skills";

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-600 dark:text-violet-400">
            ✦ About Me
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Building Digital Solutions
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Passionate about creating exceptional user experiences through clean
            code and thoughtful design
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              My Journey
            </h3>

            <p className="mt-4 text-slate-700 dark:text-slate-400">
              I’m a backend-focused Full-Stack Developer Intern with hands-on
              experience building and maintaining REST APIs and database-driven
              web applications. I work primarily on backend development,
              including API design, request validation, and relational data
              modeling, and have contributed to admin panel endpoints using
              FastAPI and Django-based systems. <br />
              My interest in web development began with curiosity about how
              applications work behind the scenes, which led me to specialize in
              backend engineering. I enjoy writing clean, scalable code and
              collaborating with teams through Git, pull requests, and
              real-world development workflows.
            </p>

            <p className="mt-4 text-slate-700 dark:text-slate-400">
              Beyond coding, I&apos;m committed to continuous learning,
              open-source contribution, and mentoring fellow developers.
            </p>

            <h4 className="mt-8 font-semibold text-slate-900 dark:text-white">
              What I Bring
            </h4>

            <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-400">
              {[
                "Backend-focused development with Python for RESTful APIs and business logic",
                "Designing and implementing REST APIs with authentication and authorization",
                "Database modeling and relational data handling using SQL and ORM-based approaches",
                "Building and maintaining admin and backend endpoints using Django-based systems and FastAPI",
                "Applying clean code principles and structured application architecture",
                "Collaborating in real-world development workflows using Git, pull requests, and API testing tools",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-violet-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Skills & Technologies
            </h3>

            <div className="mt-6 space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-violet-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <span className="mt-1 block text-xs text-slate-500">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Python & Django", "Backend Focused"],
            ["Full-Stack Projects", "Real-world Applications"],
            ["2025", "Professional Training Completed"],
            ["Entry-Level", "Open to Opportunities"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="
                rounded-xl border border-slate-200 dark:border-slate-800
                bg-white dark:bg-slate-900/40
                p-6 text-center
              "
            >
              <div className="text-lg font-semibold text-slate-900 dark:text-white">
                {value}
              </div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
