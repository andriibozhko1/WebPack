const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devtool: 'source-map',
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