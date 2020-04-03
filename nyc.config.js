module.exports = {
  extension: [
    '.js',
    '.vue'
  ],
  exclude: [
    '**/tests/e2e/**',
    '**/dist/**'
  ],
  reporter: [
    'lcov',
    'text',
    'text-summary'
  ]
}
