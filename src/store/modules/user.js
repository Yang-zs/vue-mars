import UserApi from '../../api/user'
import { setItem, getItem, removeItem } from '../../utils/storage'
const TOKEN_KEY = 'token'
export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN_KEY) || '',
    userInfo: getItem('userInfo') || [],
    menuList: getItem('menuList') || []
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    },
    SET_MENU_LIST(state, menuList) {
      state.menuList = menuList
      setItem('menuList', menuList)
    }
  },
  actions: {
    async handlerLogin({ commit }, payload) {
      try {
        const { code, data, msg } = await UserApi.login(payload)
        if (code !== 200) return

        commit('SET_TOKEN', data.token)
        commit('SET_USER_INFO', data)
        return code
      } catch (error) {
        console.log(error)
      }
    },
    async getMenuList({ commit }) {
      const { data } = await UserApi.getPermissionList()
      commit('SET_MENU_LIST', data.menuList)
      console.log(data, '菜单数据')
    },
    handlerLoginOut({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_USER_INFO', [])
      removeItem('token')
      removeItem('userInfo')
    }
  }
}
