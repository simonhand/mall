<template>
  <swiper class="swiperDetail">
    <swiper-item v-for="(item,index) in topImage" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  name: "DetialSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    topImage:{
      type:Array,
      default: []
    }
  },
}
</script>

<style scoped>
.swiperDetail{
  height: 300px;
  overflow: hidden;
}
</style>