
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="nav-container">
            <div className="nav-floating-pill">
                <a href="#top" className="nav-logo" onClick={closeMenu}>
                    Diego<span className="blue-dot">.</span>
                </a>

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

                <div className="nav-links">
                    <a href="#operational-core" className="nav-link"><span>Trayectoria</span></a>
                    <a href="#skills" className="nav-link"><span>Habilidades</span></a>
                    <a href="#projects" className="nav-link"><span>Proyectos</span></a>
                    <a href="#services" className="nav-link"><span>Servicios</span></a>
                    <a href="#innovation" className="nav-link"><span>Cloud & AI</span></a>
                    <a href="#education" className="nav-link"><span>Formación</span></a>
                </div>

                <div className="nav-right">
                    <a href="#contact" className="btn-open-work-pill">Contactar</a>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-content">
                    <a href="#operational-core" className="mobile-link" onClick={closeMenu}>Trayectoria</a>
                    <a href="#skills" className="mobile-link" onClick={closeMenu}>Habilidades</a>
                    <a href="#projects" className="mobile-link" onClick={closeMenu}>Proyectos</a>
                    <a href="#services" className="mobile-link" onClick={closeMenu}>Servicios</a>
                    <a href="#innovation" className="mobile-link" onClick={closeMenu}>Cloud & AI</a>
                    <a href="#education" className="mobile-link" onClick={closeMenu}>Formación</a>
                    <a href="#contact" className="mobile-link highlight" onClick={closeMenu}>Contactar</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
