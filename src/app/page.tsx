import Link from "next/link";
import { contentData } from "@/lib/content-data";
import { projectSections } from "@/app/projects";

export default function Home() {

  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-12">
      {/* Hero */}
      <section className="mb-20 text-center">
        <h1 className="mb-2 text-3xl font-bold uppercase tracking-tight text-(--text-primary) sm:text-6xl">
          {contentData.name}
        </h1>
        <p className="mb-1 text-lg font-medium text-(--text-strong)">
          {contentData.title}
        </p>
        <p className="mb-4 text-(--text-secondary)">{contentData.location}</p>
      </section>

      {/* About Me */}
      <section id="about" className="mb-20 scroll-mt-20">
        <h2 className="mb-4 text-xl font-semibold">About Me</h2>
        <p className="leading-relaxed whitespace-pre-line">
          {contentData.about}
        </p>
      </section>

      {/* What I do */}
      <section className="mb-20 scroll-mt-20">
        <h2 className="mb-4 text-xl font-semibold">What I do</h2>
        <p className="leading-relaxed whitespace-pre-line">
          {contentData.whatIDo}
        </p>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="mb-20 scroll-mt-20">
        <h2 className="mb-4 text-xl font-semibold text-(--text-primary)">
          Tech Stack
        </h2>
        <p className="leading-relaxed whitespace-pre-line text-(--text-secondary)">
          {contentData.techStack}
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-20 scroll-mt-20">
        <h2 className="mb-6 text-xl font-semibold">Experience</h2>
        <ul className="space-y-8">
          {contentData.experience.map((item) => (
            <li key={`${item.company}-${item.role}`}>
              <div className="flex flex-col gap-1 sm:items-baseline sm:justify-between">
                <h3 className="font-medium">{item.role}</h3>
                <p>
                  {item.company} | {item.period}
                </p>
              </div>
              <p className="mt-3 whitespace-pre-line">{item.bullets}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-20 scroll-mt-20">
        <h2 className="mb-6 text-xl font-semibold">Projects</h2>
        {projectSections.map((section) => (
          <div key={section.title} className="mb-8">
            <h3 className="mb-4 font-medium">{section.title}</h3>
            <ul className="space-y-8">
              {section.projects.map((project) => (
                <li key={project.name}>
                  <h4 className="font-bold">
                    <Link
                      href={`/projects/${project.slug}/`}
                      className="hover:underline hover:underline-offset-2"
                    >
                      {project.name}
                    </Link>
                  </h4>
                  <p className="mt-1">Type: {project.type}</p>
                  <p className="mt-1">Role: {project.role}</p>
                  <p className="mt-1">Stack: {project.stack}</p>
                  <p className="mt-5">{project.description}</p>
                  <p className="mt-2">
                    What I built:
                    <span className="mt-2 block leading-relaxed whitespace-pre-line">
                      {project.built}
                    </span>
                  </p>
                  <p className="mt-2">Result: {project.result}</p>
                  <p className="mt-2">
                    Links:
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 hover:underline hover:underline-offset-2"
                      >
                        GitHub
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 hover:underline hover:underline-offset-2"
                    >
                      Live Demo
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section id="education" className="mb-20 scroll-mt-20">
        <h2 className="mb-6 text-xl font-semibold">Education</h2>
        <ul className="space-y-6">
          {contentData.education.map((item) => (
            <li key={item.name}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium">
                  {item.name} - {item.program}
                </h3>
                <span className="text-sm">{item.period}</span>
              </div>
              <p className="mt-2">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Key Strengths */}
      <section className="mb-20 scroll-mt-20">
        <h2 className="mb-4 text-xl font-semibold">Key Strengths</h2>
        <p className="whitespace-pre-line">{contentData.keyStrengths}</p>
      </section>

      {/* Contact / Availability */}
      <section id="contact" className="scroll-mt-20">
        <h2 className="mb-4 text-xl font-semibold">Availability</h2>
        <p className="mb-6">
          Open to Full-Stack / Frontend Developer roles focused on React,
          Next.js, TypeScript, Supabase, and SaaS products.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${contentData.email}`}
            className="underline underline-offset-4 hover:text-(--text-secondary)"
          >
            {contentData.email}
          </a>
          <a
            href={contentData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-(--text-secondary)"
          >
            LinkedIn
          </a>
          <a
            href={contentData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-(--text-secondary)"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
