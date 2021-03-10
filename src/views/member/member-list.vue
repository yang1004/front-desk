<template>
    <div class="member">
        <div class="search-box">
            <div class="item">
                <span>{{$t('member.hykh')}}</span>
                <el-input v-model="search.number"></el-input>
            </div>
            <div class="item">
                <span>{{$t('member.sjhm')}}</span>
                <el-input v-model="search.phone"></el-input>
            </div>
            <div class="item">
                <span>{{$t('member.hyxm')}}</span>
                <el-input v-model="search.name"></el-input>
            </div>
            <el-button icon="el-icon-search" >{{$t('registration.cx')}}</el-button>
            <el-button type="primary">{{$t('member.cz')}}</el-button>
        </div>
        <div class="table-box">
            <el-table
                :data="list"
                border
                style="width: 100%;height: 100%;display:flex;flex-direction: column;">
                <el-table-column
                    prop="date"
                    label="ID">
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('member.jd')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.hykh')">
                </el-table-column>
                <el-table-column
                    prop="date"
                    :label="$t('member.hylb')">
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('member.hyxm')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.je')">
                </el-table-column>
                <el-table-column
                    prop="date"
                    :label="$t('member.jf')">
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('member.hyxb')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.sr')">
                </el-table-column>
                <el-table-column
                    prop="date"
                    :label="$t('member.fkrq')">
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('member.dqsj')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.zjlx')">
                </el-table-column>
                <el-table-column
                    prop="date"
                    :label="$t('member.zjhm')">
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('member.sjhm')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.dhhm')">
                </el-table-column>
                <el-table-column
                    prop="date"
                    :label="$t('member.dwmc')">
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('member.lxdz')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('member.xqah')">
                </el-table-column>
                <el-table-column
                    prop="date"
                    :label="$t('member.bz')">
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('member.czy')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('agency.jlsj')">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    :label="$t('agency.cz')"
                    width="150">
                    <template slot-scope="scope">
                        <el-button  type="text" size="small" @click="memberDetail(scope.row)">{{$t('member.ck')}}</el-button>
                        <el-button type="text" size="small">{{$t('registration.bj')}}</el-button>
                        <el-button type="text" size="small">{{$t('registration.sc')}}</el-button>
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
                list: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                count:100,
                page:1,
                pagination:true,//控制分页显示隐藏
                search:{
                    number:'',
                    phone:'',
                    name:'',
                },
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
        }
    }
</script>

<style scoped lang="scss">
/deep/ .el-table__body-wrapper{ height: 0;flex-grow: 1; }
.table-box {
  /deep/ .el-table__fixed-right {
  height: 100% !important; //设置高优先，以覆盖内联样式
  }
}
::-webkit-scrollbar{display:block;}
</style>
<style scoped lang="scss">
    .member{
        width: 100%;
        height: calc(100vh - 50px);
        padding: 50px 100px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .search-box{
            width: 100%;
            height: 70px;
            display: flex;
            flex-direction: row;
            align-items: center;
            .item{
                width: 400px;
                height: 70px;
                display: flex;
                flex-direction: row;
                align-items: center;
                span{
                    display: inline-block;
                    font-size: 18px;
                    margin-right: 10px;
                }
                .el-input{
                    width: 300px;
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
    }
</style>
