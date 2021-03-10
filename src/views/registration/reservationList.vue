<template>
    <div class="member">
        <div class="top-search">
            <div class="item">
                <span>{{$t('registration.xm')}}</span>
                <el-input v-model="search.name"></el-input>
            </div>
            <div class="item">
                <span>{{$t('member.dhhm')}}</span>
                <el-input v-model="search.phone"></el-input>
            </div>
            <el-button>{{$t('registration.cz')}}</el-button>
            <el-button>{{$t('member.cz')}}</el-button>
            <div class="right">
                <el-button>{{$t('registration.jt')}}</el-button>
                <el-button>{{$t('registration.mt')}}</el-button>
                <el-button>{{$t('registration.yqft')}}</el-button>
            </div>
        </div>
        <div class="table-box">
            <el-table
                :data="list"
                border
                style="width: 100%;height: 100%;">
                <el-table-column
                    prop="id"
                    :label="$t('registration.ddh')">
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('registration.xdrq')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('registration.fjh')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('registration.xm')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.dhhm')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('registration.rzsj')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('registration.ylsj')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('registration.ydts')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.bz')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('agency.zt')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.czy')">
                </el-table-column>
                <el-table-column
                    :label="$t('agency.cz')">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="del(scope.row)">{{$t('registration.qx')}}</el-button>
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
    </div>
</template>

<script>
    export default {
        name: 'member',
        data() {
            return {
                search:{
                    name:'',
                    phone:'',
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
    }
</style>
