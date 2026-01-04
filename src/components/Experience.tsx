
import { Building2, MapPin, Factory, Monitor } from 'lucide-react';

const Experience = () => {
    return (
        <section id="operational-core" className="section">
            <div className="container">
                <div className="section-title-wrapper fade-up">
                    <h2>Trayectoria Profesional</h2>
                    <p>Evolución técnica desde soporte on-site hasta liderazgo de operaciones críticas.</p>
                </div>

                <div className="timeline-container">
                    {/* Job 1: Zelenza */}
                    <div className="timeline-item fade-up">
                        <div className="timeline-marker"></div>
                        <div className="job-card featured">
                            <div className="job-header">
                                <div className="job-role">
                                    <h3>Operations Team Lead & Soporte N2</h3>
                                    <div className="sub-header">
                                        <span className="company"><Building2 size={14} style={{ display: 'inline', marginRight: '4px' }} /> Zelenza (Vodafone)</span>
                                        <span className="location"><MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} /> Albacete (Híbrido)</span>
                                    </div>
                                </div>
                                <span className="date-badge">2017 - Actualidad</span>
                            </div>
                            <div className="job-body">
                                <p className="summary">Soporte técnico especialista N2 y liderazgo de operaciones críticas para grandes cuentas de Vodafone.</p>
                                <div className="details-grid">
                                    <ul>
                                        <li><strong>Liderazgo y Gestión:</strong> Coordinación de Call Center y equipos Front/Backoffice (+20 técnicos). Impulso de eficiencia y cumplimiento de SLAs/KPIs. Formación continua a N1.</li>
                                        <li><strong>Operaciones Críticas:</strong> Disponibilidad 24/7 para incidencias urgentes. Gestión de escalados y priorización de averías masivas en infraestructuras móviles.</li>
                                        <li><strong>Redes Móviles Core:</strong> Experiencia profunda en IMS, HLR, HSS, DNS, AUC, VoLTE, SDB y VPN corporativas.</li>
                                    </ul>
                                    <ul>
                                        <li><strong>Servicios Avanzados:</strong> RDSI, Trunk-IP, SIP, Centralita Virtual (OneNet/VCOM), RingCentral, RedBox, Efax, Multitarjetas, eSIM y Roaming.</li>
                                        <li><strong>Herramientas:</strong> Salesforce, Amdocs, ClarifyCRM, Remedy T2/BMC, Abalon, Jira.</li>
                                        <li><strong>Hardware e Infraestructura:</strong> BTS Huawei Crowncell, Repetidores, Booster y Cajas de Voz FCT (Enlaces GSM).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Job 2: Bodegas SAAC */}
                    <div className="timeline-item fade-up">
                        <div className="timeline-marker"></div>
                        <div className="job-card">
                            <div className="job-header">
                                <div className="job-role">
                                    <h3>SysAdmin & Desarrollador Full Stack</h3>
                                    <div className="sub-header">
                                        <span className="company"><Factory size={14} style={{ display: 'inline', marginRight: '4px' }} /> Bodegas SAAC</span>
                                        <span className="location"><MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} /> Villamalea</span>
                                    </div>
                                </div>
                                <span className="date-badge">Oct 2016 - Dic 2016</span>
                            </div>
                            <div className="job-body">
                                <p className="summary">Administrador de Sistemas y Desarrollador Web. Responsable integral del departamento IT.</p>
                                <ul>
                                    <li><strong>SysAdmin:</strong> Administración de equipos y redes internas. Gestión de usuarios y permisos mediante <strong>LDAP</strong>.</li>
                                    <li><strong>Automatización:</strong> Creación de scripts para copias de seguridad y mantenimiento preventivo de sistemas.</li>
                                    <li><strong>Desarrollo Web:</strong> Mantenimiento y actualización del portal corporativo utilizando <strong>HTML, CSS, PHP y SQL</strong>.</li>
                                    <li><strong>Soporte Integral:</strong> Resolución de incidencias para garantizar la disponibilidad continua de los servicios.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Job 3: APP Informática */}
                    <div className="timeline-item fade-up">
                        <div className="timeline-marker"></div>
                        <div className="job-card">
                            <div className="job-header">
                                <div className="job-role">
                                    <h3>Técnico de Sistemas e Infraestructura</h3>
                                    <div className="sub-header">
                                        <span className="company"><Monitor size={14} style={{ display: 'inline', marginRight: '4px' }} /> APP Informática</span>
                                        <span className="location"><MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} /> Iniesta</span>
                                    </div>
                                </div>
                                <span className="date-badge">Abr 2013 - Jul 2013</span>
                            </div>
                            <div className="job-body">
                                <p className="summary">Atención al cliente en franquicia, con soporte técnico especializado en taller y a domicilio.</p>
                                <ul>
                                    <li><strong>Soporte Técnico:</strong> Diagnóstico de fallos, reparación de hardware y optimización de software en entornos Windows/Linux.</li>
                                    <li><strong>Servicio en Campo:</strong> Desplazamiento a empresas y domicilios para mantenimiento de equipos y redes, asegurando la continuidad del servicio.</li>
                                    <li><strong>Asesoramiento:</strong> Consultoría personalizada para mejoras de equipamiento y resolución de dudas técnicas.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
