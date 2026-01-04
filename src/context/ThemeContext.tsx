import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'default' | 'aurora';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme');
        return (saved === 'default' || saved === 'aurora') ? (saved as Theme) : 'default';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        // Reset classes
        document.documentElement.classList.remove('aurora-theme');

        if (theme === 'aurora') {
            document.documentElement.classList.add('aurora-theme');
        }
    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

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
