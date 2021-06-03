<template>
  <div class="all">
    <scroll :observeDOM="true" class="content">
      <div v-for="(item,index) in categories"
           :key="index"
           class="title"
           :class='{active:index===currentIndex}'
           @click="titleClick(index)">
        {{item.title}}</div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scorll/Scroll";
export default {
  name: "CategoryMenu",
  components:{Scroll},
  data(){
    return {
      currentIndex:0,
    }
  },
  props:{
    categories:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index
      this.$emit('selectItem',index)
    }
  }
}
</script>

<style scoped>
.content {
  /* height: calc(100vh - 44px - 49px); */
  /* overflow: hidden; */
  background: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}
.all {

  width: 100px;
  height: 100%;
  text-align: center;
  position: relative;
  padding-bottom: 14px;
  z-index: 2;
}
.title {
  line-height: 45px;
  /* text-align: center; */
  font-size: 14px;
  background: #f6f6f6;
}
.active {
  background: #fff;
  color: var(--color-high-text);
  border-left: 3px solid var(--color-high-text);
  font-weight: 700;
}
</style>