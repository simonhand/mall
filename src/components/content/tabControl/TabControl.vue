<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{active : obj.currentIndex === index}"
          @click = "itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
const obj = {
  currentIndex:0
}
export default {
  name: "TabControl",
  props:{
    titles:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      obj,
    }
  },
  methods:{
    itemClick:function (index){
      this.obj.currentIndex = index;
      this.$emit("TabControlClick",index);
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
  z-index: 1;
}
.tab-control-item{
  flex: 1;
  line-height: 40px;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-high-text);
}
</style>