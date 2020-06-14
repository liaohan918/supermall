<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import mainTabBar from 'components/content/maintabbar/MainTabBar.vue'

export default {
  name:"app",
  components:{
    mainTabBar
  }
}
</script>

<style>
  @import '~@/assets/css/base.css';
</style>