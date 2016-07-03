module.exports = {
  devtool: 'eval-source-map',
  entry: './react_app/app.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  }
};
