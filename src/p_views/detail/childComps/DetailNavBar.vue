<template>
  <nav-bar class="nav">
    <div slot="left" @click="leftback">
      <img src="~assets/img/common/back.svg" alt="" class="img">
    </div>
    <div slot="center" class="detailnavbar">
      <div v-for="(item,index) in items"
           :class = "{active: currentIndex == index}"
           class="detailnavbaritem"
          @click="itemClick(index)"
          :key="index"
      >
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/nvabar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      items : ["商品","参数","评论","推荐"],
      currentIndex:0
    }
  },
  methods:{
    leftback(){
      this.$router.go(-1);
    },
    itemClick(index){
      this.currentIndex = index;
      this.$emit('NavBarClick',index)
    }
  }
}
</script>

<style scoped>
.nav{
  background-color: #fff;
}
.detailnavbar{
  display: flex;
  
}
.detailnavbaritem{
  flex:1;
  line-height: 49px;
}
.img{
  margin-top: 13px;
}
.active{
  color: var(--color-high-text);
}
</style>