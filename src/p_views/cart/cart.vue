<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{carLength}})</div>
      <div slot="left" @click="leftback">
        <img src="~assets/img/common/back.svg" alt="" class="img">
      </div>
    </nav-bar>
    <car-list :goodList="carList"/>
    <cart-bottom-bar class="cart-bottom-bar" :goodList="carList"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/nvabar/NavBar";
import CarList from "@/views/cart/chhildCopms/CarList";
import CartBottomBar from "@/views/cart/chhildCopms/CartBottomBar";
import {mapGetters} from 'vuex'
export default {
  name: "Cart",
  components:{
    CartBottomBar,
    NavBar,
    CarList
  },
  computed:{
    ...mapGetters(["carLength",'carList'])
  },
  data(){
    return {

    }
  },
  methods:{
    leftback(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.navbar{
  position: relative;
  background: -webkit-linear-gradient(left, #FA5A55, #FA994D);
  color: white;
  z-index: 4;
}
.img{
  position: relative;
  top: 8px;
}
</style>