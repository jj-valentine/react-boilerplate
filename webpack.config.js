const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
      // {
      //   test: /\.scss$|\.sass$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // }
    ]
  },
  // source maps help map errors to original react code
  devtool: 'cheap-module-eval-source-map',
  // configuration for webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  }
};
