var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
// var VueLoaderPlugin = require('vue-loader');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var fs = require('fs');
var isWsl = require('is-wsl');
var path = require('path');
var webpack = require('webpack');
var resolve = require('resolve');
var PnpWebpackPlugin = require('pnp-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
var TerserPlugin = require('terser-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var safePostCssParser = require('postcss-safe-parser');
var ManifestPlugin = require('webpack-manifest-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WorkboxWebpackPlugin = require('workbox-webpack-plugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
var getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
// var paths = require('./paths');
// var modules = require('./modules');
// var getClientEnvironment = require('./env');
var ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
var ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
var typescriptFormatter = require('react-dev-utils/typescriptFormatter');
// @remove-on-eject-begin
var getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');
// @remove-on-eject-end
var postcssNormalize = require('postcss-normalize');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'distribution');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
module.exports = {
  entry: {
  //  'app': './src/app.js'
	'index': './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'distribution')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src')
    }
    // root: APP_PATH
  },

  module: {
    // preloaders: [
    //     //             {
    //     //                 test: /\.js?$/,
    //     //                 loaders: ['eslint'],
    //     //                 include: APP_PATH
    //     //             }
    // ],
    rules: [
        // {
        //     test: /\.(js|mjs|jsx|ts|tsx)$/,
        //     // enforce: 'pre',
        //     use: [
        //       {
        //         // options: {
        //         //   formatter: require.resolve('react-dev-utils/eslintFormatter'),
        //         //   eslintPath: require.resolve('eslint'),
        //         //   // @remove-on-eject-begin
        //         //   baseConfig: {
        //         //     extends: [require.resolve('eslint-config-react-app')],
        //         //   },
        //         //   ignore: false,
        //         //   useEslintrc: false,
        //         //   // @remove-on-eject-end
        //         // },
        //         // loader: require.resolve('eslint-loader'),

        //       },
        //     ],
        //     // include: paths.appSrc,
        //     include:  [path.resolve(__dirname, 'src')],
        //   },
          {
                            test: /\.(js|mjs|jsx|ts|tsx)$/,
            // use: {
            //     loader: 'babel-loader',
            //     options: {
            //         presets: ['es2015', 'react'],
            //     }},
            enforce: 'pre',
            //                 loaders: 'eslint-loader',
             loaders: 'babel-loader',
                            include: APP_PATH,
            exclude: [path.resolve(__dirname, 'node_modules')]
                        },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['distribution/*']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        // removeAttributeQuotes: true
        // more options:
        removeAttributeQuotes: false
        // https://github.com/kangax/html-minifier#options-quick-reference
    }
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'static'),
        to: path.resolve(__dirname, 'distribution')
      }
    ])
  ]

};
