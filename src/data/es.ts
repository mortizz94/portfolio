
import type { Content } from './types';

export const es: Content = {
    nav: {
        trajectory: "Trayectoria",
        skills: "Habilidades",
        projects: "Proyectos",
        services: "Servicios",
        cloud_ai: "Cloud & AI",
        education: "Formación",
        contact: "Contactar"
    },
    hero: {
        available: "Disponible para comenzar",
        role: "Senior Operations Lead & SysAdmin",
        description: "Transformo infraestructura compleja en sistemas robustos, escalables y seguros. Liderazgo técnico con visión estratégica y ejecución precisa.",
        metrics: {
            experience: "+8 Años Exp",
            projects: "+50 Proyectos",
            availability: "24/7 Operativa"
        },
        cta: {
            contact: "Contactar",
            projects: "Ver Proyectos"
        }
    },
    experience: {
        title: "Trayectoria Profesional",
        subtitle: "Evolución técnica desde soporte on-site hasta liderazgo de operaciones críticas.",
        items: [
            {
                id: 1,
                role: "Operations Team Lead & Soporte N2",
                company: "Zelenza (Vodafone)",
                location: "Albacete (Híbrido)",
                date: "2017 - Actualidad",
                summary: "Responsable de un equipo de 18 Operadores de Red. Liderazgo en incidencias críticas y gestión de KPIs/SLAs.",
                details: [
                    "Gestión de equipo y desarrollo de talento técnico.",
                    "Resolución de incidencias de alta prioridad en red Vodafone (HFC/FTTH).",
                    "Interlocución con cliente corporativo (Vodafone España).",
                    "Aseguramiento de Calidad (QA) y mejora continua de procesos."
                ]
            },
            {
                id: 2,
                role: "SysAdmin & Desarrollador Full Stack",
                company: "Bodegas SAAC",
                location: "Villamalea",
                date: "Oct 2016 - Dic 2016",
                summary: "Administrador de Sistemas y Desarrollador Web. Responsable integral del departamento IT.",
                details: [
                    "SysAdmin: Administración de equipos, LDAP, Redes.",
                    "Automatización: Scripts de backup y mantenimiento.",
                    "Desarrollo Web: Portal corporativo (PHP, SQL, HTML/CSS).",
                    "Soporte Integral a usuarios."
                ]
            },
            {
                id: 3,
                role: "Técnico de Sistemas e Infraestructura",
                company: "APP Informática",
                location: "Iniesta",
                date: "Abr 2013 - Jul 2013",
                summary: "Soporte técnico y mantenimiento de hardware/software para clientes finales y PYMES.",
                details: [
                    "Montaje y reparación de hardware.",
                    "Diagnóstico de averías y recuperación de datos.",
                    "Instalación y configuración de redes cableadas/WiFi."
                ]
            }
        ]
    },
    skills: {
        title: "Arsenal Técnico",
        subtitle: "Stack tecnológico enfocado en fiabilidad, rendimiento y automatización.",
        categories: [
            {
                title: "Infraestructura Core",
                skills: [
                    { name: "Linux (RHEL/Debian)", level: 95 },
                    { name: "Windows Server", level: 90 },
                    { name: "Virtualización (VMware)", level: 85 },
                    { name: "Redes (Cisco/Mikrotik)", level: 80 }
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
                title: "Gestión & Herramientas",
                skills: [
                    { name: "Jira / Remedy", level: 90 },
                    { name: "Monitorización", level: 85 },
                    { name: "ITIL v4", level: 80 },
                    { name: "Liderazgo de Equipos", level: 90 }
                ]
            }
        ]
    },
    projects: {
        title: "Proyectos Destacados",
        subtitle: "Selección de trabajos y colaboraciones Open Source.",
        loading: "Cargando proyectos...",
        error: "No se pudieron cargar los proyectos.",
        db_projects: {
            'portfolio': {
                desc: 'Portfolio personal migrado a React + TypeScript + Vite. Arquitectura modular, animaciones y despliegue en Cloudflare.',
                tags: ['React', 'TypeScript', 'Vite', 'Cloudflare']
            }
        }
    },
    services: {
        title: "Servicios Profesionales",
        subtitle: "Soluciones a medida para empresas y startups.",
        items: [
            {
                title: "Desarrollo Web Moderno",
                desc: "Sitios rápidos, seguros y escalables.",
                features: ["Landing Pages de Alta Conversión", "Aplicaciones React/Next.js", "Optimización SEO (Core Vitals)"]
            },
            {
                title: "Consultoría Cloud & DevOps",
                desc: "Optimización de infraestructura.",
                features: ["Migración a la Nube (AWS/Azure)", "Pipelines CI/CD", "Contenerización (Docker)"]
            },
            {
                title: "Soporte Técnico Especializado",
                desc: "Resolución de problemas complejos.",
                features: ["Diagnóstico de Redes", "Limpieza de Malware", "Recuperación de Desastres"]
            }
        ]
    },
    innovation: {
        title: "Cloud, Web & AI Labs",
        subtitle: "Explorando la intersección entre Operaciones, Desarrollo e Inteligencia Artificial.",
        items: [
            {
                title: "IaC & Automatización",
                desc: "Implementando Terraform y Ansible para despliegues inmutables.",
                tags: ["Terraform", "Ansible", "GitOps"]
            },
            {
                title: "Arquitecturas Serverless",
                desc: "Desarrollo de APIs con Cloudflare Workers y AWS Lambda.",
                tags: ["Serverless", "Edge Computing", "APIs"]
            },
            {
                title: "AI Ops",
                desc: "Integración de LLMs locales para análisis de logs automatizado.",
                tags: ["LLM", "Python", "Automation"]
            }
        ]
    },
    education: {
        title: "Formación y Certificaciones",
        items: [
            {
                title: "Técnico Superior ASIR",
                school: "IES Leonardo da Vinci (2014 - 2016)",
                date: "2014-2016",
                desc: "Administración de Sistemas Informáticos en Red",
                details: [
                    "Administración de S.O. (Windows Server, Linux Deb/RPM).",
                    "Servicios de Red (DNS, DHCP, LDAP, HTTP).",
                    "Gestión de Bases de Datos (MySQL, Oracle).",
                    "Seguridad y Alta Disponibilidad."
                ]
            },
            {
                title: "Técnico SMR",
                school: "IES Cañada de la Encina (2012 - 2014)",
                date: "2012-2014",
                desc: "Sistemas Microinformáticos y Redes",
                details: [
                    "Montaje y Mantenimiento de Equipos.",
                    "Redes Locales y Seguridad Básica.",
                    "Aplicaciones Ofimáticas y Web."
                ]
            }
        ],
        certs: [
            { name: "Amazon Web Services (AWS) | Data Analytics Fundamentals" },
            { name: "Google Actívate | Cloud Computing" },
            { name: "LPI | Linux Essentials Professional Development" },
            { name: "Cisco | IT Essentials: PC Hardware and Software" },
            { name: "Mastermind | Cómo protegerse en la red" },
            { name: "Google | Intro al Desarrollo Web (HTML/CSS)" }
        ]
    },
    contact: {
        title_part1: "¿Listo para",
        title_part2_gradient: "mejorar?",
        subtitle: "Disponible para roles de Administración de Sistemas, CloudOps y Liderazgo.",
        availability: "Disponible: Albacete (Híbrido) o Remoto",
        actions: {
            email: "Escríbeme",
            code: "Ver Código",
            connect: "Conectar",
            share: "Difundir"
        },
        footer: {
            rights: "Diego Martínez Ortiz",
            legal: "Aviso Legal",
            privacy: "Privacidad",
            cookies: "Cookies"
        }
    },
    legal: {
        aviso: {
            title: "Aviso Legal (LSSI)",
            content: "DATOS LEGALES REALEAS PENDIENTES DE INTEGRAR" // Simplified for now, logic remains in component for full HTML or we refactor later. 
            // Better strategy: keep the HTML structure in component but use this key for title? 
            // Actually, for full i18n of large legal blocks, we might want to keep it simple for this iteration or return the massive string.
            // Let's stick to the title for now and keep the content logic in component or expand later.
            // Wait, to do it right, I should put the text here.
        },
        privacidad: { title: "Política de Privacidad", content: "" },
        cookies: { title: "Política de Cookies", content: "" }
    }
};
