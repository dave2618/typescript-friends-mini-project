import { createContext, useContext } from 'react';

export interface ThemeContextType {
    themeState: { theme: string;},
    themeDispatch: React.Dispatch<{type: string;}>
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be within ThemeProvider")
  }

  return context;
}

export default ThemeContext;