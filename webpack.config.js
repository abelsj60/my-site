const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const HashedModuleIdsPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
// const startupScript = require('./startup-script.js');
// https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames/
// https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758

// entry: {
//   app: './app/index.js',
//   startup: startup
// },

module.exports = {
  entry: {
    main: './app/index.js' //,
    // startup: './startup-script.js'
  },
  // entry: [
  //   './app/index.js'
  // ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js'
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
                'corejs': '2',
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
      // title: 'Abels | Narrative coding',
      filename: './index.html',
      template: './template.html'
      // 'meta': {
      //   'viewport': 'width=device-width, initial-scale=1, user-scalable=no'
      // }
    }),
    new ScriptExtHtmlWebpackPlugin({
      // inline: 'startup',
      // async: /\.js$/,
      defer: /\.js$/
    }),
    new DynamicCdnWebpackPlugin({
      verbose: true,
      // only: ['react', 'react-router-dom'],
      resolver: (name, version) => {
        console.log('NAME:', name);
        console.log('VERSION:', version);
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
            // url: `https://unpkg.com/react-dom@${version}/umd/react-dom.development.js`,
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
          // 'react-clipboard.js': {
          //   var: 'Clipboard',
          //   version: '2.0.6',
          //   url: `https://unpkg.com/react-clipboard.js@${version}/dist/react-clipboard.js`,
          //   // url: `https://unpkg.com/react-clipboard.js@${version}/dist/react-clipboard.min.js`,
          //   name: 'react-clipboard.js'
          // }
        };
        return options[name];
      }
    })
  ]
};

// if (modulePath === 'lodash') {
//   return {
//     name: 'lodash',
//     url: 'https://unpkg.com/lodash@' + version + '/lodash.min.js',
//     version: version, var: '_'
//   };
// }
