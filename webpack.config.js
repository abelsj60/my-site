
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],
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
            // require('babel-plugin-transform-object-rest-spread')
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
            comments: false, // remove all comments
          }
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [new Visualizer()]
};

// const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const Visualizer = require('webpack-visualizer-plugin');
// const HashedModuleIdsPlugin = require('html-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

// // https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames/
// // https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758

// module.exports = {
//   entry: [
//     './app/index.js'
//   ],
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: '[name].[contenthash].js'
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options: {
//           plugins: [
//             'babel-plugin-styled-components' //,
//             // require('babel-plugin-transform-object-rest-spread')
//           ],
//           presets: [
//             '@babel/preset-react',
//             [
//               '@babel/preset-env', {
//                 'modules': 'false',
//                 'corejs': '2',
//                 'useBuiltIns': 'usage'
//               }
//             ]
//           ]
//         }
//       },
//       {
//         test: /\.(png|jp(e*)g)$/,
//         loader: 'url-loader',
//         options: {
//           limit: 250000,
//           fallback: 'file-loader',
//           name: '[path][name]-[hash:8].[ext]'
//         }
//       },
//       {
//         test: /\.md$/,
//         use: [
//           'json-loader',
//           'yaml-frontmatter-loader'
//         ]
//       }
//     ]
//   },
//   optimization: {
//     minimizer: [
//       new UglifyJsPlugin({
//         uglifyOptions: {
//           sourceMap: true, // enable source maps to map errors (stack traces) to modules
//           output: {
//             comments: false, // remove all comments
//           }
//         }
//       })
//     ],
//     splitChunks: {
//       chunks: 'all',
//       maxInitialRequests: Infinity,
//       minSize: 0,
//       cacheGroups: {
//         vendor: {
//           test: /[\\/]node_modules[\\/]/,
//           name(module) {
//             // get the name. E.g. node_modules/packageName/not/this/part.js
//             // or node_modules/packageName
//             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

//             // npm package names are URL-safe, but some servers don't like @ symbols
//             return `npm.${packageName.replace('@', '')}`;
//           },
//         }
//       }
//     },
//   },
//   plugins: [
//     new Visualizer(),
//     new HashedModuleIdsPlugin(), // So file hashes don't change unexpectedly
//     new HtmlWebpackPlugin({
//       title: 'Abels | Narrative coding',
//       filename: './index.html'
//     }),
//     new ScriptExtHtmlWebpackPlugin()
//   ]
// };
