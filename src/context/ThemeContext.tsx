import { createContext, useContext, type ReactNode } from 'react';

// Simplified context since light mode is removed
const ThemeContext = createContext<undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeContext.Provider value={undefined}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
