"use strict";
// symbol 类型的值不是字面量类型，不能作为计算属性名（个人认为：计算属性名即变量的值作为对象属性名。）
var x = Symbol();
var y = Symbol();
// ts 中只允许使用 const 声明 和 readonly 属性声明来定义 ‘ unique symbol ’类型的值。
var a = Symbol();
// class 类
var C = /** @class */ (function () {
    function C() {
    }
    // 必须使用 static 和 readonly 修饰符
    C.c = Symbol();
    return C;
}());
