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
// 有一个默认的属性有一个配置一个默认属性 basrURL  黑马头条的默认地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 在Vue实例的原型对象添加一个属性$http赋值给axios

// 这里的原型链的方法是一定注意第一次写错了
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
