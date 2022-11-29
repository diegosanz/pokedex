const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    path: path.join(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@api': path.resolve(__dirname, 'src/api/'),
            '@common': path.resolve(__dirname, 'src/common/'),
          },
        },
        use: 'ts-loader',
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: isProd ? '[hash]' : '[local]__[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
        include: /\.module\.s?[ac]ss$/,
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: /\.module\.s?[ac]ss$/,
      },
    ],
  },
  devtool: isProd ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[hash].css' : '[name].css',
      chunkFilename: isProd ? '[id].[hash].css' : '[id].css',
    }),
  ],
}
