import webpack from 'webpack';
import path from 'path'; //from npm

//We will create an object literal
export default { 
  debug: true, // enables displaying of errors
  devtool: 'source-map', //cheap-module-eval-source-map / inline-source-map - one of many option for devtool
  noInfo: false, //webpack will display a list of all the files that it is bundling,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index') //app's actual entry point, the ORDER is critical
  ],
  target: 'web', //This is a webpack for web application
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js' //This is strange, webpack will not generate physical files, but create bundles in memory
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src') // Tell webpack devServer where our source code is
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //Replace modules without full browser refresh
    new webpack.NoErrorsPlugin() //Keep errors from breaking, display errors on the browser
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      //Jargon for bootstrap to handle fonts 
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
