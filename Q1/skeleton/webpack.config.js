const libpath = require('path');
const rimraf = require('rimraf');

function path(path) {
  return libpath.join(__dirname, path);
}

rimraf.sync(path('public/static/app.js'));

module.exports = {
  target: 'web',
  entry: path('src/index.js'),
  output: {
    path: path('public/static'),
    pathinfo: true,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        include: path('src'),
        test: /\.js$/,
        enforce: 'pre',
        use: ['eslint-loader']
      }
    ]
  }
};
