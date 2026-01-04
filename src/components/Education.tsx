
import { Server, Monitor, Award, FileCode } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <div className="section-title-wrapper fade-up">
                    <h2>Formación y Certificaciones</h2>
                </div>

                <div className="edu-grid fade-up">
                    <div className="edu-card">
                        <div className="icon-box"><Server size={24} /></div>
                        <h4>Técnico Superior ASIR</h4>
                        <p className="school">IES Leonardo da Vinci (2014 - 2016)</p>
                        <p className="desc">Administración de Sistemas Informáticos en Red</p>
                        <ul className="edu-list-detail">
                            <li>Administración de S.O. (Windows Server, Linux Deb/RPM).</li>
                            <li>Servicios de Red (DNS, DHCP, LDAP, HTTP).</li>
                            <li>Gestión de Bases de Datos (MySQL, Oracle).</li>
                            <li>Seguridad y Alta Disponibilidad.</li>
                        </ul>
                    </div>
                    <div className="edu-card">
                        <div className="icon-box"><Monitor size={24} /></div>
                        <h4>Técnico SMR</h4>
                        <p className="school">IES Cañada de la Encina (2012 - 2014)</p>
                        <p className="desc">Sistemas Microinformáticos y Redes</p>
                        <ul className="edu-list-detail">
                            <li>Montaje y Mantenimiento de Equipos.</li>
                            <li>Redes Locales y Seguridad Básica.</li>
                            <li>Aplicaciones Ofimáticas y Web.</li>
                        </ul>
                    </div>
                    <div className="cert-card">
                        <h4>Certificaciones & Cursos</h4>
                        <ul className="cert-list">
                            <li><Award size={16} /> Amazon Web Services (AWS) | Data Analytics Fundamentals</li>
                            <li><Award size={16} /> Google Actívate | Cloud Computing</li>
                            <li><Award size={16} /> LPI | Linux Essentials Professional Development</li>
                            <li><Award size={16} /> Cisco | IT Essentials: PC Hardware and Software</li>
                            <li><Award size={16} /> Mastermind | Cómo protegerse en la red</li>
                            <li><FileCode size={16} /> Google | Intro al Desarrollo Web (HTML/CSS)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
