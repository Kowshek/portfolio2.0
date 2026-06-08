export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

// ─── Architecture Diagram ────────────────────────────────────────────────────

export interface IArchitectureLayer {
    id: string;
    label: string;
    sublabel?: string;
    /** Emoji icon displayed inside the node */
    icon?: string;
    variant?: 'primary' | 'secondary' | 'default';
}

export interface IArchitectureDiagram {
    layers: IArchitectureLayer[];
}

// ─── Project ─────────────────────────────────────────────────────────────────

export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
    architecture?: IArchitectureDiagram;
}

// ─── Experience ──────────────────────────────────────────────────────────────

export interface IExperience {
    title: string;
    company: string;
    companyFull?: string;
    duration: string;
    location?: string;
    technologies: string[];
    responsibilities: string[];
    achievements: string[];
    impact: string;
}

// ─── Certifications ──────────────────────────────────────────────────────────

export interface ICertification {
    title: string;
    provider: string;
    date: string;
    credentialUrl?: string;
    skills: string[];
    providerLogo?: string;
}

// ─── Highlights ──────────────────────────────────────────────────────────────

export interface IHighlight {
    value: string;
    label: string;
    description: string;
}
