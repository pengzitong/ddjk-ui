const utils = require('./utils')

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 'src': utils.resolve('src'),
      '@packages': utils.resolve('packages'),
      '@examples': utils.resolve('examples'),
      'ddjk-ui': utils.resolve('packages/index.js')
    }
  }
}
