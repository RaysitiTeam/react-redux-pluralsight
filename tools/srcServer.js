import express from 'express';
import webpack from 'webpack';
import path from 'path'; //part of npm
import config from '../webpack.config.dev';
import open from 'open'; //part of npm

/* eslint-disable no-console */

const port = 3000;
const app = express(); //instance of Express JS server side
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, //no info on the command line
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
