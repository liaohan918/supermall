<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control 
      :titles="['流行','新款','精选']" 
      @tabClick="tabClick"
      ref="tabControl1" class="tab-control" v-show="isTabFixed"/>
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3" 
    :pull-up-load="true"
    @scroll="contentScroll"
    @pullingUp="loadMore">
      <home-Swiper :banners="banners" @swiperImageLoad.once="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control 
      :titles="['流行','新款','精选']" 
      @tabClick="tabClick"
      ref="tabControl2"/>
      <goods-list :goods="showGoods"/>   
    </scroll>  
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
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
import BackTop from "components/content/backtop/BackTop.vue";

import { debounce } from "common/utils.js";

export default {
    name:'Home',
    components:{
      navBar,
      homeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
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
        currentType:'pop',
        isShowBackTop: false,
        tabOffsetTop:0,//tabControl的偏移量(吸顶位置)
        isTabFixed:false,//是否吸顶
        saveY:0//用以解决切换TabBar回来的时候Better-Scroll未记录Y轴
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
    activated(){
        // console.log(this.saveY);        
        this.$refs.scroll.refresh()
        this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated(){      
      this.saveY = this.$refs.scroll.getScrollY()
      // console.log(this.saveY)
    },
    mounted(){      
        //3.监听item中图片加载完成
        const refresh = debounce(this.$refs.scroll.refresh,500)

        this.$bus.$on('itemImageLoad',()=>{          
          refresh()
        })
    },
    destroyed(){
      // console.log('销毁了');      
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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
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

          //完成上拉加载
          this.$refs.scroll.finishPullUp()
      })
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0);
      },
      contentScroll(position){
        this.isShowBackTop = Math.abs(position.y) > 1000

        this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop;
      },
      loadMore(){
        //console.log("加载更多");
        this.getHomeGoods(this.currentType);
      },
      swiperImageLoad(){
        // console.log(this.$refs.tabControl2.$el.offsetTop);         
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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

    /* position :fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }

  .tab-control{
    position: relative;
    background-color: #fff;
    z-index: 9;
  }
  /* .fixed{
    position: fixed;
    left:0;
    right: 0;
    top: 44px;
  } */
</style>