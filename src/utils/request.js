// 封装axios
import axios from 'axios'
const request = axios.create({
  // 基地址
  baseURL: 'http://ttapi.research.itcast.cn'
})

export default request
