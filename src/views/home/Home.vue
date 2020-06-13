<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-Swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import homeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import { getHomMultidata } from 'network/home.js'

export default {
    name:'Home',
    components:{
      navBar,
      homeSwiper,
      RecommendView,
      FeatureView
    },
    data(){
      return {
        banners:[],
        recommends:[]
      }
    },
    created(){
        //1.请求多个数据
        getHomMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
       })
    }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .home-nav{
    background-color: #1296db;
    color:white;

    position :fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>