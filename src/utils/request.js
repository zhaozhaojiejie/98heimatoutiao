// 对axios进行一个封装
import axios from 'axios'

import router from '../router'

import { Message } from 'element-ui'
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
}, function (error) {
  // debugger 通过这个可以看到每个错误都有对应的错误状态码，可以通过状态码是判断给所有的错误做页面处理
  let status = error.response.status// 获取状态码
  // let configurl = error.request.url
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      // 如果相同的状态码，不同的错误就需要请求地址来做判断
      // 判断条件，请求地址+状态码
      // message = 'resfetoken过期'
      router.push('./login')
      break
    case 401:
      // message = 'token过期'
      router.push('./login')
      break
    case 507:
      // message = 'resfetoken过期'
      message = '服务器错误'

      break
    case 404:
      // message = 'resfetoken过期'
      message = '手机号码错误'

      break

    default:
      break
  }
  Message({ type: 'warning', message })// 状态码提示
})
export default axios
// 在这里直接导出了一个具有新的config文件的axios也就是说在发请求时左右接口都会带token
