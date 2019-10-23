const path = require ('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const webpack = require ('webpack');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'app.js',
    path: path.resolve (__dirname, './public/'),
  },
  plugins: [
    new MiniCssExtractPlugin ({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'app.css',
    }),
    new webpack.DefinePlugin ({
      'process.env.NODE_ENV': JSON.stringify ('production'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: ['react', 'stage-0', 'es2015'],
          plugins: [
            'transform-class-properties',
            'transform-decorators-legacy',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
  },
  devServer: {
    contentBase: './public/',
    watchContentBase: true,
  },
};
