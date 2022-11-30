const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.js');

module.exports = (env) =>
  merge(baseConfig(env), {
    mode: 'production',
    output: {
      filename: '[name]_[contenthash].js',
      chunkFilename: '[name]_[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: 'auto',
    },
  });
