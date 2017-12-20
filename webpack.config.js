const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './source/js/ribsCore.js'],
  output: {
    filename: 'dist/js/ribs-core.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'source/'),
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
  ]
};