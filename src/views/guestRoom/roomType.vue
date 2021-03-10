<template>
    <div class="member">
        <div class="add-type-box">
            <div class="room-type">
                <div class="left-info">
                    <div class="item">
                        <div class="name">房间类型</div>
                        <el-input v-model="room_type.type"></el-input>
                        <div class="bt">*</div>
                    </div>
                    <div class="item">
                        <div class="name">是否带窗</div>
                        <el-select v-model="room_type.is_window" :placeholder="$t('member.qxz')">
                            <el-option
                                v-for="item in is_window"
                                :key="item.name"
                                :label="item.name"
                                :value="item.name">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="item">
                        <div class="name">房间设备</div>
                        <el-input v-model="room_type.equipment"></el-input>
                    </div>
                    <div class="item">
                        <div class="name">房间简介</div>
                        <el-input v-model="room_type.introduction"></el-input>
                    </div>
                    <div class="item">
                        <div class="name">默认房价</div>
                        <el-input v-model="room_type.price"></el-input>
                        <div class="bt">*</div>
                    </div>
                    <div class="item">
                        <div class="name">预设押金</div>
                        <el-input v-model="room_type.deposit"></el-input>
                        <div class="bt">*</div>
                    </div>
                    <div class="item">
                        <div class="name">备注</div>
                        <el-input v-model="room_type.remaker"></el-input>
                    </div>
                </div>
                <div class="left-info">
                    <div class="item">
                        <div class="name">是否钟点房</div>
                        <el-select v-model="room_type.is_hourRoom" :placeholder="$t('member.qxz')">
                            <el-option
                                v-for="item in is_window"
                                :key="item.name"
                                :label="item.name"
                                :value="item.name">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="item">
                        <div class="name">钟点房价格</div>
                        <el-input v-model="room_type.hour_price"></el-input>
                    </div>
                    <div class="item">
                        <div class="name">钟点房时间</div>
                        <el-input v-model="room_type.hour_time"></el-input>
                        <div class="dw">小时</div>
                    </div>
                    <div class="item">
                        <div class="name">超时设置</div>
                        <el-input v-model="room_type.hour_min"></el-input>
                        <div class="dw">分钟</div>
                    </div>
                    <div class="item">
                        <div class="name">超时计费</div>
                        <el-input v-model="room_type.hour_money"></el-input>
                    </div>
                    <div class="tips">注*:超时收费金额,不满1小时按1小时计算</div>
                    <div class="item">
                        <div class="name">超时多久算一天</div>
                        <el-input v-model="room_type.exceed_hour"></el-input>
                    </div>
                </div>
                <div class="right-info">
                    <div class="checked-box">
                        <el-checkbox v-model="room_type.section"></el-checkbox>
                        <span>钟点房是否按区间计费</span>
                    </div>
                    <div class="section-time">
                        <div class="time-box">
                            <p class="name">起始时间</p>
                            <el-time-select
                                v-model="startTime"
                                :picker-options="{
                                  start: '00:00',
                                  step: '00:15',
                                  end: '23:359'
                                }">
                            </el-time-select>
                        </div>
                        <div class="time-box">
                            <p class="name">结束时间</p>
                            <el-time-select
                                v-model="endTime"
                                :picker-options="{
                                  start: '00:00',
                                  step: '00:15',
                                  end: '23:59',
                                  minTime: startTime
                                }">
                            </el-time-select>
                        </div>
                    </div>
                    <div class="section-time">
                        <div class="time-box">
                            <p class="name">价格</p>
                            <el-input v-model="section_price"></el-input>
                        </div>
                        <div class="time-box">
                            
                        </div>
                    </div>
                </div>
                <div class="right-upImg">
                    <uploadImg :fileList="fileList" :imgs="imgs"></uploadImg>
                </div>
            </div>
        </div>
        <div class="table-box">
            <el-table
                :data="list"
                border
                style="width: 100%;height: 100%;">
                <el-table-column
                    prop="id"
                    :label="$t('registration.lc')">
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('registration.fjs')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('registration.lcbq')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.bz')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.czy')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('agency.jlsj')">
                </el-table-column>
                <el-table-column
                    :label="$t('agency.cz')">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="change(scope.row)">{{$t('registration.bj')}}</el-button>
                        <el-button type="text" size="small" @click="del(scope.row)">{{$t('registration.sc')}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination" v-if="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40, 50]"
                :page-size="100"
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="count">
            </el-pagination>
        </div>

        <el-dialog
            :title="$t('registration.xgfjlc')"
            :close-on-click-modal="false"
            :visible.sync="floorMemu"
            width="30%">
            <div class="floor-memu">
                <div class="item small">
                    <div class="name">{{$t('registration.lc')}}</div>
                    <el-input v-model="floor"></el-input>
                </div>
                <div class="item small">
                    <div class="name">{{$t('registration.fjs')}}</div>
                    <el-input v-model="rooms"></el-input>
                </div>
                <div class="item small">
                    <div class="name">{{$t('registration.lcbq')}}</div>
                    <el-input v-model="label"></el-input>
                </div>
                <div class="textarea-item">
                    <div class="name">{{$t('member.bz')}}</div>
                    <el-input
                        type="textarea"
                        :rows="3"
                        v-model="remakers">
                    </el-input>
                </div>
                <div class="item">
                    <div class="name"></div>
                    <el-button type="primary" @click="floorMemu = false">{{$t('registration.qd')}}</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import uploadImg from '@/components/uploadImg/uploadImg.vue'
    export default {
        name: 'member',
        components:{
            uploadImg,
        },
        data() {
            return {
                fileList:[],
                imgs:'',
                startTime:'',
                endTime:'',
                section_price:'',
                room_type:{
                    type:'',
                    is_window:'',
                    equipment:'',
                    introduction:'',
                    price:'',
                    deposit:'',
                    remaker:'',
                    is_hourRoom:'',
                    hour_price:'',
                    hour_time:'',
                    hour_min:'',
                    hour_money:'',
                    exceed_hour:'',
                    section:false,
                },
                floor:'',
                rooms:'',
                label:'',
                remakers:'',
                list: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区'
                }],
                count:100,
                page:1,
                pagination:true,//控制分页显示隐藏
                floorMemu:false,
                is_window:[{name:this.$t('guestRoom.shi')},{name:this.$t('guestRoom.fou')}],
            }
        },
        computed:{
            is_window(){
                return [{
                    name:this.$t('guestRoom.shi'),
                },{
                    name:this.$t('guestRoom.fou'),
                }]
            },
        },
        mounted(){
            
        },
        methods: {
            handleSizeChange(val){
                //切换每页条数
                this.pagination = false
                this.page = 1
                this.pagination = true
            },
            handleCurrentChange(val) {
                //切换页数
            },
            del(item){
                //删除预定记录
            },
            change(item){
                //修改房间楼层
                this.floorMemu = true
            },
        }
    }
