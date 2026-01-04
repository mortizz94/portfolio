import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();
    // Theme is always dark, no need to access context for toggling

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const toggleLang = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <nav className="nav-container">
            <div className="nav-floating-pill">
                <a href="#top" className="nav-logo" onClick={closeMenu}>
                    Diego<span className="blue-dot">.</span>
                </a>

                {/* Controls Mobile (visible only on mobile via CSS if needed, but here we keep them accessible) */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} className="mobile-controls">
                    {/* Hamburger Menu Button */}
                    <button
                        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                        aria-label="Menu"
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className="nav-links">
                    <a href="#operational-core" className="nav-link"><span>{t.nav.trajectory}</span></a>
                    <a href="#skills" className="nav-link"><span>{t.nav.skills}</span></a>
                    <a href="#projects" className="nav-link"><span>{t.nav.projects}</span></a>
                    <a href="#services" className="nav-link"><span>{t.nav.services}</span></a>
                    <a href="#innovation" className="nav-link"><span>{t.nav.cloud_ai}</span></a>
                    <a href="#education" className="nav-link"><span>{t.nav.education}</span></a>
                </div>

                <div className="nav-right">
                    <button onClick={toggleLang} className="lang-toggle-btn" title="Switch Language">
                        <Languages size={18} />
                        <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{language.toUpperCase()}</span>
                    </button>
                    <a href="#contact" className="btn-open-work-pill">{t.nav.contact}</a>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-content">
                    <a href="#operational-core" className="mobile-link" onClick={closeMenu}>{t.nav.trajectory}</a>
                    <a href="#skills" className="mobile-link" onClick={closeMenu}>{t.nav.skills}</a>
                    <a href="#projects" className="mobile-link" onClick={closeMenu}>{t.nav.projects}</a>
                    <a href="#services" className="mobile-link" onClick={closeMenu}>{t.nav.services}</a>
                    <a href="#innovation" className="mobile-link" onClick={closeMenu}>{t.nav.cloud_ai}</a>
                    <a href="#education" className="mobile-link" onClick={closeMenu}>{t.nav.education}</a>

                    <div className="mobile-actions" style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                        <button onClick={() => { toggleLang(); closeMenu(); }} className="mobile-link" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Languages size={24} /> {language === 'es' ? 'Español' : 'English'}
                        </button>
                    </div>

                    <a href="#contact" className="mobile-link highlight" onClick={closeMenu}>{t.nav.contact}</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
