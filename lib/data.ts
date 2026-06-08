import { ICertification, IExperience, IHighlight, IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'kowshekiyyappan@gmail.com',
    emailSubject: "Let's build something together",
    emailBody: 'Hi Kowshek, I am reaching out to you because...',
    upworkProfile: 'https://www.linkedin.com/in/kowshek-iyyappan',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/kowshek' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/kowshek-iyyappan' },
    { name: 'IngrediScan.AI', url: 'https://ingrediscan.in' },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Vite', icon: '/logo/vite.svg' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
    ],
    backend: [
        { name: 'Supabase', icon: '/logo/supabase.svg' },
        { name: 'FastAPI', icon: '/logo/fastapi.svg' },
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Python', icon: '/logo/python.svg' },
    ],
    database: [{ name: 'PostgreSQL', icon: '/logo/postgreSQL.png' }],
    tools: [
        { name: 'Claude API', icon: '/logo/anthropic.svg' },
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Vercel', icon: '/logo/vercel.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'IngrediScan.AI',
        slug: 'ingrediscan-ai',
        liveUrl: 'https://ingrediscan.in',
        year: 2024,
        description: `An AI-powered ingredient safety scanner that lets users photograph any product label and instantly understand what&apos;s in it and whether it&apos;s safe.<br/><br/>
      Key Features:<br/>
      <ul>
        <li>📸 Vision-First Scanning: Point your camera at any ingredient list, no barcode or database lookup required</li>
        <li>🧠 AI Classification: Claude Haiku reads and classifies every ingredient as Harmful, Moderate, or Safe in under 3 seconds</li>
        <li>🎯 Safety Score: Returns a 0-100 score per product scan with plain-English reasons for every flagged ingredient</li>
        <li>⚡ PWA: Installable on iOS and Android, works offline, no app store required</li>
        <li>🔒 Personalized Flags: Users set allergies and dietary restrictions, every scan surfaces personal risks first</li>
      </ul><br/>
      Technical Highlights:
      <ul>
        <li>Built entirely solo: product design, engineering, and deployment</li>
        <li>Supabase Edge Functions (Deno runtime) for serverless AI inference</li>
        <li>PostHog analytics, Sentry error monitoring, UptimeRobot uptime tracking from day one</li>
        <li>Deployed on Vercel CDN with custom domains ingrediscan.ai and ingrediscan.in</li>
      </ul>`,
        role: `Solo Developer<br/>
      <ul>
        <li>🎨 Designed and built the full product from scratch</li>
        <li>⚙️ Backend: Supabase Edge Functions with Deno and Anthropic Claude Haiku integration</li>
        <li>🖥️ Frontend: React 19 and Vite PWA, fully installable, service worker powered</li>
        <li>📊 Observability: PostHog, Sentry, and UptimeRobot wired from day one</li>
        <li>🚀 Deployed on Vercel CDN across two custom domains</li>
      </ul>`,
        techStack: [
            'React 19',
            'Vite',
            'Tailwind CSS',
            'Supabase',
            'Deno',
            'Claude Haiku',
            'PostHog',
            'Sentry',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/ingrediscan.jpg',
        longThumbnail: '/projects/long/ingrediscan.jpg',
        images: ['/projects/images/ingrediscan.jpg'],
        architecture: {
            layers: [
                {
                    id: 'user',
                    label: 'User',
                    sublabel: 'Camera · Browser · iOS / Android',
                    icon: '👤',
                    variant: 'default',
                },
                {
                    id: 'pwa',
                    label: 'React 19 + Vite PWA',
                    sublabel: 'Service worker · Offline-first · Installable',
                    icon: '⚛',
                    variant: 'default',
                },
                {
                    id: 'edge',
                    label: 'Supabase Edge Functions',
                    sublabel: 'Deno runtime · Serverless inference',
                    icon: '☁️',
                    variant: 'primary',
                },
                {
                    id: 'ai',
                    label: 'Claude Haiku (Anthropic)',
                    sublabel:
                        'Vision + ingredient classification · < 3 s latency',
                    icon: '🤖',
                    variant: 'secondary',
                },
                {
                    id: 'db',
                    label: 'Supabase PostgreSQL',
                    sublabel: 'User profiles · scan history · dietary flags',
                    icon: '🗄️',
                    variant: 'default',
                },
            ],
        },
    },
    {
        title: 'Pipeline Builder',
        slug: 'pipeline-builder',
        liveUrl: 'https://pipelinebuilder.vercel.app/',
        year: 2024,
        description: `A visual drag-and-drop pipeline builder built with ReactFlow. Users can create, connect, and configure nodes to represent data or workflow pipelines, all rendered in an interactive canvas.<br/><br/>
      Key Features:<br/>
      <ul>
        <li>🔗 Drag-and-drop node creation and edge connections</li>
        <li>🎛️ Configurable node properties via side panels</li>
        <li>📐 Auto-layout and zoom controls</li>
        <li>💾 Pipeline serialization to JSON</li>
        <li>↩️ Full undo/redo system using Zustand history stacks, triggered by Ctrl+Z / Ctrl+Y</li>
      </ul>`,
        role: `Frontend Developer<br/>
      <ul>
        <li>Implemented the full ReactFlow canvas with custom node types</li>
        <li>Built node configuration panels and state management</li>
        <li>Deployed on Vercel</li>
      </ul>`,
        techStack: ['React', 'ReactFlow', 'Tailwind CSS', 'Vercel'],
        thumbnail: '/projects/thumbnail/pipeline-builder.jpg',
        longThumbnail: '/projects/long/pipeline-builder.jpg',
        images: ['/projects/images/pipeline-builder.jpg'],
        architecture: {
            layers: [
                {
                    id: 'user',
                    label: 'User',
                    sublabel: 'Drag · drop · configure nodes',
                    icon: '👤',
                    variant: 'default',
                },
                {
                    id: 'canvas',
                    label: 'ReactFlow Canvas',
                    sublabel: 'Custom node types · edge connections · zoom',
                    icon: '🎨',
                    variant: 'primary',
                },
                {
                    id: 'state',
                    label: 'Zustand State Manager',
                    sublabel: 'Undo / redo history stacks · Ctrl+Z / Ctrl+Y',
                    icon: '🔄',
                    variant: 'default',
                },
                {
                    id: 'serial',
                    label: 'JSON Serialization',
                    sublabel: 'Pipeline export · import · persistence',
                    icon: '📄',
                    variant: 'default',
                },
            ],
        },
    },
    {
        title: 'Task Manager',
        slug: 'task-manager',
        liveUrl: 'https://task-manager-1cie.onrender.com/',
        year: 2024,
        description: `A full-stack Task Manager built with FastAPI (backend) and plain HTML/CSS/JS (frontend). Features JWT authentication, full CRUD, pagination, and user isolation.<br/><br/>
      Key Features:<br/>
      <ul>
        <li>🔐 JWT-based authentication: register, login, logout</li>
        <li>✅ Full task CRUD: create, view, update, delete, mark complete</li>
        <li>📄 Pagination and filtering by completion status</li>
        <li>👤 User isolation: each user only sees their own tasks</li>
        <li>📖 Interactive API docs at /docs (Swagger UI)</li>
        <li>🐳 Containerized with Docker and deployed to Render</li>
      </ul>`,
        role: `Full-Stack Developer<br/>
      <ul>
        <li>Built the FastAPI backend with JWT auth, PostgreSQL, and full CRUD endpoints</li>
        <li>Built the frontend in vanilla HTML/CSS/JS, no framework</li>
        <li>Containerized with Docker and deployed to Render with auto-generated Swagger docs at /docs</li>
      </ul>`,
        techStack: [
            'FastAPI',
            'Python',
            'PostgreSQL',
            'JWT',
            'HTML',
            'CSS',
            'JavaScript',
            'Render',
        ],
        thumbnail: '/projects/thumbnail/task-manager.jpg',
        longThumbnail: '/projects/long/task-manager.jpg',
        images: ['/projects/images/task-manager.jpg'],
        architecture: {
            layers: [
                {
                    id: 'user',
                    label: 'User',
                    sublabel: 'Vanilla HTML / CSS / JS frontend',
                    icon: '👤',
                    variant: 'default',
                },
                {
                    id: 'api',
                    label: 'FastAPI Backend',
                    sublabel: 'REST endpoints · Swagger UI at /docs',
                    icon: '⚡',
                    variant: 'primary',
                },
                {
                    id: 'auth',
                    label: 'JWT Auth Middleware',
                    sublabel: 'Token-based auth · user isolation',
                    icon: '🔐',
                    variant: 'default',
                },
                {
                    id: 'db',
                    label: 'PostgreSQL',
                    sublabel: 'Per-user task storage · pagination',
                    icon: '🗄️',
                    variant: 'default',
                },
                {
                    id: 'infra',
                    label: 'Docker + Render',
                    sublabel: 'Containerised · auto-deploy on push',
                    icon: '🐳',
                    variant: 'secondary',
                },
            ],
        },
    },
    {
        title: 'Finsight Dashboard',
        slug: 'finsight-dashboard',
        liveUrl: 'https://finsight-dashboard-phi.vercel.app/',
        year: 2024,
        description: `A clean, interactive finance dashboard built as a frontend internship assignment. Features real-time chart rendering, date-based filtering, and multi-page routing.<br/><br/>
      Key Features:<br/>
      <ul>
        <li>📈 Interactive charts: line, bar, and pie via Recharts</li>
        <li>🗓️ Date-range filtering with date-fns</li>
        <li>🔀 Multi-page routing via React Router</li>
        <li>🗃️ Global state management with Zustand</li>
        <li>📱 Fully responsive layout</li>
      </ul>`,
        role: `Frontend Developer<br/>
      <ul>
        <li>Built the full dashboard from scratch using React, Zustand, and Recharts</li>
        <li>Implemented client-side filtering and charting logic</li>
        <li>Deployed on Vercel</li>
      </ul>`,
        techStack: [
            'React',
            'Recharts',
            'Zustand',
            'React Router',
            'Tailwind CSS',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/finsight.jpg',
        longThumbnail: '/projects/long/finsight.jpg',
        images: ['/projects/images/finsight.jpg'],
        architecture: {
            layers: [
                {
                    id: 'user',
                    label: 'User',
                    sublabel: 'Browser SPA',
                    icon: '👤',
                    variant: 'default',
                },
                {
                    id: 'router',
                    label: 'React Router',
                    sublabel: 'Client-side multi-page navigation',
                    icon: '🔀',
                    variant: 'default',
                },
                {
                    id: 'store',
                    label: 'Zustand Store',
                    sublabel: 'Global state · date-range filters',
                    icon: '🔄',
                    variant: 'primary',
                },
                {
                    id: 'charts',
                    label: 'Recharts',
                    sublabel: 'Line · Bar · Pie · responsive containers',
                    icon: '📈',
                    variant: 'secondary',
                },
            ],
        },
    },
    {
        title: 'IDR Platform',
        slug: 'idr-platform',
        liveUrl: 'https://idr-project.netlify.app/',
        year: 2025,
        description: `A full landing page built for the Institute of Digital Risk (IDR), an industry-led training and deployment institute specialising in digital, cyber, and technology risk roles across regulated environments.<br/><br/>
      Key Features:<br/>
      <ul>
        <li>📐 Multi-section landing page: hero, about, services, pipeline, community, and contact</li>
        <li>📊 Animated stats (500+ practitioners, 40+ industry partners, 92% employment rate)</li>
        <li>📬 Contact form with profile-based routing (student, professional, employer)</li>
        <li>📱 Fully responsive across all breakpoints</li>
      </ul>`,
        role: `Frontend Developer<br/>
      <ul>
        <li>✅ Built the full landing page from design to deployment</li>
        <li>🎨 Translated design brief into clean semantic HTML/CSS</li>
        <li>📱 Implemented responsive layout for all screen sizes</li>
        <li>🚀 Deployed on Netlify with form handling</li>
      </ul>`,
        techStack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
        thumbnail: '/projects/thumbnail/idr.jpg',
        longThumbnail: '/projects/long/idr.jpg',
        images: ['/projects/images/idr.jpg'],
        architecture: {
            layers: [
                {
                    id: 'user',
                    label: 'User',
                    sublabel: 'Landing page visitor',
                    icon: '👤',
                    variant: 'default',
                },
                {
                    id: 'frontend',
                    label: 'HTML / CSS / JavaScript',
                    sublabel:
                        'Semantic markup · responsive layout · animations',
                    icon: '🌐',
                    variant: 'primary',
                },
                {
                    id: 'forms',
                    label: 'Netlify Forms',
                    sublabel: 'Profile-based routing · spam filtering',
                    icon: '📬',
                    variant: 'default',
                },
                {
                    id: 'cdn',
                    label: 'Netlify CDN',
                    sublabel: 'Global hosting · CI/CD on push',
                    icon: '🚀',
                    variant: 'secondary',
                },
            ],
        },
    },
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'Frontend Developer',
        company: 'CLSS Labs',
        companyFull: 'Client Linx Software Pvt Ltd',
        duration: '2024 – 2025',
        location: 'Chennai, India',
        technologies: ['React', 'JavaScript', 'CSS', 'REST APIs', 'Git'],
        responsibilities: [
            'Built and maintained responsive React frontends across multiple client-facing web applications',
            'Integrated RESTful APIs and managed component-level state with React hooks and context',
            'Translated Figma designs into pixel-accurate, production-ready UI components',
            'Collaborated with backend engineers to define and consume API contracts',
            'Participated in code reviews, sprint planning, and production deployments',
        ],
        achievements: [
            'Delivered production-ready features shipped to real users within the first month of joining',
            'Built a reusable component library that reduced UI development time across multiple projects',
            'Improved page load performance by implementing route-level code splitting',
            'Maintained zero critical bugs in assigned frontend features across the full internship period',
        ],
        impact: 'Took full ownership of frontend features across multiple client products, from design handoff through to deployment. Built components that were reused across the codebase and contributed to shipping product to real users consistently on schedule.',
    },
];

