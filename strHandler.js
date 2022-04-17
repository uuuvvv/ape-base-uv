// 返回字符串中字符最多的字符以及数量
() => {
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
}

// 第1个人10，第2个比第1个人大2岁，依次递推，请用递归方式计算出第8个人多大？
() => {
  let num = 8;

  function fu(n) {
    if (n === 1) {
      return 10
    }
    return fu(n - 1) + 2;
  }
  fu(num);
  console.log(fu(num))
}

// 将‘20584’转化成‘二万零五百八十四’
() => {
  let numList = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  let list = ['十', '百', '千', '万'];
  let numStr = '20008';
  let flag = false;
  let str = ''
  for (let i = 0; i < numStr.length; i++) {
    let item = numStr[i];
    if (item != 0) {
      if (i == numStr.length - 1) {
        str = str + numList[item]
      } else {
        str = str + numList[item] + list[numStr.length - 2 - i];
      }
      flag = false;
    } else {
      if (!flag) {
        flag = true;
        str = str + numList[item];
      }
    }
  }
  console.log(str);
}