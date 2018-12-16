'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: '.',
    assetsPublicPath: '/',

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8005, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    devtool: 'cheap-module-eval-source-map',
    cssSourceMap: true,
  },

  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '/',
    assetsPublicPath: '/',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  demo:{
    entry: './demo/index.js',
    assetsRoot: path.resolve(__dirname, '../dist-demo'),
    assetsSubDirectory: '.',
    assetsPublicPath: '',
    productionSourceMap: true
  }
}
