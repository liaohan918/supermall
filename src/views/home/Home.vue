<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content">
      <home-Swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" 
          @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>   
    </scroll>        
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import homeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import { getHomMultidata,getHomeGoods } from 'network/home.js'

import Scroll from 'components/common/scroll/Scroll.vue'

export default {
    name:'Home',
    components:{
      navBar,
      homeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop'
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
        //1.请求多个数据
        this.getHomMultidata()
        //2.请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    mounted(){

    },
    methods:{
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
      },            
      getHomMultidata(){
        getHomMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
       })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
      })
      }
    }
}
</script>

<style scoped>
  #home{
    /* vh --> viewport 视口高度 */
    height: 100vh;
    position: relative;
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

  .tab-control{
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 9;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>