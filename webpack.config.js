module.exports = {
  entry: './app/index.js', // assumes your entry point is the index.js in the root of your project folder
  output: {
    path: __dirname,
    filename: './bundle.js' // assumes your bundle.js will also be in the root of your project folder
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'] // if you aren't using 'babel-preset-env', then omit the 'env'
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
        use:
        [
          {
            loader: 'url-loader',
            options:
              {
              limit: 250000,
              fallback: 'file-loader',
              name: '[path][name]-[hash:8].[ext]'
              }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        query:
        {
          mimetype: 'svg+xml',
          name: './app/semantic/themes/default/assets/fonts/icons.svg'
        }
      },
      {
        test: /\.woff$/,
        loader: 'url-loader',
        query:
        {
          mimetype:'application/font-woff',name:'./app/semantic/themes/default/assets/fonts/icons.woff'
        }
      },
      {
        test:/\.woff2$/,
        loader: 'url-loader',
        query:
          {
          mimetype:'application/font-woff2',name:'./app/semantic/themes/default/assets/fonts/icons.woff2'
          }
      },
      {
        test: /\.[ot]tf$/,
        loader: 'url-loader',
        query:
        {
          mimetype:'application/octet-stream',name:'./app/semantic/themes/default/assets/fonts/icons.ttf'
        }
      },
      {
        test: /\.eot$/,
        loader: 'url-loader',
        query:
        {
          mimetype:'application/vnd.ms-fontobject',name:'./app/semantic/themes/default/assets/fonts/icons.eot'
        }
      }
    ]
  }
};
