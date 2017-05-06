//Configuring Webpack for Production Environment
//NOTE: We will be calling it from our build.js
import webpack from 'webpack';
import path from 'path'; //from npm
import ExtractTextPlugin from 'extract-text-webpack-plugin'; //Extract CSS from our JS

//Constant for production build - GLOBALS
const GLOBALS = {
  'process.env.NODE_ENV':JSON.stringify('production') // Defining a Node env variable, sets React for Production
}

//We will create an object literal
export default { 
  debug: true, // enables displaying of errors
  devtool: 'source-map', //cheap-module-eval-source-map / inline-source-map - one of many option for devtool
  noInfo: false, //webpack will display a list of all the files that it is bundling,
  entry: './src/index', //You dont need Hot-reloading, just point to the index.js
  target: 'web', //This is a webpack for web application
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js' //This is strange, webpack will not generate physical files, but create bundles in memory
  },
  devServer: {
    contentBase: './dist' // For production, we will load from the dist folder
  },
  plugins: [
    //Setting a set of Optimizers for production zip
    new webpack.optimize.OccurrenceOrderPlugin(), //optimizes the order our plugins are bundled in
    new webpack.DefinePlugin(GLOBALS), //Omits development features
    new ExtractTextPlugin('styles.css'), //Lets us extract CSS into a separate file
    new webpack.optimize.DedupePlugin(), //Dedupe plugin eliminates duplicate library references
    new webpack.optimize.UglifyJsPlugin() //Minifies JS
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap')}, //tells it to generte source-maps
      //Jargon for bootstrap to handle fonts 
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
