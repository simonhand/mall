import axios from "axios";

export  function request(config) {
    const instace = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  })
  //拦截器
  //请求拦截
  instace.interceptors.request.use(request => {
    // console.log(request);
    return request;
  },err => {
    // console.log(err);
  })
  //响应拦截
  instace.interceptors.response.use( res =>{
    // console.log(res);
    return res.data;
  }, err => {
    console.log(err);
  })

  return instace(config)

}


// export  function request(config, success, failure) {
//   return new Promise((resolve,reject) => {
//     const instace = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/m5',
//       timeout: 5000,
//     });
//     instace(config).then(
//       res => {
//         resolve(res);
//       }
//     ).catch( err => {
//       reject(err);
//     })
//   })
// }
//   //发送真正的网路请求
//   instace(config)
//     .then( res => {
//       console.log(res);
//       success(res);
//     })
//     .catch( err => {
//       console.log(err);
//       failure(err);
//     })
// }