const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const HashedModuleIdsPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
// https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames/
// https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758

// Local needs '/'
// GH needs '/build' and '/public'
const publicPath = process.env.NODE_ENV === 'production' ? '/build/' : '/';
const publicFilesPath = process.env.NODE_ENV === 'production' ? '/public/' : '/';

module.exports = {
  entry: {
    main: './app/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: publicPath
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            'babel-plugin-styled-components' //,
            // require('babel-`plugin-transform-object-rest-spread')
          ],
          presets: [
            '@babel/preset-react',
            [
              '@babel/preset-env', {
                'modules': 'false',
                'corejs': 2, // Configures corejs version, 3 breaks EVERYTHING
                'useBuiltIns': 'usage'
              }
            ]
          ]
        }
      },
      {
        test: /\.(png|jp(e*)g)$/,
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
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        }
      }
    }
  },
  plugins: [
    new Visualizer(),
    new HashedModuleIdsPlugin(), // So file hashes don't change unexpectedly
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './template.html',
      inject: 'head',
      publicFilesPath: publicFilesPath
    }),
    new ScriptExtHtmlWebpackPlugin({
      defer: /\.js$/
    }),
    new DynamicCdnWebpackPlugin({
      verbose: true,
      exclude: [
        'buffer',
        'react',
        'react-router-dom',
        'react-dom',
        'styled-components',
        'marked',
        'parallax-js'
      ],
      resolver: (name, version) => {
        const options = {
          'react': {
            var: 'React',
            version: '16.5.1',
            url: `https://unpkg.com/react@${version}/umd/react.production.min.js`,
            name: 'react'
          },
          'react-router-dom': {
            var: 'ReactRouterDOM',
            version: '4.3.1',
            url: `https://unpkg.com/react-router-dom@${version}/umd/react-router-dom.min.js`,
            name: 'react-router-dom'
          },
          'react-dom': {
            var: 'ReactDOM',
            version: '16.5.1',
            url: `https://unpkg.com/react-dom@${version}/umd/react-dom.production.min.js`,
            name: 'react-dom'
          },
          'styled-components': {
            var: 'styled',
            version: '4.1.3',
            url: `https://unpkg.com/styled-components@${version}/dist/styled-components.min.js`,
            name: 'styled-components'
          },
          'marked': {
            var: 'marked',
            version: '0.5.1',
            url: `https://unpkg.com/marked@${version}/marked.min.js`,
            name: 'marked'
          },
          'parallax-js': {
            var: 'Parallax',
            version: '3.1.0',
            url: `https://unpkg.com/parallax-js@${version}/dist/parallax.min.js`,
            name: 'parallax-js'
          },
          'buffer': {
            var: 'Buffer',
            version: '4.9.1',
            url: `https://unpkg.com/buffer@${version}/index.js`,
            name: 'buffer'
          }
        };

        return options[name];
      }
    })
  ]
};
