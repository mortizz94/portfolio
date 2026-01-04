
import { useState } from 'react';
import { Mail, ArrowRight, Github, Linkedin, Share2 } from 'lucide-react';
import LegalModal from './LegalModal';

const Footer = () => {
    const [legalOpen, setLegalOpen] = useState(false);
    const [legalType, setLegalType] = useState<'aviso-legal' | 'privacidad' | 'cookies' | null>(null);

    const openLegal = (type: 'aviso-legal' | 'privacidad' | 'cookies') => {
        setLegalType(type);
        setLegalOpen(true);
    };

    const closeLegal = () => {
        setLegalOpen(false);
        setLegalType(null);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Diego | Senior Operations Lead',
                text: 'Echa un vistazo al portfolio de Diego Martínez.',
                url: window.location.href,
            }).catch(console.error);
        } else {
            alert('Compartir no soportado en este navegador.');
        }
    };

    return (
        <footer id="contact" className="footer-section">
            <div className="container contact-wrapper">
                <div className="contact-left fade-up">
                    <h2 className="contact-heading">¿Listo para <br /><span className="text-gradient">mejorar?</span></h2>
                    <p className="contact-sub">Disponible para roles de Administración de Sistemas, CloudOps y Liderazgo.</p>
                    <div className="status-indicator">
                        <span className="status-dot"></span> <span>Disponible: Albacete (Híbrido) o Remoto</span>
                    </div>
                </div>

                <div className="contact-right fade-up">
                    <a href="mailto:contact@glutendo.com" className="contact-row">
                        <div className="row-icon"><Mail size={20} /></div>
                        <div className="row-content">
                            <span className="row-label">Escríbeme</span>
                            <span className="row-value">contact@glutendo.com</span>
                        </div>
                        <div className="row-action"><ArrowRight size={16} /></div>
                    </a>

                    <a href="https://github.com/mortizz94" target="_blank" rel="noopener noreferrer" className="contact-row">
                        <div className="row-icon"><Github size={20} /></div>
                        <div className="row-content">
                            <span className="row-label">Ver Código</span>
                            <span className="row-value">github.com/mortizz94</span>
                        </div>
                        <div className="row-action"><ArrowRight size={16} /></div>
                    </a>

                    <a href="https://linkedin.com/in/mortizz94" target="_blank" rel="noopener noreferrer" className="contact-row">
                        <div className="row-icon"><Linkedin size={20} /></div>
                        <div className="row-content">
                            <span className="row-label">Conectar</span>
                            <span className="row-value">Diego Martínez</span>
                        </div>
                        <div className="row-action"><ArrowRight size={16} /></div>
                    </a>

                    <button id="shareBtn" className="contact-row share-btn" onClick={handleShare}>
                        <div className="row-icon"><Share2 size={20} /></div>
                        <div className="row-content">
                            <span className="row-label">Difundir</span>
                            <span className="row-value">Compartir Perfil</span>
                        </div>
                        <div className="row-action"><ArrowRight size={16} /></div>
                    </button>
                </div>
            </div>

            <div className="footer-bottom-simple" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div>&copy; 2026 Diego Martínez Ortiz</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                    <button onClick={() => openLegal('aviso-legal')} className="text-button">Aviso Legal</button>
                    {' | '}
                    <button onClick={() => openLegal('privacidad')} className="text-button">Privacidad</button>
                    {' | '}
                    <button onClick={() => openLegal('cookies')} className="text-button">Cookies</button>
                </div>
            </div>

            <LegalModal isOpen={legalOpen} onClose={closeLegal} type={legalType} />
        </footer>
    );
};

export default Footer;
