import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Element from 'element-ui'
import ElementUI from 'element-ui'
// 引入less出去浏览默认样式
import './style/index.less'
// 引入elementui样式包
import 'element-ui/lib/theme-chalk/index.css'
// 引入axios
import axios from 'axios'
// 注册了ElementUI全局注册
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
