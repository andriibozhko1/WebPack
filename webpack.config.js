const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },

  devtool: 'source-map',

  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
            test: /\.scss$/,
            use: ["style-loader","css-loader", "sass-loader"]
        }
    ]
  },

   devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
};