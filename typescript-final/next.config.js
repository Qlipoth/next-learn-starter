const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const sassConfig ={
    cssModules: false,
};

module.exports = withPlugins([
    [sass, sassConfig],
], {});

