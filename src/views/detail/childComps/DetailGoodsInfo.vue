<template>
  <div>
    <div class="title">&nbsp&nbsp{{goodsInfo.title}}</div>
    <div class="price">
      <span class="newPrice">{{goodsInfo.newPrice}}</span>
      <span class="oldPrice">{{goodsInfo.oldPrice}}</span>
      <span class="pricetab">{{goodsInfo.discountDesc}}</span>
    </div>
    <div class="desc" v-if="Object.keys(goodsInfo).length !== 0">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span >{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service" v-if="Object.keys(goodsInfo).length !== 0">
      <span class="info-service-item" v-for="index in goodsInfo.services.length-1"  :key="index">
        <img :src="goodsInfo.services[index-1].icon">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props:{
    goodsInfo:{
      type:Object,
      default:{}
    }
  }
}
</script>

<style scoped>

.title{
  margin: 10px 5px 0;
  font-size: 16px;
  font-weight: bolder;
  color: #222;
}
.price{
  margin: 10px 5px 0;
}
.newPrice{

  color: var(--color-high-text);
  font-size: 26px;
}
.oldPrice{
  margin-left: 12px;
  text-decoration: line-through;
  color: #666666;
}
.pricetab{
  font-size: 12px;
  padding: 4px 4px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 12px;
  position: relative;
  bottom: 4px;
}
.desc{
  width: 100%;
  margin-top: 8px;
  display: flex;
  font-size: 10px;
  color: #666666;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  padding-bottom: 10px;
}
.desc span{
  line-height: 12px;
  flex: 1;
}
.info-service{
  padding: 10px 5px;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  border-bottom: 20px solid #f1f1f1;
}
.info-service-item{
  flex: 1;
  text-align: center;
  line-height: 16px;
}
.info-service-item img{
  position: relative;
  bottom: -3px;
  right: 5px;
  width: 12px;
  height: auto;
}
</style>