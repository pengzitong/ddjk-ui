# 组件库搭建流程地址参考
# https://www.cnblogs.com/dongwei1/p/13285281.html
# https://blog.csdn.net/mate_ge/article/details/100077130

# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 全局引入
```
import Ddjk from 'ddjk-ui'
Vue.use(Ddjk)
```
### 按需加载需配置babel.config.js 参考如下
```
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    [
      "import", {
      "libraryName": "ddjk-ui",
      "camel2DashComponentName": false,//关闭驼峰自动转链式
      "camel2UnderlineComponentName": false,//关闭蛇形自动转链式
      "style": (name) =>{
        const cssName = name.split('/')[2];
        return `ddjk-ui/lib/${cssName}/style.css`
      }
      }, 'ddjk-ui']
  ]
}
```
