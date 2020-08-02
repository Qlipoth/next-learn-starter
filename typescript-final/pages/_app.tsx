import {UIDReset} from 'react-uid';
import * as React from "react";
import '../styles/main.scss';
import AppThemeProvider from '../components/themeContext';
import withReactRouter from '../components/with-react-router';

const App = ({ Component, pageProps }) => {
    return (
        <AppThemeProvider>
            <UIDReset>
                <Component {...pageProps}>
                </Component>
            </UIDReset>
        </AppThemeProvider>
    );
};

export default withReactRouter(App);
