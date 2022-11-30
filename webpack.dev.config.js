const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.js');

module.exports = (env) =>
  merge(baseConfig(env), {
    mode: 'development',
    devtool: 'source-map',
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: 'auto',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: false,
      liveReload: false,
      port: 3000,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
    },
  });
