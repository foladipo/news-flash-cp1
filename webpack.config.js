module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/dist/scripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
