const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',

  output: {
    filename: 'redux-create-act.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'createAct',
    libraryTarget: 'umd',
  },

  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [
      {
        test: /.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
