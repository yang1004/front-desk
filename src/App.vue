<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'App',
  async created(){
  	// let userInfo = sessionStorage.getItem('userInfo')
  	let userInfo = Cookies.get('token')
  	if(userInfo == undefined){
  		await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      return false
  	}
  },
  methods:{
    
  },
}
</script>
<style>
	.submenu-title-noDropdown i,.el-submenu__title i{
		margin-left: 10px;
	}
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 130;
  }
  .export{
    padding: 0 20px;
    height: 40px;
    border-radius: 5px;
    color: #333;
    border: 1px solid #333;
    box-sizing: border-box;
    line-height: 40px;
    cursor: pointer;
  }
  input:disabled{
    border: 1px solid #DDD;
    background-color: #fff !important;
    color:#000 !important;
  }
  textarea:disabled{
    border: 1px solid #DDD;
    background-color: #fff !important;
    color:#000 !important;
  }
</style>