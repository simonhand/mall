<template>
    <div>
      <nav-bar class="nav-bar">
        <template #center>我的档案</template>
      </nav-bar>
      <user-info/>
      <list-view></list-view>
    </div>
</template>

<script>
import NavBar from "@/components/common/nvabar/NavBar";
import UserInfo from '@/views/profile/childComps/UserInfo'
import ListView from '@/views/profile/childComps/ListView'
export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    ListView
  }
}
</script>

<style scoped>
.nav-bar {
  line-height: 44px;

    background: -webkit-linear-gradient(left, #FA5A55, #FA994D);
    color: #fff;
    font-weight: bold;
}
</style>
