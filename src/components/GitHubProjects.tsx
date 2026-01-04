
import { useEffect, useState } from 'react';
import { GitBranch, Github } from 'lucide-react';

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    updated_at: string;
    fork: boolean;
}

const GitHubProjects = () => {
    const [projects, setProjects] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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

    const overrides: Record<string, { desc: string, tags: string[] }> = {
        'portfolio': {
            desc: 'Sitio web personal diseñado para velocidad y minimalismo. Desplegado en Cloudflare.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Cloudflare']
        }
    };

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-title-wrapper fade-up">
                    <h2>Proyectos Destacados</h2>
                    <p>Selección de trabajos y colaboraciones Open Source.</p>
                </div>

                <div id="github-projects" className="skills-grid fade-up">
                    {loading && <p style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1', color: 'var(--text-secondary)' }}>Cargando proyectos...</p>}

                    {error && <p style={{ color: '#ef4444', gridColumn: '1 / -1', textAlign: 'center' }}>No se pudieron cargar los proyectos.</p>}

                    {!loading && !error && projects.map(repo => {
                        const isOverride = overrides[repo.name];
                        const description = isOverride ? isOverride.desc : (repo.description || 'Sin descripción disponible.');
                        // Tags logic: if override, use it. If not, use language.
                        // Original code had logic: let tagsHtml = repo.language ? `<span>${repo.language}</span>` : '';

                        return (
                            <div key={repo.id} className="skill-card">
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
                                        Ver Código <Github size={16} style={{ marginLeft: '8px' }} />
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
