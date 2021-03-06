const path = require('path');

const { NODE_ENV } = process.env;

if (NODE_ENV !== 'production') {
  throw new Error(`
  NODE_ENV is not in production!

  NODE_ENV === ${NODE_ENV}
  `);
}

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: outputPath,
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|dist)/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  externals: /(^react|prop-types)/i
};
