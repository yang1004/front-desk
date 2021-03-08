
import axios from "@/aixos.js"
const Qs = require('qs');
var api = {
    getVersion(val){
        return axios.get("/api/Version/getVersion",{ params:{...val} })
    },
    AddVersion(val){
    	return axios.post("/api/Version/AddVersion", Qs.stringify({ ...val }))
    },
    updateVersion(val){
    	return axios.post("/api/Version/updateVersion", Qs.stringify({ ...val }))
    },
    getApp(val){
    	return axios.get("/admin/v1/Appmanage/getApp", { params:{...val} })
    },
    updateApp(val){
    	return axios.post("/admin/v1/Appmanage/updateApp", Qs.stringify({ ...val }))
    },
    addApp(val){
    	return axios.post("/admin/v1/Appmanage/addApp", Qs.stringify({ ...val }))
    },
    adminLog(val){
        return axios.post("/admin/v1/SysLog/adminLog", Qs.stringify({ ...val }))
    },
    getlanguage(val){
        return axios.get("/api/v1/Resource/getlanguage", { params:{...val} })
    },
}
export default api;
