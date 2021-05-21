import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import toast from "@/components/common/toast";
import fastclick from 'fastclick'
import lazyload from 'vue-lazyload'
//添加事件总线
Vue.prototype.$bus = new Vue();
//安装toast插件
Vue.use(toast);
Vue.use(lazyload,{
  loading: require("@/assets/img/common/placeholder.png")
});
fastclick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
