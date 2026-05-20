import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'kowshekiyyappan@gmail.com',
    emailSubject: "Let's build something together",
    emailBody: 'Hi Kowshek, I am reaching out to you because...',
    upworkProfile: 'https://www.linkedin.com/in/kowshek-iyyappan',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/kowshek' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/kowshek-iyyappan' },
    { name: 'IngrediScan.AI', url: 'https://ingrediscan.ai' },
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
    database: [
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
    ],
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
        techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Supabase', 'Deno', 'Claude Haiku', 'PostHog', 'Sentry', 'Vercel'],
        thumbnail: '/projects/thumbnail/ingrediscan.jpg',
        longThumbnail: '/projects/long/ingrediscan.jpg',
        images: ['/projects/images/ingrediscan.jpg'],
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
        techStack: ['FastAPI', 'Python', 'PostgreSQL', 'JWT', 'HTML', 'CSS', 'JavaScript', 'Render'],
        thumbnail: '/projects/thumbnail/task-manager.jpg',
        longThumbnail: '/projects/long/task-manager.jpg',
        images: ['/projects/images/task-manager.jpg'],
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
        techStack: ['React', 'Recharts', 'Zustand', 'React Router', 'Tailwind CSS', 'Vercel'],
        thumbnail: '/projects/thumbnail/finsight.jpg',
        longThumbnail: '/projects/long/finsight.jpg',
        images: ['/projects/images/finsight.jpg'],
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
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer Intern',
        company: 'CLSS Labs (Client Linx Software Pvt Ltd)',
        duration: '2024 - 2025',
    },
];
