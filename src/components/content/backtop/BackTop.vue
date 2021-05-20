<template>
 <div class="back-top" >
   <img src="~assets/img/common/top.png" alt="">
 </div>
</template>

<script>
export default {
  name: "BackTop",
  methods:{
  }
}
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 10px;
  bottom: 56px;
  z-index: 4;
}
.back-top img{
  width: 43px;
  height: auto;
}
</style>