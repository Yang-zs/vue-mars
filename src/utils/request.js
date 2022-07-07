import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_SERVICE_URL,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    // const authorization = response.headers.authorization
    // if (authorization) {
    //   store.commit('user/SET_TOKEN', authorization)
    // }
    if (response.data.code === 200) {
      return response.data.data
    }
    // if (response.data.code === 401) {
    //   store.commit('SET_TOKEN', '')
    //   store.commit('SET_USER_INFO', '')
    //   store.commit('SET_NAV', '')
    //   router.push('/login')
    // }
    // TODO 401 token 过期处理
    console.log(response, '响应拦截')
  },
  (error) => {
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
