import type { ProjectDefinition } from '@/lib/types';

export const ukrainianSchoolInLeeds: ProjectDefinition = {
  slug: 'ukrainian-school-in-leeds',
  sectionTitle: 'Featured Full-Stack Projects',
  name: 'Ukrainian School in Leeds',
  type: 'Full-Stack Web Application',
  role: 'Full-Stack Developer',
  stack:
    'Next.js, TypeScript, Tailwind CSS, Supabase, Stripe, Vercel',
  description:
    'A full-featured web application for a Ukrainian community school in Leeds, including authentication, an admin dashboard, dynamic content management, and Stripe payments.',
  built: `- Authentication system and protected admin dashboard
- Stripe payments for subscriptions and donations
- Dynamic pages for content management
- Responsive UI for all devices
- Supabase-backed functionality
- Deployment on Vercel`,
  result:
    'Simplified management for administrators and improved user experience for parents and students.',
  github:
    'https://github.com/VladKyriienko/UkainianSchoolLeeds',
  liveUrl: 'https://ukrainian-school-leeds.vercel.app',
  sections: [
    {
      heading: 'Overview',
      content:
        'Educational platform for a Ukrainian community school with authentication, admin dashboard, dynamic content management, subscriptions, and donations.',
    },
    {
      heading: 'What I built',
      content: `- Authentication system and protected admin dashboard
- Stripe payments for subscriptions and donations
- Dynamic pages for content management
- Responsive UI for all devices
- Supabase-backed functionality
- Deployment on Vercel`,
      preLine: true,
    },
    {
      heading: 'Payments & subscriptions',
      content:
        'Implemented Stripe Checkout for donations and recurring subscriptions, with webhook handling and admin visibility into payment status.',
    },
    {
      heading: 'Result',
      content:
        'Simplified management for administrators and improved user experience for parents and students.',
    },
  ],
};
