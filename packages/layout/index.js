import layout from './src/layout'

layout.install = function(Vue) {
  Vue.component(layout.name, layout)
}

export default layout
