// 返回字符串中字符最多的字符以及数量
let str = 'dshfsdjflsdjflsjf'
let o = {}
// 整理字符串
for (let i = 0; i < str.length; i++) {
  let item = str[i];
  o[item] = o[item] + 1 || 1;
}
let t = str[0];
let n = 0;
// 取出最大值
for (let k in o) {
  // n = o[k] > n ? o[k] : n
  if (o[k] > n) {
    t = k;
    n = o[k];
  }
}
console.log(t, n);