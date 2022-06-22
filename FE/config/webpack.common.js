const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

dotenv.config({ path: path.join(__dirname, '../env', '.env') });
const WebpackEnvironmentPlugin = new webpack.EnvironmentPlugin(['TEAM30_BASE_URL', 'TEAM30_GITHUB_OAUTH_URL']);

module.exports = {
  context: __dirname,
  entry: '../src/index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: '> 1%, not dead',
                  useBuiltIns: 'usage',
                  corejs: { version: '3' },
                },
              ],
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                  importSource: '@emotion/react',
                },
              ],
              '@babel/preset-typescript',
            ],
            plugins: [
              [
                '@emotion/babel-plugin',
                {
                  autoLabel: 'dev-only',
                  labelFormat: 'DEV_[dirname]_[filename]_[local]',
                },
              ],
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html',
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    WebpackEnvironmentPlugin,
  ].filter(Boolean),
};
