import user from '@/api/user'
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getUserList({ commit }, userlist) {
      const response = await user.SearchUserList(userlist)
      return response.data
    }
  }
}
