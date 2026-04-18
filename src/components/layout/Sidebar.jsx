import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  LayoutGrid,
  Briefcase,
  User,
  Mail,
  FileText,
  Moon,
  Sun,
  X
} from "lucide-react";

export default function Sidebar({ open, onClose, theme, toggleTheme, activeSection }) {
  const links = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: LayoutGrid },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72
          glass border-r border-white/10
          transform transition-transform duration-500 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          flex flex-col
          shadow-2xl shadow-primary/5
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-10">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              AJAJ.<span className="text-primary">DEV</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mt-1">
              Full-Stack Architect
            </span>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-xl glass text-slate-400 hover:text-primary transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {links.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onClose}
                className={`
                  group flex items-center gap-4 rounded-2xl px-5 py-4 text-sm font-bold transition-all duration-300
                  ${isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                    : "text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-white"
                  }
                `}
              >
                <Icon size={20} className={`${isActive ? "text-white" : "group-hover:text-primary"} transition-colors`} />
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="sidebarActive"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                  />
                )}
              </a>
            );
          })}

          <div className="pt-6 px-4">
            <div className="h-px bg-slate-200 dark:bg-slate-800" />
          </div>

          <a
            href="/Fullstack_Ajaj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl px-5 py-4 text-sm font-bold text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:text-primary transition-all duration-300"
          >
            <FileText size={20} />
            Download CV
          </a>
        </nav>

        {/* Theme Toggle */}
        <div className="p-8">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between rounded-2xl glass p-4 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              {theme === "dark" ? <Moon size={20} className="text-primary" /> : <Sun size={20} className="text-secondary" />}
              <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
            </div>
            <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 ${theme === 'dark' ? 'bg-primary' : 'bg-slate-300'}`}>
              <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${theme === 'dark' ? 'translate-x-4' : 'translate-x-0'}`} />
            </div>
          </button>
        </div>
      </aside>
    </>
  );
}

