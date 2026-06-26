import { ProjectCard } from "@/components/ProjectCard";
import { projectSections } from "@/app/projects";

export const metadata = {
  title: "Projects | Vladyslav Kyriienko",
  description: "Selected full-stack and web projects by Vladyslav Kyriienko.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-12">
      <h1 className="mb-2 text-3xl font-bold">Projects</h1>
      <p className="mb-12 text-(--text-secondary)">
        A selection of SaaS platforms, full-stack applications, and business
        websites I have built.
      </p>

      {projectSections.map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="mb-6 text-xl font-semibold">{section.title}</h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {section.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
