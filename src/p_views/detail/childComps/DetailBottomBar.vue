<template>
  <div class="bottom-bar">
    <div class="bar bar-left">
      <div>
        <i class="img service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="img shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="img star"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="GoCart">查看</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    addToCart(){
      this.$emit("addToCart");
    },
    GoCart(){
      this.$router.push("/cart");
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  padding-bottom: 0px;
  background-color: #fff;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  display: flex;
  text-align: center;
}

.bar {
  flex: 1;
  display: flex;
}
.bar div{
  flex: 1;
}
.bar-left span {
  font-size: 12px;
}
.bar-left .img{
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto -2px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0 / 100%; /* 设置完背景后，再用background-position 展示具体的背景图片 */
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 14px;
  color: #fff;
  line-height: 44px;
}
.cart {
  position: relative;
  height: 44px;
  background-color: #ffe817;
  color: #333;
  z-index: 2;
}
.buy {
  height: 44px;
  background-color: #f69;
}
</style>