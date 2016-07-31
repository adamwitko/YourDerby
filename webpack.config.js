var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var outputPath = path.join(__dirname, 'public');
var main = path.join(__dirname, 'src', 'app', 'main.ts');
var vendor = path.join(__dirname, 'src', 'vendor.ts');
var polyfills = path.join(__dirname, 'src', 'polyfills.ts');
var index = path.join(__dirname, 'src', 'index.html');

function root(args) {
  args = Array.prototype.slice.call(arguments,0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  entry: {
    app: main,
    polyfills: polyfills,
    vendor: vendor
  },
  output: {
    path: outputPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },  
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'] }),
    new HtmlWebpackPlugin({ template: index }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css')
  ]  
};