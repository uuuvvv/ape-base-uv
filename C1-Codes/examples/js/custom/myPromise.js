// 第一题
// 请⼿动实现Promise.all⽅法，要求如下：
// 接收⼀个 Promise 实例的数组或具有 Iterator 接⼝的对象作为参数；
// 这个⽅法返回⼀个新的 promise 对象；
// 遍历传⼊的参数，⽤Promise.resolve()将参数"包⼀层"，使其变成⼀个promise对象；
// 参数所有回调成功才是成功，返回值数组与参数顺序⼀致；
// 参数数组其中⼀个失败，则触发失败状态，第⼀个触发失败的 Promise 错误信息作为
// Promise.all 的错误信息，且第⼀个失败状态触发之后，需要中⽌其他尚未完成的请求；
// promise实例同时请求并发限制最⼤为10，即同时最多有10个promise处于请求状态；

function PromiseAll(params){
  // 返回一个promise对象
  return new Promise((resolve,reject)=>{
    // 判断参数是否是数组
    if(!Array.isArray(params)){
      return reject('参数错误，应为数组')
    }else{
      // 限制请求个数，只取前10项
      params = params.slice(0,10);
    }
    // 计数器，用来标识当前执行到数组的第几项
    let counter = 0;
    // 执行结果的数组
    let result = [];
    for (let i = 0; i < params.length; i++) {
      let item =  params[i];
      Promise.resolve(item).then(res=>{
        counter++;
        result[i] = res
        if(counter===params.length){
          return resolve(result);
        }
      },err=> { return reject(err) })
    }
  })
}