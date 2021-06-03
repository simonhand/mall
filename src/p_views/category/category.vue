<template>
  <div class="wrapper" >
   <nav-bar class="nav">
     <div slot="center">商品分类</div>
   </nav-bar>
    <div class="content">
      <category-menu :categories='categories' @selectItem='selectItem'/>
      <tab-control :titles="['综合','新品','销量']"
                   @TabControlClick='tabClick' class="tabControl1"
                   ref="tabcontrol1"
                   :class="{tabFixed:isTabFixed}"
      />
      <scroll class="tab-content"
              :data='[categoryData]'
              ref="scroll"
              :probe-type='3'
              @scrollTop="contentScroll"             >
        <div>
          <menu-detail :subcategories='showSubcategory'
                       @imgLoad="imgLoad"
          />
          <content-detail/>
          <tab-control :titles="['综合','新品','销量']"
                       @TabControlClick='tabClick' class="tabControl"
                       ref="tabcontrol2"

          />
          <content-detail :content-detail='showContentDetail'/>
        </div>
      </scroll>
    </div>
    <back-top v-show="isShowBackTop" @click.native="backTop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/nvabar/NavBar";
import BackTop from "@/components/content/backtop/BackTop";
import CategoryMenu from "@/views/category/childCopms/CategoryMenu";
import ContentDetail from "@/views/category/childCopms/ContentDetail";
import Scroll from "@/components/common/scorll/Scroll";
import MenuDetail from "@/views/category/childCopms/MenuDetail";
import TabControl from "@/components/content/tabControl/TabControl";
import {backTopMixin} from "@/common/mixin";
import {getCategory,getsubcategory,getContentDetail} from "@/network/category";
import {debounce} from "@/common/utils";

export default {
  name: "Category",
  components: {
    NavBar,
    BackTop,
    CategoryMenu,
    Scroll,
    ContentDetail,
    MenuDetail,
    TabControl
  },
  mixins:[backTopMixin],
  data(){
    return {
      categories: [],
      categoryData: [],
      currentIndex: -1,
      currentType: 'pop',
      isTabFixed:false,
      topOffsetTop:0
    }
  },
  methods:{
    _getCategory(){
      getCategory().then(res => {
        console.log(res);
        // 1.获取分类数据
        this.categories = res.data.category.list
        // 2.初始化每个类别的子数据
        for(let i=0; i<this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        //   主数据请求到之后才能接着请求后面的子数据
        this._getsubcategory(0)
      })
    },
    selectItem (index) {
      this._getsubcategory(index)
    },
    _getsubcategory(index){
      this.currentIndex = index
      const mailKey = this.categories[index].maitKey
      getsubcategory(mailKey).then(res => {
        console.log(res);
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this._getContentDetail('pop')
        this._getContentDetail('new')
        this._getContentDetail('sell')
        // console.log(this.categoryData);
      })
    },
    _getContentDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // console.log(miniWallkey);
      getContentDetail(miniWallkey, type).then(res => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
      // console.log(this.currentType);
    },
    contentScroll(position) {
      const positionY = -position.y;
      // console.log(positionY);
      this.isShowBackTop = positionY > 1000;
      this.isTabFixed = -position.y  > this.topOffsetTop;
      // console.log( -position.y)
      // console.log(this.isTabFixed);
    },
    load(){
      this.topOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
    imgLoad(){
      // debounce(this.load,800);
      this.topOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
  },
  created () {
    this._getCategory()
  },
  computed: {
    showSubcategory () {
      if(this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showContentDetail () {
      if(this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[
          this.currentType
          ]
    },
    // load(){
    //   console.log(11111)
    //   // this.topOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    // },

    },
  mounted() {
  }
}
</script>

<style scoped>
.nav{
  background: -webkit-linear-gradient(left, #FA5A55, #FA994D);
  color: white;
}
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.tabControl{
  background-color: #fff;
}
.tabControl1{
  display: none;
  background-color: #fff;
  position: fixed;
  left: 100px;
  width: calc(86.5% - 50px);
}
.tabFixed{
  display: flex;
}
</style>