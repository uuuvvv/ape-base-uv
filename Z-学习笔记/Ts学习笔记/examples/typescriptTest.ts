
// symbol 类型的值不是字面量类型，不能作为计算属性名（个人认为：计算属性名即变量的值作为对象属性名。）
const x:unique symbol = Symbol();
const y:symbol = Symbol();
// 接口
interface Foo {
    [x]:string;
    // [y]:string;//错误。
}

// ts 中只允许使用 const 声明 和 readonly 属性声明来定义 ‘ unique symbol ’类型的值。
const a:unique symbol  = Symbol();

interface withUniqueSymbol {
    // 必须使用readonly 修饰符
    readonly b:unique symbol;
}
// class 类
class C {
    // 必须使用 static 和 readonly 修饰符
    static readonly c: unique symbol = Symbol();
}

// 数值型枚举
enum Direction {
    Up,
    Down,
    Left,
    Right
}
const direction:Direction = Direction.Up;

// 字符串枚举

enum Dir {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',

    u = Up,
    d = Down,
    l = Left,
    r = Right
}