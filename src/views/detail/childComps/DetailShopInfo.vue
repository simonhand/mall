<template>
  <div class="shopInfo">
    <div class="shopTop">
      <img :src="shop.logo" alt="">
      <span>{{shop.name }}</span>
    </div>
    <div class = "shopCenter">
      <div class="shopCenterItemLeft">
        <div>
        <span>{{shop.sells|sellCountFilter}}</span>
        <div>总销量</div>
        </div>
        <div>
          <span>{{shop.goodsCount}}</span>
          <div>所有宝贝</div>
        </div>
      </div>
      <div class="shopCenterItemRight">
        <div>
          <div v-for="(item, index) in shop.score" :key="index" class="shopDesc">
            <span>{{item.name}}</span>
            <span class="score" :class="{scoreBetter: item.isBetter}">{{item.score}}</span>
            <span class="better" :class="{betterBetter: item.isBetter}">{{item.isBetter? "高":"低"}}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
.shopInfo{

}
.shopTop{
  line-height: 45px;
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
  flex: 1;
  font-size: 16px;
  position: relative;
}
.shopTop img{
  margin-right: 5px;
  width: 50px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #f1f1f1;
}
.shopCenter{
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  margin-bottom: 20px;
}
.shopCenterItemLeft{
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  text-align: center;
  flex: 1;
  align-items: center;
}
.shopCenterItemLeft div {
  flex: 1;
}
.shopCenterItemLeft div span{
  font-size: 20px;
  font-weight: 400;
}
.shopCenterItemRight{
  border-left: 1px solid #666666;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 30px;
  text-align: left;
  flex: 1;
}
.shopDesc{
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  white-space: nowrap;
}
.shopDesc span{
  padding-left: 5px;
  flex: 1;
}
.score {
  color: #5ea732;
}

.scoreBetter {
  color: #f13e3a;
}
.better{
  color: #5ea732;
}
.betterBetter{
  color: #f13e3a;;
}
.shop-bottom{
  text-align: center;
  margin-top: 10px;
}
.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>