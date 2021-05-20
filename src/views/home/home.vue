<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control  :titles="['流行','新款','精选']"
                  @TabControlClick="tabcontrolclick"
                  ref="tabControl1"
                  :class="{tabfixed: this.isTabFixed}"
    />
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scrollTop="contentScroll"
            :pullUpLoad = "true"
            @pullingUp="loadMore">
      <home-swiper :banner="banners" @swiperImgLoad="swiperImgLoad"/>
      <home-recommend-view :recommend="recommends"/>
      <feature-view/>
      <tab-control  :titles="['流行','新款','精选']"
                    @TabControlClick="tabcontrolclick"
                    ref="tabControl2"

      />
      <goods-list :goods="ShowGoodType"/>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "@/views/home/chlidComps/HomeSwiper";
import HomeRecommendView from "@/views/home/chlidComps/HomeRecommendView";
import FeatureView from "@/views/home/chlidComps/FeatureView";
import GoodsList from "@/components/content/goodslist/GoodsList";
import TabControl from "@/components/content/tabControl/TabControl";
import NavBar from "components/common/nvabar/NavBar";
import BackTop from "@/components/content/backtop/BackTop";
import Scroll from "@/components/common/scorll/Scroll";

import {itemListenerMixin} from "@/common/mixin";
import {getHomeMultidata,getHomeGoods} from "network/home";

export default {
  name: "Home",
  mixins:[itemListenerMixin],
  data(){
    return{
      banners:[],
      recommends:[],
      goodsType:'',
      goods:{
        'pop':{page: 0, list:[]},
        'new':{page: 0, list:[]},
        'sell':{page: 0, list:[]}
      },
      isShowBackTop:false,
      topOffsetTop:0,
      isTabFixed:false,
      saveY:0,
    }
  },
  components:{
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then( res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    /*网络请求方法*/
    getHomeGoods(type){
      const page  = this.goods[type].page++ + 1;
      this.goodsType = type;
      getHomeGoods(type, page).then( res =>{
      // this.goods[type].list.concat(this.goods[type].list.push(res.data.list));
      this.goods[type].list.push(...res.data.list);
      // console.log(this.goods[type].list);
    })
    },

    /*事件监听*/
    tabcontrolclick(item){
      let arr = ['pop','new','sell']
      this.goodsType = arr[item];
      this.$refs.tabControl1.currentIndex = item;
      this.$refs.tabControl2.currentIndex = item;
    },
    backTopClick(){
      this.$refs.scroll.backTop(0,0);
      console.log("回到顶部");
    },
    contentScroll(position){
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed = -position.y  > this.topOffsetTop;
    },
    loadMore(){
      this.getHomeGoods(this.goodsType);
      // console.log(this.goodsType);
      this.finishPullUp();
      // console.log("上拉加载更多");
    },
    //上拉完成进行下一次上拉
    finishPullUp(){
      this.$refs.scroll.finishPullUp()
    },
    swiperImgLoad(){
      this.topOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

  },
  computed:{
    ShowGoodType(){
      return this.goods[this.goodsType].list
    }
  },
  activated() {
    // console.log("activated"+this.saveY);
    this.$refs.scroll.scroll.refresh();
    setTimeout(()=>{
      this.$refs.scroll.scroll.scrollTo(0,this.saveY,0);
    },0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getscrollY();
    // console.log("deactivated"+this.saveY);
    this.$bus.$off("homeItemImgLoad", this.itemImgListener)
  }
}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
 .home-nav{
   background: -webkit-linear-gradient(left, #FA5A55, #FA994D);
   color: white;
 }
.tabfixed{
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
  z-index: 2;
}
 .content{
   background-color: #fff;
   overflow: hidden;
   position: absolute;
   top: 44px;
   bottom: 49px;
 }
</style>