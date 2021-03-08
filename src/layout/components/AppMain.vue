<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" v-on:test="testP" v-bind:msg="msg"/>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  data(){
    return {
      msg:''
    }
  },
  props:["path"],
  mounted(){
    
  },
  methods:{
    childMethod(str){
      this.msg = str
    },
    testP: function (data) {
      this.msg = data
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: 100vh;
  /*max-height: 100vh;*/
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #F4F7FA;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: 100vh;
    /*max-height: 100vh;*/
  }

  .fixed-header+.app-main {
    padding-top: 50px;
    background-color: #F4F7FA;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
