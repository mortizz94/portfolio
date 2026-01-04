
import { createContext, useContext, useState, type ReactNode, useEffect } from 'react';
import { content, type Language } from '../data';
import type { Content } from '../data/types';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('language') as Language;
        if (saved && (saved === 'es' || saved === 'en')) return saved;

        // Auto-detect
        const browserLang = navigator.language.split('-')[0];
        return browserLang === 'es' ? 'es' : 'en'; // Default to English if not Spanish
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: content[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
