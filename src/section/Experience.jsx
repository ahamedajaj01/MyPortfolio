import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Leaftclutch Technologies",
    location: "Remote / Hybrid",
    period: "August 2025 – Present",
    description: [
      "Building backend for production web applications using FastAPI and Django.",
      "Developing admin APIs with request validation, role-aware access, and complex DB operations.",
      "Designing relational data models and stable API contracts in collaboration with frontend teams.",
      "Participating in code reviews and managing workflows with Git and pull requests."
    ],
    tech: ["Python", "FastAPI", "Django", "REST APIs", "SQL", "Git"],
    color: "primary"
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Independent / Contract-based",
    location: "Remote",
    period: "2025 – Present",
    description: [
      "Delivering end-to-end features for client web applications (SaaS & E-commerce).",
      "Designing REST APIs, authentication flows, and relational database schemas.",
      "Implementing CRUD operations and role-based access for real-world scaling use cases.",
      "Direct client communication for requirement gathering and feature delivery."
    ],
    tech: ["Python", "Flask", "Django", "FastAPI", "React", "PostgreSQL"],
    color: "secondary"
  },
  {
    title: "Python & Django Specialist Training",
    company: "Broadway Infosys",
    location: "Kathmandu, Nepal",
    period: "August 2025 – November 2025",
    description: [
      "Mastered Django & Django REST Framework for enterprise-level applications.",
      "Integrated complex REST APIs with React-based interactive frontends.",
      "Optimized MySQL and SQLite queries using Django ORM and profiling tools.",
      "Implemented clean code principles and MVC architecture patterns."
    ],
    tech: ["Python", "Django", "DRF", "React", "JavaScript", "SQL"],
    color: "accent"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold text-primary">
            <Briefcase size={16} />
            My Journey
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            A track record of building robust systems and delivering high-quality web solutions.
          </p>
        </motion.div>

        <div className="mt-24 space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 items-start"
            >
              {/* Left Content (Desktop) */}
              <div className={`hidden lg:block ${index % 2 !== 0 ? 'order-3' : 'text-right'}`}>
                <div className="pt-2">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <div className={`flex items-center gap-2 mt-2 font-bold text-primary ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <span>{exp.company}</span>
                  </div>
                </div>
              </div>

              {/* Timeline Center */}
              <div className="hidden lg:flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
                <div className={`w-12 h-12 rounded-2xl glass flex items-center justify-center text-${exp.color} shadow-xl shadow-${exp.color}/10 ring-4 ring-transparent group-hover:ring-primary/20 transition-all`}>
                  <Briefcase size={22} />
                </div>
                <div className="w-0.5 h-full bg-linear-to-b from-primary/50 to-transparent min-h-[100px] mt-4" />
              </div>

              {/* Right Content / Mobile Content */}
              <div className="glass rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                {/* Mobile specific header */}
                <div className="lg:hidden mb-6">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 font-bold text-primary">
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-100 dark:bg-slate-800/50 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

