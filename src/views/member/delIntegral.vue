<template>
    <div class="memberRecharge">
        <div class="member-card-memu">
            <div class="member-card-box">
                <div class="member-card-title">{{$t('member.hykcjf')}}</div>
                <div class="member-card-content" v-if="fristMemu">
                    <div class="top-icon-box">
                        <div class="imgs">
                            <img src="@/assets/1_1.png" alt="">
                        </div>
                        <div class="line">
                            <div class="line-icon"></div>
                        </div>
                        <div class="imgs">
                            <img src="@/assets/2_0.png" alt="">
                        </div>
                    </div>
                    <div class="icon-name-box">
                        <div class="left">{{$t('member.srhykkh')}}</div>
                        <div class="right">{{$t('member.kchyjf')}}</div>
                    </div>
                    <p class="tips">{{$t('member.srxkcjfkh')}}</p>
                    <div class="member-num">
                        <el-input v-model="memberNum"></el-input>
                    </div>
                    <div class="btn-box">
                        <div class="btn" @click="getMemberInfo">{{$t('member.xyb')}}</div>
                    </div>
                </div>
                <div class="member-card-content" v-else>
                    <div class="top-icon-box">
                        <div class="imgs">
                            <img src="@/assets/1_0.png" alt="">
                        </div>
                        <div class="line">
                            <div class="line-icon"></div>
                        </div>
                        <div class="imgs">
                            <img src="@/assets/2_1.png" alt="">
                        </div>
                    </div>
                    <div class="icon-name-box">
                        <div class="left">{{$t('member.srhykkh')}}</div>
                        <div class="right">{{$t('member.kchyjf')}}</div>
                    </div>
                    <div class="days-box1">
                        <div class="left">
                            {{$t('member.czdhykh')}}：{{userInfo.m_number}}   [{{userInfo.mname}}]
                        </div>
                    </div>
                    <div class="days-box">
                        <div class="left">
                            <p class="member-type-name">{{$t('member.bckcjf')}}</p>
                            <div class="money-box">
                                <el-input v-model="money"></el-input><span class="danwei">{{$t('member.d')}}</span>
                            </div>
                        </div>
                    </div>
                    <p class="member-type-name">{{$t('member.kfsy')}}</p>
                    <div class="remarks">
                        <el-input v-model="remarks"></el-input>
                    </div>
                    <p class="member-type-name">{{$t('member.dqjf')}}：{{userInfo.integral}} {{$t('member.d')}}</p>
                    <div class="btn-box1">
                        <div class="bottom-box">
                            <div class="btn" @click="commit">{{$t('member.tj1')}}</div>
                            <div class="back-btn" @click="fristMemu = true">{{$t('member.fh')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '@/api/member'
    import api1 from '@/api/system'
    export default {
        name: 'memberRecharge',
        data() {
            return {
                memberNum:'',
                money:'',
                remarks:'',
                fristMemu:true,
                options:[{
                    name:'现金',
                },{
                    name:'支付宝',
                },{
                    name:'微信',
                }],
                value:'',
                userInfo:{},
                user:'',
            }
        },
        created(){
            let user = localStorage.getItem('userInfo')
            this.user = JSON.parse(user).data[0].account
            // this.adminLog('打开会员扣除积分页面')
        },
        methods: {
            adminLog(str){
                let obj = {
                    user:this.user,
                    route:window.location.href,
                    content:str
                }
                api1.adminLog(obj).then(res=>{
                    console.log(res)
                })
            },
            getMemberInfo(){
                // if(this.memberNum == ''){
                //     this.$message({
                //         message: this.$t('member.qsrhykh')
                //     });
                //     return false
                // }
                // api.queryMemberByMemberNo({
                //     mumberno:this.memberNum
                // }).then(res=>{
                //     if(res.data.code == 200){
                //         // this.adminLog('会员扣除积分获取会员卡号信息')
                //         this.fristMemu = false
                //         this.userInfo = res.data.data[0]
                //     }else{
                //         // this.adminLog('会员扣除积分获取会员卡号信息失败')
                //         this.$message({
                //             message: res.data.data
                //         });
                //     }
                // }).catch(res=>{
                //     // this.adminLog('会员扣除积分获取会员卡号信息失败')
                // })
                this.fristMemu = false
            },
            commit(){
                let loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                api.cutIntegral({
                    m_number:this.userInfo.m_number,
                    integral:this.money,
                    remarks:this.remarks
                }).then(res=>{
                    loading.close();
                    if(res.data.code == 200){
                        // this.adminLog('会员扣除积分成功')
                        this.$message({
                            message: this.$t('member.kccg'),
                            type: 'success'
                        });
                        this.$router.push({name:'memberList'})
                    }else{
                        // this.adminLog('会员扣除积分失败')
                        this.$message({
                            message: res.data.data,
                            type: 'success'
                        });
                    }
                }).catch(res=>{
                    loading.close();
                    // this.adminLog('会员扣除积分失败')
                    this.$message({
                      message: this.$t('btn.wlcw')
                    });
                })
            }
        }
    }
</script>

<style type="text/css">
    .memberRecharge .member-num>.el-input,.memberRecharge .member-num>.el-input>input{
        height: 50px;
    }
    .memberRecharge .days-box .money-box>.el-select,.memberRecharge .days-box .money-box>.el-select .el-input,.el-select,.memberRecharge .days-box .money-box>.el-select .el-input>input{
        width: 130px;
    }
    .memberRecharge .money-box .el-input,.memberRecharge .money-box .el-input>input{
        width: 200px;
        height: 50px;
    }
    .memberRecharge .remarks .el-input,.memberRecharge .remarks .el-input>input{
        height: 50px;
    }
</style>
<style scoped lang="scss">
    .member-card-memu{
        width: 1400px;
        height: 900px;
        position: fixed;
        top: 50%;
        margin-top: -450px;
        left: 50%;
        margin-left: -700px;
        border-radius: 13px;
        .member-card-box{
            width: 100%;
            height: 100%;
            .member-card-title{
                width: 100%;
                height: 70px;
                background-color: #E1EEFA;
                border-radius: 13px 13px 0px 0px;
                line-height: 70px;
                text-align: center;
                font-size: 25px;
                color: #45474D;
            }
            .member-card-content{
                width: 100%;
                height: 830px;
                background-color: #fff;
                padding: 45px 340px;
                box-sizing: border-box;
                .top-icon-box{
                    width: 100%;
                    height: 80px;
                    display: flex;
                    justify-content: space-between;
                    .imgs{
                        width: 80px;
                        height: 80px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .line{
                        width: 400px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        .line-icon{
                            width: 100%;
                            height: 3px;
                            background-color: #177EE6;
                        }
                    }
                }
                .icon-name-box{
                    width: 100%;
                    height: 70px;
                    position: relative;
                    .left{
                        height: 70px;
                        line-height: 70px;
                        font-size: 24px;
                        color: #177EE6;
                        position: absolute;
                        left: 40px;
                        transform: translate(-50%,0);
                    }
                    .right{
                        height: 70px;
                        line-height: 70px;
                        font-size: 24px;
                        color: #177EE6;
                        position: absolute;
                        right: 40px;
                        transform: translate(50%,0);
                    }
                }
                .tips{
                    font-size: 20px;
                    color: #737F99;
                    text-align: center;
                    line-height: 30px;
                    margin-top: 130px;
                    margin-bottom: 30px;
                }
                .member-num{
                    width: 100%;
                    height: 60px;
                    padding: 0 50px;
                    margin-bottom: 250px;
                    box-sizing: border-box;
                }
                .money-box{
                    width: 100%;
                    height: 50px;
                    font-size: 21px;
                    color: #737F99;
                    line-height: 50px;
                    margin-bottom: 30px;
                    .danwei{
                        font-size: 21px;
                        color: #737F99;
                        line-height: 50px;
                        margin: 0 10px;
                    }
                }
                .remarks{
                    margin-bottom: 30px;
                }
                .btn-box{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    .btn{
                        width: 200px;
                        height: 50px;
                        background-color: #3377FF;
                        border-radius: 7px;
                        font-size: 24px;
                        color: #FFFFFF;
                        text-align: center;
                        line-height: 50px;
                        cursor: pointer;
                    }
                }
                .member-type-name{
                    font-size: 21px;
                    color: #737F99;
                    line-height: 50px;
                }
                .member-type{
                    width: 100%;
                    height: 40px;
                    margin-bottom: 30px;
                    span{
                        line-height: 40px;
                        color: #FF3333;
                        font-size: 21px;
                        margin-left: 10px;
                    }
                }
                .days-box{
                    width: 100%;
                    height: 100px;
                    display: flex;
                    position: relative;
                    margin-bottom: 30px;
                    .success{
                        width: 100%;
                        position: absolute;
                        top: 0;
                        left: 280px;
                        height: 40px;
                        display: inline-block;
                        font-size: 21px;
                        color: #FF3333;
                        line-height: 40px;
                    }
                    .left{
                        width: 450px;
                        height: 100%;
                        line-height: 40px;
                        font-size: 21px;
                        color: #737F99;
                        span{
                            margin-left: 10px;
                        }
                    }
                    .right{
                        font-size: 21px;
                        color: #737F99;
                    }
                }
                .days-box1{
                    width: 100%;
                    height: 40px;
                    display: flex;
                    position: relative;
                    margin: 30px 0;
                    .left{
                        width: 450px;
                        height: 100%;
                        line-height: 40px;
                        font-size: 27px;
                        color: #FF3333;
                    }
                    .right{
                        font-size: 27px;
                        color: #FF3333;
                    }
                }
                .minHeight{
                    height: 40px;
                }
                .btn-box1{
                    width: 100%;
                    height: 50px;
                    margin-top: 100px;
                    display: flex;
                    justify-content: center;
                    .bottom-box{
                        width: 450px;
                        height: 100%;
                        display: flex;
                        justify-content: space-between;
                        .btn{
                            width: 200px;
                            height: 50px;
                            border-radius:7px;
                            color: #fff;
                            background-color: #3377FF;
                            font-size: 24px;
                            text-align: center;
                            line-height: 50px;
                            cursor: pointer;
                        }
                        .back-btn{
                            width: 200px;
                            height: 50px;
                            border-radius:7px;
                            color: #3377FF;
                            background-color: #fff;
                            font-size: 24px;
                            text-align: center;
                            line-height: 50px;
                            border: 1px solid #3377FF;
                            box-sizing: border-box;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
