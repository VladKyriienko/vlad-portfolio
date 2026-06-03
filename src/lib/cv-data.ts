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
    'Full-Stack Developer focused on building practical, production-ready web applications with Next.js, React, Supabase, Tailwind CSS, and Stripe.',
    'I have developed logistics platforms, construction websites, school systems, SaaS tools, and dashboard-based applications. My work covers frontend development, backend integrations, authentication, payments, admin systems, and deployment.',
    'Earlier experience with Bubble and Webflow helped me develop strong product thinking, rapid prototyping skills, and a client-focused approach to delivery. Today, I combine that background with modern full-stack development practices and AI-assisted workflows to improve productivity while maintaining clean, maintainable code.',
    'I enjoy building user-focused products, solving practical business problems, and collaborating with fast-moving teams. I am open to full-stack and frontend opportunities in the UK or remote.',
  ],

  whatIDo: [
    'Full-Stack Web Applications <br /> Next.js, React, TypeScript, Supabase, PostgreSQL',
    'Admin Dashboards <br /> Role-based access, user management, protected routes',
    'Authentication & Backend Integrations <br /> Supabase Auth, API integrations, database-backed features',
    'Payment Integration <br /> Stripe Checkout, subscriptions, webhooks',
    'Responsive UI Development <br /> Tailwind CSS, mobile-first layouts, clean user interfaces',
    'Performance & Deployment <br /> Next.js optimization, Vercel deployment, production support',
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
        'React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3',
    },
    {
      label: 'Backend:',
      value: 'Node.js, Supabase, PostgreSQL, REST APIs',
    },
    {
      label: 'Auth & Database:',
      value:
        'Supabase Auth, Row Level Security, PostgreSQL',
    },
    {
      label: 'Payments:',
      value: 'Stripe Checkout, Subscriptions, Webhooks',
    },
    {
      label: 'Deployment & Tools:',
      value: 'Vercel, Git, GitHub, Figma',
    },
    {
      label: 'Prototyping & CMS:',
      value: 'Bubble, Webflow',
    },
  ],

  experience: [
    {
      role: 'Full-Stack Developer',
      company: 'Decodifi LTD',
      period: '2022 – 2026',
      bullets: [
        'Developed and maintained production-ready full-stack web applications using Next.js, React, TypeScript, Supabase, PostgreSQL, Tailwind CSS, and Vercel',
        'Built role-based admin dashboards, Supabase authentication flows, protected routes, and database-backed user management features',
        'Integrated Stripe Checkout and webhook-based payment/subscription flows for SaaS and client-facing platforms',
        'Improved frontend performance by optimizing Next.js rendering, reducing unnecessary client-side logic, and improving deployment workflows on Vercel',
        'Contributed across the full product lifecycle, including UI development, backend logic, database design, API integrations, debugging, testing, and deployment',
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
      liveUrl: 'https://ukrainianschoolleeds.vercel.app',
      code: 'Private repository (available on request)',
    },
    {
      name: 'DS5 Construction',
      role: 'Full-cycle development (from layout to deployment)',
      description:
        'Developed a high-converting landing page for a construction company.',
      result:
        'Improved online presence and increased potential client inquiries.',
      bullets: [
        'Designed clean and professional UI',
        'Structured content to highlight services and trust',
        'Optimized for performance and fast loading',
        'Implemented responsive design',
        'API integration with Google Maps, Google Places and Resend email service',
        'Deployed the landing page on Vercel',
      ],
      stack: 'Next.js, Tailwind CSS, TypeScript, Vercel',
      live: 'ds5construction.co.uk',
      liveUrl: 'https://ds5construction.co.uk',
    },
    {
      name: 'GO Network',
      role: 'Full website development in Webflow',
      description:
        'Developed a platform-style website for a marketing network connecting brands with agencies.',
      result:
        'Enabled easy content updates through a CMS-driven structure while maintaining consistent branding.',
      bullets: [
        'Built structured and scalable frontend',
        'Designed content-heavy layout for clarity',
        'Optimized user flows for different audiences (brands & agencies)',
        'Implemented responsive and modern UI',
      ],
      stack: 'Webflow, JavaScript, HTML, CSS',
      live: 'thegonetwork.com',
      liveUrl: 'https://thegonetwork.com',
    },
    {
      name: 'TFS Express Logistics',
      role: 'Full website development in Webflow',
      description:
        'Built a modern logistics website focused on service presentation and lead generation.',
      result:
        'Improved service visibility and user engagement.',
      bullets: [
        'Structured content for clarity and user flow',
        'Highlighted key services and delivery capabilities',
        'Implemented responsive design',
        'Optimized UI for better user experience',
      ],
      stack: 'Webflow, JavaScript, HTML, CSS',
      live: 'tfslogistics.com',
      liveUrl: 'https://tfslogistics.com',
    },
    {
      name: 'LifeDash',
      role: 'SaaS Application',
      description: 'Health-focused SaaS',
      result:
        'Increased user engagement through intuitive dashboards and smooth subscription experience.',
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
      role: 'SaaS Platform',
      description: 'Next.js SaaS Project',
      result:
        'Delivered a secure and scalable dashboard experience with improved onboarding flow.',
      bullets: [
        'Built dynamic pages and secure authentication system',
        'Developed responsive admin dashboard',
        'Integrated Stripe payments for subscriptions',
        'Integrated backend logic with Supabase',
      ],
      stack: 'Next.js, TypeScript, Supabase, Tailwind CSS',
      live: 'tortoise-decodifi.vercel.app',
      liveUrl: 'https://tortoise-decodifi.vercel.app',
      code: 'Private repository (available on request)',
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
