# <span style='color:#ffc770;font-size:22px;font-weight:700' id='top'>猿题库($interview-question-uuuvvv$)</span>
## <span style='color:#ffaa25;font-size:18px;font-weight:700'>目的</span>

> 通过最近的诸多面试，处处碰壁，有时候甚至怀疑自己的编码能力是不是真的有问题？各种原理，各种算法，各种插件库，还有各种模式等，让我蒙上加蒙。与其那么蒙，还不如在在这儿积累一下，尽管可能积累了还是会忘记，但是不积累，不去学习，或许永远都不知道那个问题的正确答案是什么样子吧。<br/>
> 同时也希望这个库，可以能够帮助更多像我这样的处境的人吧，可能写的地方不太好，还望能有大佬指教，共同进步。
*************************************************************

## <span style='color:#ffaa25;font-size:18px;font-weight:700' id='mdlist'>模块列表</span>
|模块名称|介绍（简单介绍，详细请点击模块名称，跳转对应模块。）|
|:-:|:-:|
|[C1-codes（单一方法代码）](#codes)|单独的代码片段|
|[C2-modules（代码模块）](#modules)|具有一定功能的代码块|
|[F1-浏览器相关面试](#f1)|性能优化、http、浏览器引擎、浏览器渲染机制等|
|[F2-CSS面试题](#f2)|动画、过渡、布局、一些样式小代码等|
|[F3-JS面试题](#f3)|js数据类型、js对象（数组、时间、正则等）方法<br/>部分自定义方法的实现和探讨以及应用场景|
|[F4-VUE面试题](#f4)|vue生命周期、组件间通信、MVVM实现原理等|
|[F5-npm相关](#f5)|常见指令、使用技巧|
|[F6-git相关](#f6)|常见指令、使用技巧|


*************************************************************

## <span style='color:#ffaa25;font-size:18px;font-weight:700'>模块内容</span>
### <p style='color:#ff8080;font-size:18px;font-weight:700'>CODE (前缀为‘Cx-’，属于代码相关文件夹)</p>

#### <span style='color:#00ff80;font-size:18px;font-weight:700' id='codes'>C1-codes（单一方法代码） </span>----[模块列表](#mdlist)

> 这一部分，我准备就是去整理一些需要进行代码编写的面试题，用来提升自己的逻辑开发能力。下表就是一个清单。
##### <span style='font-size:16px;font-weight:400'> 面试相关（[`interviewQuestion.js`](/C1-Codes/js/interviewQuestion.js)）</span>
|序号|问题|方法|重点|
|:-:|:-:|:-:|-|
|1|返回字符串中字符最多的字符以及数量| `tohandlerstr`||
|2|将‘20584’转化成‘二万零五百八十四’| `toChangNum`||
|3|如何解决js中0.1+0.2不等于0.3的问题| `toHandlerC`||
|4|数组中任意三项和等于10|`toCompuSum`||
|5|第1个人10，第2个比第1个人大2岁，依次递推，请用递归方式计算出第8个人多大？|`toComAge`||
|6|实现一个函数，能够对任意长度的版本号字符串进行从小到大的排序|`sortVersions`||


##### <span style='font-size:16px;font-weight:400'> 算法相关（[`JSAlgorithm.js`](/C1-Codes/js/jsAlgorithm.js)）</span>
|序号|算法名称|方法名称|
|:-:|:-:|:-:|
|1|冒泡排序|`bubbleSort`|


##### <p style='font-size:16px;font-weight:400'>函数防抖与函数节流 ([`funStabAndThrot.js`](/C1-Codes/js/funStabAndThrot.js))</p>
|序号|方法|名称|
|:-:|:-:|:-:|
|1|`stabilFn`|函数防抖|
|2|`debounce`|函数防抖|
|3|`throttle`|函数节流|


#### <span style='color:#00ff80;font-size:18px;font-weight:700' id='modules'>C2-modules（代码模块）</span>----[模块列表](#mdlist) 

|序号|文件名称|解释内容|补充内容|是否完成Y/N|
|:-:|:-:|:-:|:-:|:-:|
|1|||||


*************************************************************
### <p style='color:#ff8080;font-size:18px;font-weight:700'>Files （前缀为‘Fx-’，属于文档文件夹，以部分常见面试题为主）</p>

#### <span style='color:#00ff80;font-size:18px;font-weight:700' id='f1'>F1-浏览器相关面试</span>----[模块列表](#mdlist)
|序号|文件名称|解释内容|补充内容|状态|
|:-:|:-:|:-:|:-:|:-:|
|1|[浏览器性能优化](/F1-浏览器相关面试题/性能优化/浏览器性能优化方法.md)|||N|
||||||


#### <span style='color:#00ff80;font-size:18px;font-weight:700' id='f2'>F2-CSS面试题 </span> ----[模块列表](#mdlist)
|序号|文件名称|解释内容|状态|
|:-:|:-:|:-:|:-:|
|1|[css相关小知识点](/F2-CSS面试题/样式片段/css相关小知识点.md)||continue|


#### <span style='color:#00ff80;font-size:18px;font-weight:700' id='f3'>F3-JS面试题</span> ----[模块列表](#mdlist)
|序号|文件名称|解释内容|状态|
|:-:|:-:|:-:|:-:|
|1|[函数防抖](/F3-JS面试题/函数防抖与函数节流/函数防抖.md)与[函数节流](/F3-JS面试题/函数防抖与函数节流/函数节流.md)||N|
|2|[深克隆](/F3-JS面试题/深克隆与浅克隆/深克隆.md)与[浅克隆](/F3-JS面试题/深克隆与浅克隆/浅克隆.md)||N|



#### <span style='color:#00ff80;font-size:18px;font-weight:700' id='f4'>F4-VUE面试题</span> ----[模块列表](#mdlist)
|序号|文件名称|解释内容|补充内容|状态|
|:-:|:-:|:-:|:-:|:-:|
|1|vue生命周期|||N|
|2|vue组件间通信|||N|
|3|MVVM实现原理|||N|
|4|$Route与 $Router的区别|||N|
|5|keep-alive|||N|
|6|vue自定义指令|||N|


#### <span style='color:#00ff80;font-size:18px;font-weight:700' id='f5'>F5-npm相关</span> ----[模块列表](#mdlist) 
|序号|文件名称|解释内容|状态|
|:-:|:-:|:-:|:-:|
|1|[npm相关命令](/F5-NPM相关/npm相关命令.md)||continue|


#### <span style='color:#00ff80;font-size:18px;font-weight:700' id='f6'>F6-git相关</span>----[模块列表](#mdlist) 
|序号|文件名称|解释内容|状态|
|:-:|:-:|:-:|:-:|
|1|[git相关命令](/F6-GIT相关/git相关命令.md)||continue|

*************************************************************
[返回模块列表](#mdlist) <br/>
[返回顶部](#top)

<p style='color:red;font-size:15px;font-weight:700'>TODO：此处只是外部文件夹得介绍，后期等问题积累的多了，可能会写成层级介绍，现在不会！</p>
<p style='color:red;font-size:15px;font-weight:700'>注:文件都是自己一点点敲的，内容有雷同者，敬请谅解，如有引用，我会标注参考链接。</p>
<p style='color:green;font-size:15px;font-weight:700'>最后希望能有所收益吧。</p>