
import axios from "@/aixos.js"
const Qs = require('qs');
var api = {
    queryMember(val){
        return axios.get("/ljmember/v1/MemberManage/queryMember",{ params:{...val} })
    },
    queryMemberType(val){
        return axios.get("/ljmember/v1/MemberGrade/queryMember",{ params:{...val} })
    },
    queryRechargeRules(val){
        return axios.get("/ljmember/v1/MemberWallet/queryRechargeRules",{ params:{...val} })
    },
    addMember(val){
        return axios.post("/ljmember/v1/MemberManage/add",Qs.stringify({ ...val }))
    },
    updateMember(val){
        return axios.post("/ljmember/v1/MemberManage/update",Qs.stringify({ ...val }))
    },
    frozenMember(val){
        return axios.post("/ljmember/v1/MemberManage/frozen",Qs.stringify({ ...val }))
    },
    deleteMember(val){
        return axios.post("/ljmember/v1/MemberManage/delete",Qs.stringify({ ...val }))
    },
    queryMemberByID(val){
        return axios.get("/ljmember/v1/MemberManage/queryMemberByID",{ params:{...val} })
    },
    queryMemberByMemberNo(val){
        return axios.get("/ljmember/v1/MemberManage/queryMemberByMemberNo",{ params:{...val} })
    },
    postponeUpgrade(val){
        return axios.post("/ljmember/v1/MemberManage/postponeUpgrade",Qs.stringify({ ...val }))
    },
    changeMemberNumber(val){
        return axios.post("/ljmember/v1/MemberManage/changeMemberNumber",Qs.stringify({ ...val }))
    },
    memberRecharge(val){
        return axios.post("/ljmember/v1/MemberWallet/memberRecharge",Qs.stringify({ ...val }))
    },
    memberDeduction(val){
        return axios.post("/ljmember/v1/MemberWallet/memberDeduction",Qs.stringify({ ...val }))
    },
    addIntegral(val){
        return axios.post("/ljmember/v1/MemberIntegral/addIntegral",Qs.stringify({ ...val }))
    },
    cutIntegral(val){
        return axios.post("/ljmember/v1/MemberIntegral/cutIntegral",Qs.stringify({ ...val }))
    },
    addMemberType(val){
        return axios.post("/ljmember/v1/MemberGrade/add",Qs.stringify({ ...val }))
    },
    updateMemberType(val){
        return axios.post("/ljmember/v1/MemberGrade/update",Qs.stringify({ ...val }))
    },
    deleteMemberType(val){
        return axios.post("/ljmember/v1/MemberGrade/delete",Qs.stringify({ ...val }))
    },
    addRechargeRules(val){
        return axios.post("/ljmember/v1/MemberWallet/addRechargeRules",Qs.stringify({ ...val }))
    },
    deleteRechargeRules(val){
        return axios.post("/ljmember/v1/MemberWallet/deleteRechargeRules",Qs.stringify({ ...val }))
    },
    queryRechargeRulesByMid(val){
        return axios.get("/ljmember/v1/MemberWallet/queryRechargeRulesByMid",{ params:{...val} })
    },
    getAllChongXiaoFeiJiLu(val){
        return axios.get("/ljmember/v1/MemberManage/getAllChongXiaoFeiJiLu",{ params:{...val} })
    },
    queryRegisterSource(val){
        return axios.get("/ljmember/v1/MemberManage/queryRegisterSource",{ params:{...val} })
    },
    addRegisterSource(val){
        return axios.post("/ljmember/v1/MemberManage/addRegisterSource",Qs.stringify({ ...val }))
    },
    updateRegisterSource(val){
        return axios.post("/ljmember/v1/MemberManage/updateRegisterSource",Qs.stringify({ ...val }))
    },
    deleteRegisterSource(val){
        return axios.post("/ljmember/v1/MemberManage/deleteRegisterSource",Qs.stringify({ ...val }))
    },
    getMemberConsumerByNumber(val){
        return axios.post("/ljmember/v1/MemberWallet/getMemberConsumerByNumber",Qs.stringify({ ...val }))
    },
}
export default api;
