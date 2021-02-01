/**
 * 封装 axios 请求模块
 */

import axios from 'axios'

const request = axios.create({
  baseURL: 'http://www.liulongbin.top:3005/' // 基础路径
})

export default request
