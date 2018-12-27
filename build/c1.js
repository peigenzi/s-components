const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackDashborad = require('webpack-dashboard');
// const WebpackDashboradPlugin = require('webpack-dashboard/plugin');
// const dashboard = new WebpackDashborad();

module.exports = {
    mode: 'development',

    entry: {
        app: path.resolve(__dirname, '../src/js/index.js')
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, '../src')],
                loader: 'babel-loader'
            }
        ]
    },

    externals: {
        jquery: 'jQuery'
    },

    devtool: 'source-map',

    devServer: {
        host: '192.168.3.246',
        port: '8888',
        hot: true,
        overlay: true,
        open: true
    },

    plugins: [
        // new WebpackDashboradPlugin(dashboard.setData),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../c1.html')
        })
    ]
};
