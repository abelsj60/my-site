const CleanWebpackPlugin = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HashedModuleIdsPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames/
// https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758

// Master/docs gets production builds, local gets develpment builds.
// Relative paths: 
//  -production = '/' 
//  -development = '/build/' and '/public/'

module.exports = (env, argv) => {
  return {
    entry: [
      '@babel/polyfill',
      './app/index.js'
    ],
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].[contenthash].js',
      publicPath: argv.mode === 'development'
        ? '/'
        : '/docs/'
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
          test: /\.(woff|woff2|gif|png|jp(e*)g)$/,
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
        new TerserPlugin() 
      ],
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      // Deletes old files — ONLY use if building to sub-directory!
      new CleanWebpackPlugin(),
      new HashedModuleIdsPlugin(), // So file hashes don't change unexpectedly
      new HtmlWebpackPlugin({
        filename: './index.html',
        template: './template.html',
        inject: 'head',
        publicFilePath: argv.mode === 'development'
          ? '/'
          : '/public/'
      }),
      new ScriptExtHtmlWebpackPlugin({
        defer: /\.js$/
      }),
      // new FileManagerPlugin({
      //   onEnd: {
      //     delete: [
      //       './docs/index.html'
      //     ]
      //   }
      // })
    ]
  };
};
``