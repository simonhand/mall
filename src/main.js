import Vue from 'vue'
import App from './App.vue'
import m_router from "@/router";
import p_router from "@/p_router"
import store from "@/store";
import toast from "@/components/common/toast";
import fastclick from 'fastclick'
import lazyload from 'vue-lazyload'


// const router = /Android| webos | iphone iPod BlackBerry liPad/i. test (navigator.userAgent) ? m_router : p_router;

const router = m_router

//添加事件总线
Vue.prototype.$bus = new Vue();
//安装toast插件
Vue.use(toast);
Vue.use(lazyload,{
  loading: require("@/assets/img/common/placeholder.png")
});
//解决移动端300ms延迟
fastclick.attach(document.body);



new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
