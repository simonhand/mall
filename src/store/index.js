import Vue from "vue";
import Vuex from "vuex"
import {actions} from "@/store/actions";
import {mutations} from "@/store/mutations";
import getters from "@/store/getters";
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    carList:[],
    isAll:{
      type:Boolean,
      default(){
        return true
      }
    },
  },
  mutations,
  actions,
  getters,
})
export default store