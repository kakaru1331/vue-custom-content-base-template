const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const currentEnv = process.env.NODE_ENV

const getDevToolByMode = (mode) => {
  let devtool

  if (mode === 'development') {
    devtool = 'source-map'
  } else if (mode === 'test') {
    devtool = 'eval'
  } else {
    devtool = ''
  }

  return devtool
}

const getOptimizationByMode = (mode) => {
  let optimization = {}

  if (mode === 'development') {
    optimization = {}
  } else if (mode === 'test') {
    optimization = {}
  } else {
    optimization = {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          }
        })
      ]
    }
  }

  return optimization
}

const devtool = getDevToolByMode(currentEnv)
const optimization = getOptimizationByMode(currentEnv)

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
  outputDir: 'client/dist',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{ from: 'client/public', to: '.' }]),
      new BundleAnalyzerPlugin()
    ],
    optimization: optimization,
    devtool: devtool
  }
}
