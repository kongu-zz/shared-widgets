var dwebpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', ''],
    modules: [
      "node_modules"
    ]
  },
  plugins: [
    new dwebpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new dwebpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify("production") }
    }),
    new dwebpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader", "ts-loader"]
      },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    "react": "React",
    "react-dom": "ReactDOM",
    "moment": "moment"
  }
}