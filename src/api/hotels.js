
import axios from "@/aixos.js"
const Qs = require('qs');
var api = {
    getHotels(val){
        return axios.get("/admin/v1/Hotel/queryHotel",{ params:{...val} })
    },
    addHotels(val){
        return axios.post("/admin/v1/Hotel/creatHotel",Qs.stringify({ ...val }))
    },
    deleteHotel(val){
        return axios.post("/api/v1/Hotelinfo/deleteHotel",Qs.stringify({ ...val }))
    },
    findHotel(val){
        return axios.get("/admin/v1/Hotel/getHotelByID",{ params:{...val} })
    },
    updateHotel(val){
        return axios.post("/admin/v1/Hotel/updateHotel",Qs.stringify({ ...val }))
    },
    addRoom(val){
        return axios.post("/admin/v1/hotel/addRoomType",Qs.stringify({ ...val }))
    },
    updateRoom(val){
        return axios.post("/admin/v1/hotel/updateRoomType",Qs.stringify({ ...val }))
    },
    getRoom(val){
        return axios.get("/admin/v1/hotel/getRoomType",{ params:{...val} })
    },
    getIP(val){
        return axios.get("/api/v1/map/geo",{ params:{...val} })
    },
    getHotelTag(val){
        return axios.get("/admin/v1/Hotel/getHotelTag",{ params:{...val} })
    },
    addHotelTag(val){
        return axios.post("/admin/v1/Hotel/addHotelTag",Qs.stringify({ ...val }))
    },
    upHotelTag(val){
        return axios.post("/admin/v1/Hotel/upHotelTag",Qs.stringify({ ...val }))
    },
    getHotelserve(val){
        return axios.get("/admin/v1/Hotel/getHotelserve",{ params:{...val} })
    },
    addHotelserve(val){
        return axios.post("/admin/v1/Hotel/addHotelserve",Qs.stringify({ ...val }))
    },
    upHotelserve(val){
        return axios.post("/admin/v1/Hotel/upHotelserve",Qs.stringify({ ...val }))
    },
    getHotelPolicy(val){
        return axios.get("/admin/v1/Hotel/getHotelPolicy",{ params:{...val} })
    },
    addHotelPolicy(val){
        return axios.post("/admin/v1/Hotel/addHotelPolicy",Qs.stringify({ ...val }))
    },
    upHotelPolicy(val){
        return axios.post("/admin/v1/Hotel/upHotelPolicy",Qs.stringify({ ...val }))
    },
    getHotelImg(val){
        return axios.get("/admin/v1/Hotel/getHotelImg",{ params:{...val} })
    },
    addHotelImg(val){
        return axios.post("/admin/v1/Hotel/addHotelImg",Qs.stringify({ ...val }))
    },
    upHotelImg(val){
        return axios.post("/admin/v1/Hotel/upHotelImg",Qs.stringify({ ...val }))
    },
    addHotelVideo(val){
        return axios.post("/admin/v1/Hotel/addHotelVideo",Qs.stringify({ ...val }))
    },
    getHotelVideo(val){
        return axios.get("/admin/v1/Hotel/getHotelVideo",{ params:{...val} })
    },
    getPoint(val){
        return axios.get("/admin/v1/Transfer/getPoint",{ params:{...val} })
    },
    addPoint(val){
        return axios.post("/admin/v1/Transfer/addPoint",Qs.stringify({ ...val }))
    },
    updatePoint(val){
        return axios.post("/admin/v1/Transfer/updatePoint",Qs.stringify({ ...val }))
    },
    delePoint(val){
        return axios.post("/admin/v1/Transfer/delePoint",Qs.stringify({ ...val }))
    },
    getRoomCountByMou(val){
        return axios.get("/admin/v1/Hotel/getRoomCountByMou",{ params:{...val} })
    },
    setRoomCount(val){
        return axios.post("/admin/v1/Hotel/setRoomCount",Qs.stringify({ ...val }))
    },
    getAllRecom(val){
        return axios.get("/admin/v1/Hotel/getAllRecom",{ params:{...val} })
    },
    delRecom(val){
        return axios.post("/admin/v1/Hotel/delRecom",Qs.stringify({ ...val }))
    },
    updateRecom(val){
        return axios.post("/admin/v1/Hotel/updateRecom",Qs.stringify({ ...val }))
    },
    setRecom(val){
        return axios.post("/admin/v1/Hotel/setRecom",Qs.stringify({ ...val }))
    },
}
export default api;
