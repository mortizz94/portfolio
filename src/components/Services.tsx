import { Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="section dark-section">
            <div className="container">
                <div className="section-title-wrapper fade-up">
                    <h2>{t.services.title}</h2>
                    <p>{t.services.subtitle}</p>
                </div>

                <div className="timeline-container service-timeline-container">
                    {t.services.items.map((service, idx) => (
                        <div key={idx} className="job-card featured fade-up service-card">
                            <div className="job-header">
                                <div className="job-role">
                                    <h3><Rocket className="service-icon" style={{ display: 'inline', marginRight: '8px' }} size={20} /> {service.title}</h3>
                                    <div className="sub-header">
                                        <span className="company">{service.desc}</span>
                                    </div>
                                </div>
                                <span className="date-badge service-badge">{t.hero.available}</span>
                            </div>
                            <div className="job-body">
                                <div className="details-grid">
                                    <ul>
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx}><strong>•</strong> {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="cta-container" style={{ marginTop: '20px' }}>
                                    <a href="#contact" className="btn-primary">{t.contact.actions.email}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
