const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, 'add-on-build/');
const inputPath = path.resolve(__dirname, 'add-on/');
console.log(path.resolve(outputPath, 'icons/'));

module.exports = {
  entry: {
    // 'src/react_devtools': 'react-devtools',
    'src/content_script': './add-on/src/content_script.js',
    'src/background_script': './add-on/src/background_script.js',
    'src/settings/index': './add-on/src/settings/index.js',
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[name]_builded.js',
    // assetModuleFilename: '[name].[ext]',
  },
  mode: 'development',
  // devtool: 'cheap-module-source-map',
  devtool: 'source-map',

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

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          /*using from: 'add-on/icons/* will get unexpected 
          folder structure which concern with the tye of fprom
          detail on 
          https://webpack.js.org/plugins/copy-webpack-plugin/#examples*/
          from: path.resolve(inputPath, 'icons/'),
          to: path.resolve(outputPath, 'icons/'),
        },
      ],
    }),
    // new HtmlWebpackPlugin({
    //   template: 'add-on/src/settings/template.html',
    // }),
  ],
  optimization: {
    splitChunks: {},
  },
};
