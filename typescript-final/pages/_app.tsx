import {UIDReset} from 'react-uid';
import * as React from "react";
import '../styles/main.scss'
import {Themes, ThemeProvider} from 'styled-components';
import {ThemeNames} from '../theming';
import AppThemeProvider from '../components/themeContext';

export default function App({ Component, pageProps }) {
    return (
        <AppThemeProvider>
            <UIDReset>
                <Component {...pageProps}>
                </Component>
            </UIDReset>
        </AppThemeProvider>
    );
}
