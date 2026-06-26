import type { ProjectDefinition } from '@/lib/types';

export const tortoise: ProjectDefinition = {
  slug: 'tortoise',
  sectionTitle: 'Featured Full-Stack Projects',
  name: 'Tortoise',
  type: 'SaaS Platform',
  role: 'Full-Stack Developer',
  stack:
    'Next.js, TypeScript, Supabase, Tailwind CSS, Stripe, Vercel',
  description:
    'Next.js SaaS application with secure authentication, admin dashboard, dynamic pages, and subscription payments.',
  built: `- Built dynamic pages and secure authentication flows
- Developed responsive admin dashboard
- Integrated Stripe payments for subscriptions
- Connected backend logic with Supabase
- Improved onboarding flow and dashboard usability`,
  result:
    'Delivered a secure and scalable dashboard experience with improved onboarding flow.',
  github: '',
  liveUrl: 'https://tortoise-decodifi.vercel.app',
  sections: [
    {
      heading: 'Overview',
      content:
        'Next.js SaaS application with secure authentication, admin dashboard, dynamic pages, and subscription payments.',
    },
    {
      heading: 'What I built',
      content: `- Built dynamic pages and secure authentication flows
- Developed responsive admin dashboard
- Integrated Stripe payments for subscriptions
- Connected backend logic with Supabase
- Improved onboarding flow and dashboard usability`,
      preLine: true,
    },
    {
      heading: 'Result',
      content:
        'Delivered a secure and scalable dashboard experience with improved onboarding flow.',
    },
  ],
};
