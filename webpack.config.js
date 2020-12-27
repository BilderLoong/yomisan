const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  entry: {
    'src/react_devtools': 'react-devtools',
    'src/content_script': './add-on/src/content_script.js',
    'src/background_script': './add-on/src/background_script.js',
  },
  output: {
    path: path.resolve(__dirname, 'add-on-build/'),
    publicPath: '/',
    filename: '[name]_builded.js',
    // assetModuleFilename: '[name].[ext]',
  },
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'html',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'icons/[name][ext]',
        },
      },
    ],
  },

  resolve: {
    /*   which is what enables users to 
    leave off the extension when importing */
    extensions: ['*', '.js', '.jsx'],
  },

  devServer: {
    contentBase: './public',
    open: true,
    port: 3000,
    //decide the where the bundled file located
    publicPath: '/dist/',
    watchContentBase: true,
    hot: true,
  },
  plugins: [new CleanWebpackPlugin()],
};
