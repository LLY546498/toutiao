import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'

// 加载element组件库
// 加载element组件库的样式
import 'element-ui/lib/theme-chalk/index.css'
// 加载全局样式
import './styles/index.less'

// 全局注册element 组件库
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
