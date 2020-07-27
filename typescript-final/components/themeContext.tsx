import React, { createContext } from 'react';
import {SingleTheme, ThemeNames, Themes} from "../theming";
import {UIDReset} from "react-uid";
import { ThemeProvider } from 'styled-components';

export interface ThemeContextType {
    theme: SingleTheme,
    themeName: ThemeNames;
    changeThemeName: (themeName: ThemeNames) => void;
}

export const AppThemeContext = createContext<ThemeContextType>({
    theme: Themes[ThemeNames.light],
    themeName: ThemeNames.light,
    changeThemeName: (themeName: ThemeNames) => {
    },
});


export default function AppThemeProvider({ children }) {
    const [themeName, changeThemeName] = React.useState<ThemeNames>(ThemeNames.light);
    const theme = React.useMemo(() => {
        return Themes[themeName];
    }, [themeName]);
    return (
        <AppThemeContext.Provider value={{theme, themeName, changeThemeName}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
}

