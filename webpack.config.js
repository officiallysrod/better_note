module.exports = {
  devtool: 'eval-source-map',
  entry: './react_app/app.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.eot$|\.svg$|\.ttf$|\.woff2?/,
        loader: 'url?limit=50000'
      }
    ]
  }
};
