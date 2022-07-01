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

// 第1个人10，第2个比第1个人大2岁，依次递推，请用递归方式计算出第8个人多大？
function toComAge() {
  let num = 8;

  function fu(n) {
    if (n === 1) {
      return 10;
    }
    return fu(n - 1) + 2;
  }
  fu(num);
  console.log(fu(num));
  return fu(num);
}

// 实现一个函数，能够对任意长度的版本号字符串进行从小到大的排序；
// 输入:
// ['1.1', '2.3.3', '4.3.5', '0.3.1', '0.302.1', '4.20.0', '4.3.5.1', '1.2.3.4.5'];
// 输出:
// ['0.3.1', '0.302.1', '1.1', '1.2.3.4.5', '2.3.3', '4.3.5', '4.3.5.1', '4.20.0']
function sortVersions(versions){
  return versions.sort((a,b)=>{
    // 截取数组
    let arr1 = a.split('.');
    let arr2 = b.split('.');
    //计数器
    let i = 0;
    // 比较其中两项截取的数组的大小，
    // 因为现在不知道arr1与arr2的数组准确长度，所以while进行遍历会比较好
    while(true){
      let itemA = arr1[i];
      let itemB = arr2[i];
      i++;
      // 判断两数组中是否有不存在的项
      if(itemA == undefined || itemB == undefined){
        return arr1.length - arr2.length;
      }
      // 判断两数组中是否有相等项
      if(itemA == itemB){
        continue;
      }
      // 返回不相等项的结果
      return itemA - itemB;
    }
  })
}
