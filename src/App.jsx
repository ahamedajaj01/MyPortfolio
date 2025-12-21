import { useState, useEffect } from "react";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("dark")
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
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      {/* Mobile header */}
      <header className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-slate-800">
        <button onClick={() => setSidebarOpen(true)} className="text-slate-600 dark:text-slate-300">
          ☰
        </button>
        <span className="font-semibold text-slate-900 dark:text-slate-100">Ajaj Ahamed</span>
      </header>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} theme={theme} activeSection={activeSection}
        toggleTheme={() =>
          setTheme((t) => (t === "dark" ? "light" : "dark"))
        } />

      {/* Main content */}
      <main className=" lg:ml-64 px-6 lg:px-16">
        <Home />
        <Footer />
      </main>
    </div>
  );
}
