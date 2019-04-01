const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const webpack = require('webpack');

function resolve(dir) {
  return path.resolve(__dirname, '..', dir);
}

module.exports = merge(webpackBaseConfig, {
  mode: 'development',

  devtool: 'eval-source-map',

  devServer: {
    // open: true,
    host: '0.0.0.0',
    port: '7777',
    overlay: true,
    hot: true,
    historyApiFallback: true
  },

  entry: {
    main: resolve('examples/main')
  },

  output: {
    path: resolve('examples/dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  // resolve: {
  //   alias: {
  //     sui: resolve('dist/sui.js')
  //   }
  // },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: resolve('examples/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
