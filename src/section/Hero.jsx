import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Github, Linkedin } from "../components/ui/Icons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />

      <motion.div
        className="relative z-10 max-w-6xl w-full mx-auto px-6 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Status pill */}
        <motion.div variants={itemVariants} className="inline-block">
          <span className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm font-medium text-primary dark:text-primary animate-bounce-subtle">
            <Sparkles size={16} />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-tight"
        >
          Ajaj <span className="text-gradient">Ahamed</span>
        </motion.h1>

        {/* Value proposition */}
        <motion.div variants={itemVariants}>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-300 dark:to-slate-500 bg-clip-text text-transparent">
            Crafting Scalable Full-Stack Solutions
          </h2>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          Backend Specialist with a deep love for <span className="text-primary font-semibold">Python/Django</span> and <span className="text-secondary font-semibold">React</span>. I build robust systems that feel magic and look premium.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass inline-flex items-center px-8 py-4 rounded-2xl font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Socials & Info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-8"
        >
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ahamedajaj01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajaj-ahamed-thakurai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ajaj@example.com"
              className="p-3 rounded-xl glass text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Birtamode, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Full-Stack Enthusiast</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

