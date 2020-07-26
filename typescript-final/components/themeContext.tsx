import React, { createContext } from 'react';

const ThemeContext = createContext({
    themeName: 'dark',
    changeThemeName: (themeName) => {},
});

export default ThemeContext;
