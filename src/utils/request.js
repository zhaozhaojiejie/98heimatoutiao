// 对axios进行一个封装
import axios from 'axios'
// 有一个默认的属性有一个配置一个默认属性 basrURL  黑马头条的默认地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截器

axios.interceptors.request.use(function (config) {
// 请求成功
  let token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token} `
  // 返回新的config 作为新的请求选项去进行请求
  return config // 所有请求都有接口都会有token
}, function () {
// 请求失败

})

// 相应拦截器
axios.interceptors.response.use(function (response) {
  // 这里需要组一个判断，如果有相应就取响应信息的data数据，结构一个response.data.data，否则返回一个空对象，如果一个空对象的话就不会报错，如果没有返回空对象就会报错
  return response.data ? response.data : {}
}, function () {

})
export default axios
// 在这里直接导出了一个具有新的config文件的axios也就是说在发请求时左右接口都会带token
