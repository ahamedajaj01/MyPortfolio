import { motion } from "framer-motion";
import { User, Code2, Cpu, Globe, Rocket, Award } from "lucide-react";
import { skills } from "../data/skills";

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Decorative Element */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold text-primary">
            <User size={16} />
            About Me
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            I'm a backend-focused full-stack developer who enjoys building APIs,
            solving problems, and learning new technologies.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-24 grid gap-16 lg:grid-cols-2 items-start">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                <Globe className="text-primary" />
                About Me
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm a full-stack developer with a strong interest in backend
                development. I enjoy building REST APIs, working with databases,
                and developing features that help solve real problems.
              </p>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I have experience working with Python, Django, FastAPI,
                Node.js, Express.js, MongoDB, and SQL databases. I also work
                with React to build complete web applications and enjoy
                collaborating with teams using Git and pull requests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Code2,
                  title: "Backend Development",
                  desc: "Building APIs and working with databases.",
                },
                {
                  icon: Rocket,
                  title: "Continuous Learning",
                  desc: "Learning new technologies through real projects.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 mb-8">
              <Cpu className="text-secondary" />
              Technical Skills
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider text-xs">
                      {skill.name}
                    </span>

                    <span className="text-xs font-black text-primary">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-100 dark:bg-slate-800 p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.1,
                      }}
                      className="h-full rounded-full bg-linear-to-r from-primary to-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            {
              icon: Award,
              value: "Python & Node.js",
              label: "Backend Stack",
            },
            {
              icon: Cpu,
              value: "10+",
              label: "Projects",
            },
            {
              icon: Rocket,
              value: "REST APIs",
              label: "Experience",
            },
            {
              icon: Globe,
              value: "Git & GitHub",
              label: "Collaboration",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <stat.icon size={24} />
              </div>

              <div className="text-2xl font-black text-slate-900 dark:text-white">
                {stat.value}
              </div>

              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}