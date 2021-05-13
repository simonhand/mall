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
      this.$emit('scrollTop', position);
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
      this.scroll && this.scroll.refresh();
    }
  }
}
</script>
<style scoped>

</style>