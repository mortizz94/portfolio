
import { FileText, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <header className="hero-section">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-info animate-left">
                        <div className="badge-tech">
                            <Terminal size={16} style={{ marginRight: '8px' }} /> {t.hero.role.toUpperCase()}
                        </div>
                        <h1 className="hero-title">
                            Hola, soy <br />
                            <span className="highlight-text">Diego Martínez</span>
                        </h1>
                        <p className="hero-desc">
                            {t.hero.description}
                        </p>

                        <div className="hero-metrics">
                            <div className="metric-item">
                                <span className="metric-value">9+</span>
                                <span className="metric-label">{t.hero.metrics.experience}</span>
                            </div>
                            <div className="metric-item">
                                <span className="metric-value">20+</span>
                                <span className="metric-label">{t.hero.metrics.projects}</span>
                            </div>
                            <div className="metric-item">
                                <span className="metric-value">24/7</span>
                                <span className="metric-label">{t.hero.metrics.availability}</span>
                            </div>
                        </div>

                        <div className="hero-actions">
                            <a href="#operational-core" className="btn-primary">{t.hero.cta.projects}</a>
                            <a href="/assets/cv_diego_martinez.pdf" target="_blank" className="btn-secondary">
                                <FileText size={18} style={{ marginRight: '8px' }} /> Descargar CV
                            </a>
                        </div>
                    </div>

                    {/* Profile Image Visual */}
                    <div className="hero-visual animate-right">
                        <div className="profile-container">
                            <div className="tech-ring"></div>
                            <img src="/assets/img/profile.jpg" alt="Diego Martínez" className="profile-img" />
                            <div className="status-badge floating-badge">
                                <span className="dot pulse"></span> {t.hero.available}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
