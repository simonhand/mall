<template>
 <div class="toast" v-show="isShow">
   {{message}}
 </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false

    }
  },
  methods:{
    isToastShow(message,duration = 1000){
      this.message = message;
      this.isShow = true;
      setTimeout(()=>{
        this.isShow = false;
        this.message = ''
      },duration);
    }
  }
}
</script>

<style scoped>
.toast{
  text-align: center;
  overflow: hidden;
  color: white;
  height: 40px;
  width: 150px;
  border-radius: 30px;
  position: fixed;
  padding: 11px 10px 8px 10px;
  margin-left: 50%;
  bottom: 60px;
  transform: translateX(-50%);
  background-color: rgba(0,0,0,.5);
  z-index: 10;
}
</style>