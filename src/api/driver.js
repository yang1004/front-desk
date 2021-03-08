
import axios from "@/aixos.js"
const Qs = require('qs');
var api = {
    getDriver(val){
        return axios.get("/admin/v1/Driver/getDriver",{ params:{...val} })
    },
    addDriver(val){
    	return axios.post("/admin/v1/Driver/addDriver", Qs.stringify({ ...val }))
    },
    findDriver(val){
        return axios.get("/admin/v1/Driver/getDriverByID",{ params:{...val} })
    },
    updateDriver(val){
        return axios.post("/admin/v1/Driver/updateDriver", Qs.stringify({ ...val }))
    },
    getPrice(val){
        return axios.get("/admin/v1/Carprice/getPrice",{ params:{...val} })
    },
    addPrice(val){
        return axios.post("/admin/v1/Carprice/addPrice", Qs.stringify({ ...val }))
    },
    updatePrice(val){
        return axios.post("/admin/v1/Carprice/updatePrice", Qs.stringify({ ...val }))
    },
    delePrice(val){
        return axios.post("/admin/v1/Carprice/delePrice", Qs.stringify({ ...val }))
    },
    getDriverByTid(val){
        return axios.post("/admin/v1/Driver/getDriverByTid ", Qs.stringify({ ...val }))
    },
}
export default api;
