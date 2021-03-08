
import axios from "@/aixos.js"
const Qs = require('qs');
var api = {
    getOrder(val){
        return axios.get("/admin/v1/Order/getOrders",{ params:{...val} })
    },
    getRefundOrders(val){
        return axios.get("/admin/v1/Order/getRefundOrders",{ params:{...val} })
    },
    getCancelOrders(val){
        return axios.get("/admin/v1/Order/getCancelOrders",{ params:{...val} })
    },
    examineOrder(val){//审核订单
        return axios.post("/admin/v1/Order/examineOrder",Qs.stringify({ ...val }))
    },
    deleteOrder(val){
        return axios.post("/api/v1/Order/deleteOrder",Qs.stringify({ ...val }))
    },
    getDriverOrders(val){
        return axios.get("/admin/v1/Order/getDriverOrders",{ params:{...val} })
    },
    getOrderByNumber(val){
        return axios.get("/admin/v1/Order/getOrderByNumber",{ params:{...val} })
    },
    getNewOrders(val){
        return axios.get("/admin/v1/Order/getNewOrders",{ params:{...val} })
    },
    moreTermOrder(val){
        return axios.get("/admin/v1/Order/moreTermOrder",{ params:{...val} })
    },
    updateOrder(val){
        return axios.post("/admin/v1/Order/updateOrder",Qs.stringify({ ...val }))
    },
    refund(val){
        return axios.post("/admin/v1/Order/refund",Qs.stringify({ ...val }))
    },
    cancelRefund(val){
        return axios.post("/admin/v1/Order/cancelRefund",Qs.stringify({ ...val }))
    },
    dispatch(val){
        return axios.post("/admin/v1/Order/dispatch",Qs.stringify({ ...val }))
    },
    getUserAll(val){
        return axios.get("/admin/v1/Withdraw/getUserAll",{ params:{...val} })
    },
    getUserByOrder(val){
        return axios.get("/admin/v1/Withdraw/getUserByOrder",{ params:{...val} })
    },
    getDriverAll(val){
        return axios.get("/admin/v1/Withdraw/getDriverAll",{ params:{...val} })
    },
    getDriverByOrder(val){
        return axios.get("/admin/v1/Withdraw/getDriverByOrder",{ params:{...val} })
    },
    checkDriverWithdraw(val){
        return axios.post("/admin/v1/Withdraw/checkDriverWithdraw",Qs.stringify({ ...val }))
    },
    checkUserWithdraw(val){
        return axios.post("/admin/v1/Withdraw/checkUserWithdraw",Qs.stringify({ ...val }))
    },
    getDriverOrderByID(val){
        return axios.get("/admin/v1/Order/getDriverOrderByID",{ params:{...val} })
    },
    getDriverOrderByOrder(val){
        return axios.get("/admin/v1/Order/getDriverOrderByOrder",{ params:{...val} })
    },
}
export default api;
