
import axios from "@/aixos.js"
const Qs = require('qs');
var api = {
    getRechargeRules(val){
        return axios.get("/admin/v1/Member/getRechargeRules",{ params:{...val} })
    },
    rechargeRules(val){
        return axios.post("/admin/v1/Member/rechargeRules",Qs.stringify({ ...val }))
    },
    uprechargeRules(val){
        return axios.post("/admin/v1/Member/uprechargeRules",Qs.stringify({ ...val }))
    },
}
export default api;
