import request from '@/utils/request'
import axios from "@/aixos.js"

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}


const Qs = require('qs');
var api = {
    getAllRote(val){
      return axios.get("/admin/v1/User/getAllRote",{ params:{...val} })
    },
    login(val){
        return axios.post("/admin/v1/User/login",Qs.stringify({ ...val }))
    },
    addRote(val){
        return axios.post("/admin/v1/User/addRote",Qs.stringify({ ...val }))
    },
    updateRote(val){
        return axios.post("/admin/v1/User/updateRote",Qs.stringify({ ...val }))
    },
    getAllPower(val){
      return axios.get("/admin/v1/User/getAllPower",{ params:{...val} })
    },
    addPower(val){
        return axios.post("/admin/v1/User/addPower",Qs.stringify({ ...val }))
    },
    updatePower(val){
        return axios.post("/admin/v1/User/updatePower",Qs.stringify({ ...val }))
    },
    getAllUser(val){
      return axios.get("/admin/v1/User/getAllUser",{ params:{...val} })
    },
    register(val){
        return axios.post("/admin/v1/User/register",Qs.stringify({ ...val }))
    },
    updateUser(val){
        return axios.post("/admin/v1/User/updateUser",Qs.stringify({ ...val }))
    },
}
export default api;