</script>


<style scoped>
    /deep/ .el-checkbox__inner { border: 1px solid #8d98ab; width: 20px; height: 20px;}
</style>
<style scoped lang="scss">
    .member{
        width: 100%;
        height: calc(100vh - 50px);
        padding: 50px 100px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .add-type-box{
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .room-type{
                width: 100%;
                display: flex;
                flex-direction: row;
                .left-info{
                    width: 500px;
                    display: flex;
                    flex-direction: column;
                    margin-right: 20px;
                    .tips{
                        width: 100%;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        color: red;
                        justify-content: flex-end;
                    }
                    .item{
                        width: 100%;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        .el-input{
                            width: 200px;
                        }
                        .name{
                            width: 200px;
                            text-align: right;
                            margin-right: 15px;
                            flex-shrink: 0;
                        }
                        .bt{
                            color: red;
                            margin-left: 15px;
                        }
                        .dw{
                            margin-left: 15px;
                        }
                    }
                }
                .right-info{
                    width: 500px;
                    padding-left: 30px;
                    margin-left: 20px;
                    box-sizing: border-box;
                    .section-time{
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        margin-top: 20px;
                        .time-box{
                            width: 0;
                            flex-grow: 1;
                            .name{
                                /*font-size: 18px;*/
                                line-height: 40px;
                            }
                        }
                    }
                }
                .right-upImg{
                    margin-left: 30px;
                }
            }
        }
        .table-box{
            width: 100%;
            height: 0;
            flex-grow: 1;
        }
        .pagination{
            width: 100%;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .floor-memu{
            width: 100%;
            .item{
                width: 100%;
                height: 60px;
                display: flex;
                flex-direction: row;
                align-items: center;
                .name{
                    flex-shrink: 0;
                    width: 130px;
                    text-align: right;
                    margin-right: 20px;
                }
                button{
                    padding-left: 40px;
                    padding-right: 40px;
                }
            }
            .small{
                .el-input{
                    width: 250px;
                }
            }
            .textarea-item{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                margin: 20px 0;
                .name{
                    flex-shrink: 0;
                    width: 130px;
                    text-align: right;
                    margin-right: 20px;
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
