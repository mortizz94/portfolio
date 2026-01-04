
import { Rocket } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="section dark-section">
            <div className="container">
                <div className="section-title-wrapper fade-up">
                    <h2>Servicios Web</h2>
                    <p>Soluciones digitales a medida para particulares y empresas.</p>
                </div>

                <div className="timeline-container service-timeline-container">
                    {/* Service Card */}
                    <div className="job-card featured fade-up service-card">
                        <div className="job-header">
                            <div className="job-role">
                                <h3><Rocket className="service-icon" style={{ display: 'inline', marginRight: '8px' }} size={20} /> Desarrollo Web Completo</h3>
                                <div className="sub-header">
                                    <span className="company">Webs Estáticas & Landing Pages</span>
                                </div>
                            </div>
                            <span className="date-badge service-badge">Disponible Ahora</span>
                        </div>
                        <div className="job-body">
                            <p className="summary">
                                Ofrezco un servicio integral de creación de sitios web estáticos, ideales para portfolios, pequeños
                                negocios, o páginas de aterrizaje (Landing Pages) de alto rendimiento.
                            </p>
                            <div className="details-grid">
                                <ul>
                                    <li><strong>Dominio Personalizado:</strong> Gestión y configuración de tu nombre en internet.</li>
                                    <li><strong>Diseño & Desarrollo:</strong> Creación de la web a medida, optimizada para móviles (Responsive) y buscadores (SEO).</li>
                                    <li><strong>Alojamiento (Hosting):</strong> Despliegue en plataformas rápidas y seguras.</li>
                                </ul>
                                <ul>
                                    <li><strong>Mantenimiento:</strong> Actualizaciones de contenido y seguridad básica.</li>
                                    <li><strong>Velocidad:</strong> Sitios ultra-rápidos que cargan al instante.</li>
                                    <li><strong>Soporte:</strong> Asesoramiento técnico directo.</li>
                                </ul>
                            </div>
                            <div className="cta-container" style={{ marginTop: '20px' }}>
                                <a href="#contact" className="btn-primary">Solicitar Presupuesto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
