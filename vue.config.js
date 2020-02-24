const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'client/src/main.js',
      template: 'client/public/index.html'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'client/public')
  }
}
