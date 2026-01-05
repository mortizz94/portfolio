import { createContext, useContext, useEffect, type ReactNode } from 'react';

type Theme = 'default' | 'aurora';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // Force default theme
    const theme: Theme = 'default';

    useEffect(() => {
        localStorage.setItem('theme', 'default');
        document.documentElement.classList.remove('aurora-theme');
    }, []);

    const setTheme = () => { }; // No-op

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