export const CERTIFICATIONS: ICertification[] = [
    {
        title: 'Claude 101',
        provider: 'Anthropic Education',
        date: 'April 2026',
        credentialUrl: 'https://verify.skilljar.com/c/9brbht3v2crm',
        skills: [
            'Claude API',
            'Prompt Writing',
            'LLM Concepts',
        ],
        providerLogo: '/logo/anthropic.svg',
    },
    {
        title: 'Introduction to MCP',
        provider: 'Anthropic Education',
        date: 'June 2026',
        credentialUrl: 'https://verify.skilljar.com/c/so9wf5zuxgnt',
        skills: ['MCP', 'Claude API', 'Tool Use', 'AI Integration'],
        providerLogo: '/logo/anthropic.svg',
    },
    {
        title: 'Claude Code in Action',
        provider: 'Anthropic Education',
        date: 'June 2026',
        credentialUrl: 'https://verify.skilljar.com/c/j8crswh2ri3d',
        skills: [
            'Agentic Coding',
            'CLI Tools',
            'AI Integration',
        ],
        providerLogo: '/logo/anthropic.svg',
    },
];

export const HIGHLIGHTS: IHighlight[] = [
    {
        value: '5+',
        label: 'Production Apps',
        description:
            'Deployed on Vercel, Render, and Netlify, not just GitHub repos gathering dust.',
    },
    {
        value: '1',
        label: 'Live AI Product',
        description:
            'IngrediScan.AI, solo-built from zero to production, serving real users with real AI.',
    },
    {
        value: 'Full-Stack',
        label: 'Range',
        description:
            'React frontends → FastAPI backends → PostgreSQL databases. I own the whole stack.',
    },
    {
        value: '1 yr',
        label: 'Industry Experience',
        description:
            'Frontend intern at CLSS Labs shipping features for real clients in production.',
    },
];
