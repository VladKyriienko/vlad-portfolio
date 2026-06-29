import type { ProjectDefinition } from '@/lib/types';

export const goNetwork: ProjectDefinition = {
  slug: 'go-network',
  sectionTitle: 'Commercial Web / CMS Projects',
  name: 'GO Network',
  type: 'Webflow CMS Website',
  role: 'Web Developer',
  stack: 'Webflow, JavaScript, HTML, CSS',
  description:
    'Developed a platform-style website for a marketing network connecting brands with agencies.',
  built: `- Built structured and scalable Webflow pages
- Designed content-heavy layouts for clarity
- Optimized user flows for different audiences: brands and agencies
- Implemented responsive and modern UI
- Enabled easy content updates through a CMS-driven structure`,
  result:
    'Improved content management and maintained consistent branding.',
  github: '',
  liveUrl: 'https://thegonetwork.com',
  sections: [
    {
      heading: 'Overview',
      content:
        'Developed a platform-style website for a marketing network connecting brands with agencies.',
    },
    {
      heading: 'What I built',
      content: `- Built structured and scalable Webflow pages
- Designed content-heavy layouts for clarity
- Optimized user flows for different audiences: brands and agencies
- Implemented responsive and modern UI
- Enabled easy content updates through a CMS-driven structure`,
      preLine: true,
    },
    {
      heading: 'Result',
      content:
        'Improved content management and maintained consistent branding.',
    },
  ],
};
