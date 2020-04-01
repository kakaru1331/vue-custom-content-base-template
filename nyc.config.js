module.exports = {
  instrument: true,
  sourceMap: false,
  reporter: [
    'lcov',
    'text',
    'text-summary'
  ],
  extension: [
    '.js',
    '.vue'
  ],
  exclude: [
    'client/tests/e2e/**',
    'client/dist/**'
  ]
  // all: true
}
