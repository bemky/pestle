module.exports = {
  entry: './docs-src/assets/javascripts/site.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  output: {
    path: __dirname + '/.tmp/assets',
    filename: 'assets/javascripts/[name].js',
  },
};