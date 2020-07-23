const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');

const sassConfig ={
    cssModules: false,
};

module.exports = withPlugins([
    [sass, sassConfig],
], {});

