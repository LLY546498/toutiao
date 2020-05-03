// 基于axios封装的请求模块

import axios from 'axios'

// 创建axios实例

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径
})

export default request

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    const user = JSON.parse(window.localStorage.getItem('user'))
    // 如果有登录用户信息， 则统一设置 token
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    // 当这里 return config 之后请求在会真正的发出去
    return config
  },
  // 请求失败经过这里
  function (error) {
    return Promise.reject(error)
  })
