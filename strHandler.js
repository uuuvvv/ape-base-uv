// 返回字符串中字符最多的字符以及数量
let str = 'dshfsdjflsdjflsjf'
let o = {}
for (let i = 0; i < str.length; i++) {
  let item = str[i];
  o[item] = o[item] + 1 || 1;
}
let n = 0;
// 取出最大值
for (let k in o) {
  n = o[k] > n ? o[k] : n
}
console.log(n, o);
 git config--global user.email "you@example.com"
 git config--global user.name "Your Name"