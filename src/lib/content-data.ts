export const contentData = {
  name: 'Vladyslav Kyriienko',
  title:
    'Full-Stack Developer building production-ready web applications, SaaS platforms, and business tools.',
  location:
    'Based in the United Kingdom · Open to UK & Remote roles',
  email: 'vladyslav.kirienko@gmail.com',
  linkedin:
    'https://linkedin.com/in/vladyslav-kyriienko-a2a209228',
  linkedinDisplay:
    'linkedin.com/in/vladyslav-kyriienko-a2a209228',
  github: 'https://github.com/VladKyriienko',
  githubDisplay: 'github.com/VladKyriienko',

  about: `I’m a Full-Stack Developer with 4+ years of professional experience building modern SaaS applications, business platforms, dashboards, and high-performance websites.

My main stack includes React, Next.js, TypeScript, Supabase, PostgreSQL, Tailwind CSS, Stripe, and Vercel. I work across frontend development, backend integrations, authentication, payment flows, database-backed features, API integrations, and deployment.

I have delivered projects for SaaS products, education, construction, logistics, and service-based businesses. My work includes secure authentication systems, admin dashboards, Stripe subscriptions, dynamic content management, responsive user interfaces, and production deployments.

Before moving fully into software development, I worked in production operations and managed teams of 5–20 employees. This background helped me build strong problem-solving, ownership, communication, and delivery skills.

I’m based in Leeds, UK and open to Full-Stack or Frontend Developer roles focused on React, Next.js, TypeScript, SaaS products, dashboards, and business platforms.`,

  whatIDo: `Full-Stack Web Applications
I build modern web applications using Next.js, React, TypeScript, Supabase, PostgreSQL, and Tailwind CSS.

SaaS Platforms
I develop subscription-based applications with authentication, protected routes, dashboards, Stripe Checkout, and user management.

Admin Dashboards
I create dashboard interfaces with role-based access, dynamic data, forms, tables, filters, and responsive layouts.

Authentication & User Management
I implement Supabase Auth, protected routes, user roles, database-backed permissions, and secure access flows.

Payment Integration
I integrate Stripe Checkout, subscriptions, donations, webhooks, and payment-related user flows.

Business Websites
I build fast, responsive websites for service-based companies, including contact forms, CMS structures, API integrations, and deployment.

Deployment & Production Support
I deploy projects on Vercel, work with environment variables, debug production issues, and improve performance and reliability.`,

  techStack: `Core Technologies
React · Next.js · TypeScript · Supabase · PostgreSQL · Stripe · Vercel

Frontend
React · Next.js · TypeScript · Tailwind CSS

Backend & Database
Node.js · Supabase · PostgreSQL · REST APIs

Authentication & Security
Supabase Auth · Row Level Security · Protected Routes · Role-Based Access

Payments & Integrations
Stripe Checkout · Stripe Subscriptions · Webhooks · Third-Party APIs

Tools & Workflow
Git · GitHub · Vercel · Figma · Docker`,

  experience: [
    {
      role: 'Full-Stack Developer',
      company: 'Decodifi - Leeds, UK',
      period: 'June 2022 – present',
      bullets: `I develop production-ready SaaS applications, business platforms, dashboards, and client-facing web applications using React, Next.js, TypeScript, Supabase, PostgreSQL, Stripe, and Vercel.

Key responsibilities:
- Build responsive web applications using React, Next.js, and TypeScript
- Develop secure authentication systems with Supabase Auth
- Create protected routes, role-based access, and database-backed user flows
- Design and integrate REST APIs and backend services
- Implement Stripe Checkout, subscriptions, and webhook-based payment flows
- Build responsive dashboards and dynamic user interfaces
- Deploy and maintain production applications on Vercel
- Collaborate using Git and GitHub
- Work across frontend, backend integrations, debugging, deployment, and production support`,
    },
  ],

  education: [
    {
      name: 'GoIT',
      program: 'Full-Stack Web Development Program',
      period: '2019 – 2021',
      description:
        'Completed an intensive full-stack web development program covering JavaScript, React, Node.js, databases, REST APIs, Git, and modern frontend development practices.',
    },
  ],

  keyStrengths: `• Production web applications, SaaS tools, dashboards, and business websites
• Full-stack development: frontend, backend integrations, authentication, databases, and APIs
• Stripe, Supabase, PostgreSQL, protected routes, and Vercel deployment
• Product-minded approach with rapid prototyping and AI-assisted workflows
• Strong debugging, performance optimization, and deployment skills`,
} as const;

export type ContentData = typeof contentData;
