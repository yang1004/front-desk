
import axios from "@/aixos.js"
const Qs = require('qs');
var api = {
    todayConsume(val){
        return axios.get("/admin/v1/Integral/todayConsume",{ params:{...val} })
    },
    todayCount(val){
        return axios.get("/admin/v1/Member/todayCount",{ params:{...val} })
    },
    getTodyOrders(val){
        return axios.get("/admin/v1/Order/getTodyOrders",{ params:{...val} })
    },
    getTodyaMount(val){
        return axios.get("/admin/v1/Order/getTodyaMount",{ params:{...val} })
    },
    zhuZhuanTu(val){
        return axios.get("/ljmember/v1/MemberWallet/zhuZhuanTu",{ params:{...val} })
    },
    memberReportTotalRecharge(val){
        return axios.get("/ljmember/v1/MemberWallet/memberReportTotalRecharge",{ params:{...val} })
    },
    memberReportTotalConsumption(val){
        return axios.get("/ljmember/v1/MemberWallet/memberReportTotalConsumption",{ params:{...val} })
    },
    getAllMemberCount(val){
        return axios.get("/ljmember/v1/MemberManage/getAllMemberCount",{ params:{...val} })
    },

    
    zhuzhuangtu(val){
        return axios.get("/api/v1/order/zhuzhuangtu",{ params:{...val} })
    },
    getHotelCount(val){
        return axios.get("/api/v1/order/getHotelCount",{ params:{...val} })
    },
    getOrderCount(val){
        return axios.get("/api/v1/order/getOrderCount",{ params:{...val} })
    },
    getZongChengJiaoMoney(val){
        return axios.get("/api/v1/order/getZongChengJiaoMoney",{ params:{...val} })
    },
}
export default api;
