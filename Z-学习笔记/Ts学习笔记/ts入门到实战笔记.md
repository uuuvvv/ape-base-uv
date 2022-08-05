### 目的
> 对于这些内容，其实大部分都是阅读书中的摘抄，我个人觉得单纯的看书也没有什么意思，关键是能记住的知识点也是少之又少，所以觉得把一些重点的话语，敲一遍，也能有点印象，方便日后的使用吧，万一有记不住的地方也不至于再去翻找书籍，或者查阅，直接来翻找自己的笔记，或许能够更快速一点。
### 第二章 `ts`安装以及运行
- 安装 `typescript`

```
npm install typescript -g
```
- 查询`ts`版本
```
tsc --version
```
- 执行时报以下错误：

```log
tsc : 无法加载文件 C:\Users\jyzhl\AppData\Roaming\npm\tsc.ps1
，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.m
icrosoft.com/fwlink/?LinkID=135170 中的 about_Execution_Polici
es。
所在位置 行:1 字符: 1
+ tsc --version
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurit
    yException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

>  解决办法：
>   - 以管理员身份打开`windowsPowerShell`;
>   - 输入命令`set-ExecutionPolicy RemoteSigned`
>   - 界面显示`执行策略更改`选择Y即可。

- 在构建ts文件(`tasks.json`)的配置中修改成如下配置，可以直接使用快捷键进行编译。
```json
  // 学习配置,使用ctrl+shift+b可以直接进行构建。
{
	"version": "2.0.0",
	"tasks": [
		{
			"type": "typescript",
			"tsconfig": "tsconfig.json",
			"problemMatcher": [
				"$tsc"
			],
			"group": {
				"kind": "build",
				"isDefault": true
			},
			"label": "tsc: 构建 - tsconfig.json"
		}
	]
}
```

### 第三章 ts语言基础
- `ts`是`js`的超集；其实`ts`也如同`js`的语法糖。

- 区域注释
```typescript
// #region 区域描述
let x =  0;
// #endregion
```
> 使用 `//#xxx `开始注释；<br/>
> 使用 `//#endxxx `结束注释。<br/>
> 来表示区域注释。

- `well-known symbol`常量
![alt](img/study/epub_35433566_40.jfif)

- js数组和经典数组的存储规则不太一样，经典数组一旦确定长度，就不变修改，而且数组是存放在一段连续的内存空间中。但是js中的数组本质上是对象，所以不具备那种限制。
- 注意:在使用`IIFE`时，最好首尾都要加上分号，防止代码压缩工具产生错误的语法。

- 箭头函数一定是匿名函数

### 第四章 `ts` 语言进阶
- `ts` 中使用`js`的新特性，然后由编译器将代码编译成指定版本的`js`程序，方便编码，程序猿不必太多在意其中的兼容性问题。
  
- `BigInt`(一种新的原始数据类型，同时又属于数值类型的一种。)<br/>
  - 引入`bigint`的原因如下:
    - 由于`Number`类型能够安全的表示的最大整数为 2<sup>53</sup>-1,该数值能够使用内置的`Number`对象上的`MAX_SAFE_INTEGER`属性来表示。
    - `BigInt`类型能够表示任意精度的整数，尤其是大于2<sup>53</sup>-1的整数。
  - 创建`BigInt`
    - 使用`BigInt` 字面量
    ```typescript
    //BigInt 字面量语法，整数后面添加一个n，字母n紧跟数字，中间不允许有空格。 
    const unit = 1n;
    ```
    - 使用`BigInt` 函数
    ```typescript
    // BigInt函数创建bigInt类型的值
    const unit =BigInt(100); //100n
    ```
  - `BigInt` 与 `Number`
    - 在非严格模式上，`BigInt `类型的值可以与`Number`类型的值进行大小以及相等关系的比较；但两种类型的值不能进行数学运算。
    - 严格模式下，`BigInt`类型的值与`number`类型的值永不相等。
    - `Number()`函数可以将`BigInt `类型的值转换为`Number`类型的值，但是二者之间转换可能会丢失精度。
- `可选链运算符`（`?.`）<br/>
  以下三种语法形式：
  - 可选的静态属性访问
    ```typescript
    //obj值为undefined或null，结果为undefined；否者，则为obj.prop；
    obj?.prop
    ```
  - 可选的计算属性访问
    ```typescript
    //obj值为undefined或null，结果为undefined；否者，则为obj[expr]
    obj?.[expr]
    ```
  - 可选的函数调用或者方法调用 
    ```typescript
    //fn值为undefined或null，结果为undefined；否者，则为fn()；
    fn?.()
    ```
  - 短路求值
    可选链运算符左侧操作数的求值结果为`undefined `或`null` ，那么右侧的操作数不会被求值，这种行为被称为短路求值。
    - 二元逻辑运算符 `||`、 `&&` 也具有短路求值的特性。

- `空值合并运算符`
  是一个新的二元逻辑运算符，形式`??`。
  ```typescript
  //当且仅当，运算符左侧值为undefined或null时，返回b，否则返回a；
  a ?? b
  ```
  其同样具备短路求值的特性。
