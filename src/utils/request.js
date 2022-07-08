import axios from 'axios'
import router from '../router/index'
import loading from './loading'
import { ElMessage } from 'element-plus'
import { getItem, setItem } from './storage'
const TOKEN_INVALID = 'Token认证失败,请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 8000
})
// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const headers = config.headers
    const { token = '' } = getItem('userInfo') || {}
    if (!headers.Authorization) headers.Authorization = 'Bearer ' + token
    loading.open()
    return config
  },
  function (error) {
    // 对请求错误做些什么

    loading.close()
    return Promise.reject(error)
  }
)
// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    loading.close()
    const code = response.data.code
    if (code === 200) {
      return response.data
    } else if (code === 500001) {
      ElMessage.error(TOKEN_INVALID)
      setTimeout(() => {
        router.push('/login')
      }, 1500)
      return Promise.reject(TOKEN_INVALID)
    } else {
      ElMessage.error(NETWORK_ERROR)
      return Promise.reject(NETWORK_ERROR)
    }
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    loading.close()
    return Promise.reject(error)
  }
)

const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
