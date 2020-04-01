const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'client/src'))

    config.module
      .rule('js')
      .use('istanbul')
      .loader('istanbul-instrumenter-loader')
      .options({ esModules: true })
      .before('babel-loader')
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
  outputDir: 'client/dist',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{ from: 'client/public', to: '.' }]),
      new BundleAnalyzerPlugin()
    ],
    devtool: 'source-map'
  }
}
