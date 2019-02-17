const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
   devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
};