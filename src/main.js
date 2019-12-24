import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './permission'// 引入导航守卫
// import Element from 'element-ui'
import ElementUI from 'element-ui'
// 引入less出去浏览默认样式
import './style/index.less'
// 引入elementui样式包
import 'element-ui/lib/theme-chalk/index.css'
// 引入axios
import axios from './utils/request'
// 这里很经典哈，实际上他是涌入的axios的第三方包，但是，他是通过axios.interceptors.request.use(callback.callback2) 后的新的包axios,所有接口都带token

// 在Vue实例的原型对象添加一个属性$http赋值给axios
// 直接引入一个components下的index.js
import Component from './components'
// 注册了ElementUI全局注册
Vue.use(ElementUI)
Vue.use(Component)//    1.全局注册了组建的引入，以后需要引用组件只需要在components文件下面的index.js文件引入组件和注册祖册组件就可以了
// 2.这里相当注册是当用了Vue的一个方法=>install

// 这里的原型链的方法是一定注意第一次写错了
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
