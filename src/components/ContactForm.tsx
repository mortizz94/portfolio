import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { config } from '../data/config';

const ContactForm = () => {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch(config.formspreeId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
                // Reset status after 5 seconds to allow new messages
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
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
                        name="name"
                        placeholder={t.contact.form.name}
                        required
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        disabled={status === 'sending'}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="email"
                        name="email"
                        placeholder={t.contact.form.email}
                        required
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                        disabled={status === 'sending'}
                    />
                </div>
                <div className="input-group">
                    <textarea
                        name="message"
                        placeholder={t.contact.form.message}
                        required
                        rows={4}
                        value={formState.message}
                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                        disabled={status === 'sending'}
                    ></textarea>
                </div>

                <button type="submit" className={`btn-submit ${status}`} disabled={status === 'sending' || status === 'success'}>
                    {status === 'idle' && <>{t.contact.form.send} <Send size={18} /></>}
                    {status === 'sending' && <span className="loader"></span>}
                    {status === 'success' && <>{t.contact.form.success} <CheckCircle size={18} /></>}
                    {status === 'error' && <>{t.contact.form.error} <AlertCircle size={18} /></>}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
