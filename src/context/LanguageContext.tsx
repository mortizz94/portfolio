
import { createContext, useContext, type ReactNode } from 'react';
import { content, type Language } from '../data';
import type { Content } from '../data/types';

interface LanguageContextType {
    language: Language;
    t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Language is always 'es'
    const language: Language = 'es';

    return (
        <LanguageContext.Provider value={{ language, t: content[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
