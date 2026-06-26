import type { ProjectDefinition } from '@/lib/types';

export const ds5Construction: ProjectDefinition = {
  slug: 'ds5-construction',
  sectionTitle: 'Featured Full-Stack Projects',
  name: 'DS5 Construction',
  type: 'Business Website with API Integrations',
  role: 'Full-Stack Developer',
  stack:
    'Next.js, TypeScript, Tailwind CSS, Google Maps API, Google Places API, Resend, Vercel',
  description:
    'High-converting landing page for a construction company, developed from layout to deployment.',
  built: `- Designed clean and professional UI
- Structured content to highlight services and trust
- Optimized for performance and fast loading
- Implemented responsive design
- Integrated Google Maps, Google Places, and Resend email service
- Deployed the landing page on Vercel`,
  result:
    'Improved online presence and increased potential client inquiries.',
  github: '',
  liveUrl: 'https://ds5construction.co.uk',
  sections: [
    {
      heading: 'Overview',
      content:
        'High-converting landing page for a construction company, developed from layout to deployment.',
    },
    {
      heading: 'What I built',
      content: `- Designed clean and professional UI
- Structured content to highlight services and trust
- Optimized for performance and fast loading
- Implemented responsive design
- Integrated Google Maps, Google Places, and Resend email service
- Deployed the landing page on Vercel`,
      preLine: true,
    },
    {
      heading: 'Result',
      content:
        'Improved online presence and increased potential client inquiries.',
    },
  ],
};
