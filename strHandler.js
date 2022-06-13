// 返回字符串中字符最多的字符以及数量
function tohandlerstr() {
  let str = "dshfsdjflsdjflsjf";
  let o = {};
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
  return {
    t,
    n,
  };
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

// 将‘20584’转化成‘二万零五百八十四’
function toChangNum() {
  let numList = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  let list = ["十", "百", "千", "万"];
  let numStr = "20008";
  let flag = false;
  let str = "";
  for (let i = 0; i < numStr.length; i++) {
    let item = numStr[i];
    if (item != 0) {
      if (i == numStr.length - 1) {
        str = str + numList[item];
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
  return str;
}

// 如何解决js中0.1+0.2不等于0.3的问题
function tohandlerC() {
  let a = 0.1;
  let b = 0.2;
  let c = 0.3;
  // 关键点：Number.EPSILON 属性表示 1 与Number可表示的大于 1 的最小的浮点数之间的差值。无限接近0,且大于0 ；约等于2的-52次方
  Number.EPSILON = (() => {
    //解决兼容性问题
    return Number.EPSILON ? Number.EPSILON : Math.pow(2, -52);
  })();
  console.log(Math.abs(a + b - c) < Number.EPSILON);
}
