import { ds5Construction } from './ds5-construction';
import { goNetwork } from './go-network';
import { lifedash } from './lifedash';
import { tortoise } from './tortoise';
import { tfsExpressLogistics } from './tfs-express-logistics';
import { ukrainianSchoolInLeeds } from './ukrainian-school-in-leeds';
import type {
  ProjectDefinition,
  ProjectSectionGroup,
} from '@/lib/types';

export const allProjects: ProjectDefinition[] = [
  ukrainianSchoolInLeeds,
  tortoise,
  lifedash,
  ds5Construction,
  goNetwork,
  tfsExpressLogistics,
];

const sectionOrder = [
  'Featured Full-Stack Projects',
  'Commercial Web / CMS Projects',
] as const;

export const projectSections: ProjectSectionGroup[] =
  sectionOrder.map((title) => ({
    title,
    projects: allProjects
      .filter((project) => project.sectionTitle === title)
      .map(
        ({
          slug,
          name,
          type,
          role,
          stack,
          description,
          built,
          result,
          github,
          liveUrl,
        }) => ({
          slug,
          name,
          type,
          role,
          stack,
          description,
          built,
          result,
          github,
          liveUrl,
        }),
      ),
  }));

export type {
  Project,
  ProjectDefinition,
  ProjectSectionGroup,
} from '@/lib/types';

export function getProjectBySlug(
  slug: string,
): ProjectDefinition | undefined {
  return allProjects.find(
    (project) => project.slug === slug,
  );
}

export function getAllProjectSlugs(): string[] {
  return allProjects.map((project) => project.slug);
}
