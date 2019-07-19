const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/src/index.jsx',
  mode: 'development',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env'],
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'client/dist/'),
    publicPath: '/client/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'client/dist/'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true,
    historyApiFallback: true,
  },
  watchOptions: {
    poll: 1000
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
