import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  // Scroll to section on activeSection change
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-500 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 mesh-gradient opacity-40 dark:opacity-20 pointer-events-none" />

      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-black tracking-tighter">
          AJAJ.<span className="text-primary">DEV</span>
        </span>
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-xl glass text-slate-600 dark:text-slate-300"
        >
          <MenuIcon />
        </button>
      </header>

      {/* Sidebar Navigation */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        theme={theme}
        activeSection={activeSection}
        toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />

      {/* Main content */}
      <main className="lg:ml-72 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Home />
          <Footer />
        </motion.div>
      </main>

      {/* Custom Cursor / Noise / Grain effects could go here for extra premium feel */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  );
}

