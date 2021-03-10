<template>
    <div class="memberUpgrade">
        <div class="member-card-memu">
            <div class="member-card-box">
                <div class="member-card-title">{{$t('member.hyyq')}}</div>
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
                        <div class="right">{{$t('member.sjhylx')}}</div>
                    </div>
                    <p class="tips">{{$t('member.srxyqhyk')}}</p>
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
                        <div class="right">{{$t('member.sjhylx')}}</div>
                    </div>
                    <p class="memberNumber-tips">{{$t('member.czdhykh')}}：{{userInfo.m_number}}[{{userInfo.register_source}}]</p>
                    <p class="member-type-name">{{$t('member.hylb')}}</p>
                    <div class="member-type">
                        <el-select v-model="value" :placeholder="$t('member.qxz')">
                            <el-option
                                v-for="item in options"
                                :key="item.level"
                                :label="item.level"
                                :value="item.id">
                            </el-option>
                        </el-select>
                        <span>{{$t('member.sdxzhylx')}}</span>
                    </div>
                    <p class="member-type-name">{{$t('member.dqsj')}}</p>
                    <div class="days-box">
                        <div class="left">
                            <el-date-picker
                                v-model="days"
                                type="date"
                                value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </div>
                        <div class="right">
                            {{$t('member.dqyxq')}}：{{userInfo.expires_date}}
                        </div>
                    </div>
                    <div class="days-box">
                        <div class="left">
                            {{$t('member.dqye')}}：{{userInfo.balance}} {{$t('member.y')}}
                        </div>
                        <div class="right">
                            {{$t('member.dqjf')}}：{{userInfo.integral}} {{$t('member.d')}}
                        </div>
                    </div>
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
        name: 'memberUpgrade',
        data() {
            return {
                memberNum:'',
                days:'',
                fristMemu:true,
                options:[],
                value:'',
                userInfo:{},
                user:'',
            }
        },
        created(){
            // let user = localStorage.getItem('userInfo')
            // this.user = JSON.parse(user).data[0].account
            // this.render()
        },
        methods: {
            render(){                
                api.queryMemberType({
                    page:1,
                    listrows:10000
                }).then(res=>{
                    console.log(res)
                    if(res.data.code == 200){
                        this.options = res.data.data.data
                    }else{
                        this.$message({
                            message: res.data.data
                        });
                    }
                })
            },
            getMemberInfo(){
                // if(this.memberNum == ''){
                //     this.$message({
                //         message: this.$t('member.qsrhykh')
                //     });
                //     return false
                // }
                // let _this = this
                // api.queryMemberByMemberNo({
                //     mumberno:this.memberNum
                // }).then(res=>{
                //     console.log(res)
                //     if(res.data.code == 200){                        
                //         this.fristMemu = false
                //         this.userInfo = res.data.data[0]
                //         this.options.forEach(function(value){
                //             if(_this.userInfo.m_level == value.id){
                //                 _this.value = value.id
                //             }
                //         })
                //     }else{                        
                //         this.$message({
                //             message: res.data.data
                //         });
                //     }
                // }).catch(res=>{                    
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
                api.postponeUpgrade({
                    membernumber:this.memberNum,
                    m_level:this.value,
                    expires_date:this.days,
                }).then(res=>{
                    loading.close();
                    if(res.data.code == 200){                        
                        this.$message({
                            message: this.$t('btn.gxcg'),
                            type: 'success'
                        });
                        this.$router.push({name:'memberList'})
                    }else{                        
                        this.$message({
                            message: res.data.data
                        });
                    }
                }).catch(res=>{
                    loading.close();                    
                    this.$message({
                      message: this.$t('btn.wlcw')
                    });
                })
            }
        }
    }
</script>

<style type="text/css">
    .memberUpgrade .member-num>.el-input,.memberUpgrade .member-num>.el-input>input{
        height: 50px;
    }
    .member-type>.el-select,.member-type .el-input,.el-select,.member-type .el-input>input{
        height: 40px;
    }
    .memberUpgrade .days-box .el-input,.memberUpgrade .days-box .el-input>input{
        width: 250px;
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
                .memberNumber-tips{
                    font-size: 21px;
                    color: #737F99;
                    margin-top: 50px;
                    margin-bottom: 60px;
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
                    height: 40px;
                    display: flex;
                    margin-bottom: 30px;
                    .left{
                        width: 470px;
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
