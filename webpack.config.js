const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[hash].js',  
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, './src/assets/img'),
    }
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RSS Virtual Keyboard',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    // new ESLintPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]',
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  devServer: {
    static: './dist',
    port: 3002
  },
};
