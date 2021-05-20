<template>
 <div class="bottom-bar">
   <div class="check-content">
     <check-button class="check-btn" @click.native="AllClick" :class="{active: isAll}"/>
     <span>全选</span>
   </div>
   <div class="check-content">
      <div> 共计: <span class="price">{{total}}</span></div>
   </div>
   <div class="check-out">
      结算({{carLength}})
   </div>
 </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
import {mapGetters} from "vuex"
export default {
  name: "CartBottomBar",
  components: {CheckButton},
  props:{
    goodList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed:{
    total(){
      return this.goodList.filter( item => item.isChecked === true).reduce( (sum,item) => sum + parseFloat(item.count) * parseFloat(item.price),0);
    },
    ...mapGetters(['carLength','carList']),
    isAll(){
      return this.$store.getters.isCheckAll;
    }
  },
  methods:{
    AllClick(){
      this.$store.commit("all_is_true_or_false");
      if (this.isAll){
        this.carList.map( item =>{
          item.isChecked = false;
        })
      }
      else {
        this.carList.map( item =>{
          item.isChecked = true;
        })
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  z-index: 9;
  display: flex;
  text-align: center;
  font-size: 14px;
}
.check-btn{
  margin: 5px;
  display: flex;
  width: 18px;
  height: 18px;
  align-items: center;
  white-space: nowrap;
  line-height: 18px;
}
.check-content{
  flex: 1;
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.active{
  background-color: #FA5A55 ;
}
.price{
  color:  #FA666D;
  font-size: 18px;
}
.check-out{
  background-color:   #FA994D;
  color: #ffffff;
  flex: 1;
  font-size: 18px;
}
</style>