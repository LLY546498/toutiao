// 用户相关模块

import request from '@/utils/request';

// 用户登录

const login = (data) => request({
  method: 'POST',
  url: '/mp/v1_0/authorizations',
  data,
});

export default login;

// 获取用户信息
// export const getUserInfo = () => {

// }
// // 修改用户信息
// export const updateUser = () => {

// }
