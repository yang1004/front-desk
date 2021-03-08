
import axios from "@/aixos.js"
const Qs = require('qs');
var api = {
    getAdvertType(val){
        return axios.get("/admin/v1/Article/getAdvertType",{ params:{...val} })
    },
    AddAdvertType(val){
        return axios.post("/admin/v1/Article/AddAdvertType",Qs.stringify({ ...val }))
    },
    upadvertType(val){
        return axios.post("/admin/v1/Article/upadvertType",Qs.stringify({ ...val }))
    },
    getAd(val){
        return axios.get("/admin/v1/Article/getAd",{ params:{...val} })
    },
    creatAd(val){
        return axios.post("/admin/v1/Article/creatAd",Qs.stringify({ ...val }))
    },
    updateAd(val){
        return axios.post("/admin/v1/Article/updateAd",Qs.stringify({ ...val }))
    },
    getLunBo(val){
        return axios.get("/admin/v1/Article/getLunBo",{ params:{...val} })
    },
    updateLunBo(val){
        return axios.post("/admin/v1/Article/updateLunBo",Qs.stringify({ ...val }))
    },
    addLunBo(val){
        return axios.post("/admin/v1/Article/addLunBo",Qs.stringify({ ...val }))
    },
}
export default api;
