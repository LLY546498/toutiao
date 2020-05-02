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
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile',
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTk4NjkzODIsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZX0.wd_Tue58TYToBSN3HCgvXDmy0AYMArcYKUtynrkL1Hs'
    }
  })
}
// // 修改用户信息
// export const updateUser = () => {

// }
