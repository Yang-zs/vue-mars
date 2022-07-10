import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import userList from './modules/userList'
export default createStore({
  getters,
  modules: {
    user,
    userList
  }
})
