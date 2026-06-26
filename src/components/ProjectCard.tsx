import Link from "next/link";
import type { Project } from "@/app/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="rounded-lg border border-(--header-border) p-5 transition hover:border-(--text-muted)">
      <Link href={`/projects/${project.slug}/`} className="block">
        <h3 className="font-bold">{project.name}</h3>
        <p className="mt-1 text-sm text-(--text-secondary)">{project.type}</p>
        <p className="mt-3 text-(--text-secondary)">{project.description}</p>
        <p className="mt-3 text-sm font-medium underline underline-offset-4">
          View project
        </p>
      </Link>
    </li>
  );
}
