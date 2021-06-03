<template>
  <div class="goods-item" @click="itemClick()">
    <img v-if="good.show" v-lazy="good.show.img" alt="" @load="imgLoad">
    <img v-if="good.image" v-lazy="good.image" alt="" @load="imgLoad">
    <img v-if="good.img" v-lazy="good.img" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "GoodsListItem",
  props:{
    good:{
      type: Object,
      default:{}
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit("itemImageLoad")
    },
    itemClick(){
      console.log(this.good);
      if (this.good.iid) {
        this.$router.push('/detail/' + this.good.iid)
      }
      else {
        this.$router.push('/detail/' + this.good.item_id);
      }
    }
  }

}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  height: 228px;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    /*这里的第一个0代表颜色，
    第二个0/14px　0 是background-position的属性简写。
    background-position 属性设置背景图像的起始位置
   14px 是background-size的属性简写。background-size 属性规定背景图像的尺寸。
  　　　最后14px和前面14px共同构成background-size：（这个14px可省略）*/
  }
</style>