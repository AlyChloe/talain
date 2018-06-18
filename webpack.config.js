const path = require('path');

module.exports = {
  entry: './js/page.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
       handlebars: 'handlebars/dist/handlebars.min.js'
    }
  }
};
