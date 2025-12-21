import { useState } from "react";

export default function Sidebar({ open, onClose, theme, toggleTheme, activeSection }) {

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-64
          bg-slate-50 border-r border-slate-200
          dark:bg-black dark:border-slate-800
          transform transition-all duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          flex flex-col
          text-slate-900 dark:text-white
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6">
          <h2 className="text-lg font-semibold">Ajaj Ahamed</h2>

          {/* Close button (mobile) */}
          <button
            onClick={onClose}
            className="lg:hidden text-slate-400"
          >
            ✕
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 space-y-1 text-slate-600 dark:text-slate-300">
          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onClose}
              className={`block rounded-lg px-4 py-3 hover:bg-slate-200 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white transition-colors
                ${activeSection === item.id ? "bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-white" : ""}
                `}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom */}
        <div className="border-t border-slate-200 dark:border-slate-800 px-6 py-5">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </aside>
    </>
  );
}
