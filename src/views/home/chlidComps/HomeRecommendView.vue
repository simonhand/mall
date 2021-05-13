<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 15px;
  box-shadow: 0 20px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
.recommend-item {
  flex: 1;
}
.recommend-item a img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>