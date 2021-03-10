<template>
    <div class="member">
        <div class="top-search">
            <div class="item">
                <span>{{$t('registration.lc')}}</span>
                <el-input v-model="search.floor"></el-input>
            </div>
            <div class="item">
                <span>{{$t('registration.fjs')}}</span>
                <el-input v-model="search.rooms"></el-input>
            </div>
            <div class="item">
                <span>{{$t('registration.lcbq')}}</span>
                <el-input v-model="search.label"></el-input>
            </div>
            <div class="item">
                <span>{{$t('member.bz')}}</span>
                <el-input v-model="search.remakers"></el-input>
            </div>
            <el-button>{{$t('registration.qd')}}</el-button>
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
    export default {
        name: 'member',
        data() {
            return {
                floor:'',
                rooms:'',
                label:'',
                remakers:'',
                search:{
                    floor:'',
                    rooms:'',
                    label:'',
                    remakers:'',
                },
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
            }
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

<style scoped lang="scss">
    .member{
        width: 100%;
        height: calc(100vh - 50px);
        padding: 50px 100px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .top-search{
            width: 100%;
            height: 70px;
            display: flex;
            flex-direction: row;
            align-items: center;
            .item{
                width: 300px;
                height: 100%;
                display: flex;
                align-items: center;
                flex-direction: row;
                .el-input{
                    width: 250px;
                }
                span{
                    display: inline-block;
                    width: 100px;
                    flex-shrink: 0;
                    text-align: right;
                    margin-right: 10px;
                    font-stretch: 18px;
                }
            }
            button{
                padding-left: 30px;
                padding-right: 30px;
                margin-left: 30px;
            }
            .right{
                margin-left: 300px;
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
</style>
