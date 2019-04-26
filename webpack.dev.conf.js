const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
    //environment specific config goes here
    mode: 'development',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './distribution',
        inline: true,//do not use iframe for the page, true is default
        open: true,//open browser after dev server starts
        port: 8080,//8080 is default
        proxy: {//proxy backend api
            '/api': 'http://localhost:3000'
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            //modules: true,
                            // localIdentName: '[name]---[local]---[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require("autoprefixer")],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            // data: '@import "./src/styles/_variables.scss";'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

});

module.exports = webpackConfig;

