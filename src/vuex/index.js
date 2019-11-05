import Vue from 'vue'
import Vuex from 'vuex'
// import util from './../util/util'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userData: '',
    menuData: '',
    token: ''
  },
  actions: {
    updateLogin: (context, payload) => {
      context.commit('login', payload)
    },
    updateUser: (context, payload) => {
      context.commit('user', payload)
    },
    updateMenu: (context, payload) => {
      context.commit('menu', payload)
    }
  },
  mutations: {
    login(state, data) {
      state.isLogin = true
      state.userData = data.user
      state.menuData = data.menu
      localStorage.setItem('isLogin', true)
      localStorage.setItem('userData', JSON.stringify(data.user))
      localStorage.setItem('menuData', JSON.stringify(data.menu))
    },
    user(state, data) {
      state.userData = data
      localStorage.setItem('userData', JSON.stringify(data))
    },
    menu(state, data) {
      state.menuData = data
      localStorage.setItem('menuData', JSON.stringify(data))
    },
    goOut(state) {
      state.isLogin = false
      state.userData = ''
      state.menuData = []
      localStorage.removeItem('isLogin')
      localStorage.removeItem('userData')
      localStorage.removeItem('menuData')
      util.delCookie('token')
    },
    set_token(state, token) {
      state.token = token
      sessionStorage.token = token
      util.setCookie('token', token, 7)
    },
    del_token(state) {
      state.token = ''
      sessionStorage.removeItem('token')
      util.delCookie('token')
    }
  },
  getters: {
    getLogin(state) {
      if (!state.isLogin) {
        state.isLogin = localStorage.getItem('isLogin')
      }
      return state.isLogin;
    },
    getUser(state) {
      if (!state.userData) {
        state.userData = JSON.parse(localStorage.getItem('userData'))
      }
      return state.userData;
    },
    getMenu(state) {
      if (!state.menuData) {
        state.menuData = JSON.parse(localStorage.getItem('menuData'))
      }
      return state.menuData;
    }
  }
})
