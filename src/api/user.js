// 用户相关模块

import request from '@/utils/request'

// 用户登录

export const login = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    data
  })
}
// export default login

// 获取用户信息
export const getUserProfile = () => {
  // const user = JSON.parse(window.localStorage.getItem('user'))
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile'
    // headers: {
    //   Authorization: `Bearer ${user.token}`
    // }
  })
}
// // 修改用户信息
// export const updateUser = () => {

// }
