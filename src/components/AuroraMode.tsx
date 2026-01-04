import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, Github, Linkedin, Mail, ArrowUpRight, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const AuroraMode = () => {
    const { t } = useLanguage();
    const { setTheme } = useTheme();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '2rem'
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#050505',
            color: '#fff',
            fontFamily: '"Manrope", sans-serif',
            position: 'relative',
            overflowX: 'hidden'
        }}>
            {/* Ambient Animated Background */}
            <div style={{
                position: 'fixed',
                top: '-20%', left: '-20%',
                width: '140%', height: '140%',
                background: 'background: radial-gradient(circle at 50% 50%, #4c1d95 0%, #050505 50%)',
                backgroundImage: `
                    radial-gradient(at 0% 0%, rgba(76, 29, 149, 0.3) 0px, transparent 50%),
                    radial-gradient(at 100% 0%, rgba(236, 72, 153, 0.3) 0px, transparent 50%),
                    radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
                    radial-gradient(at 0% 100%, rgba(16, 185, 129, 0.1) 0px, transparent 50%)
                `,
                filter: 'blur(80px)',
                zIndex: 0,
                opacity: 0.6,
                transform: `translateY(${scrolled * -0.1}px)`, // Parallax
                pointerEvents: 'none'
            }}></div>

            {/* Content Container */}
            <div style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>

                {/* Navbar */}
                <nav style={{
                    position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
                    zIndex: 100,
                    display: 'flex', gap: '1rem',
                    ...glassStyle,
                    padding: '0.5rem 1.5rem', borderRadius: '50px'
                }}>
                    <span style={{ fontWeight: 800, background: 'linear-gradient(to right, #c4b5fd, #86efac)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AURORA_OS</span>
                    <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                    <button onClick={() => setTheme('default')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 500 }}>Exit V2</button>
                </nav>

                {/* Hero */}
                <header style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 1rem' }}>
                    <div style={{ marginBottom: '2rem', animation: 'float 6s ease-in-out infinite' }}>
                        <Sparkles size={48} color="#a78bfa" />
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: 800,
                        letterSpacing: '-2px',
                        lineHeight: 1,
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(135deg, #fff 0%, #a78bfa 50%, #f472b6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Diego Martínez
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginBottom: '2rem' }}>
                        {t.hero.role}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#projects" style={{ ...glassStyle, padding: '0.8rem 2rem', borderRadius: '50px', textDecoration: 'none', color: 'white', fontWeight: 600, background: 'rgba(167, 139, 250, 0.2)' }}>
                            Explore Work
                        </a>
                    </div>
                </header>

                {/* Main Content Grid */}
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Experience */}
                    <section style={{ gridColumn: '1 / -1' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#e5e7eb' }}>{t.experience.title}</h2>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {t.experience.items.map((item, idx) => (
                                <div key={idx} style={{ ...glassStyle, display: 'flex', flexDirection: 'column', gap: '0.5rem', transition: 'transform 0.3s', cursor: 'default' }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                        <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>{item.role}</h3>
                                        <span style={{ fontSize: '0.9rem', color: '#a78bfa' }}>{item.date}</span>
                                    </div>
                                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>{item.company} // {item.location}</p>
                                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>{item.summary}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Features/Services */}
                    {t.services.items.map((service, idx) => (
                        <div key={idx} style={{ ...glassStyle }}>
                            <div style={{ marginBottom: '1rem', color: '#a78bfa' }}><Globe size={24} /></div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>{service.desc}</p>
                        </div>
                    ))}

                    {/* Skills */}
                    <section style={{ gridColumn: '1 / -1', marginTop: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#e5e7eb' }}>{t.skills.title}</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {t.skills.categories.flatMap(c => c.skills).map((skill, idx) => (
                                <span key={idx} style={{
                                    ...glassStyle,
                                    padding: '0.5rem 1.2rem',
                                    borderRadius: '12px',
                                    fontSize: '0.9rem',
                                    background: 'rgba(255, 255, 255, 0.02)'
                                }}>
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section style={{ gridColumn: '1 / -1', marginTop: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#e5e7eb' }}>{t.projects.title}</h2>
                        <div style={{ ...glassStyle, textAlign: 'center', padding: '4rem 2rem' }}>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{t.projects.subtitle}</p>
                            <a href="https://github.com/mortizz94" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#fff', textDecoration: 'none', borderBottom: '1px solid #fff' }}>
                                View on GitHub <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </section>

                    {/* Contact */}
                    <footer style={{ gridColumn: '1 / -1', marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, #c4b5fd, #86efac)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {t.contact.title_part1} {t.contact.title_part2_gradient}
                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
                            <a href="mailto:contact@glutendo.com" style={{ color: '#fff', transition: 'color 0.2s' }}><Mail /></a>
                            <a href="https://github.com/mortizz94" style={{ color: '#fff', transition: 'color 0.2s' }}><Github /></a>
                            <a href="https://linkedin.com/in/mortizz94" style={{ color: '#fff', transition: 'color 0.2s' }}><Linkedin /></a>
                        </div>
                        <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>&copy; 2026 Diego Martínez Ortiz</p>
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default AuroraMode;
