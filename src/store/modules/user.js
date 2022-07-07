import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
const TOKEN_KEY = 'token'
export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN_KEY) || ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      return response
    }
  }
}
