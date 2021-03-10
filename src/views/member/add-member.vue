<template>
    <div class="member">
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.hykh')}}</span>
                <el-input v-model="member.number"></el-input>
                <el-button>{{$t('member.hqkh')}}</el-button>
            </div>
            <div class="item">
                <span class="name">{{$t('member.hylb')}}</span>
                <el-select v-model="member.type" :placeholder="$t('member.qxz')">
                    <el-option
                        v-for="item in options"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.hyxm')}}</span>
                <el-input v-model="member.name"></el-input>
            </div>
            <div class="item">
                <span class="name">{{$t('member.jd')}}</span>
                <el-select v-model="member.hotel" :placeholder="$t('member.qxz')">
                    <el-option
                        v-for="item in options1"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.mm')}}</span>
                <el-input v-model="member.psd"></el-input>
            </div>
            <div class="item">
                <span class="name">{{$t('member.xb')}}</span>
                <el-select v-model="member.sex" :placeholder="$t('member.qxz')">
                    <el-option
                        v-for="item in sex"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.sr')}}</span>
                <el-date-picker
                    v-model="member.birthday"
                    value-format="yyyy-MM-dd"
                    type="date">
                </el-date-picker>
            </div>
            <div class="item">
                <span class="name">{{$t('member.sjhm')}}</span>
                <el-input v-model="member.phone"></el-input>
            </div>
        </div>
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.zjlx')}}</span>
                <el-select v-model="member.card_type" :placeholder="$t('member.qxz')">
                    <el-option
                        v-for="item in card_type"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                </el-select>
            </div>
            <div class="item">
                <span class="name">{{$t('member.dwmc')}}</span>
                <el-input v-model="member.company"></el-input>
            </div>
        </div>
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.zjhm')}}</span>
                <el-input v-model="member.company"></el-input>
            </div>
            <div class="item">
                <span class="name">{{$t('member.dhhm')}}</span>
                <el-input v-model="member.tell"></el-input>
            </div>
        </div>
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.fkrq')}}</span>
                <el-date-picker
                    v-model="member.start_date"
                    value-format="yyyy-MM-dd"
                    type="date">
                </el-date-picker>
            </div>
            <div class="item">
                <span class="name">{{$t('member.lxdz')}}</span>
                <el-input v-model="member.address"></el-input>
            </div>
        </div>
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.dqsj')}}</span>
                <el-date-picker
                    v-model="member.end_date"
                    value-format="yyyy-MM-dd"
                    type="date">
                </el-date-picker>
            </div>
            <div class="item">
                <span class="name">{{$t('member.xqah')}}</span>
                <el-input v-model="member.interest"></el-input>
            </div>
        </div>
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.je')}}</span>
                <el-input v-model="member.money" type="number"></el-input>
                <div class="select">
                    <el-select v-model="member.pay_type" :placeholder="$t('member.qxz')">
                        <el-option
                            v-for="item in pay_type"
                            :key="item.name"
                            :label="item.name"
                            :value="item.name">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="item">
                <span class="name">{{$t('member.czy')}}</span>
                <el-input v-model="member.operator"></el-input>
            </div>
        </div>
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.jf')}}</span>
                <el-input v-model="member.integral" type="number"></el-input>
            </div>
        </div>
        <div class="item-box">
            <div class="item">
                <span class="name">{{$t('member.bz')}}</span>
                <div class="textarea">
                    <el-input
                        type="textarea"
                        :rows="3"
                        v-model="member.remaker">
                    </el-input>
                </div>
            </div>
        </div>
        <div class="bottom-box">
            <el-button type="primary" @click="commit">{{$t('member.bc')}}</el-button>
            <el-button>{{$t('member.qk')}}</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'member',
        data() {
            return {
                member:{
                    number:'',
                    type:'',
                    name:'',
                    hotel:'',
                    sex:'',
                    birthday:'',
                    phone:'',
                    card_type:'',
                    company:'',
                    tell:'',
                    start_date:'',//发卡日期
                    end_date:'',//到期日期
                    address:'',
                    interest:'',//兴趣爱好
                    money:'',
                    pay_type:'',//支付类型
                    operator:'',
                    remaker:'',
                },
                options:[{name:'普通会员'},{name:'黄金会员'},{name:'白金会员'}],
                options1:[{name:'7天酒店'},{name:'城市便捷'}],
                sex:[{name:this.$t('member.nan'),},{name:this.$t('member.nv'),}],
                card_type:[{name:'身份证'},{name:'驾驶证'},{name:'护照'}],//证件类型
                pay_type:[{name:'现金'},{name:'微信'},{name:'支付宝'}],//支付类型
            }
        },
        computed:{
            sex(){
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
            commit(){
                //提交会员卡办理
                console.log(this.member)
                if(this.member.start_date > this.member.end_date){
                    this.$message(this.$t('member.dqdyfx'))
                    return false
                }
            },
        }
    }
</script>

<style scoped>
    .el-input{
        width: 300px;
    }
    textarea{
        resize: none;
    }
</style>
<style scoped lang="scss">
    .member{
        width: 100%;
        padding: 100px 300px;
        box-sizing: border-box;
        .item-box{
            width: 100%;
            display: flex;
            flex-direction: row;
            height: 70px;
            .item{
                width: 0;
                flex-grow: 1;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                span{
                    display: inline-block;
                    width: 110px;
                    margin-right: 20px;
                    text-align: right;
                    flex-shrink: 0;
                    font-size: 18px;
                }
                button{
                    margin-left: 20px;
                }
                .select{
                    margin-left: 20px;
                }
                .textarea{
                    width: 800px;
                    height: 100px;
                    padding-top: 30px;
                    box-sizing: border-box;
                }
            }
        }
        .bottom-box{
            width: 100%;
            height: 70px;
            margin-top: 30px;
            padding: 0 200px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            button{
                width: 200px;
                margin-right: 20px;
            }
        }
    }
</style>
