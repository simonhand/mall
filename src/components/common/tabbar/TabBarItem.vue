<template>
  <div class="tab-bar-item" @click="itemClick">
    <div  v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else> <slot name="item-icon-active" ></slot></div>
   <div :style="activeStyle"> <slot name="item-text" ></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBaritem",
  props:{
    path: String,
    activeColor :{
      type:String,
      default:"red",
    }
  },
  data(){
    return{

    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path);
      // this.$router.options.routes[1].path.split("_")[0]
      
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
},
    activeStyle(){
      return this.isActive? {color : this.activeColor}:{};
    }
  }

}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active{
  color: red;
}
</style>