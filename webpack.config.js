const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/modules/script.js',
  output: {
    path: path.resolve(__dirname, './js/'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
