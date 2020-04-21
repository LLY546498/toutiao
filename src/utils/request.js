// 基于axios封装的请求模块

import axios from 'axios';

// 创建axios实例

const req1 = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/', // 请求的基础路径
});

export default req1;
