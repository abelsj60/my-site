module.exports = {
  entry: [
    '@babel/polyfill',
    './app/index.js'
  ], // assumes your entry point is the index.js in the root of your project folder
  output: {
    path: __dirname,
    filename: './build/bundle.js' // assumes your bundle.js will also be in the root of your project folder
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          plugins: [
            'babel-plugin-styled-components',
            require('babel-plugin-transform-object-rest-spread')
          ],
          presets: [
            'react',
            'env'
          ] // if you aren't using 'babel-preset-env', then omit the 'env'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
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
  }
};
