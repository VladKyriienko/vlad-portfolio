import type { ProjectDefinition } from '@/lib/types';

export const ds5Construction: ProjectDefinition = {
  slug: 'ds5-construction',
  sectionTitle: 'Featured Full-Stack Projects',
  name: 'DS5 Construction',
  type: 'Business Website',
  role: 'Full-Stack / Frontend Developer',
  stack:
    'Next.js, TypeScript, Tailwind CSS, Vercel, Google Maps API, Google Places API, Resend',
  description:
    'A high-converting business website for a construction company, built to present services clearly, improve trust, and generate client enquiries.',
  built: `- Clean and professional responsive UI
- Service-focused content structure
- Performance-optimized landing page
- Google Maps and Google Places integration
- Contact form with Resend email service
- Production deployment on Vercel`,
  result: `Improved the company’s online presence and created a clearer path for potential client enquiries.`,
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
