import { useState } from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();

    // Scroll effect
    window.addEventListener('scroll', () => {
        setScrolled(window.scrollY > 50);
    });

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#top" className="nav-logo" onClick={closeMenu}>
                    Diego<span className="blue-dot">.</span>
                </a>

                <div className="mobile-controls">
                    <button
                        className="btn-lang-toggle mobile-only"
                        onClick={toggleLanguage}
                        style={{ marginRight: '1rem', background: 'transparent', border: 'none', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                    >
                        <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{language.toUpperCase()}</span>
                    </button>

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
                    <a href="#education" className="nav-link"><span>{t.nav.education}</span></a>
                </div>

                <div className="nav-right">
                    <button
                        className="btn-lang-toggle desktop-only"
                        onClick={toggleLanguage}
                        aria-label="Change Language"
                    >
                        <Languages size={18} />
                        <span>{language.toUpperCase()}</span>
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
                    <a href="#education" className="mobile-link" onClick={closeMenu}>{t.nav.education}</a>

                    <a href="#contact" className="mobile-link highlight" onClick={closeMenu}>{t.nav.contact}</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
