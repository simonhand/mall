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
import NavBar from 'components/common/navbar/NavBar'
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
    background: var(--color-tint);
    color: #fff;
    font-weight: bold;
}
</style>
