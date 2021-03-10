<template>
    <div class="member">
        <el-card class="box-card">
            <div class="reserve-box">
                <div class="left">
                    <div class="title">预订信息</div>
                    <div class="content">
                        <div class="item">
                            <p class="name">预订酒店</p>
                            <el-select v-model="reserve.hotel" :placeholder="$t('member.qxz')">
                                <el-option
                                    v-for="item in hotel"
                                    :key="item.name"
                                    :label="item.name"
                                    :value="item.name">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="item">
                            <p class="name">预定途径</p>
                            <el-select v-model="reserve.channel" :placeholder="$t('member.qxz')">
                                <el-option
                                    v-for="item in channel"
                                    :key="item.name"
                                    :label="item.name"
                                    :value="item.name">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="item">
                            <p class="name">入住时间</p>
                            <el-date-picker
                                v-model="reserve.check_date"
                                value-format="yyyy-MM-dd hh:mm:ss"
                                type="datetime">
                            </el-date-picker>
                        </div>
                        <div class="item">
                            <p class="name">预定</p>
                            <div class="days">
                                <el-input v-model="reserve.days" type="number"></el-input>
                                <span>晚</span>
                            </div>
                        </div>
                        <div class="item">
                            <p class="name">预离时间</p>
                            <el-date-picker
                                v-model="reserve.leave_date"
                                value-format="yyyy-MM-dd hh:mm:ss"
                                type="datetime">
                            </el-date-picker>
                        </div>
                        <div class="item">
                            <p class="name">入住类型</p>
                            <el-select v-model="reserve.check_type" :placeholder="$t('member.qxz')">
                                <el-option
                                    v-for="item in check_type"
                                    :key="item.name"
                                    :label="item.name"
                                    :value="item.name">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="item">
                            <p class="name">是否付款</p>
                            <el-select v-model="reserve.is_pay" :placeholder="$t('member.qxz')">
                                <el-option
                                    v-for="item in is_pay"
                                    :key="item.name"
                                    :label="item.name"
                                    :value="item.name">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="item">
                            <p class="name">姓名</p>
                            <el-input v-model="reserve.name" type="number"></el-input>
                        </div>
                        <div class="item">
                            <p class="name">手机号码</p>
                            <el-input v-model="reserve.phone" type="number"></el-input>
                        </div>
                        <div class="item">
                            <p class="name">备注</p>
                            <el-input v-model="reserve.remaker" type="number"></el-input>
                        </div>
                        <div class="btn">
                            <el-button>确定</el-button>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="title">可预定房间</div>
                    <div class="content">
                        <div class="room-group">
                            <p class="title1">单间</p>
                            <div class="rooms">
                                <div class="item">
                                    <el-checkbox v-model="checked"></el-checkbox>
                                    <span>8012</span>
                                </div>
                                <div class="item">
                                    <el-checkbox v-model="checked"></el-checkbox>
                                    <span>8012</span>
                                </div>
                                <div class="item">
                                    <el-checkbox v-model="checked"></el-checkbox>
                                    <span>8012</span>
                                </div>
                                <div class="item">
                                    <el-checkbox v-model="checked"></el-checkbox>
                                    <span>8012</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'member',
        data() {
            return {
                reserve:{
                    hotel:'',
                    channel:'',
                    check_date:'',
                    days:'',
                    leave_date:'',
                    check_type:'',
                    is_pay:'',
                    name:'',
                    phone:'',
                    remaker:'',
                },
                hotel:[{name:'7天酒店'},{name:'城市便捷'},{name:'维也纳酒店'}],
                channel:[{name:'电话预定'},{name:'美团预定'},{name:'携程预定'}],
                check_type:[{name:'散客'},{name:'团队'}],
                is_pay:[{name:this.$t('registration.wzf')},{name:this.$t('registration.yzf')}],
            }
        },
        computed:{
            is_pay(){
                return [{
                    name:this.$t('registration.wzf'),
                },{
                    name:this.$t('registration.yzf'),
                }]
            },
        },
        mounted(){
            
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .el-input{
        width: 300px;
    }
    /deep/ .el-checkbox__inner { border: 1px solid #8d98ab; width: 20px; height: 20px;}
</style>
<style>
    .el-card__body{
        width: 100%;
        height: 100%;
    }
</style>
<style scoped lang="scss">
    .member{
        width: 100%;
        padding: 100px 200px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        .box-card{
            width: 1300px;
            display: flex;
            flex-direction: row;
            .reserve-box{
                width: 100%;
                height: 1000px;
                display: flex;
                flex-direction: row;
                .left{
                    width: 400px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #eee;
                    border-radius: 5px;
                    .title{
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        font-size: 18px;
                        padding-left: 20px;
                        box-sizing: border-box;
                        background-color: #eee;
                    }
                    .content{
                        width: 100%;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        .item{
                            width: 100%;
                            margin-bottom: 10px;
                            .name{
                                font-size: 18px;
                                line-height: 30px;
                            }
                            .days{
                                width: 100%;
                                height: 40px;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                .el-input{
                                    width: 200px;
                                    margin-right: 10px;
                                }
                            }
                        }
                        .btn{
                            width: 100%;
                            height: 50px;
                            padding-left: 20px;
                            box-sizing: border-box;
                            display: flex;
                            align-items: center;
                            button{
                                padding-left: 30px;
                                padding-right: 30px;
                            }
                        }
                    }
                }
                .right{
                    width: 0;
                    flex-grow: 1;
                    height: 100%;
                    margin-left: 10px;
                    border: 1px solid #eee;
                    box-sizing: border-box;
                    border-radius: 5px;
                    .title{
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        font-size: 18px;
                        padding-left: 20px;
                        box-sizing: border-box;
                        background-color: #eee;
                    }
                    .content{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding: 20px;
                        box-sizing: border-box;
                        .room-group{
                            width: 100%;
                            margin-bottom: 20px;
                            .title1{
                                font-size: 20px;
                                font-weight: bold;
                                margin-bottom: 10px;
                            }
                            .rooms{
                                width: 100%;
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                .item{
                                    width: 120px;
                                    height: 40px;
                                    display: flex;
                                    align-items: center;
                                    span{
                                        line-height: 40px;
                                        font-size: 18px;
                                        margin-left: 10px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
        }
    }
    // 加未选中的 对号 css
    .unselected .el-checkbox__input .el-checkbox__inner::after {
        // ::after {
        // 对号
        border: 2px solid red;
        // 不覆盖下面的 会 导致对号变形
        box-sizing: content-box;
        content: "";
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 3px;
        position: absolute;
        top: -1px;
        width: 3px;
        // }
    }
    /deep/ .el-checkbox__input .el-checkbox__inner::after {
        // 对号
        border: 2px solid #fff;
        // 不覆盖下面的 会 导致对号变形
        box-sizing: content-box;
        content: "";
        border-left: 0;
        border-top: 0;
        height: 12px;
        left: 5px;
        position: absolute;
        top: 0px;
        width: 4px;
        //
        transform: rotate(45deg) scaleY(1);
    }
</style>
