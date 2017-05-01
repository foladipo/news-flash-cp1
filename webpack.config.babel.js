import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractCssToFile = new ExtractTextPlugin('stylesheets/style.css');

const webpackConfig = {
  entry: './src/js/main.js',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'scripts/bundle.js',
    publicPath: 'dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|routes)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractCssToFile.extract({
          use: ['css-loader', 'sass-loader'],

          // In case we can't extract our CSS into a separate file, we'll
          // just load it load it inline in our JS files, as is default.
          fallback: 'style-loader',
        }),
      },
    ],
  },
};

export default webpackConfig;
