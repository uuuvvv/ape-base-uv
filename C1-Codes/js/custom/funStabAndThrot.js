// 函数防抖(Functional stabilization
// 函数防抖的原理：当持续触发一个事件时，在一定的事件内，事件如果没有再次触发，则方法才会执行；
//               若在这段时间内，再次触发了事件，则根据最后一次触发重新计时。
// 应用场景：搜索框的动态搜索
function stabilFn (callBack, delay) {
  let timer = null
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    callBack()
  }, delay)
}

function debounce (callBack, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callBack.apply(this, args)
    }, delay)
  }
}
// 函数节流(Functional throttle)
// 函数节流的原理：当持续触发同一事件时，再执行一次后，在一定的时间内不在触发，在时间之后，才可以再次触发。
// 应用场景：拖拽事件，滚动事件，射击游戏子弹的发射时间

function throttle (fn ,delay){
  let timer = null;
  let first = true;//是否第一次执行
  let isRun = true;//是否可以执行
  // 如果是初次执行不进行节流
  if(first){
    fn.apply(this);
   first = false;
  }else{
    if(isRun){
      isRun = false;
      timer = setTimeout(()=>{
        fn.apply(this);
        isRun = true;
      },delay)
      clearTimeout(timer)
    }
  }
}