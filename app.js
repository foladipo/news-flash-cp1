import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const { NODE_ENV, PORT = 5000 } = process.env;
if (NODE_ENV === 'production') {
  app.use(express.static(__dirname));
} else {
  /*eslint-disable */
  const config = require('./webpack.config');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddlware = require('webpack-hot-middleware');
  /*eslint-enable */

  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddlware(compiler));
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Node app is running on port', PORT);
});
