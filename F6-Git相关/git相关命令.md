### `git` 命令相关-----[返回README](/README.md)<span id='top'></span>

<span style='color:red'>注释1：点击下表中的命令名称，可直接跳转到对应命令所在位置</span>
<p style='color:red'>注释2：所有命令排名不分先后</p>


|`git`命令列表 <span id='back'>0.0</span>[返回README](/README.md)|
|:-:|
|[配置个人用户名和邮箱](#1)|
|[查看个人用户名和邮箱](#4)|
|[查看git版本](#2)|
|[查看git配置列表以及单个配置的值](#3)|
|[创建仓库](#5)|
|[克隆仓库](#6)|

### `git`命令

- <span id='1'>配置个人用户名和邮箱</span>--- <span>[返回表](#back)</span>
```
$ git config --global user.name "xxx"
$ git config --global user.email xxx@163.com
```
> 增加了`--global`选项，当前主机用户所有项目都会默认使用这个配置的用户信息。
> 如果特定项目需要使用其他的配置，可以去掉`--global`进行重新配置即可。新的设定保存在当前项目的 `.git/config`文件里。

- <span id='2'>查看git版本</span>--- <span>[返回表](#back)</span>
```
$ git --version
```

- <span id='3'>查看git配置列表以及单个配置的值</span>--- <span>[返回表](#back)</span>
```
$ git config --list
```
> 也可以直接查询某个配置
```
$ git config 属性名
```

- <span id='4'>查看个人用户名和邮箱</span>--- <span>[返回表](#back)</span>
```
$ git config user.name
$ git config user.email
```

- <span id='5'>创建仓库</span>--- <span>[返回表](#back)</span>
```
$ git init
```
> 执行完该命令，文件夹中会生出一个隐藏文件夹.git,里面包含了资源的所有元数据

- <span id='6'>克隆仓库</span>--- <span>[返回表](#back)</span>
```
$ git clone https://github.com/uuuvvv/mynote-uuuvvv.git
```

<p style='color:red'>注释3：大部分都不是原创，文档内容参考其他网站。自己只是做了个搬砖工，目的也就是图个方便。</p>

### 参考
- 菜鸟教程 <https://www.runoob.com/git/git-tutorial.html>


[返回表](#back)<br/>
[返回顶部](#top)<br/>
[返回README](/README.md)