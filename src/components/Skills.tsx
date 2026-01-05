import { Network, Cloud, ClipboardList, Monitor } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();

    const getIcon = (title: string) => {
        if (title.includes('Infraestructura') || title.includes('Infrastructure')) return <Network size={24} style={{ color: 'var(--accent)' }} />;
        if (title.includes('Cloud')) return <Cloud size={24} style={{ color: 'var(--accent)' }} />;
        if (title.includes('Gestión') || title.includes('Management')) return <ClipboardList size={24} style={{ color: 'var(--accent)' }} />;
        return <Monitor size={24} style={{ color: 'var(--accent)' }} />;
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-title-wrapper fade-up">
                    <h2>{t.skills.title}</h2>
                    <p>{t.skills.subtitle}</p>
                </div>

                <div className="skills-grid-premium">
                    {t.skills.categories.map((category, idx) => (
                        <div key={idx} className="glass-card skill-card-premium fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className="card-shine"></div>
                            <div className="skill-icon-wrapper">
                                {getIcon(category.title)}
                            </div>
                            <h3>{category.title}</h3>
                            <div className="skill-tags-cloud">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="premium-tag">
                                        {skill.name}
                                        <div className="tag-glow"></div>
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
