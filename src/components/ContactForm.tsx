import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = () => {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate network delay
        setTimeout(() => {
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div className="contact-form-card fade-up">
            <h3 className="form-title">
                {t.contact.title_part1} <span className="gradient-text">{t.contact.title_part2_gradient}</span>
            </h3>
            <p className="form-subtitle">{t.contact.subtitle}</p>

            <form onSubmit={handleSubmit} className="premium-form">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Nombre"
                        required
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        disabled={status === 'sending'}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                        disabled={status === 'sending'}
                    />
                </div>
                <div className="input-group">
                    <textarea
                        placeholder="Mensaje"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                        disabled={status === 'sending'}
                    ></textarea>
                </div>

                <button type="submit" className={`btn-submit ${status}`} disabled={status === 'sending' || status === 'success'}>
                    {status === 'idle' && <>Enviar Mensaje <Send size={18} /></>}
                    {status === 'sending' && <span className="loader"></span>}
                    {status === 'success' && <>¡Enviado! <CheckCircle size={18} /></>}
                    {status === 'error' && <>Error <AlertCircle size={18} /></>}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