### 第五章 `Typescript`类型基础
#### 5.1 类型注解
- 在`ts`中，可以使用类型注解来明确标识类型。类型注解的语法：一个冒号加上类型组成
```typescript
//语法
:type
// 为常量增加了类型注解，将之标记成了固定的类型。
const greenting:string = 'hello,world';
```
- 类型注解在`ts`中是可选的。

#### 5.2 类型检查
> 类型检查是验证程序中类型约束是否正确的过程。类型检查既可以在程序编译时进行，即静态类型检查；也可以在程序运行时进行，即动态类型检查。<br/>
> `typescript` 支持静态类型检查；`JavaScript` 支持动态类型检查。<br/>
> `typescript` 提供了两种静态类型的检查模式：非严格类型检查（默认方式）；严格类型检查。<br/>
- 非严格类型检查（默认）：此模式下限制相对比较宽泛。
- 严格类型检查
  - 不允许将`undefined` 和`null` 赋值给`string` 类型的变量。
  - 如果本地开发环境开启严格模式，需要在 `tsconfig.json` 文件中进行 `--strict` 的配置；
  ```json
    {
      "compilerOptions":{
        "strict":true
      }
    }
  ```
#### 5.3 原始类型
> `JavaScript`语言中的每种原始类型都有与之对应的`typescript`类型。<br/>
> `Typescript` 增加了枚举类型和字面量类型。
- `Typescript` 中的原始类型：
  - `boolean`
  - `string`
  - `Number`
  - `bigint`
  - `symbol`
  - `undefined`
  - `null`
  - `void`
  - 枚举类型
  - 字面量类型
- `boolean`(语法：`:boolean`)
> `ts `中的`boolean`类型与`js`中的对应，值`true`和`false`

```JavaScript
// 语法
const a:boolean = false;
const b:boolean = true;
```
- `string`(语法：`:string`)

> 该类型能够表示采用 `Unicode utf-16` 编码格式存储的字符序列<br/>
> `string` 类型使用`string`关键字进行表示，同时使用字符串字面量或者模板字符串来创建 `string` 类型的值。
```JavaScript
const a:string  = 'aaaa';
const b:string  = `bbb${a}`;
```

- `number`(语法：`:number`)

> `Typescript` 中的`number` 类型对应于 `JavaScript`中的`number`原始类型。<br/>
> 该类型能够表示采用双精度64位二进制浮点数格式存储的数字。

```Typescript
// 二进制
const  bin:number = 0b1010;
// 八进制
const  oct:number = 0o744;
// 十进制
const int:number = 100；
const float:number = 3.15;
// 十六进制
const hex:number = 0xffffff;
```
- `bigint`(语法：`:bigint`)
> 该类型能够表示`任意精度`的整数，但也`仅能表示整数`。<br/>
> `bigint` 采用了特殊的对象数据结构来表示和存储一个整数。

```JavaScript
// 二进制整数
const bin:bigint = 0b1010n;
// 八进制整数
const oct:bigint = 0o744n;
// 十进制整数
const integer:bigint = 10n;
// 十六进制整数
const hex:bigint = 0xffffffn;
```
- `symbol` 与 `unique symbol`
> `Typescript` 中的 `symbol` 类型对应于 `JavaScript` 中的 `symbol` 原始类型。

``` JavaScript
// 自定义 symbol
const key:symbol = Symbol();

// well-known symbol
const symbolHasInstance:symbol = Symbol.hasInstance;
```
> `symbol` 类型不同于其他原始类型，它不存在字面量形式。<br/>
> `symbol` 类型的值只能通过 `Symbol()`和`Symbol.for()`函数来创建或者直接引用某个`well-known Symbol` 值。

```JavaScript
const s0:symbol = Symbol();
const s1:symbol = Symbol.for('foo');
const s2:symbol = Symbol.hasInstance;
const s3:symbol = s0;
```

> 📌 `Symbol.hasInstance `
>> 执行`instanceof`时运行的内部方法。
>> 每个函数都有一个`Symbol.hasInstance` 方法，用于确定对象是否为函数实例。该方法被定义在`Function.prototype`中，所有对象都继承了`instanceof`属性的默认行为，且这个方法不可写、不可配置和枚举。
>> ```JavaScript
>> obj instanceof Array;
>> //等同于
>> Array[Symbol.hasInstance](obj);
>> ```
>>[参考来自 -- 作者：anleo -- 网站：segmentfault -- 链接：] <https://segmentfault.com/a/1190000019753311><br/>
>> 
>小插曲~~~~~~~~~~~~~~~~~~~~~~~~<br/>

