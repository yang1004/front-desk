<template>
    <div class="member">
        <div class="table-box">
            <el-table
                :data="list"
                border
                style="width: 100%;height: 100%;">
                <el-table-column
                    prop="id"
                    label="ID"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="name"
                    :label="$t('agency.bt')"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('agency.fjzt')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('agency.clnr')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('agency.zt')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('agency.jly')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('agency.jlsj')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('agency.clsj')">
                </el-table-column>
                <el-table-column
                    prop="address"
                    :label="$t('agency.cz')">
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
