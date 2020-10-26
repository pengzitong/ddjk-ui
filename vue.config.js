// module.exports = {
//   // 修改页面入口等配置
//   pages: {
//     index: {
//       entry: 'examples/main.js',
//       template: 'public/index.html',
//       filename: 'index.html'
//     }
//   },
//   // 内联css
//   css: { extract: false },
//   // packages目录
//   chainWebpack: config => {
//     config.module
//       .rule('js')
//       .include
//       .add('/packages')
//       .end()
//       .use('babel')
//       .loader('babel-loader')
//       .tap(options => {
//         return options
//       })
//   }
//
// }

// const { resolve, getComponentEntries } = require('./build/utils')
// const pub = require('./build/config.pub')
//
// module.exports = {
//   pages: {
//     index: {
//       // page 的入口
//       entry: 'examples/main.js',
//       // 模板来源
//       template: 'public/index.html',
//       // 在 dist/index.html 的输出
//       filename: 'index.html',
//       // 当使用 title 选项时，
//       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//       title: 'ddjk ui lib test',
//       // 在这个页面中包含的块，默认情况下会包含
//       // 提取出来的通用 chunk 和 vendor chunk。
//       chunks: ['chunk-vendors', 'chunk-common', 'index']
//     }
//   },
//   outputDir: resolve('lib'),
//   configureWebpack: {
//     entry: {
//       ...getComponentEntries('packages')
//     },
//     output: {
//       filename: '[name]/index.js',
//       libraryTarget: 'commonjs2',
//       libraryExport: 'default',
//       library: 'demo-vuecli3-ui'
//     },
//     resolve: pub.resolve
//   },
//   css: {
//     sourceMap: true,
//     extract: {
//       filename: '[name]/style.css'
//     }
//   },
//   chainWebpack: config => {
//     config.optimization.delete('splitChunks')
//     config.plugins.delete('copy')
//     config.plugins.delete('preload')
//     config.plugins.delete('prefetch')
//     config.plugins.delete('html')
//     config.plugins.delete('hmr')
//     config.entryPoints.delete('app')
//
//     config.module
//       .rule('fonts')
//       .use('url-loader')
//       .tap(option => {
//         option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
//         return option
//       })
//   }
// }
//

const devConfig = require('./build/config.dev')
const buildConfig = require('./build/config.build')

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig
