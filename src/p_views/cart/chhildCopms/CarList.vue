<template>
  <div id="cartList">
    <scroll class="scroll" ref="scroll">
      <div v-for="(item,index) in goodList" :key="index" >
       <cart-list-item :good = "item"/>
      </div>
      </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scorll/Scroll";
import CartListItem from "@/views/cart/chhildCopms/CartListItem";
export default {
  name: "CarList",
  components: {CartListItem, Scroll},
  props:{
    goodList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  activated() {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
#cartList{
 height: calc(100vh - 44px - 49px - 40px);
}
.scroll{
  height: 100%;
  overflow: hidden;
}
</style>