<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
  
  </div>
</template>

<script>

import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
  @import "~assets/css/normalize/base.css";
</style>
