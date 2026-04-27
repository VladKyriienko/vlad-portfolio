(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/cv-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cvData",
    ()=>cvData
]);
const cvData = {
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
        "I focus on full-stack development, integrating databases, authentication, dashboards, and payment systems, and enjoy learning new tools to deliver high-quality apps."
    ],
    techStack: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "REST APIs",
        "Stripe",
        "Git",
        "GitHub",
        "Vercel",
        "Figma",
        "Webflow",
        "Bubble"
    ],
    techStackGroups: [
        {
            label: "Frontend:",
            value: "HTML, CSS, JavaScript ,React, Next.js, TypeScript, Tailwind CSS"
        },
        {
            label: "Backend:",
            value: "Node.js, Supabase, PostgreSQL, REST APIs"
        },
        {
            label: "Payments:",
            value: "Stripe (Subscriptions, Checkout, Webhooks)"
        },
        {
            label: "No-code / CMS:",
            value: "Bubble, Webflow"
        },
        {
            label: "Tools:",
            value: "Git, GitHub, Vercel, Figma"
        }
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
                "Previously leveraged no-code platforms to prototype and deliver projects"
            ]
        }
    ],
    projects: [
        {
            name: "Ukrainian School Leeds",
            role: "Founder & Web Developer (Personal Project)",
            description: "Educational platform for a Ukrainian community school.",
            bullets: [
                "Built the platform from scratch with authentication, admin dashboard, and dynamic pages",
                "Integrated Stripe payments for school subscriptions and donations",
                "Developed responsive UI and deployed the live system"
            ],
            stack: "Next.js, Supabase, Tailwind, Stripe",
            live: "ukr-school.vercel.app",
            liveUrl: "https://ukr-school.vercel.app",
            code: "Private repository (available on request)"
        },
        {
            name: "LifeDash",
            role: "Team Project",
            description: "Health-focused SaaS",
            bullets: [
                "Developed dashboards, subscription flows, and backend as part of a team"
            ],
            stack: "Next.js, Supabase, Stripe, Tailwind",
            live: "life-dash-lilac.vercel.app",
            liveUrl: "https://life-dash-lilac.vercel.app",
            code: "Private repository (available on request)"
        },
        {
            name: "Tortoise",
            role: "Team Project",
            description: "Next.js SaaS Project",
            bullets: [
                "Dynamic pages, secure backend, user authentication, responsive dashboard developed collaboratively"
            ],
            stack: "Next.js, Supabase, Tailwind",
            live: "tortoise-decodifi.vercel.app",
            liveUrl: "https://tortoise-decodifi.vercel.app",
            code: "Private repository (available on request)"
        },
        {
            name: "DS5 Construction",
            role: "Personal Project",
            description: "Corporate Construction Website",
            bullets: [
                "Built with Next.js, all content stored in JSON files",
                "Responsive design and user-friendly interface"
            ],
            stack: "Next.js, Tailwind CSS, JSON content",
            live: "ds5construction.vercel.app",
            liveUrl: "https://ds5construction.vercel.app"
        },
        {
            name: "GO Network",
            role: "Personal Project",
            description: "Corporate Website",
            bullets: [
                "CMS-driven pages and static content"
            ],
            stack: "Webflow",
            live: "thegonetwork.com",
            liveUrl: "https://thegonetwork.com"
        },
        {
            name: "TFS Express Logistics",
            role: "Personal Project",
            description: "Corporate Logistics Website",
            bullets: [
                "Built entirely on Webflow",
                "Responsive design, CMS content, and interactive sections"
            ],
            stack: "Webflow",
            live: "tfslogistics.com",
            liveUrl: "https://tfslogistics.com"
        }
    ],
    education: [
        {
            name: "GoIT",
            program: "Web Development Program",
            period: "2019 – 2021",
            description: "Intensive training in HTML, CSS, JavaScript, React, Node.js, databases, and modern web tools."
        }
    ],
    keyStrengths: [
        "Hands-on experience building production web applications and SaaS",
        "Full-stack development skills (frontend + backend + integrations)",
        "Familiar with no-code and AI-assisted development",
        "Strong problem-solving, debugging, and deployment abilities"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DownloadCVButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadCVButton",
    ()=>DownloadCVButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cv-data.ts [app-client] (ecmascript)");
"use client";
;
;
;
const MARGIN = 20;
const PAGE_W = 210;
const PAGE_H = 297;
const MAX_W = PAGE_W - MARGIN * 2;
const LINE_HEIGHT = 5.5;
const SECTION_GAP = 6;
const NAME_SIZE = 20;
const HEADING_SIZE = 11;
const BODY_SIZE = 9;
const NAME_BOTTOM_GAP = 5;
const PHOTO_SIZE = 38;
const PHOTO_X = MARGIN;
const PHOTO_Y = MARGIN;
const HEADER_TEXT_X = MARGIN + PHOTO_SIZE + 10;
function wrapText(doc, text, x, y) {
    const lines = doc.splitTextToSize(text, MAX_W);
    doc.text(lines, x, y);
    return y + lines.length * LINE_HEIGHT;
}
function checkPageBreak(doc, y, spaceNeeded) {
    if (y + spaceNeeded > PAGE_H - MARGIN) {
        doc.addPage();
        return MARGIN;
    }
    return y;
}
function DownloadCVButton() {
    const handleDownload = async ()=>{
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]();
        let y = MARGIN;
        // Load photo for PDF (same origin), preserve aspect ratio
        let photoData = null;
        let photoW = PHOTO_SIZE;
        let photoH = PHOTO_SIZE;
        try {
            const imgUrl = ("TURBOPACK compile-time truthy", 1) ? `${window.location.origin}/photo.jpg` : "TURBOPACK unreachable";
            const res = await fetch(imgUrl);
            const blob = await res.blob();
            photoData = await new Promise((resolve, reject)=>{
                const reader = new FileReader();
                reader.onload = ()=>resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
            const img = new Image();
            img.src = photoData;
            await new Promise((resolve, reject)=>{
                img.onload = ()=>resolve();
                img.onerror = ()=>reject(new Error("Image load failed"));
            });
            const ratio = img.naturalWidth / img.naturalHeight;
            if (ratio > 1) {
                photoH = PHOTO_SIZE / ratio;
            } else {
                photoW = PHOTO_SIZE * ratio;
            }
        } catch  {
        // continue without photo
        }
        if (photoData) {
            doc.addImage(photoData, "JPEG", PHOTO_X, PHOTO_Y, photoW, photoH);
        }
        let headerY = MARGIN;
        doc.setFontSize(NAME_SIZE);
        doc.setFont("helvetica", "bold");
        doc.text(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].name, HEADER_TEXT_X, headerY + 5);
        headerY += LINE_HEIGHT + NAME_BOTTOM_GAP;
        doc.setFontSize(BODY_SIZE);
        doc.setFont("helvetica", "normal");
        doc.text(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].title, HEADER_TEXT_X, headerY);
        headerY += LINE_HEIGHT;
        doc.text(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].location} | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].availability}`, HEADER_TEXT_X, headerY);
        headerY += LINE_HEIGHT + 2;
        doc.setFontSize(BODY_SIZE);
        doc.textWithLink(`Email: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].email}`, HEADER_TEXT_X, headerY, {
            url: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].email}`
        });
        headerY += LINE_HEIGHT;
        doc.textWithLink(`LinkedIn: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].linkedinDisplay}`, HEADER_TEXT_X, headerY, {
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].linkedin
        });
        headerY += LINE_HEIGHT;
        doc.textWithLink(`GitHub: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].githubDisplay}`, HEADER_TEXT_X, headerY, {
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].github
        });
        headerY += LINE_HEIGHT + 4;
        y = Math.max(PHOTO_Y + photoH, headerY) + SECTION_GAP;
        // About Me
        y = checkPageBreak(doc, y, 40);
        doc.setFontSize(HEADING_SIZE);
        doc.setFont("helvetica", "bold");
        doc.text("About Me", MARGIN, y);
        y += SECTION_GAP;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(BODY_SIZE);
        for (const p of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].aboutParagraphs){
            y = checkPageBreak(doc, y, LINE_HEIGHT * 3);
            y = wrapText(doc, p, MARGIN, y) + 2;
        }
        y += SECTION_GAP;
        // Tech Stack
        y = checkPageBreak(doc, y, 50);
        doc.setFontSize(HEADING_SIZE);
        doc.setFont("helvetica", "bold");
        doc.text("Tech Stack", MARGIN, y);
        y += SECTION_GAP;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(BODY_SIZE);
        for (const g of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].techStackGroups){
            y = checkPageBreak(doc, y, LINE_HEIGHT);
            doc.text(`${g.label} ${g.value}`, MARGIN, y);
            y += LINE_HEIGHT;
        }
        y += SECTION_GAP;
        // Experience
        y = checkPageBreak(doc, y, 60);
        doc.setFontSize(HEADING_SIZE);
        doc.setFont("helvetica", "bold");
        doc.text("Experience", MARGIN, y);
        y += SECTION_GAP;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(BODY_SIZE);
        for (const exp of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].experience){
            y = checkPageBreak(doc, y, LINE_HEIGHT * 4);
            doc.setFont("helvetica", "bold");
            doc.text(`${exp.company} — ${exp.role}`, MARGIN, y);
            y += LINE_HEIGHT;
            doc.setFont("helvetica", "normal");
            doc.text(exp.period, MARGIN, y);
            y += LINE_HEIGHT;
            doc.setFont("helvetica", "normal");
            for (const b of exp.bullets){
                y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
                y = wrapText(doc, `• ${b}`, MARGIN + 2, y) + 1;
            }
            y += 4;
        }
        y += SECTION_GAP;
        // Projects
        y = checkPageBreak(doc, y, 40);
        doc.setFontSize(HEADING_SIZE);
        doc.setFont("helvetica", "bold");
        doc.text("Projects", MARGIN, y);
        y += SECTION_GAP;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(BODY_SIZE);
        for (const proj of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].projects){
            const name = proj.name;
            const role = proj.role;
            const title = role ? `${name} — ${role}` : name;
            y = checkPageBreak(doc, y, LINE_HEIGHT * 3);
            doc.setFont("helvetica", "bold");
            doc.text(title, MARGIN, y);
            y += LINE_HEIGHT;
            doc.setFont("helvetica", "normal");
            y = wrapText(doc, proj.description, MARGIN, y) + 1;
            if ("bullets" in proj && proj.bullets) {
                for (const b of proj.bullets){
                    y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
                    y = wrapText(doc, `• ${b}`, MARGIN + 2, y) + 1;
                }
            }
            doc.text(`Stack: ${proj.stack}`, MARGIN, y);
            y += LINE_HEIGHT;
            const p = proj;
            if (p.live) {
                if (p.liveUrl) {
                    doc.textWithLink(`Live: ${p.live}`, MARGIN, y, {
                        url: p.liveUrl
                    });
                } else {
                    doc.text(`Live: ${p.live}`, MARGIN, y);
                }
                y += LINE_HEIGHT;
            }
            if (p.code) {
                if (p.codeUrl) {
                    doc.textWithLink(`Code: ${p.code}`, MARGIN, y, {
                        url: p.codeUrl
                    });
                } else {
                    doc.text(`Code: ${p.code}`, MARGIN, y);
                }
                y += LINE_HEIGHT;
            }
            y += 4;
        }
        y += SECTION_GAP;
        // Education
        y = checkPageBreak(doc, y, 40);
        doc.setFontSize(HEADING_SIZE);
        doc.setFont("helvetica", "bold");
        doc.text("Education", MARGIN, y);
        y += SECTION_GAP;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(BODY_SIZE);
        for (const ed of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].education){
            y = checkPageBreak(doc, y, LINE_HEIGHT * 5);
            doc.setFont("helvetica", "bold");
            doc.text(`${ed.name} — ${ed.program}`, MARGIN, y);
            y += LINE_HEIGHT;
            doc.setFont("helvetica", "normal");
            doc.text(ed.period, MARGIN, y);
            y += LINE_HEIGHT;
            y = wrapText(doc, ed.description, MARGIN, y) + 4;
        }
        y += SECTION_GAP;
        // Key Strengths
        y = checkPageBreak(doc, y, 40);
        doc.setFontSize(HEADING_SIZE);
        doc.setFont("helvetica", "bold");
        doc.text("Key Strengths", MARGIN, y);
        y += SECTION_GAP;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(BODY_SIZE);
        for (const s of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].keyStrengths){
            y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
            y = wrapText(doc, `• ${s}`, MARGIN, y) + 1;
        }
        y += SECTION_GAP;
        y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
        doc.text(`Availability: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cvData"].availability}. Reach out via email or LinkedIn.`, MARGIN, y);
        doc.save("Vladyslav-Kyriienko-CV.pdf");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>void handleDownload(),
        className: "cursor-pointer rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300",
        children: "Download CV"
    }, void 0, false, {
        fileName: "[project]/src/components/DownloadCVButton.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
_c = DownloadCVButton;
var _c;
__turbopack_context__.k.register(_c, "DownloadCVButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4ba232ca._.js.map