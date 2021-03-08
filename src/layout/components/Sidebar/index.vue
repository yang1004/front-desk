<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  data(){
    return {
      data1:[],
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  created(){
    let _this = this
    let data = localStorage.getItem('userInfo')
    let userInfo = JSON.parse(data)
    console.log(userInfo)
    let jurisdiction = JSON.parse(userInfo.data[0].power).member
    for(let i=0 ; i<jurisdiction.length ; i++){
      for(let j=0 ; j<jurisdiction[i].children.length ; j++){
        if(jurisdiction[i].children[j].isShow){
          
        }else{
          jurisdiction[i].children[j] = ''
        }
      }
    }
    for(let i=0 ; i<jurisdiction.length ; i++){
      for(let j=0 ; j<jurisdiction[i].children.length ; j++){
        if(jurisdiction[i].children[j] == ''){
          jurisdiction[i].children.splice(j,1);  
          j= j-1;
        }
      }
    }
    jurisdiction.forEach(function(value){
      if(value.children.length > '0'){
        _this.data1.push(value)
      }
    })
  }
}
</script>
