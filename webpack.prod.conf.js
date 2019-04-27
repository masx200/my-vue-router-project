const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const baseWebpackConfig = require('./webpack.base.conf');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
//const utils = require('./utils')
//const webpack = require('webpack')
//const config = require('./webpack.config.js')
//const merge = require('webpack-merge')
//const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = merge(baseWebpackConfig, {
    //environment specific config goes here
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        //    modules: true,
                          //  localIdentName: '[name]---[local]---[hash:base64:5]'
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
                            sourceMap: true
                          //  data: '@import "./src/styles/_variables.scss";'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        runtimeChunk: {
            "name": "manifest"
        },
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }

            }
        }
    },
    plugins: [
        // new CleanWebpackPlugin(['distribution/*']),
        // Error: clean-webpack-plugin only accepts an options object. See:
    //         https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
    //_clean-webpack-plugin@2.0.1@clean-webpack-plugin\
    new  CleanWebpackPlugin({
        verbose: true,
        cleanOnceBeforeBuildPatterns : ['*/*']
    }),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        }),
        new webpack.DefinePlugin({
         //   'process.env': env
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
            // sourceMap: config.build.productionSourceMap,
            sourceMap: true,
            parallel: true
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: 
               
                 { safe: true }
        }),
        new HtmlWebpackPlugin({
            // filename: process.env.NODE_ENV === 'testing'
            //     ? 'index.html'
            //     : config.build.index,
            filename: 'index.html',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                // removeAttributeQuotes: true
                // more options:
                removeAttributeQuotes: false
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CopyWebpackPlugin([
            {
                // from: path.resolve(__dirname, '../static'),
                // to: config.build.assetsSubDirectory
                from: path.resolve(__dirname, 'static'),
                to: path.resolve(__dirname, 'distribution'),
                ignore: ['.*']
            }
        ])
    ]
});

module.exports = webpackConfig;

