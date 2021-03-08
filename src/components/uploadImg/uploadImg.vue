<template>
    <div class="uploadImg">
        <el-upload
            action="http://upload.qiniup.com/"
            list-type="picture-card"
            :http-request="UploadRequest"
            :on-preview="Preview"
            :before-remove="removeadPho"
            :file-list="fileList"
            :limit="1"
            :on-exceed="Max"
            :class="{hide:hideUpload}"
            :on-change="uploadChange">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogad" :append-to-body='true'>
            <img width="100%" :src="imageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
import api from "@/api/uploadImg";
import {upload} from "../../utils/qiniu.js";
export default {
    name: 'uploadImg',
    props: {
        fileList: {
            type: Array
        },
        imgs: {
            type: String
        }
    },
    data() {
        return {
            hideUpload:false,
            dialogad:false,
            imageUrl:'',
        }
    },
    watch:{
        fileList(val){
            this.hideUpload = val.length >= 1
        }
    },
    mounted(){
        this.imageUrl = this.imgs
        this.hideUpload = this.fileList.length >= 1
    },
    methods: {
        changeUrl(url){
            this.imageUrl = url
        },
        UploadRequest(request){
            let that = this
            api.getToken().then(res => {
                let token = res.data.data.token;
                let host = 'http://video.lvdunyun.cn';
                console.log(res)
                upload(
                    token,
                    request,
                    next => {
                        let total = next.total;
                        console.log(total);
                    },
                    error => {
                        console.log(error)
                    },
                    complete => {
                        let hash = complete.hash;
                        let key = complete.key;
                        that.imageUrl = host + "/" + key;
                        this.$emit('change',that.imageUrl);
                        console.log(complete);
                        console.log(key);
                        api.uploadPho({//上传服务器
                            name:that.imageUrl
                        }).then(res=>{
                            console.log('upload',res)
                        })
                    }
                )
            });
        },
        Preview(file){
            this.imageUrl = file.url;
            this.dialogad = true;
        },
        removeadPho(file,fileList){
            console.log(this.imageUrl)
            this.hideUpload = fileList.length >= 1
            let name = this.imageUrl.split('http://video.lvdunyun.cn/')[1]
            console.log(name)
            api.delPho({
              name:name
            }).then(res=>{
              console.log(res)
              this.hideUpload = false
            }).catch(error=>{
                this.hideUpload = fileList.length >= 1
            })
        },
        uploadChange(file,fileList){
            this.hideUpload = fileList.length >= 1
        },
        Max(file){
            this.$message.error("最多上传一张照片");
            return false
        },
    }
}
</script>

<style lang="scss" scoped>
    .hide .el-upload--picture-card {
       display: none;
    }
    .el-upload--picture-card{
        width: 9.25rem;
    }
</style>
