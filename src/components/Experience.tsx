import { Building2, MapPin, Monitor, Factory } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();

    const getIcon = (company: string) => {
        if (company.includes('Zelenza') || company.includes('Vodafone')) return <Building2 size={14} style={{ display: 'inline', marginRight: '4px' }} />;
        if (company.includes('Bodegas')) return <Factory size={14} style={{ display: 'inline', marginRight: '4px' }} />;
        if (company.includes('APP')) return <Monitor size={14} style={{ display: 'inline', marginRight: '4px' }} />;
        return <Building2 size={14} style={{ display: 'inline', marginRight: '4px' }} />;
    };

    return (
        <section id="operational-core" className="section">
            <div className="container">
                <div className="section-title-wrapper fade-up">
                    <h2>{t.experience.title}</h2>
                    <p>{t.experience.subtitle}</p>
                </div>

                <div className="timeline-container">
                    {t.experience.items.map((job) => (
                        <div key={job.id} className="timeline-item fade-up">
                            <div className="timeline-marker"></div>
                            <div className={`job-card ${job.id === 1 ? 'featured' : ''}`}>
                                <div className="job-header">
                                    <div className="job-role">
                                        <h3>{job.role}</h3>
                                        <div className="sub-header">
                                            <span className="company">
                                                {getIcon(job.company)} {job.company}
                                            </span>
                                            <span className="location">
                                                <MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} /> {job.location}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="date-badge">{job.date}</span>
                                </div>
                                <div className="job-body">
                                    <p className="summary">{job.summary}</p>
                                    <div className="details-grid">
                                        {job.details && (
                                            <ul>
                                                {job.details.map((detail, idx) => (
                                                    <li key={idx} dangerouslySetInnerHTML={{ __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
