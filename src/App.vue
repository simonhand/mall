<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar v-if="isPhone"></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar,
  },
  computed:{
    isPhone(){
      // console.log( this.$router.indexof("/home"));
      //对第一个路由地址按“_”前面切片
      return this.$router.options.routes[1].path.split("_")[0] !== '/p';
    }
  }
}
</script>

<style>
  @import "~assets/css/normalize/base.css";
</style>
