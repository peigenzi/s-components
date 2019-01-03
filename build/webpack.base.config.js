const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

function resolve(dir) {
  return path.resolve(__dirname, '..', dir);
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: [
              'vue-style-loader',
              {
                loader: 'css-loader'
              }
            ],
            scss: [
              'vue-style-loader',
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.vue', '.scss', 'css'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },

  plugins: [new VueLoaderPlugin()]
};
