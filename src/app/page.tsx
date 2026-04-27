import { cvData } from "@/lib/cv-data";
import { DownloadCVButton } from "@/components/DownloadCVButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Portfolio
          </span>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a
              href="#about"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              About Me
            </a>
            <a
              href="#tech-stack"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Education
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
          <div className="mb-6 flex justify-center">
            <img
              src="/photo.jpg"
              alt={cvData.name}
              width={160}
              height={160}
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {cvData.name}
          </h1>
          <p className="mb-1 text-lg font-medium text-zinc-700 dark:text-zinc-300">
            {cvData.title}
          </p>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            {cvData.location} | {cvData.availability}
          </p>
          <p className="mb-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <a
              href={`mailto:${cvData.email}`}
              className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <span aria-hidden>📧</span> {cvData.email}
            </a>
            <span aria-hidden>·</span>
            <a
              href={cvData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <span aria-hidden>💼</span> {cvData.linkedinDisplay}
            </a>
            <span aria-hidden>·</span>
            <a
              href={cvData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <span aria-hidden>💻</span> {cvData.githubDisplay}
            </a>
          </p>
          <div className="flex justify-center">
            <DownloadCVButton />
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="mb-20 scroll-mt-20">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            About Me
          </h2>
          <div className="space-y-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {cvData.aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="mb-20 scroll-mt-20">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Tech Stack
          </h2>
          <div className="mb-4 grid gap-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
            {cvData.techStackGroups.map((g) => (
              <p key={g.label}>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {g.label}
                </span>{" "}
                {g.value}
              </p>
            ))}
          </div>
          <ul className="flex flex-wrap gap-2">
            {cvData.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-zinc-200 px-4 py-1.5 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
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
            {cvData.experience.map((item) => (
              <li key={`${item.company}-${item.role}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {item.company} — {item.role}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-3 list-inside list-disc space-y-1 text-zinc-600 dark:text-zinc-400">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-20 scroll-mt-20">
          <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Projects
          </h2>
          <ul className="space-y-8">
            {cvData.projects.map((project) => (
              <li key={project.name}>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {project.name}
                  {"role" in project && project.role && (
                    <span className="font-normal text-zinc-600 dark:text-zinc-400">
                      {" "}
                      — {project.role}
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                {"bullets" in project && project.bullets && (
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Stack: {project.stack}
                </p>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {"live" in project && (project as { live?: string }).live && (
                    <span>
                      Live:{" "}
                      {"liveUrl" in project &&
                      (project as { liveUrl?: string }).liveUrl ? (
                        <a
                          href={(project as { liveUrl: string }).liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
                        >
                          {(project as { live: string }).live}
                        </a>
                      ) : (
                        (project as { live: string }).live
                      )}
                    </span>
                  )}
                  {"code" in project && (project as { code?: string }).code && (
                    <span>
                      Code:{" "}
                      {"codeUrl" in project &&
                      (project as { codeUrl?: string }).codeUrl ? (
                        <a
                          href={(project as { codeUrl: string }).codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
                        >
                          {(project as { code: string }).code}
                        </a>
                      ) : (
                        (project as { code: string }).code
                      )}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section id="education" className="mb-20 scroll-mt-20">
          <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Education
          </h2>
          <ul className="space-y-6">
            {cvData.education.map((item) => (
              <li key={item.name}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {item.name} — {item.program}
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

        {/* Key Strengths */}
        <section className="mb-20 scroll-mt-20">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Key Strengths
          </h2>
          <ul className="list-inside list-disc space-y-1 text-zinc-600 dark:text-zinc-400">
            {cvData.keyStrengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </section>

        {/* Contact / Availability */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Availability
          </h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Open to Junior Web Developer roles in the UK or Remote. Reach out
            via email or LinkedIn.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${cvData.email}`}
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              {cvData.email}
            </a>
            <a
              href={cvData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              LinkedIn
            </a>
            <a
              href={cvData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              GitHub
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
