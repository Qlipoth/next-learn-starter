import { UIDReset } from 'react-uid';
import * as React from "react";
import '../styles/main.scss'
import { ThemeProvider } from 'styled-components';
import { Themes, ThemeNames, SingleTheme } from '../theming';
import ThemeContext from '../components/themeContext';

export default function App({ Component, pageProps }) {
    return (

        <ThemeProvider theme={Themes[ThemeNames.light]}>
            <UIDReset>
                <Component {...pageProps}>
                    <ThemeContext />
                </Component>
            </UIDReset>
        </ThemeProvider>

    )
}

