import ExtractTextPlugin from 'extract-text-webpack-plugin';
import DotEnvPlugin from 'dotenv-webpack';

const extractCssToFile = new ExtractTextPlugin('stylesheets/style.css');
const dotEnvPlugin = new DotEnvPlugin({
  path: '.env',
});

const webpackConfig = {
  entry: './src/js/main.jsx',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'scripts/bundle.js',
    publicPath: 'dist/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules|routes)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s?)css$/,
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
  plugins: [
    extractCssToFile,
    dotEnvPlugin,
  ],
  node: {
    fs: 'empty',
  },
};

export default webpackConfig;
