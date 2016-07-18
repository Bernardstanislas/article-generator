var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: path.resolve(process.cwd(), './src'),
  output: {
    filename: 'app.js',
    path: path.resolve(process.cwd(), './dist')
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Theodo Blog Article Generator',
      template: 'index.ejs'
    })
  ]
}

module.exports = config;
