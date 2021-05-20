<template >
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {debounce} from "@/common/utils";
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default: 0,
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    },
  },
  data(){
    return{
      scroll:null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true,
      probeType:this.probeType,
      pullUpLoad: this.pullUpLoad,
    })
    this.scroll.on("scroll",(position) => {
      // console.log(position);
      debounce( this.$emit('scrollTop', position),1000)

    })
    // 监听上拉事件
    this.scroll.on('pullingUp',() => {
      this.$emit("pullingUp");
    })
  },
  methods:{
    backTop(x,y,time = 800){
      this.scroll && this.scroll.scrollTo(x,y,time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
       //获取所有图片后重新更新每个goodItem的高度
    },
    refresh(){
      // console.log("hahaha")
      // console.log("没有防抖");
      this.scroll && this.scroll.refresh();
    },
    getscrollY(){
      return this.scroll ? this.scroll.y : 0;
    }
  }
}
</script>
<style scoped>

</style>