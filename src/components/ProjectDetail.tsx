import type { ProjectDefinition } from '@/lib/types';

type ProjectDetailProps = {
  project: ProjectDefinition;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <p className="mb-2 text-sm text-(--text-muted)">{project.sectionTitle}</p>
      <h1 className="mb-6 text-3xl font-bold">{project.name}</h1>

      <div className="space-y-1 text-(--text-secondary)">
        <p>
          <span className="font-medium text-(--text-primary)">Type:</span>{' '}
          {project.type}
        </p>
        <p>
          <span className="font-medium text-(--text-primary)">Role:</span>{' '}
          {project.role}
        </p>
        <p>
          <span className="font-medium text-(--text-primary)">Stack:</span>{' '}
          {project.stack}
        </p>
      </div>

      {project.sections.map((section) => (
        <div key={section.heading} className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">{section.heading}</h2>
          <p
            className={
              section.preLine ? 'leading-relaxed whitespace-pre-line' : 'leading-relaxed'
            }
          >
            {section.content}
          </p>
        </div>
      ))}

      <div className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">Links</h2>
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-(--text-secondary)"
            >
              GitHub
            </a>
          )}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-(--text-secondary)"
          >
            Live Demo
          </a>
        </div>
      </div>
    </>
  );
}