> `unique symbol`类型
> <br/>为了能够将一个 `Symbol` 值视作表示固定值的字面量。`ts` 引入了 `unique symbol` 类型。
> <br/>
> ```JavaScript
> const s0:unique symbol = Symbol();
> const s1:unique symbol = Symbol.for('s1');
> ```
> `unique symbol` 类型主要用于接口、类等类型中的可计算属性名。因为如果使用可计算属性名在接口中添加了一个类型成员，那么必须保证该类型成员的名字是固定的，否则接口定义将失去意义。
 ```Typescript
 const x:unique symbol = Symbol();
const y:symbol = Symbol();
// 接口
interface Foo {
    [x]:string;
    [y]:string;//错误。接口中的计算属性名称必须是引用类型为字面量类型或者’unique symbol‘的表达式。
}
 ```
> `unique symbol`类型的设计初衷是作为一种变通手法，让一个Symbol值具有字面量的性质（表示一个固定的值）。
> <br/>为了能够将某个 `Symbol` 值看做表示固定的字面量， `typescript` 对 unique `symbol` 类型和 `Symbol` 值的使用增加了限制。
> <br/>ts 选择将一个 `symbol` 值与声明它的标识符绑定在一起，并通过绑定了该 symbol 值的标识符来表示 ‘ `symbol` 字面量’。这种设计的前提是要确保 `symbol` 值与标识符之间的绑定关系是不可改变的。
> <br/> `ts` 中只允许使用 `const` 声明 和 `readonly` 属性声明来定义 ‘ `unique symbol` ’类型的值。
```Typescript
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
```
> 应该注意的是使用相同的参数调用 `Symbol.for() `方法实际上返回的是相同的 `symbol` 值
> <br/>两个 `unique symbol` 类型的值，比较永远是 `false`
> <br/> unique symbol 类型是 symbol 类型的子类型，所以可以将 unique symbol 类型的值赋值给 Symbol 类型。
> <br/> 

- Nullable
  - ts 中的 nullable 类型指的是值可以是 undefined 或 null 的类型。
  - 启用了“ --strictNullChecks ”编译选项时， undefined 值和 null 值不再能够赋值给不相关的类型。例如，undefined值和null值不允许赋值给string类型。在该模式下，undefined值只能够赋值给undefined类型；同理，null值也只能赋值给null类型，实际上这种表述不完全准确。因为在该模式下，undefined值和null值允许赋值给顶端类型，同时undefined值也允许赋值给void类型

- void
  - void类型表示某个值不存在，该类型用作函数的返回值类型。若一个函数没有返回值，那么该函数的返回值类型为void类型。除了将void类型作为函数返回值类型外，在其他地方使用void类型是无意义的

- 枚举类型
  - 枚举类型由零个或者多个枚举成员构成，每个枚举成员都是一个命名的常量。
  - 在 ts 中，枚举类型是一种原始类型，通过 enum 关键字来定义。

```Typescript
enum Season{
  Spring,
  Summer,
  Fall,
  Winter,
}
```
> 枚举的分类：
> - 数值型枚举
> - 字符串枚举
> - 异构型枚举

  - 数值型枚举
    - 最常用的枚举类型，是属于 number 类型的子类型，由一组命名的数值常量组成。
    ```typescript
    // 数值型枚举
    enum Direction {
        Up,
        Down,
        Left,
        Right
    }
    const direction:Direction = Direction.Up;
    ```
    - 每个数值型枚举成员都表示一个具体的数字。如果没有设置值，ts 自动计算枚举成员到的值。
    - 未指定初始值的枚举成员，其值为前一个成员的值加1
    - 数值型类型是number 类型的子类型，数值型枚举类型的值可以赋值给number 类型。
    - number 类型也能够赋值给枚举类型，即便number类型的值不在枚举成员值得列表也不会产生错误。
  - 字符串枚举
    - 字符串枚举与数值型枚举相似。字符串枚举成员必须使用字符串字面量或另一个字符串枚举成员来初始化。字符串枚举成员没有自增长行为。
    - 字符串枚举是 string 类型的子类型，因此允许将字符串枚举类型赋值给 string 类型。
    - 不允许将 string 类型赋值给字符串枚举类型，这一点与数值型枚举是不同的
  - 异构型枚举
    - typeScript 允许在一个枚举中同时定义数值型枚举成员和字符串枚举成员，我们将这种类型的枚举称作异构型枚举。
    - 不允许使用计算的值作为枚举成员的初始值
    - 必须为紧跟在字符串枚举成员之后的数值型枚举成员指定一个初始值
  - 枚举成员映射
    > 不论哪种类型的枚举，都可以通过枚举成员名去访问枚举成员值。
    ```typescript
    enum Bool {
      true = 1,
      false = 0
    }
    Bool.true;
    Bool.false;
    Bool[Bool.false];
    Bool[Bool.true];
    ```
    > 数值型枚举，不仅可以通过枚举成员名来获取枚举成员值，还可以通过枚举成员值去获取枚举成员名。
    > <br/> 字符串枚举和异构型枚举，不能通过枚举成员值获取枚举成员名。
  - 常量枚举成员与计算枚举成员
    > 根据枚举成员值将枚举成员划分为两类：常量枚举成员、计算枚举成员
    - 常量枚举成员
      > 无定义初始值，常量枚举类型初始值为0
      ```typescript
      enum Foo{
        A, //0
      }
      ```
      