<template>
  <div id="detail">
  <detail-nav-bar class="nva" @NavBarClick="NavBarClick" ref="detailnavbar"/>
  <scroll class="content"
          ref="scroll"
          :probe-type="3"
          @scrollTop="contentScroll"
  >
    <detial-swiper :top-image="this.topImages"/>
    <detail-goods-info :goods-info="goodsInfos"/>
    <detail-shop-info :shop="Shop"/>
    <detail-info ref='detailInfo' :detail-info="GoodsDetailInfo" @imgLoad = "imgLoad"/>
    <detail-params-info  ref='params' :param-info="GoodsParam" ></detail-params-info>
    <comment-info  ref='comment' :comment-info = "commentInfo"/>
    <goods-list :goods="Recommend" ref="recommend"/>
  </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetialSwiper from "@/views/detail/childComps/DetialSwiper";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailInfo from "@/views/detail/childComps/DetailInfo";
import DetailParamsInfo from "@/views/detail/childComps/DetailParamsInfo";
import CommentInfo from "@/views/detail/childComps/CommentInfo";
import GoodsList from "@/components/content/goodslist/GoodsList";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import Scroll from "@/components/common/scorll/Scroll";
import {getDetail, getRecommend,goodInfo, Shop, GoodsParam} from "@/network/detail";
import {itemListenerMixin,backTopMixin} from "@/common/mixin";
import {debounce} from "@/common/utils";



export default {
  name: "detail",
  components:{
    GoodsList,
    DetialSwiper,
    DetailNavBar,
    DetailGoodsInfo,
    DetailShopInfo,
    Scroll,
    DetailInfo,
    DetailParamsInfo,
    CommentInfo,
    DetailBottomBar,
  },
  mixins:[itemListenerMixin,backTopMixin],
  data(){
    return{
      iid:null,
      topImages:[],
      goodsInfos:{},
      Shop:{},
      GoodsParam:{},
      GoodsDetailInfo:{},
      getTopYs: null,
      commentInfo:{},
      Recommend:[],
      itemToY:[0,],//记录navbar中的对应的y值
      scrollY:0,//记录滚动y的值
    }
  },
  methods:{
    imgLoad(){
      // console.log("1122");
      // console.log("---");
      this.itemToY[1] = this.$refs.params.$el.offsetTop;
      this.itemToY[2] = this.$refs.comment.$el.offsetTop;
      this.itemToY[3] = this.$refs.recommend.$el.offsetTop;
      // console.log(this.itemToY)
      this.refresh();
    },
    NavBarClick(index){
      switch (index) {
        case 0:
          this.$refs.scroll.backTop(0,-this.itemToY[0]);
          break;
        case 1:
          this.$refs.scroll.backTop(0,-this.itemToY[1]+44);
          break;
        case 2:
          this.$refs.scroll.backTop(0,-this.itemToY[2]+44);
        break;
        case 3:
          this.$refs.scroll.backTop(0,-this.itemToY[3]+44);
          break;
        default:
          break;
      }
    },
    contentScroll(position){
      this.scrollY = - position.y;
      this.isShowBackTop = -position.y > 1000;
      debounce(this.scrollControlNavBar(),800)//因为这里多次执行因此要加防抖
    },
    scrollControlNavBar(){
      if (this.scrollY >= this.itemToY[1]-44 && this.scrollY < this.itemToY[2]-44){
        this.$refs.detailnavbar.currentIndex = 1;
      }
      if ( this.scrollY >= this.itemToY[2]-44 && this.scrollY < this.itemToY[3]-44){
        this.$refs.detailnavbar.currentIndex = 2;
      }
      if ( this.scrollY >= this.itemToY[3]-44){
        this.$refs.detailnavbar.currentIndex = 3;
      }
      if (this.scrollY > 0 && this.scrollY < this.itemToY[1]-44) {
        this.$refs.detailnavbar.currentIndex = 0;
      }
    },
    addToCart(){
      const product = {};
      product.image  = this.topImages[0];
      product.title = this.goodsInfos.title;
      product.desc = this.goodsInfos.desc;
      product.price = this.goodsInfos.realProice;
      product.iid = this.iid;
      product.isChecked = true
      this.$store.dispatch("addCart",product).then( res => {
        this.$toast.isToastShow(res,1000);
      });
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then( res =>{
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goodsInfos = new goodInfo(data.itemInfo,data.columns,data.shopInfo.services,data.shopInfo.name);
      this.Shop = new Shop(data.shopInfo);
      this.GoodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule);
      this.GoodsDetailInfo = data.detailInfo;
      //获取评论信息
      if (data.rate.cRate !== 0)
      {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res)=>{
      this.Recommend = res.data.list;
    });
  },
  destroyed() {
    this.$bus.$off("detailItemImgLoad",this.itemImgListener);
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 3;
  background-color: #fff;
  height: 100vh;
}
.nva{
  position: relative;
  z-index: 4;
}
.content{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>