
import { Network, Cloud, ClipboardList } from 'lucide-react';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-title-wrapper fade-up">
                    <h2>Habilidades</h2>
                    <p>Arsenal técnico para operaciones, despliegue y liderazgo de equipos.</p>
                </div>

                <div className="skills-grid fade-up">
                    {/* Skill Group 1: Core Ops */}
                    <div className="skill-card">
                        <div className="skill-header">
                            <Network size={24} style={{ color: 'var(--accent)' }} />
                            <h3>Infraestructura Core</h3>
                        </div>
                        <div className="skill-tags">
                            <span>Linux (Debian/RPM)</span>
                            <span>Windows Server</span>
                            <span>DNS/DHCP</span>
                            <span>Active Directory</span>
                            <span>VPN/Tunnels</span>
                            <span>VoLTE/IMS</span>
                            <span>Huawei BTS</span>
                        </div>
                    </div>

                    {/* Skill Group 2: Cloud & Web */}
                    <div className="skill-card">
                        <div className="skill-header">
                            <Cloud size={24} style={{ color: 'var(--accent)' }} />
                            <h3>Cloud & Dev</h3>
                        </div>
                        <div className="skill-tags">
                            <span>Cloudflare Workers</span>
                            <span>Pages</span>
                            <span>Zero Trust</span>
                            <span>HTML5/CSS3</span>
                            <span>JavaScript</span>
                            <span>Git/GitHub</span>
                            <span>Supabase</span>
                        </div>
                    </div>

                    {/* Skill Group 3: Tools & Management */}
                    <div className="skill-card">
                        <div className="skill-header">
                            <ClipboardList size={24} style={{ color: 'var(--accent)' }} />
                            <h3>Gestión & Herramientas</h3>
                        </div>
                        <div className="skill-tags">
                            <span>Jira Admin</span>
                            <span>Remedy BMC</span>
                            <span>Salesforce</span>
                            <span>Liderazgo Técnico</span>
                            <span>Gestión de Crisis</span>
                            <span>SLA/KPIs</span>
                            <span>Mentoring</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
