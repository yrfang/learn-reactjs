const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader?modules"
    },
    {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'scss', 'css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
