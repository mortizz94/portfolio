
export interface NavItems {
    trajectory: string;
    skills: string;
    projects: string;
    services: string;
    cloud_ai: string;
    education: string;
    contact: string;
}

export interface HeroSection {
    available: string;
    role: string;
    description: string;
    metrics: {
        experience: string;
        projects: string;
        availability: string;
    };
    cta: {
        contact: string;
        projects: string;
    };
}

export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    location: string;
    date: string;
    summary?: string;
    details?: string[];
}

export interface SkillCategory {
    title: string;
    skills: { name: string; level: number }[];
}

export interface ProjectSection {
    title: string;
    subtitle: string;
    loading: string;
    error: string;
    db_projects: Record<string, { desc: string; tags: string[] }>;
}

export interface ServicesItem {
    title: string;
    desc: string;
    features: string[];
}

export interface InnovationItem {
    title: string;
    desc: string;
    tags: string[];
}

export interface EducationItem {
    title: string;
    school: string;
    date: string;
    desc?: string;
    details?: string[];
}

export interface CertItem {
    name: string;
}

export interface LegalContent {
    title: string;
    content: React.ReactNode;
}

export interface ContactSection {
    title_part1: string;
    title_part2_gradient: string;
    subtitle: string;
    availability: string;
    actions: {
        email: string;
        code: string;
        connect: string;
        share: string;
    };
    footer: {
        legal: string;
        privacy: string;
        cookies: string;
        rights: string;
    }
}

export interface Content {
    nav: NavItems;
    hero: HeroSection;
    experience: {
        title: string;
        subtitle: string;
        items: ExperienceItem[];
    };
    skills: {
        title: string;
        subtitle: string;
        categories: SkillCategory[];
    };
    projects: ProjectSection;
    services: {
        title: string;
        subtitle: string;
        items: ServicesItem[];
    };
    innovation: {
        title: string;
        subtitle: string;
        items: InnovationItem[];
    };
    education: {
        title: string;
        items: EducationItem[];
        certs: CertItem[];
    };
    contact: ContactSection;
    legal: {
        aviso: LegalContent;
        privacidad: LegalContent;
        cookies: LegalContent;
    };
}
