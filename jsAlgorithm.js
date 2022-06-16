// js相关算法

// 冒泡排序
function bubbleSort() {
  let a = [1, 2, 5, 8, 9, 45, 12, 65];
  for (let i = 0; i < a.length; i++) {
    for (let j = i+1; j < a.length; j++) {
      if (a[i] > a[j]) {
        let c = a[i];
        a[i] = a[j];
        a[j] = c;
      }
    }    
  }
  console.log(a);
}