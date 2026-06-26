import type { ProjectDefinition } from '@/lib/types';

export const lifedash: ProjectDefinition = {
  slug: 'lifedash',
  sectionTitle: 'Featured Full-Stack Projects',
  name: 'LifeDash',
  type: 'Health SaaS Application',
  role: 'Full-Stack Developer',
  stack:
    'Next.js, TypeScript, Supabase, Stripe, Tailwind CSS, Vercel',
  description:
    'Health-focused SaaS application with dashboards, subscription flows, and backend features.',
  built: `- Developed dashboard components and subscription-related flows
- Contributed to backend integration using Supabase
- Worked on Stripe payment/subscription functionality as part of a team
- Built responsive UI components with Next.js and Tailwind CSS
- Supported debugging, testing, and deployment improvements`,
  result:
    'Improved user engagement through intuitive dashboards and a smoother subscription experience.',
  github: '',
  liveUrl: 'https://life-dash-lilac.vercel.app',
  sections: [
    {
      heading: 'Overview',
      content:
        'Health-focused SaaS application with dashboards, subscription flows, and backend features.',
    },
    {
      heading: 'What I built',
      content: `- Developed dashboard components and subscription-related flows
- Contributed to backend integration using Supabase
- Worked on Stripe payment/subscription functionality as part of a team
- Built responsive UI components with Next.js and Tailwind CSS
- Supported debugging, testing, and deployment improvements`,
      preLine: true,
    },
    {
      heading: 'Result',
      content:
        'Improved user engagement through intuitive dashboards and a smoother subscription experience.',
    },
  ],
};
