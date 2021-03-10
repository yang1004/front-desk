<template>
    <div class="member">
        <el-card class="box-card" v-if="roomSelectMemu">
            <div class="room-select">
                <div class="room-list">
                    <div class="room-group">
                        <p class="title">单间</p>
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
                <div class="bottom-box">
                    <div class="name">{{$t('member.hykh')}}</div>
                    <el-input type="text" v-model="memberNumber"></el-input>
                    <el-button @click="billingRoom">{{$t('member.xyb')}}</el-button>
                </div>
            </div>
        </el-card>
        <el-card class="billing-card" v-else>
            <div class="card-box">
                <div class="guest-info-box">
                    <div class="roomList">
                        <el-table
                            :data="room_list"
                            border
                            style="width: 100%;height: 100%;">
                            <el-table-column
                                prop="type"
                                :label="$t('registration.fjlx')">
                            </el-table-column>
                            <el-table-column
                                prop="room_num"
                                :label="$t('registration.fjh')">
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                :label="$t('registration.dj')">
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                :label="$t('registration.yj')">
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                :label="$t('registration.hylx')">
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                :label="$t('registration.zklx')">
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                :label="$t('registration.zk')">
                            </el-table-column>
                            <el-table-column
                                :label="$t('agency.cz')">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="delRoom(scope.row)">{{$t('registration.sc')}}</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
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
                room_list:[{
                    type:'单间',
                    room_num:'8012',
                    price:'100',
                },{
                    type:'单间',
                    room_num:'8012',
                    price:'100',
                },{
                    type:'单间',
                    room_num:'8012',
                    price:'100',
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
            delRoom(item){
                //删除房间
            },
        }
    }
</script>

<style scoped>
    .el-input{
        width: 300px;
    }
    /deep/ .el-checkbox__inner { border: 1px solid #8d98ab; width: 20px; height: 20px;}
    .el-table__body-wrapper{
        overflow-y: auto;
    }
    /deep/ .el-table__body-wrapper{
        height: 0;
        flex-grow: 1;
        overflow-y: auto;
    }
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
            width: 1200px;
            box-sizing: border-box;
            .room-select{
                width: 100%;
                display: flex;
                flex-direction: column;
                .room-list{
                    width: 100%;
                    min-height: 500px;
                    border: 1px solid #eee;
                    border-radius: 5px;
                    padding: 20px;
                    box-sizing: border-box;
                    .room-group{
                        width: 100%;
                        margin-bottom: 20px;
                        .title{
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
                .bottom-box{
                    width: 100%;
                    margin-top: 10px;
                    padding: 20px;
                    box-sizing: border-box;
                    border: 1px solid #eee;
                    border-radius: 5px;
                    display: flex;
                    height: 100px;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    .name{
                        font-size: 20px;
                        margin-right: 20px;
                    }
                    button{
                        width: 130px;
                        margin-left: 20px;
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
                    .roomList{
                        width: 100%;
                        height: 200px;
                        border-radius: 5px;
                        overflow: hidden;
                        margin-bottom: 10px;
                        .el-table{
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                        }
                    }
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
