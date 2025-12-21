export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center
        bg-white dark:bg-slate-950
      "
    >
      <div className="max-w-6xl px-6 lg:px-16">
        {/* Status pill */}
        <span
          className="
            inline-flex items-center gap-2
            rounded-full
            border border-slate-300 dark:border-slate-700
            bg-white/80 dark:bg-slate-900/60
            px-5 py-2
            text-sm
            text-slate-700 dark:text-slate-300
            backdrop-blur
          "
        >
          ✨ Available for opportunities
        </span>

        {/* Name */}
        <h1
          className="
            mt-10
            text-5xl md:text-6xl lg:text-7xl
            font-bold
            tracking-tight
            text-slate-900 dark:text-white
          "
        >
          Ajaj Ahamed
        </h1>

        {/* Value proposition */}
        <h2
          className="
            mt-6
            max-w-4xl
            text-3xl md:text-4xl lg:text-5xl
            font-bold
            text-violet-600
          "
        >
          Django • DRF • React • JavaScript | Backend & Full-Stack Development
        </h2>

        {/* Supporting text */}
        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            text-slate-600 dark:text-slate-400
          "
        >
          A web developer learning and building projects with JavaScript and
          Python, focused on creating clean, responsive web applications using
          Django and Django REST Framework.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="
              inline-flex items-center gap-2
              rounded-xl
              bg-violet-600
              px-6 py-3
              font-medium
              text-white
              hover:bg-violet-500
            "
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="
              inline-flex items-center
              rounded-xl
              border border-slate-300 dark:border-slate-700
              px-6 py-3
              font-medium
              text-slate-900 dark:text-slate-100
              hover:bg-slate-100 dark:hover:bg-slate-800
            "
          >
            Get In Touch
          </a>
        </div>

        {/* Socials */}
        <div className="mt-14 flex items-center gap-4 text-slate-500">
          <span className="text-sm">Connect with me:</span>

          <a
            href="https://github.com/ahamedajaj01"
            className="
              h-10 w-10
              flex items-center justify-center
              rounded-lg
              border border-slate-300 dark:border-slate-700
              hover:bg-slate-100 dark:hover:bg-slate-800
            "
          >
            G
          </a>

          <a
            href="https://www.linkedin.com/in/ajaj-ahamed-thakurai/"
            className="
              h-10 w-10
              flex items-center justify-center
              rounded-lg
              border border-slate-300 dark:border-slate-700
              hover:bg-slate-100 dark:hover:bg-slate-800
            "
          >
            in
          </a>
        </div>
      </div>
    </section>
  );
}
