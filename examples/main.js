import Vue from 'vue'
import App from './App.vue'

// 引入组件库
import Ddjk from 'ddjk-ui'
// 注册组件库
Vue.use(Ddjk)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
