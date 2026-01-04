import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Terminal, Lock, MapPin, Database, Server, Radio, Power } from 'lucide-react';

const MilitaryMode = () => {
    const { t } = useLanguage();
    const { setTheme } = useTheme();

    return (
        <div className="military-layout" style={{
            fontFamily: '"JetBrains Mono", monospace',
            background: '#0d1117',
            color: '#3fb950',
            minHeight: '100vh',
            padding: '2rem',
            position: 'relative',
            overflowX: 'hidden'
        }}>
            {/* CRT/Scanline Effect Overlay */}
            <div style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                backgroundSize: '100% 2px, 3px 100%',
                pointerEvents: 'none',
                zIndex: 999
            }}></div>

            {/* Header */}
            <header style={{ borderBottom: '2px solid #3fb950', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '4px', margin: 0 }}>
                        <Terminal size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }} />
                        SYSTEM_OVERRIDE // v2.0
                    </h1>
                    <p style={{ opacity: 0.7, fontSize: '0.8rem', marginTop: '5px' }}>ID: D-MARTINEZ // CLEARANCE: LEVEL 5 (BOD)</p>
                </div>
                <div>
                    <button
                        onClick={() => setTheme('default')}
                        style={{
                            background: '#ff000022',
                            border: '1px solid #ff4444',
                            color: '#ff4444',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <Power size={16} /> ABORT MISSION
                    </button>
                </div>
            </header>

            {/* Grid Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* Profile Data */}
                <div style={{ border: '1px dashed #3fb950', padding: '1.5rem' }}>
                    <h2 style={{ borderBottom: '1px solid #3fb950', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                        <Lock size={16} /> SUBJECT_INFO
                    </h2>
                    <div style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                        <p><strong>NAME:</strong> Diego Martínez Ortiz</p>
                        <p><strong>ROLE:</strong> {t.hero.role.toUpperCase()}</p>
                        <p><strong>STATUS:</strong> <span style={{ color: '#56d364', animation: 'blink 1s infinite' }}>[ACTIVE]</span></p>
                        <p><strong>LOC:</strong> {t.experience.items[0].location}</p>
                    </div>
                </div>

                {/* Mission Wrapper (Experience) */}
                <div style={{ border: '1px dashed #3fb950', padding: '1.5rem' }}>
                    <h2 style={{ borderBottom: '1px solid #3fb950', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                        <MapPin size={16} /> MISSION_LOG
                    </h2>
                    {t.experience.items.map((job, idx) => (
                        <div key={idx} style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontWeight: 'bold' }}>{job.company.toUpperCase()}</span>
                                <span style={{ opacity: 0.7 }}>[{job.date}]</span>
                            </div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '0.5rem' }}>{job.role.toUpperCase()}</div>
                            <ul style={{ fontSize: '0.8rem', paddingLeft: '1.2rem', margin: 0 }}>
                                {job.details && job.details.slice(0, 2).map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Arsenal (Skills) */}
                <div style={{ border: '1px dashed #3fb950', padding: '1.5rem', gridColumn: '1 / -1' }}>
                    <h2 style={{ borderBottom: '1px solid #3fb950', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                        <Database size={16} /> WEAPONRY_ARSENAL
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                        {t.skills.categories.map((cat, idx) => (
                            <div key={idx}>
                                <h3 style={{ fontSize: '0.8rem', textDecoration: 'underline', marginBottom: '0.5rem' }}>{cat.title.toUpperCase()}</h3>
                                {cat.skills.map((skill, sIdx) => (
                                    <div key={sIdx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.2rem' }}>
                                        <span>{skill.name}</span>
                                        <div style={{ width: '50px', background: '#3fb95033', height: '10px', marginTop: '4px' }}>
                                            <div style={{ width: `${skill.level}%`, background: '#3fb950', height: '100%' }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Operations (Education) */}
                <div style={{ border: '1px dashed #3fb950', padding: '1.5rem' }}>
                    <h2 style={{ borderBottom: '1px solid #3fb950', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                        <Server size={16} /> TRAINING_MODULES
                    </h2>
                    {t.education.items.map((edu, idx) => (
                        <div key={idx} style={{ marginBottom: '1rem' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{edu.title}</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{edu.school}</div>
                        </div>
                    ))}
                </div>

                {/* Communications */}
                <div style={{ border: '1px dashed #3fb950', padding: '1.5rem' }}>
                    <h2 style={{ borderBottom: '1px solid #3fb950', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                        <Radio size={16} /> SECURE_COMMS
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <a href="mailto:contact@glutendo.com" style={{ color: '#3fb950', textDecoration: 'none', display: 'block', padding: '0.5rem', border: '1px solid #3fb950', textAlign: 'center' }}>
                            [ENCRYPTED_EMAIL_CHANNEL]
                        </a>
                        <a href="https://linkedin.com/in/mortizz94" style={{ color: '#3fb950', textDecoration: 'none', display: 'block', padding: '0.5rem', border: '1px solid #3fb950', textAlign: 'center' }}>
                            [LINKEDIN_NETWORK]
                        </a>
                    </div>
                </div>

            </div>

            <style>{`
                @keyframes blink {
                    0% { opacity: 1; }
                    50% { opacity: 0; }
                    100% { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default MilitaryMode;
