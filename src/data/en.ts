
import type { Content } from './types';

export const en: Content = {
    nav: {
        trajectory: "Experience",
        skills: "Skills",
        projects: "Projects",
        services: "Services",
        education: "Education",
        contact: "Contact"
    },
    hero: {
        available: "Available to start",
        role: "Senior SysAdmin & Network Operations Lead",
        description: "Specialist in Critical Infrastructure, Mobile Core (VoLTE/IMS), and Team Leadership. Transforming complex infrastructures into efficient systems.",
        metrics: {
            experience: "+8 Years Exp",
            projects: "+50 Projects",
            availability: "24/7 Ops"
        },
        cta: {
            contact: "Contact",
            projects: "View Projects"
        }
    },
    experience: {
        title: "Professional Experience",
        subtitle: "Technical evolution from on-site support to critical operations leadership.",
        items: [
            {
                id: 1,
                role: "Operations Team Lead & N2 Support (Key Accounts)",
                company: "Zelenza (Vodafone Project)",
                location: "Albacete (Hybrid) | January 2017 – Present",
                date: "2017 - Present",
                summary: "Managing a team of 18 Network Operators. Leading critical incidents and KPI/SLA management.",
                details: [
                    "Technical Leadership: Supervising Front/Backoffice teams (+20 people).",
                    "Critical N2 Support: Resolving mobile network incidents (IMS, HLR, VoLTE).",
                    "Infrastructure: Managing network devices and virtual PBXs (OneNet).",
                    "IT Management: Expert use of Salesforce, Remedy BMC, and Jira."
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
                    "SysAdmin: Integral management of corporate network and Active Directory.",
                    "Automation: Bash/Batch scripts for backups and maintenance.",
                    "Web Development: Corporate portal maintenance (HTML, CSS, PHP, SQL).",
                    "Digital Modernization: Sole person responsible for the IT department."
                ]
            },
            {
                id: 3,
                role: "Systems & Infrastructure Technician",
                company: "APP Informática",
                location: "Iniesta, Cuenca",
                date: "Apr 2013 - Jul 2013",
                summary: "Technical consulting and support for SMEs and individuals.",
                details: [
                    "On-Site Maintenance: Network diagnosis and hardware repair.",
                    "Technical Support: Windows/Linux incident resolution.",
                    "Personalized technology advice."
                ]
            }
        ]
    },
    skills: {
        title: "Technical Arsenal",
        subtitle: "Tech stack focused on reliability, performance, and automation.",
        categories: [
            {
                title: "Infrastructure & Systems",
                skills: [
                    { name: "Windows Server / Linux", level: 95 },
                    { name: "Active Directory / LDAP", level: 90 },
                    { name: "VMware / Virtualization", level: 85 },
                    { name: "Docker / Cloud", level: 75 }
                ]
            },
            {
                title: "Telecommunications (Core)",
                skills: [
                    { name: "IMS / VoLTE", level: 90 },
                    { name: "SIP / TCP/IP / VPN", level: 95 },
                    { name: "HLR / HSS / AUC", level: 85 },
                    { name: "Trunking IP / PBX", level: 85 }
                ]
            },
            {
                title: "Tools & DevOps",
                skills: [
                    { name: "Salesforce / Remedy", level: 95 },
                    { name: "Scripting (Bash/Python)", level: 80 },
                    { name: "SQL / PHP / HTML", level: 85 },
                    { name: "Git / GitHub", level: 80 }
                ]
            }
        ]
    },
    projects: {
        title: "Featured Projects",
        subtitle: "Selection of work and Open Source collaborations.",
        loading: "Loading projects...",
        error: "Could not load projects.",
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
                features: ["High Conversion Landing Pages", "React/Next.js Applications", "SEO Optimization (Core Vitals)"]
            },
            {
                title: "Specialized Technical Support",
                desc: "Resolution of complex problems.",
                features: ["Network Diagnosis", "Malware Cleaning", "Disaster Recovery"]
            }
        ]
    },
    education: {
        title: "Education & Certifications",
        items: [
            {
                title: "Higher Technician in Networked Computer Systems Administration (ASIR)",
                school: "IES Leonardo da Vinci - Albacete",
                date: "2016",
                desc: "Networked Computer Systems Administration",
                details: [
                    "OS Administration (Windows Server, Linux).",
                    "Network Services (DNS, DHCP, LDAP, HTTP).",
                    "Database Management and Security."
                ]
            },
            {
                title: "Technician in Microcomputer Systems and Networks (SMR)",
                school: "IES Cañada de la Encina - Iniesta",
                date: "2013",
                desc: "Microcomputer Systems and Networks",
                details: [
                    "Equipment Assembly and Maintenance.",
                    "Local Networks and Basic Security.",
                    "Office Applications."
                ]
            }
        ],
        certs: [
            { name: "Cybersecurity: \"How to protect yourself on the net\" (Mastermind)" },
            { name: "Cloud: AWS Data Analytics Fundamentals" },
            { name: "Cloud: Cloud Computing (Google)" },
            { name: "Systems: Linux Essentials Professional Development (LPI)" },
            { name: "Hardware: IT Essentials (Cisco)" }
        ]
    },
    contact: {
        title_part1: "Ready to",
        title_part2_gradient: "optimize operations?",
        subtitle: "Let's talk about how to improve the stability and efficiency of your infrastructure.",
        availability: "Available for new challenges",
        actions: {
            email: "Send me an email",
            code: "Check my code",
            connect: "Let's connect",
            share: "Share profile"
        },
        form: {
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            sending: "Sending...",
            success: "Sent!",
            error: "Error sending"
        }
    },
};
