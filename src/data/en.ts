
import type { Content } from './types';

export const en: Content = {
    nav: {
        trajectory: "Career",
        skills: "Skills",
        projects: "Projects",
        services: "Services",
        cloud_ai: "Cloud & AI",
        education: "Education",
        contact: "Contact"
    },
    hero: {
        available: "Available for work",
        role: "Senior Operations Lead & SysAdmin",
        description: "Transforming complex infrastructure into robust, scalable, and secure systems. Technical leadership with strategic vision and precise execution.",
        metrics: {
            experience: "+8 Years Exp",
            projects: "+50 Projects",
            availability: "24/7 Operations"
        },
        cta: {
            contact: "Contact Me",
            projects: "View Projects"
        }
    },
    experience: {
        title: "Professional Career",
        subtitle: "Technical evolution from on-site support to critical operations leadership.",
        items: [
            {
                id: 1,
                role: "Operations Team Lead & L2 Support",
                company: "Zelenza (Vodafone)",
                location: "Albacete (Hybrid)",
                date: "2017 - Present",
                summary: "Leading a team of 18 Network Operators. Leadership in critical incidents and KPI/SLA management.",
                details: [
                    "Team management and technical talent development.",
                    "Resolution of high-priority incidents in Vodafone network (HFC/FTTH).",
                    "Direct communication with corporate client (Vodafone Spain).",
                    "Quality Assurance (QA) and continuous process improvement."
                ]
            },
            {
                id: 2,
                role: "SysAdmin & Full Stack Developer",
                company: "Bodegas SAAC",
                location: "Villamalea",
                date: "Oct 2016 - Dec 2016",
                summary: "Systems Administrator and Web Developer. Integral responsibility for the IT department.",
                details: [
                    "SysAdmin: Equipment administration, LDAP, Networks.",
                    "Automation: Backup scripts and maintenance.",
                    "Web Development: Corporate portal (PHP, SQL, HTML/CSS).",
                    "Integral User Support."
                ]
            },
            {
                id: 3,
                role: "Systems & Infrastructure Technician",
                company: "APP Informática",
                location: "Iniesta",
                date: "Apr 2013 - Jul 2013",
                summary: "Technical support and hardware/software maintenance for end users and SMBs.",
                details: [
                    "Hardware assembly and repair.",
                    "Failure diagnosis and data recovery.",
                    "Installation and configuration of wired/WiFi networks."
                ]
            }
        ]
    },
    skills: {
        title: "Technical Arsenal",
        subtitle: "Tech stack focused on reliability, performance, and automation.",
        categories: [
            {
                title: "Core Infrastructure",
                skills: [
                    { name: "Linux (RHEL/Debian)", level: 95 },
                    { name: "Windows Server", level: 90 },
                    { name: "Virtualization (VMware)", level: 85 },
                    { name: "Networks (Cisco/Mikrotik)", level: 80 }
                ]
            },
            {
                title: "Cloud & Dev",
                skills: [
                    { name: "AWS / Azure", level: 75 },
                    { name: "Docker & K8s", level: 70 },
                    { name: "Bash & Python", level: 85 },
                    { name: "Git & CI/CD", level: 80 }
                ]
            },
            {
                title: "Management & Tools",
                skills: [
                    { name: "Jira / Remedy", level: 90 },
                    { name: "Monitoring", level: 85 },
                    { name: "ITIL v4", level: 80 },
                    { name: "Team Leadership", level: 90 }
                ]
            }
        ]
    },
    projects: {
        title: "Featured Projects",
        subtitle: "Selection of work and Open Source collaborations.",
        loading: "Loading projects...",
        error: "Failed to load projects.",
        db_projects: {
            'portfolio': {
                desc: 'Personal portfolio migrated to React + TypeScript + Vite. Modular architecture, animations, and Cloudflare deployment.',
                tags: ['React', 'TypeScript', 'Vite', 'Cloudflare']
            }
        }
    },
    services: {
        title: "Professional Services",
        subtitle: "Tailored solutions for companies and startups.",
        items: [
            {
                title: "Modern Web Development",
                desc: "Fast, secure, and scalable sites.",
                features: ["High Conversion Landing Pages", "React/Next.js Apps", "SEO Optimization (Core Vitals)"]
            },
            {
                title: "Cloud & DevOps Consulting",
                desc: "Infrastructure optimization.",
                features: ["Cloud Migration (AWS/Azure)", "CI/CD Pipelines", "Containerization (Docker)"]
            },
            {
                title: "Specialized Technical Support",
                desc: "Resolution of complex problems.",
                features: ["Network Diagnosis", "Malware Cleaning", "Disaster Recovery"]
            }
        ]
    },
    innovation: {
        title: "Cloud, Web & AI Labs",
        subtitle: "Exploring the intersection of Operations, Development, and AI.",
        items: [
            {
                title: "IaC & Automation",
                desc: "Implementing Terraform and Ansible for immutable deployments.",
                tags: ["Terraform", "Ansible", "GitOps"]
            },
            {
                title: "Serverless Architectures",
                desc: "Building APIs with Cloudflare Workers and AWS Lambda.",
                tags: ["Serverless", "Edge Computing", "APIs"]
            },
            {
                title: "AI Ops",
                desc: "Integrating local LLMs for automated log analysis.",
                tags: ["LLM", "Python", "Automation"]
            }
        ]
    },
    education: {
        title: "Education & Certifications",
        items: [
            {
                title: "Higher Technician ASIR",
                school: "IES Leonardo da Vinci (2014 - 2016)",
                date: "2014-2016",
                desc: "Administration of Computer Network Systems",
                details: [
                    "OS Administration (Windows Server, Linux Deb/RPM).",
                    "Network Services (DNS, DHCP, LDAP, HTTP).",
                    "Database Management (MySQL, Oracle).",
                    "Security and High Availability."
                ]
            },
            {
                title: "Technician SMR",
                school: "IES Cañada de la Encina (2012 - 2014)",
                date: "2012-2014",
                desc: "Microcomputer Systems and Networks",
                details: [
                    "Equipment Assembly and Maintenance.",
                    "Local Networks and Basic Security.",
                    "Office and Web Applications."
                ]
            }
        ],
        certs: [
            { name: "Amazon Web Services (AWS) | Data Analytics Fundamentals" },
            { name: "Google Activate | Cloud Computing" },
            { name: "LPI | Linux Essentials Professional Development" },
            { name: "Cisco | IT Essentials: PC Hardware and Software" },
            { name: "Mastermind | How to protect yourself on the net" },
            { name: "Google | Intro to Web Development (HTML/CSS)" }
        ]
    },
    contact: {
        title_part1: "Ready to",
        title_part2_gradient: "upgrade?",
        subtitle: "Available for Systems Administration, CloudOps, and Leadership roles.",
        availability: "Available: Albacete (Hybrid) or Remote",
        actions: {
            email: "Email Me",
            code: "View Code",
            connect: "Connect",
            share: "Share"
        },
        footer: {
            rights: "Diego Martínez Ortiz",
            legal: "Legal Notice",
            privacy: "Privacy",
            cookies: "Cookies"
        }
    },
    legal: {
        aviso: {
            title: "Legal Notice",
            content: "LEGAL DATA PENDING"
        },
        privacidad: { title: "Privacy Policy", content: "" },
        cookies: { title: "Cookie Policy", content: "" }
    }
};
