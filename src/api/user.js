import request from '@/utils/request'
// 登录
const login = (data) => {
  return request({
    url: '/users/login',
    method: 'POST',
    data
  })
}
// 获取菜单数据
const getPermissionList = () => {
  return request({
    url: '/users/getPermissionList',
    method: 'GET'
  })
}
// 获取用户列表
const getUserList = () => {
  return request({
    url: '/users/all/list',
    method: 'GET'
  })
}

// 搜索用户列表
const SearchUserList = (data) => {
  return request({
    url: '/users/list',
    method: 'GET',
    data
  })
}
export default {
  login,
  getPermissionList,
  getUserList,
  SearchUserList
}
