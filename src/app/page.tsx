import Link from "next/link";

const skills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js",
  "Git",
  "English (B2)",
];

const experience = [
  {
    role: "Job Title",
    company: "Company",
    period: "2022 — present",
    description: "Brief description of responsibilities and achievements.",
  },
  {
    role: "Previous Role",
    company: "Previous Company",
    period: "2020 — 2022",
    description: "Description of experience.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Portfolio
          </span>
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl px-6 pb-24 pt-12">
        {/* Hero */}
        <section className="mb-20 text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Your Name
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Short tagline — e.g. Frontend Developer, Fullstack Engineer
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Get in touch
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
            >
              Download CV
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-20 scroll-mt-20">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            About
          </h2>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            A short paragraph about yourself: what you do, what you care about,
            why you are open to new opportunities. Handy for recruiters — they
            get context at a glance.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-20 scroll-mt-20">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-zinc-200 px-4 py-1.5 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-20 scroll-mt-20">
          <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Experience
          </h2>
          <ul className="space-y-8">
            {experience.map((item) => (
              <li key={`${item.company}-${item.role}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {item.role} · {item.company}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Contact
          </h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Open to discussing roles and projects. Reach out via email or
            LinkedIn.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:email@example.com"
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              email@example.com
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              LinkedIn
            </a>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              Telegram
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-6 dark:border-zinc-800">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Portfolio. Built with Next.js.
        </p>
      </footer>
    </div>
  );
}
