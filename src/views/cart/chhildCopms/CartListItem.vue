<template>
  <div class="cartListItem">
    <div class="select">
      <check-button @click.native="checkClick" :is-check="good.isChecked" class="selectItem" />
    </div>
    <div class="image" @click="imgClick">
      <img :src="good.image" alt="">
    </div>
    <div class="goodInfo">
      <div class="title">{{good.title}}</div>
      <div class="car-desc">{{good.desc}}</div>
      <div class="price">
        <span>￥{{good.price}}</span>
        <span class="number"><span @click="sub">-</span>{{good.count}}<span @click="add">+</span></span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
import {goodInfo} from "@/network/detail";


export default {
  name: "CartListItem",
  components: {CheckButton},
  data(){
    return{
      isCheck:false,
    }
  },
  props:{
    good:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkClick(){
      let goodList = this.$store.getters.carList;
      let filter = goodList.filter(item => item.iid=== this.good.iid);
      filter[0].isChecked = !filter[0].isChecked
    },
    add(){
      this.$store.dispatch("carAddOne",this.good);
    },
    sub(){
      if (this.good.count>1) {
        this.$store.dispatch("carSubOne", this.good);
      }
    },
    imgClick(){
      this.$router.push('/detail/'+this.good.iid);
    }
  }
}
</script>

<style scoped>
.cartListItem{
  margin-top: 5px;
  display: flex;
  border-bottom:1px solid #a1a1a1;
}
.cartListItem div{
  margin-left: 10px;
  /*padding-left: 10px;*/
}
.selectItem{
  margin-left:5px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.image img{
  border-radius: 5px;
  width: 70px;
  height: auto;
}

.goodInfo{
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  flex-direction: column;
  align-content: center;
}
.goodInfo div{
}
.title{
  width: 30%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
  flex: 1;
  font-size: 14px;
}
.car-desc{
  width: 140px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  flex: 1;
}
.price{
  font-size: 18px;
  color:  #FA666D;
}
.number{
  position: absolute;
  right: 8px;
  color: #FA994D;
}
.number span{
  padding: 0;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  border-radius: 50%;
  /*background-color: #666666;*/
}
.select{
  position: relative;
  right: 5px;
}
</style>