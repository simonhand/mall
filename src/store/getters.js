export default {
  carLength(state){
    return state.carList.length
  },
  carList(state){
    return state.carList
},
  isCheckAll(state){
    state.isAll = true;
    state.carList.forEach((item)=>{
      if (item.isChecked === false){
        state.isAll = false;
      }
    })
    return state.isAll;
  }
}