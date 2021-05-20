import {ADD_COUNTER, ADD_TO_CAR, SUB_COUNTER} from "@/store/mutations-type";


export const actions = {
  addCart(content, product){
    return new Promise(resolve => {
      let flagProduct = content.state.carList.find(
        item => item.iid === product.iid
      );
      if (flagProduct){
        content.commit(ADD_COUNTER,flagProduct);
        resolve('当前商品数量加一');
      }else{
        product.count = 1
        content.commit(ADD_TO_CAR,product);
        resolve('添加成功');
      }
    })
  },
  carAddOne(content,product){
    let One = content.state.carList.find( item =>
      product.iid === item.iid
    )
    content.commit(ADD_COUNTER,One);
  },
  carSubOne(content,product){
    let One = content.state.carList.find( item =>
      product.iid === item.iid
    )
    content.commit(SUB_COUNTER,One);
  }

}