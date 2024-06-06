const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    favicon: './public/favicon.ico',
    manifest: './public/manifest.json',
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[name].[chunkhash].chunk.css',
  }),
  new Dotenv({
    path: path.resolve(__dirname, '.env') // default is .env
  }),

];
