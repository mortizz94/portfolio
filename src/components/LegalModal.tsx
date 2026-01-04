
import { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'aviso-legal' | 'privacidad' | 'cookies' | null;
}

const content = {
    'aviso-legal': (
        <>
            <h2 id="aviso-legal">Aviso Legal (LSSI)</h2>
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), se facilitan a continuación los datos de información general de este sitio web:</p>
            <ul>
                <li><strong>Titular:</strong> Diego Martínez Ortiz</li>
                <li><strong>NIF/DNI:</strong> <span className="placeholder">[INTRODUCIR DNI]</span></li>
                <li><strong>Domicilio:</strong> <span className="placeholder">[INTRODUCIR DIRECCIÓN]</span>, Albacete, España</li>
                <li><strong>Email de contacto:</strong> contact@glutendo.com</li>
            </ul>
        </>
    ),
    'privacidad': (
        <>
            <h2 id="privacidad">Política de Privacidad (RGPD)</h2>
            <p>De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos que este sitio web <strong>no utiliza formularios de recogida de datos</strong> ni bases de datos persistentes.</p>
            <p>Si usted contacta a través del correo electrónico facilitado, su dirección se utilizará únicamente para responder a su consulta y no será incorporada a ficheros comerciales sin su consentimiento expreso.</p>
        </>
    ),
    'cookies': (
        <>
            <h2 id="cookies">Política de Cookies</h2>
            <p>Este sitio web puede utilizar cookies técnicas esenciales para su funcionamiento (como las de Cloudflare para seguridad). No utilizamos cookies de terceros, publicitarias ni de análisis de comportamiento sin su consentimiento previo.</p>
            <p>Dado que es un portfolio estático alojado en Cloudflare Pages, las cookies presentes son estrictamente necesarias para la seguridad y el balanceo de carga del servidor.</p>
        </>
    )
};

const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || !type) return null;

    return (
        <div id="legal-modal" className={`legal-modal ${isOpen ? 'active' : ''}`} onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}>
            <div className="legal-modal-content">
                <button className="close-modal" onClick={onClose}>
                    <X size={24} />
                </button>
                <div id="legal-content-body">
                    {content[type]}
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
