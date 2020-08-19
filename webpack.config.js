const path = require('path');

module.exports = {
  entry: './assets/js/main.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};