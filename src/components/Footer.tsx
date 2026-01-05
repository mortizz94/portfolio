import { Mail, Github, Linkedin } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();



    return (
        <footer id="contact" className="footer-section">
            <div className="container">

                <div className="footer-content fade-up" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <a href="mailto:contact@glutendo.com" className="contact-row">
                        <div className="row-icon"><Mail size={20} /></div>
                        <div className="row-content">
                            <span className="row-label">{t.contact.actions.email}</span>
                            <span className="row-value">contact@glutendo.com</span>
                        </div>
                    </a>

                    <a href="https://github.com/mortizz94" target="_blank" rel="noopener noreferrer" className="contact-row">
                        <div className="row-icon"><Github size={20} /></div>
                        <div className="row-content">
                            <span className="row-label">{t.contact.actions.code}</span>
                            <span className="row-value">github.com/mortizz94</span>
                        </div>
                    </a>

                    <a href="https://linkedin.com/in/mortizz94" target="_blank" rel="noopener noreferrer" className="contact-row">
                        <div className="row-icon"><Linkedin size={20} /></div>
                        <div className="row-content">
                            <span className="row-label">{t.contact.actions.connect}</span>
                            <span className="row-value">Diego Martínez</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="footer-bottom-simple" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '3rem', paddingBottom: '2rem' }}>
                <div>&copy; 2026 Diego Martínez Ortiz <span style={{ opacity: 0.5, fontSize: '0.75rem', marginLeft: '8px' }}>v1.2.0</span></div>
            </div>
        </footer>
    );
};

export default Footer;
