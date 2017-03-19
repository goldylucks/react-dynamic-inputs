import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const ENV = process.env.NODE_ENV || 'development'
const isProd = process.env.NODE_ENV === 'production'

export default {
  entry: [
    'react-hot-loader/patch',
    './src',
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.ejs') }),
  ],
  devServer: {
    port: 8000,
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
  },
}
