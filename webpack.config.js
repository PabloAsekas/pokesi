const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './client/index.js',
    sw: './client/sw.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.tmp', 'webpack'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(json|ico|html|css|png|otf|ttf)$/,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve(__dirname, 'client')
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.tmp', 'webpack'),
    historyApiFallback: true,
    inline: false,
    hot: false,
    host: '0.0.0.0'
  }
}
