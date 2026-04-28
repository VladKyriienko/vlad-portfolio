export const cvData = {
  name: 'Vladyslav Kyriienko',
  title: 'Full-Stack Developer (Next.js, React, Supabase)',
  location: 'United Kingdom',
  availability: 'Open to UK & Remote roles',
  email: 'vladyslav.kirienko@gmail.com',
  linkedin:
    'https://linkedin.com/in/vladyslav-kyriienko-a2a209228',
  linkedinDisplay:
    'linkedin.com/in/vladyslav-kyriienko-a2a209228',
  github: 'https://github.com/VladKyriienko',
  githubDisplay: 'github.com/VladKyriienko',

  aboutParagraphs: [
    'I’m a Next.js developer focused on building modern web applications and admin dashboards.',
    'I don’t just create websites — I develop scalable products with authentication, dashboards, and real business functionality.',
    'I’ve worked on projects in education, logistics, and service-based businesses, helping improve user experience and simplify internal processes.',
    'My goal is to build clean, fast, and user-friendly solutions that deliver real value.',
  ],

  whatIDo: [
    'Web Applications (Next.js / React / TypeScript)',
    'Admin Dashboards',
    'Payment Integration (Stripe)',
    'API Integration',
    'Responsive UI/UX',
    'Performance Optimization',
  ],

  techStack: [
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Node.js',
    'Supabase',
    'PostgreSQL',
    'REST APIs',
    'Stripe',
    'Git',
    'GitHub',
    'Vercel',
    'Figma',
    'Webflow',
    'Bubble',
  ],

  techStackGroups: [
    {
      label: 'Frontend:',
      value:
        'HTML, CSS, JavaScript ,React, Next.js, TypeScript, Tailwind CSS',
    },
    {
      label: 'Backend:',
      value: 'Node.js, Supabase, PostgreSQL, REST APIs',
    },
    {
      label: 'Payments:',
      value: 'Stripe (Subscriptions, Checkout, Webhooks)',
    },
    { label: 'No-code / CMS:', value: 'Bubble, Webflow' },
    {
      label: 'Tools:',
      value: 'Git, GitHub, Vercel, Figma',
    },
  ],

  experience: [
    {
      role: 'Web Developer',
      company: 'Decodifi LTD',
      period: '2022 – 2026',
      bullets: [
        'Developed responsive UI using Next.js, React, Tailwind',
        'Built backend solutions with Supabase (Auth, PostgreSQL, RLS)',
        'Integrated Stripe payments and subscriptions',
        'Deployed and maintained production applications on Vercel',
        'Used AI-assisted tools to speed up development and optimize code',
        'Previously leveraged no-code platforms to prototype and deliver projects',
      ],
    },
  ],

  projects: [
    {
      name: 'Ukrainian School in Leeds',
      role: 'Developed a full-featured web application for a Ukrainian school.',
      description:
        'Educational platform for a Ukrainian community school including authentication, admin dashboard, and dynamic content management.',
      result:
        'Simplified management for administrators and improved user experience for parents and students.',
      bullets: [
        'Built authentication system and admin dashboard',
        'Implemented Stripe payments for subscriptions and donations',
        'Created dynamic pages for content management',
        'Designed responsive UI for all devices',
        'Deployed the application on Vercel',
      ],
      stack:
        'Next.js, TypeScript, Tailwind, Supabase, Stripe, Vercel',
      live: 'ukrainian-school-leeds.vercel.app',
      liveUrl: 'https://ukrainian-school-leeds.vercel.app',
      code: 'Private repository (available on request)',
    },
    {
      name: 'LifeDash',
      role: 'Team Project',
      description: 'Health-focused SaaS',
      result:
        'Improved user engagement by delivering dashboards and subscription flows with a clean, responsive UI.',
      bullets: [
        'Developed dashboards, subscription flows, and backend as part of a team',
      ],
      stack: 'Next.js, Supabase, Stripe, Tailwind',
      live: 'life-dash-lilac.vercel.app',
      liveUrl: 'https://life-dash-lilac.vercel.app',
      code: 'Private repository (available on request)',
    },
    {
      name: 'Tortoise',
      role: 'Team Project',
      description: 'Next.js SaaS Project',
      result:
        'Provided a secure and responsive dashboard experience with smoother onboarding and daily usage.',
      bullets: [
        'Dynamic pages, secure backend, user authentication, responsive dashboard developed collaboratively',
      ],
      stack: 'Next.js, Supabase, Tailwind',
      live: 'tortoise-decodifi.vercel.app',
      liveUrl: 'https://tortoise-decodifi.vercel.app',
      code: 'Private repository (available on request)',
    },
    {
      name: 'DS5 Construction',
      role: 'Full-cycle development (from layout to deployment)',
      description: 'Corporate Construction Website',
      result:
        'Delivered a fast, modern marketing site with clear service presentation and mobile-first UX.',
      bullets: [
        'Built with Next.js, all content stored in JSON files',
        'Responsive design and user-friendly interface',
      ],
      stack: 'Next.js, Tailwind CSS, TypeScript, Vercel',
      live: 'ds5construction.vercel.app',
      liveUrl: 'https://ds5construction.vercel.app',
    },
    {
      name: 'GO Network',
      role: 'Full website development in Webflow',
      description: 'Corporate Website',
      result:
        'Enabled easy content updates through a CMS-driven structure while maintaining consistent branding.',
      bullets: ['CMS-driven pages and static content'],
      stack: 'Webflow',
      live: 'thegonetwork.com',
      liveUrl: 'https://thegonetwork.com',
    },
    {
      name: 'TFS Express Logistics',
      role: 'Full website development in Webflow',
      description: 'Corporate Logistics Website',
      result:
        'Launched a responsive website that is easy to maintain and improves clarity of services and navigation.',
      bullets: [
        'Built entirely on Webflow',
        'Responsive design, CMS content, and interactive sections',
      ],
      stack: 'Webflow',
      live: 'tfslogistics.com',
      liveUrl: 'https://tfslogistics.com',
    },
  ],

  education: [
    {
      name: 'GoIT',
      program: 'Web Development Program',
      period: '2019 – 2021',
      description:
        'Intensive training in HTML, CSS, JavaScript, React, Node.js, databases, and modern web tools.',
    },
  ],

  keyStrengths: [
    'Hands-on experience building production web applications and SaaS',
    'Full-stack development skills (frontend + backend + integrations)',
    'Familiar with no-code and AI-assisted development',
    'Strong problem-solving, debugging, and deployment abilities',
  ],
} as const;

export type CVData = typeof cvData;
