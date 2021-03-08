
import axios from "@/aixos.js"
var api = {
    getToken(val){
        return axios.get("/admin/v1/Qiniuload/uploadToken",{ params:{...val} })
    },
    delPho(val){
    	return axios.get("/admin/v1/Qiniuload/delete",{ params:{...val} })
    },
    uploadPho(val){
    	return axios.get("/admin/v1/Qiniuload/upImage",{ params:{...val} })
    },
    upVideo(val){
    	return axios.post("/admin/v1/Qiniuload/upVideo",{ params:{...val} })
    },
}
export default api;

