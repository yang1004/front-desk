
import axios from "@/aixos.js"
const Qs = require('qs');
var api = {
    getArtic(val){
        return axios.get("/admin/v1/Article/getArtic",{ params:{...val} })
    },
    getArticType(val){
        return axios.get("/admin/v1/Article/getArticType",{ params:{...val} })
    },
    AddArticleType(val){
        return axios.post("/admin/v1/Article/AddArticleType",Qs.stringify({ ...val }))
    },
    upArticleType(val){
        return axios.post("/admin/v1/Article/upArticleType",Qs.stringify({ ...val }))
    },
    creatArtic(val){
        return axios.post("/admin/v1/Article/creatArtic",Qs.stringify({ ...val }))
    },
    updateArtic(val){
        return axios.post("/admin/v1/Article/updateArtic",Qs.stringify({ ...val }))
    },
    getMessage(val){
        return axios.get("/admin/v1/Article/getMessge",{ params:{...val} })
    },
    addMessge(val){
        return axios.post("/admin/v1/Article/addMessge",Qs.stringify({ ...val }))
    },
    upMessge(val){
        return axios.post("/admin/v1/Article/upMessge",Qs.stringify({ ...val }))
    },
}
export default api;
