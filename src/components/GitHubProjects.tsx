import { useEffect, useState, useRef } from 'react';
import { GitBranch, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Skeleton.css';

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    updated_at: string;
    fork: boolean;
}

const SkeletonCard = () => (
    <div className="skeleton-card">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text short"></div>
        <div className="skeleton skeleton-footer"></div>
    </div>
);

const GitHubProjects = () => {
    const { t } = useLanguage();
    const [projects, setProjects] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Trigger animations when content loads
        if (!loading && gridRef.current) {
            const cards = gridRef.current.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100); // 100ms stagger
            });
        }
    }, [loading]);

    useEffect(() => {
        fetch('https://api.github.com/users/mortizz94/repos?sort=updated&per_page=6')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setProjects(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(true);
                setLoading(false);
            });
    }, []);

    // Access overrides from the current language context
    const overrides = t.projects.db_projects;

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-title-wrapper fade-up visible">
                    <h2>{t.projects.title}</h2>
                    <p>{t.projects.subtitle}</p>
                </div>

                <div id="github-projects" className="skills-grid" ref={gridRef}>
                    {loading && Array.from({ length: 6 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}

                    {error && <p style={{ color: '#ef4444', gridColumn: '1 / -1', textAlign: 'center' }}>{t.projects.error}</p>}

                    {!loading && !error && projects.map((repo) => {
                        const isOverride = overrides[repo.name];
                        const description = isOverride ? isOverride.desc : (repo.description || 'Sin descripción disponible.');

                        return (
                            <div key={repo.id} className="skill-card fade-up">
                                <div className="skill-header">
                                    <GitBranch style={{ color: 'var(--accent)' }} size={20} />
                                    <h3 style={{ fontSize: '1.1rem' }}>{repo.name}</h3>
                                </div>
                                <p className="project-desc" style={{ minHeight: '60px' }}>
                                    {description}
                                </p>
                                <div className="skill-tags">
                                    {isOverride ? (
                                        isOverride.tags.map(tag => <span key={tag}>{tag}</span>)
                                    ) : (
                                        repo.language && <span>{repo.language}</span>
                                    )}
                                    <span>{new Date(repo.updated_at).getFullYear()}</span>
                                </div>
                                <div className="project-actions" style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.2rem' }}>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: '0.9rem', padding: '0.6rem' }}>
                                        {t.hero.cta.projects === 'View Projects' ? 'View Code' : 'Ver Código'} <Github size={16} style={{ marginLeft: '8px' }} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GitHubProjects;
