const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    stats: {
        modules: false,
        children: false
    },
    devServer: {
        open: true,
        host: '0,0,0,0',
        overlay: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.scss', 'css'],
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            paths: [path.resolve(__dirname, 'node_modules')]
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ProgressBarPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: path.join(__dirname, '../examples/index.html')
        })
    ]
};
