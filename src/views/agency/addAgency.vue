<template>
    <div class="member">
        <p class="name">{{$t('agency.bt')}}</p>
        <el-input v-model="title"></el-input>
        <p class="name">{{$t('agency.nr')}}</p>
        <div class="textarea">
            <el-input
                type="textarea"
                :rows="8"
                v-model="content">
            </el-input>
        </div>
        <div class="btn">
            <el-button type="primary" @click="commit">{{$t('agency.tj')}}</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'member',
        data() {
            return {
                title:'',
                content:'',
            }
        },
        mounted(){
            
        },
        methods: {
            commit(){
                //添加待办事项
                if(this.title == ''){
                    this.$message(this.$t('agency.qsrbt'))
                    return false
                }
                if(this.content == ''){
                    this.$message(this.$t('agency.qsrnr'))
                    return false
                }
            },
        }
    }
</script>

<style scoped>
    .el-input{
        width: 500px;
    }
    textarea{
        resize: none;
    }
</style>
<style scoped lang="scss">
    .member{
        width: 100%;
        padding: 100px 400px;
        box-sizing: border-box;
        .name{
            font-size: 18px;
            line-height: 50px;
        }
        .textarea{
            width: 500px;
        }
        .btn{
            width: 500px;
            margin-top: 20px;
            display: flex;
            justify-content: center;
            button{
                width: 150px;
            }
        }
    }
</style>
