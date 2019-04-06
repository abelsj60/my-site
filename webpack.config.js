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
    },
  },
  plugins: [new Visualizer()]
};
