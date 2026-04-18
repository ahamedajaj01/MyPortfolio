import { motion } from "framer-motion";
import { User, Code2, Cpu, Globe, Rocket, Award } from "lucide-react";
import { skills } from "../data/skills";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

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
            Passion Meets <span className="text-gradient">Backend</span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            I craft the digital backbone of modern applications, focusing on performance, security, and scalability.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="mt-24 grid gap-16 lg:grid-cols-2 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                <Globe className="text-primary" />
                The Journey
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I’m a backend-focused <span className="text-primary font-bold">Full-Stack Developer</span> with hands-on experience building and maintaining scalable REST APIs and database-driven web applications. My journey began with a curiosity about how applications handle millions of requests behind the scenes, leading me to specialize in backend architecture and request optimization.
              </p>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Today, I specialize in building robust APIs and data-driven systems using <span className="text-secondary font-bold">Python, FastAPI, and Django</span>. I thrive in collaborative environments, bringing a meticulous eye for detail and a commitment to clean code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Code2, title: "Clean Code", desc: "Solid, maintainable architecture" },
                { icon: Rocket, title: "Performance", desc: "Optimized for speed & scale" }
              ].map((item, i) => (
                <div key={i} className="glass rounded-2xl p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 mb-8">
              <Cpu className="text-secondary" />
              Technical Arsenal
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
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="h-full rounded-full bg-linear-to-r from-primary to-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { icon: Award, value: "Full-Stack", label: "Expertise Focus" },
            { icon: Cpu, value: "10+", label: "Projects Built" },
            { icon: Rocket, value: "Nepal", label: "Based Location" },
            { icon: Globe, value: "2025", label: "Active Since" },
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

