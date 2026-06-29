export type ProjectSectionBlock = {
  heading: string;
  content: string;
  preLine?: boolean;
};

export type ProjectDefinition = {
  slug: string;
  sectionTitle: string;
  name: string;
  type: string;
  role: string;
  stack: string;
  description: string;
  built: string;
  result: string;
  github: string;
  liveUrl: string;
  sections: ProjectSectionBlock[];
};

export type Project = Pick<
  ProjectDefinition,
  | 'slug'
  | 'name'
  | 'type'
  | 'role'
  | 'stack'
  | 'description'
  | 'built'
  | 'result'
  | 'github'
  | 'liveUrl'
>;

export type ProjectSectionGroup = {
  title: string;
  projects: Project[];
};
