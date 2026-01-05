import { Server, Monitor, Award, FileCode } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
    const { t } = useLanguage();

    const getIcon = (title: string) => {
        if (title.includes('ASIR')) return <Server size={24} />;
        if (title.includes('SMR')) return <Monitor size={24} />;
        return <Award size={24} />;
    };

    return (
        <section id="education" className="section">
            <div className="container">
                <div className="section-title-wrapper fade-up">
                    <h2>{t.education.title}</h2>
                </div>

                <div className="edu-grid fade-up">
                    {t.education.items.map((item, idx) => (
                        <div key={idx} className="edu-card">
                            <div className="icon-box">{getIcon(item.title)}</div>
                            <h4>{item.title}</h4>
                            <p className="school">{item.school}</p>
                            <p className="desc">{item.desc}</p>
                            <ul className="edu-list-detail">
                                {item.details && item.details.map((detail, dIdx) => (
                                    <li key={dIdx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="cert-card">
                        <div className="icon-box"><Award size={24} /></div>
                        <h4>{t.education.title.includes('Formación') ? 'Certificaciones & Cursos' : 'Certifications & Courses'}</h4>
                        <ul className="cert-list">
                            {t.education.certs.map((cert, idx) => (
                                <li key={idx}>
                                    {cert.name.includes('HTML') ? <FileCode size={16} /> : <Award size={16} />} {cert.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
