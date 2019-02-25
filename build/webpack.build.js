const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',

  entry: {
    main: path.resolve(__dirname, '../src/index.js')
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    library: 'sui',
    libraryTarget: 'umd',
    filename: 'sui.js',
    umdNamedDefine: true
  },

  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
});
