import colorPicker from './src/color-picker'

colorPicker.install = function(Vue) {
  Vue.component(colorPicker.name, colorPicker)
}

export default colorPicker
