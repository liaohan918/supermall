<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>

import navBar from '@/components/common/navbar/NavBar.vue'

export default {
    name:'Home',
    components:{
      navBar
    }
}
</script>

<style scoped>
  .home-nav{
    background-color: #1296db;
    color:white;
  }
</style>