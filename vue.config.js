const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'client/src'))
  },
  pages: {
    index: {
      entry: 'client/src/main.js',
      template: 'client/public/index.html'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'client/public')
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
