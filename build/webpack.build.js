const path = require('path');
const config = require('./webpack.dev');

const isMinify = process.argv.indexOf('-p') !== -1;

delete config.devServer;

module.exports = Object.assign(config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../lib'),
    library: '',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    umdNameDefine: true,
    globalObject: 'this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: false,
  optimization: {
    minimize: isMinify
  }
});
