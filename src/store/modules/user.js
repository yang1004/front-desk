import api from '@/api/user'
import Cookies from 'js-cookie'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  jurisdiction: {},
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_JURISDICTION: (state, jurisdiction) => {
    state.jurisdiction = jurisdiction
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password,code } = userInfo
    return new Promise((resolve, reject) => {
      // api.login({ account: username.trim(), password: password ,verify: code }).then(response => {
        let response = {
          code: 20000,
          data: {token: "admin-token"}
        }
        // if(response.data.message == 'success'){
          // commit('SET_JURISDICTION', response.data.data)
          localStorage.setItem('userInfo',JSON.stringify(response.data),{expires:1})
          Cookies.set('token',response.data.token)
          const data = {token: "admin-token"}
          commit('SET_TOKEN', response.data.token)
          setToken(response.data.token)
          resolve()
        // }else{
        //   alert(response.data.data.info)
        //   reject(response.data.data.info)
        // }
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      const data = {
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        introduction: "I am a super administrator",
        name: "Super Admin",
        roles: ["admin"]
      }
      commit('SET_ROLES', 'roles')
      commit('SET_NAME', 'name')
      commit('SET_AVATAR', "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif")
      commit('SET_INTRODUCTION', 'introduction')
      resolve(data)
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        localStorage.removeItem('userInfo')
        Cookies.remove('token')
        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
