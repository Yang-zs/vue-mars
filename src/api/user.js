import request from '@/utils/request'
const login = (data) => {
  return request({
    url: '/users/login',
    method: 'POST',
    data
  })
}

const getPermissionList = () => {
  return request({
    url: '/users/getPermissionList',
    method: 'GET'
  })
}
export default {
  login,
  getPermissionList
}
