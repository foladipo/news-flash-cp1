/* We will use ExtractTextPlugin to our transpiled 
styling rules into a separate file. */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCssToFile = new ExtractTextPlugin('styles/style.css');

var webpackConfig = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'scripts/bundle.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        // ES6 to ES5 conversion using Babel.
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        // Convert .scss files to .css.
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractCssToFile.extract({
          use: ['css-loader', 'sass-loader'],

          // In case we can't extract our CSS into a separate file, we'll 
          // just load it load it inline in our JS files, as is default.
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractCssToFile
  ]
};

module.exports = webpackConfig;
