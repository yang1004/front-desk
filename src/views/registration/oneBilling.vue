<template>
    <div class="member">
        <el-card class="box-card" v-if="roomSelectMemu">
            <div class="room-select">
                <div class="room-box">
                    <span class="name">{{$t('registration.fjh')}}</span>
                    <el-input v-model="roomNumber"></el-input>
                    <el-button @click="getRoom">{{$t('registration.cx')}}</el-button>
                </div>

                <div class="room-info-box" v-if="roomInfo">
                    <div class="room-info">
                        <div class="info">{{$t('registration.fjh')}}:2201</div>
                        <div class="info">{{$t('registration.fjlx')}}:大床房</div>
                        <div class="info">{{$t('registration.fjjg')}}:299</div>
                    </div>
                    <div class="room-info">
                        <div class="info">{{$t('registration.zdf')}}: {{$t('registration.dj')}}:100/1{{$t('registration.xs')}}({{$t('registration.cs')}}:150/{{$t('registration.xs')}})</div>
                    </div>
                    <div class="room-info input-item">
                        <span class="name">{{$t('member.hykh')}}</span>
                        <el-input v-model="memberNumber"></el-input>
                        <span class="tips">*{{$t('registration.fhybsr')}}</span>
                    </div>
                    <div class="checked-box">
                        <el-checkbox v-model="hour"></el-checkbox>
                        <span>{{$t('registration.zdf')}}</span>
                    </div>
                    <div class="btn-box">
                        <el-button type="primary" @click="billingRoom">{{$t('registration.kf')}}</el-button>
                    </div>
                </div>
            </div>
        </el-card>
        <el-card class="billing-card" v-else>
            <div class="card-box">
                <div class="guest-info-box">
                    <div class="roomBox">
                        <div class="item-box">
                            <div class="item">
                                <span class="name">{{$t('registration.fjh')}}</span>
                                <el-input v-model="billing_data.room_number"></el-input>
                            </div>
                            <div class="item">
                                <span class="name">{{$t('registration.dj')}}</span>
                                <el-input v-model="billing_data.price"></el-input>
                            </div>
                            <div class="item">
                                <span class="name">{{$t('registration.hyjg')}}</span>
                                <el-input v-model="billing_data.discount"></el-input>
                            </div>
                        </div>
                        <div class="item-box">
                            <div class="item">
                                <span class="name">{{$t('registration.fjlx')}}</span>
                                <el-input v-model="billing_data.room_type"></el-input>
                            </div>
                            <div class="item">
                                <span class="name">{{$t('registration.yj')}}</span>
                                <el-input v-model="billing_data.deposit"></el-input>
                            </div>
                            <div class="item">
                                
                            </div>
                        </div>
                        <div class="item-box">
                            <div class="item">
                                
                            </div>
                            <div class="item">
                                <span class="name">{{$t('registration.byjg')}}</span>
                                <el-input v-model="billing_data.monthly" :disabled="!billing_data.isMonthly"></el-input>
                                <div class="checked-box">
                                    <el-checkbox v-model="billing_data.isMonthly"></el-checkbox>
                                    <span>{{$t('registration.sfby')}}</span>
                                </div>
                            </div>
                            <div class="item">
                                
                            </div>
                        </div>
                    </div>
                    <div class="roomBox">
                        <div class="item-box">
                            <div class="item">
                                <span class="name">{{$t('registration.rzsj')}}</span>
                                <el-date-picker
                                    v-model="billing_data.check_date"
                                    value-format="yyyy-MM-dd hh:mm:ss"
                                    type="datetime">
                                </el-date-picker>
                            </div>
                            <div class="item">
                                <span class="name">{{$t('registration.yzts')}}</span>
                                <el-input v-model="billing_data.days" type="number"></el-input>
                            </div>
                            <div class="item">
                                <span class="name">{{$t('registration.ylsj')}}</span>
                                <el-date-picker
                                    v-model="billing_data.leave_date"
                                    value-format="yyyy-MM-dd hh:mm:ss"
                                    type="datetime">
                                </el-date-picker>
                            </div>
                        </div>
                        <div class="item-box">
                            <div class="item">
                                <span class="name">{{$t('registration.rzrs')}}</span>
                                <el-input v-model="billing_data.peoples" type="number"></el-input>
                            </div>
                            <div class="item">
                                <span class="name">{{$t('registration.dj')}}</span>
                                <el-input v-model="billing_data.room_price"></el-input>
                            </div>
                            <div class="item">
                                <span class="name">{{$t('registration.xsy')}}</span>
                                <el-select v-model="billing_data.sale" :placeholder="$t('member.qxz')">
                                    <el-option
                                        v-for="item in sale"
                                        :key="item.name"
                                        :label="item.name"
                                        :value="item.name">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="item-box">
                            <div class="item">
                                <span class="name">{{$t('registration.kfsl')}}</span>
                                <el-input v-model="billing_data.room_num" type="number"></el-input>
                            </div>
                            <div class="item">
                                <span class="name">{{$t('registration.yj')}}</span>
                                <el-input v-model="billing_data.order_yj"></el-input>
                            </div>
                            <div class="item">
                                <span class="name">{{$t('registration.ysfk')}}</span>
                                <el-input v-model="billing_data.room_money"></el-input>
                                <div class="select">
                                    <el-select v-model="billing_data.pay_type" :placeholder="$t('member.qxz')">
                                        <el-option
                                            v-for="item in pay_type"
                                            :key="item.name"
                                            :label="item.name"
                                            :value="item.name">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-box">
                        <div class="guest-left">
                            <div class="guest-item">
                                <div class="item">
                                    <span class="name">{{$t('registration.bklx')}}</span>
                                    <el-select v-model="billing_data.guest_type" :placeholder="$t('member.qxz')">
                                        <el-option
                                            v-for="item in guest_type"
                                            :key="item.name"
                                            :label="item.name"
                                            :value="item.name">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="item">
                                    <span class="name">{{$t('member.zjlx')}}</span>
                                    <el-select v-model="billing_data.card_type" :placeholder="$t('member.qxz')">
                                        <el-option
                                            v-for="item in card_type"
                                            :key="item.name"
                                            :label="item.name"
                                            :value="item.name">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="guest-item">
                                <div class="item">
                                    <span class="name">{{$t('registration.zkxm')}}</span>
                                    <el-input v-model="billing_data.guest_name"></el-input>
                                </div>
                                <div class="item">
                                    <span class="name">{{$t('member.zjhm')}}</span>
                                    <el-input v-model="billing_data.id_card"></el-input>
                                </div>
                            </div>
                            <div class="guest-item">
                                <div class="item">
                                    <span class="name">{{$t('registration.lxdh')}}</span>
                                    <el-input v-model="billing_data.guest_phone"></el-input>
                                </div>
                                <div class="item">
                                    <span class="name">{{$t('registration.zkxb')}}</span>
                                    <el-select v-model="billing_data.guest_sex" :placeholder="$t('member.qxz')">
                                        <el-option
                                            v-for="item in guest_sex"
                                            :key="item.name"
                                            :label="item.name"
                                            :value="item.name">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="guest-item">
                                <div class="item">
                                    <span class="name">{{$t('registration.jjlxr')}}</span>
                                    <el-input v-model="billing_data.emergency"></el-input>
                                </div>
                                <div class="item">
                                    
                                </div>
                            </div>
                            <div class="guest-item long">
                                <div class="item">
                                    <span class="name">{{$t('member.dwmc')}}</span>
                                    <el-input v-model="billing_data.company"></el-input>
                                </div>
                            </div>
                            <div class="guest-item long">
                                <div class="item">
                                    <span class="name">{{$t('member.lxdz')}}</span>
                                    <el-input v-model="billing_data.address"></el-input>
                                </div>
                            </div>
                            <div class="guest-item long">
                                <div class="item">
                                    <span class="name">{{$t('member.bz')}}</span>
                                    <el-input v-model="billing_data.remakers"></el-input>
                                </div>
                            </div>
                            <div class="commit-btn">
                                <el-button type="primary">{{$t('registration.qd')}}</el-button>
                            </div>
                        </div>
                        <div class="right-companion">
                            <p class="title">{{$t('registration.sxrylb')}}</p>
                            <div class="other-table">
                                <el-table
                                    :data="other_peoples"
                                    border
                                    style="width: 100%;height: 100%;">
                                    <el-table-column
                                        prop="name"
                                        :label="$t('registration.xm')">
                                    </el-table-column>
                                    <el-table-column
                                        prop="sex"
                                        :label="$t('member.xb')">
                                    </el-table-column>
                                    <el-table-column
                                        :label="$t('agency.cz')">
                                        <template slot-scope="scope">
                                            <el-button @click="changePeople(scope.row)" type="text" size="small">{{$t('registration.bj')}}</el-button>
                                            <el-button type="text" size="small" @click="delPeople(scope.row)">{{$t('registration.sc')}}</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div class="add-other">
                                <el-button>{{$t('registration.tjsx')}}</el-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="member-box">
                    <div class="member-info">
                        <p>{{$t('registration.bklx')}}:无</p>
                    </div>
                    <div class="member-info">
                        <p>{{$t('registration.ye')}}:无</p>
                    </div>
                    <div class="member-info">
                        <p>{{$t('member.jf')}}:无</p>
                    </div>
                    <div class="member-info">
                        <el-checkbox v-model="deduction"></el-checkbox>
                        <span>{{$t('registration.sfknkk')}}</span>
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
                roomNumber:'',
                memberNumber:'',
                hour:false,
                roomSelectMemu:true,
                roomInfo:false,
                deduction:false,
                billing_data:{
                    room_number:'',
                    price:'',
                    discount:'',
                    room_type:'',
                    deposit:'',
                    monthly:'',
                    isMonthly:false,//是否勾选包月
                    days:'',
                    check_date:'',
                    leave_date:'',
                    peopls:'',
                    room_price:'',
                    sale:'',//销售员
                    room_num:'',
                    order_yj:'',//押金
                    room_money:'',
                    pay_type:'',
                    guest_type:'',
                    card_type:'',
                    guest_name:'',
                    id_card:'',
                    guest_phone:'',
                    guest_sex:'',
                    emergency:'',
                    company:'',
                    address:'',
                    remakers:'',
                },
                sale:[{name:'小王'},{name:'小李'},{name:'小黄'}],
                pay_type:[{name:'现金'},{name:'微信'},{name:'支付宝'}],//支付类型
                guest_type:[{name:'普通会员'},{name:'黄金会员'},{name:'钻石会员'}],//宾客类型
                card_type:[{name:'身份证'},{name:'驾驶证'},{name:'护照'}],//证件类型
                guest_sex:[{name:this.$t('member.nan'),},{name:this.$t('member.nv'),}],
                other_peoples:[{
                    name:'张三',
                    sex:'男'
                },{
                    name:'李四',
                    sex:'男'
                },{
                    name:'王五',
                    sex:'女'
                }],
            }
        },
        computed:{
            guest_sex(){
                return [{
                    name:this.$t('member.nan'),
                },{
                    name:this.$t('member.nv'),
                }]
            },
        },
        mounted(){
            
        },
        methods: {
            billingRoom(){
                this.roomSelectMemu = false
            },
            changePeople(item){
                //编辑随行人员
            },
            delPeople(item){
                //删除随行人员
            },
            getRoom(){
                //搜索房间信息
                this.roomInfo = true
            },
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
            width: 800px;
            padding-left: 20px;
            box-sizing: border-box;
            .room-select{
                width: 800px;
                .room-box{
                    width: 100%;
                    display: flex;
                    height: 70px;
                    flex-direction: row;
                    align-items: center;
                    .name{
                        font-size: 18px;
                        margin-right: 20px;
                    }
                    button{
                        width: 150px;
                        margin-left: 20px;
                    }
                }
            }
            .room-info-box{
                width: 800px;
                margin-top: 40px;
                .room-info{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    .info{
                        font-size: 28px;
                        font-weight: bold;
                        margin-right: 40px;
                    }
                    .name{
                        font-size: 22px;
                        margin-right: 20px;
                    }
                    .tips{
                        font-size: 20px;
                        margin-left: 20px;
                        color: red;
                    }
                }
            }
            .checked-box{
                padding-left: 110px;
                box-sizing: border-box;
                margin-top: 10px;
                span{
                    font-size: 18px;
                }
            }
            .input-item{
                margin-top: 20px;
            }
            .btn-box{
                width: 100%;
                height: 60px;
                padding-left: 110px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                button{
                    width: 200px;
                }
            }
        }
        .billing-card{
            width: 1600px;
            height: 1000px;
            .card-box{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                .guest-info-box{
                    width: 0;
                    flex-grow: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    .roomBox{
                        width: 100%;
                        padding: 20px;
                        box-sizing: border-box;
                        border: 1px solid #eee;
                        border-radius: 5px;
                        margin-bottom: 10px;
                        .item-box{
                            width: 100%;
                            display: flex;
                            height: 55px;
                            .item{
                                width: 0;
                                flex-grow: 1;
                                height: 100%;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                .name{
                                    display: inline-block;
                                    width: 100px;
                                    flex-shrink: 0;
                                    margin-right: 15px;
                                    font-size: 18px;
                                    text-align: right;
                                }
                                .checked-box{
                                    flex-shrink: 0;
                                    margin-left: 20px;
                                }
                                .select{
                                    width: 330px;
                                    margin-left: 10px;
                                }
                            }
                        }
                    }
                    .bottom-box{
                        height: 0;
                        flex-grow: 1;
                        width: 100%;
                        padding: 20px;
                        box-sizing: border-box;
                        border: 1px solid #eee;
                        border-radius: 5px;
                        display: flex;
                        flex-direction: row;
                        .guest-left{
                            width: 0;
                            height: 100%;
                            flex-grow: 1;
                            padding-right: 20px;
                            box-sizing: border-box;
                            .guest-item{
                                width: 100%;
                                height: 60px;
                                display: flex;
                                flex-direction: row;
                                .item{
                                    width: 0;
                                    flex-grow: 1;
                                    height: 100%;
                                    display: flex;
                                    align-items: center;
                                    .name{
                                        display: inline-block;
                                        width: 100px;
                                        flex-shrink: 0;
                                        margin-right: 15px;
                                        font-size: 18px;
                                        text-align: right;
                                    }
                                }
                            }
                            .long .el-input{
                                width: 100%;
                            }
                            .commit-btn{
                                width: 100%;
                                height: 70px;
                                display: flex;
                                align-items: center;
                                padding-left: 115px;
                                box-sizing: border-box;
                                button{
                                    width: 130px;
                                }
                            }
                        }
                        .right-companion{
                            width: 500px;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            .title{
                                width: 100%;
                                text-align: center;
                                font-size: 18px;
                                font-weight: bold;
                                line-height: 40px;
                            }
                            .other-table{
                                width: 100%;
                                height: 0;
                                flex-grow: 1;
                            }
                            .add-other{
                                width: 100%;
                                height: 70px;
                                display: flex;
                                align-items: center;
                                button{
                                    width: 170px;
                                }
                            }
                        }
                    }
                }
                .member-box{
                    width: 250px;
                    height: 100%;
                    padding: 20px;
                    box-sizing: border-box;
                    border: 1px solid #eee;
                    border-radius: 5px;
                    margin-left: 10px;
                    .member-info{
                        font-size: 20px;
                        margin-bottom: 20px;
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
