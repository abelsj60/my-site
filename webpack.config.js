const CleanWebpackPlugin = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HashedModuleIdsPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames/
// https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758

// Github pages gets production builds, local gets develpment builds. If you
// need a development build on gh-pages, or a production build on local,
// reset paths --> Local needs '/', GH needs '/build/' and '/public/'

module.exports = (env, argv) => {
  return {
    entry: [
      '@babel/polyfill',
      './app/index.js'
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      publicPath: argv.mode === 'development'
        ? '/'
        : '/build/'
    },
    devtool: argv.mode === 'development'
      ? 'source-map'
      : '',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: [
              'babel-plugin-styled-components'
            ],
            presets: [
              [
                '@babel/preset-react'
              ],
              [
                '@babel/preset-env', {
                  'modules': 'false',
                  'corejs': 2, // Corejs version, 3 breaks EVERYTHING
                  'useBuiltIns': 'entry'
                }
              ]
            ]
          }
        },
        {
          test: /\.(gif|png|jp(e*)g)$/,
          loader: 'url-loader',
          options: {
            limit: 250000,
            fallback: 'file-loader',
            name: '[path][name]-[hash:8].[ext]'
          }
        },
        {
          test: /\.md$/,
          use: [
            'json-loader',
            'yaml-frontmatter-loader'
          ]
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            sourceMap: true, // enable source maps to map errors (stack traces) to modules
            output: {
              comments: false // remove all comments
            }
          }
        })
      ],
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new CleanWebpackPlugin(),
      new HashedModuleIdsPlugin(), // So file hashes don't change unexpectedly
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './template.html',
        inject: 'head',
        publicFilePath: argv.mode === 'development'
          ? '/'
          : '/public/'
      }),
      new ScriptExtHtmlWebpackPlugin({
        defer: /\.js$/
      }),
      new FileManagerPlugin({
        onEnd: {
          delete: [
            './build/index.html'
          ]
        }
      })
    ]
  };
};
