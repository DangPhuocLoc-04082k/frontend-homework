const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: ['./src/index.tsx'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: './',
    clean: true,
  },
  plugins: [...require('./webpack.plugins')],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      // Custom Aliases
      ...require('./webpack.aliases'),
    },
  },
  stats: 'errors-warnings',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
        // `terserOptions` options will be passed to `swc` (`@swc/core`)
        // Link to options - https://swc.rs/docs/config-js-minify
        terserOptions: {},
      }),
    ],
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
};
