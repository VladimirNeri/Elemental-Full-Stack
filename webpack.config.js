/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const HtmlWebPackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-undef
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  favicon: './public/favicon.ico',
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    // NEW
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }, // NEW Ends
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.md$/i,
        use: 'raw-loader',
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            }
          },
        ],
      }
    ],
  },
};