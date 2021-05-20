import {ADD_COUNTER,ADD_TO_CAR,SUB_COUNTER,ALL_IS_TRUE_OR_FALSE} from "@/store/mutations-type";

export const mutations = {
  //mutations唯一的目的就是修改state中的状态
  //mutations进行简单state操作
  [ADD_COUNTER](state,payload){
    payload.count += 1;
  },
  [SUB_COUNTER](state,payload){
    payload.count -= 1;
  },
  [ADD_TO_CAR](state,payload){
    state.carList.push(payload)
  },
  [ALL_IS_TRUE_OR_FALSE](state){
    state.isAll = !state.isAll;
  },
}