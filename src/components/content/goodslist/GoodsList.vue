<template>
  <div  class="goods">
    <goods-list-item v-for="(item,index) in goods" :good = 'item'/>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goodslist/GoodsListItem";

export default {
  components:{
    GoodsListItem
  },
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
  background-color: #fff;
}
</style>