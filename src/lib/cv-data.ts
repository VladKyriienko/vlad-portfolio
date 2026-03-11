export const cvData = {
  name: "Vladyslav Kyriienko",
  title: "Junior Web Developer",
  location: "United Kingdom",
  availability: "Open to UK & Remote roles",
  email: "vladyslav.kirienko@gmail.com",
  linkedin: "https://linkedin.com/in/vladyslav-kyriienko-a2a209228",
  linkedinDisplay: "linkedin.com/in/vladyslav-kyriienko-a2a209228",
  github: "https://github.com/VladKyriienko",
  githubDisplay: "github.com/VladKyriienko",

  aboutParagraphs: [
    "I'm a Junior Web Developer passionate about turning ideas into real web applications.",
    "Before 2025: Built functional products using no-code platforms like Bubble and Webflow",
    "Since 2025: Using AI-assisted development tools to speed up coding, automate repetitive tasks, and create smarter features",
    "I focus on full-stack development, integrating databases, authentication, dashboards, and payment systems, and enjoy learning new tools to deliver high-quality apps.",
  ],

  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "REST APIs",
    "Stripe",
    "Git",
    "GitHub",
    "Vercel",
    "Figma",
    "Webflow",
    "Bubble",
  ],

  techStackGroups: [
    { label: "Frontend:", value: "React, Next.js, TypeScript, Tailwind CSS" },
    { label: "Backend:", value: "Supabase, PostgreSQL, REST APIs" },
    { label: "Payments:", value: "Stripe (Subscriptions, Checkout, Webhooks)" },
    { label: "No-code / CMS:", value: "Bubble, Webflow" },
    { label: "Tools:", value: "Git, GitHub, Vercel, Figma" },
  ],

  experience: [
    {
      role: "Web Developer",
      company: "Decodifi LTD",
      period: "2022 – 2026",
      bullets: [
        "Developed responsive UI using Next.js, React, Tailwind",
        "Built backend solutions with Supabase (Auth, PostgreSQL, RLS)",
        "Integrated Stripe payments and subscriptions",
        "Deployed and maintained production applications on Vercel",
        "Used AI-assisted tools to speed up development and optimize code",
        "Previously leveraged no-code platforms to prototype and deliver projects",
      ],
    },
  ],

  projects: [
    {
      name: "Ukrainian School Leeds",
      role: "Founder & Web Developer (Personal Project)",
      description: "Educational platform for a Ukrainian community school.",
      bullets: [
        "Built the platform from scratch with authentication, admin dashboard, and dynamic pages",
        "Integrated Stripe payments for school subscriptions and donations",
        "Developed responsive UI and deployed the live system",
      ],
      stack: "Next.js, Supabase, Tailwind, Stripe",
      live: "ukr-school.vercel.app",
      liveUrl: "https://ukr-school.vercel.app",
      code: "Private repository (available on request)",
    },
    {
      name: "LifeDash",
      role: "Team Project",
      description: "Health-focused SaaS",
      bullets: [
        "Developed dashboards, subscription flows, and backend as part of a team",
      ],
      stack: "Next.js, Supabase, Stripe, Tailwind",
      live: "life-dash-lilac.vercel.app",
      liveUrl: "https://life-dash-lilac.vercel.app",
      code: "Private repository (available on request)",
    },
    {
      name: "Tortoise",
      role: "Team Project",
      description: "Next.js SaaS Project",
      bullets: [
        "Dynamic pages, secure backend, user authentication, responsive dashboard developed collaboratively",
      ],
      stack: "Next.js, Supabase, Tailwind",
      live: "tortoise-decodifi.vercel.app",
      liveUrl: "https://tortoise-decodifi.vercel.app",
      code: "Private repository (available on request)",
    },
    {
      name: "DS5 Construction",
      role: "Personal Project",
      description: "Corporate Construction Website",
      bullets: [
        "Built with Next.js, all content stored in JSON files",
        "Responsive design and user-friendly interface",
      ],
      stack: "Next.js, Tailwind CSS, JSON content",
      live: "ds5construction.vercel.app",
      liveUrl: "https://ds5construction.vercel.app",
    },
    {
      name: "GO Network",
      role: "Personal Project",
      description: "Corporate Website",
      bullets: ["CMS-driven pages and static content"],
      stack: "Webflow",
      live: "thegonetwork.com",
      liveUrl: "https://thegonetwork.com",
    },
    {
      name: "TFS Express Logistics",
      role: "Personal Project",
      description: "Corporate Logistics Website",
      bullets: [
        "Built entirely on Webflow",
        "Responsive design, CMS content, and interactive sections",
      ],
      stack: "Webflow",
      live: "tfslogistics.com",
      liveUrl: "https://tfslogistics.com",
    },
  ],

  education: [
    {
      name: "GoIT",
      program: "Web Development Program",
      period: "2019 – 2021",
      description:
        "Intensive training in HTML, CSS, JavaScript, React, Node.js, databases, and modern web tools.",
    },
  ],

  keyStrengths: [
    "Hands-on experience building production web applications and SaaS",
    "Full-stack development skills (frontend + backend + integrations)",
    "Familiar with no-code and AI-assisted development",
    "Strong problem-solving, debugging, and deployment abilities",
  ],
} as const;

export type CVData = typeof cvData;
