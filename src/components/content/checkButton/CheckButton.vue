<template>
    <div class="check-button" :class="{check:isCheck}">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
  name :'CheckButton',
  props: {
    isCheck: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>

<style>
.check-button {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #aaa;
}
.check {
    background-color: #FA5A55 ;
   border: 2px solid #aaa;
}
/*.check-button img{*/
/*  position: relative;*/
/*  left: -10px;*/
/*}*/
</style>
