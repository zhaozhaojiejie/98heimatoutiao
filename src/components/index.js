import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
// 引入面包屑
import BreadCrumb from './common/bread-crumb'
export default {
  install (Vue) {
    // 错误注意点：1.这里Vue.componet()是一个方法，传参进去2.install是一个函数，里边的每一项是行数题，不需要加符号隔开
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
    //  全局注册面包屑
    Vue.component('bread-crumb', BreadCrumb)
  }
}
