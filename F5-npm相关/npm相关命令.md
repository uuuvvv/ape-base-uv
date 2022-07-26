### npm命令相关----[返回README](/README.md)<span id='top'></span>

<span style='color:red'>注释1：点击下表中的命令名称，可直接跳转到对应命令所在位置</span>
<p style='color:red'>注释2：所有命令排名不分先后</p>

| <span id='back'>命令链接表</span> [返回README](/README.md)|
|:-:|
|[查看镜像配置地址](#1)|
|[设置淘宝镜像](#2)|
|[设置npm镜像](#3)|
|[查看npm版本](#4)|
|[初始化文件](#5)|
|[安装依赖](#6)|
|[卸载指定依赖包](#7)|
|[查看已安装的包](#8)|
|[npm 帮助命令](#9)|
|[更新指定包](#10)|
|[查看配置信息](#11)|
|[查看安装包路径](#12)|
|[查看是否安装对应包以及版本信息](#13)|
||

### 具体命令以及相关解释

- <span id='1'>查看镜像配置地址</span>-----<span>[返回表](#back)</span>

```
npm get registry
```

- <span id='2'>设置淘宝镜像<span>-----<span>[返回表](#back)</span>

```
npm config set registry https://registry.npm.taobao.org
```

- <span id='3'>设置`npm`镜像<span>-----<span>[返回表](#back)</span>

```
npm config set registry https://registry.npmjs.org
```

- <span id='4'>查看`npm`版本<span>-----<span>[返回表](#back)</span>

```
npm -v
```

- <span id='5'>初始化文件<span>-----<span>[返回表](#back)</span>

```
npm init
<!-- 增加-y可以快速生成默认的package.json文件 -->
npm init -y
```

> 使用`npm init` 命令后，会在当前文件夹中生成一个`pakeage.json`文件，此文件用来记录当前项目的详细信息以及我们安装包的相关信息。

- <span id='6'>安装依赖<span>-----<span>[返回表](#back)</span>

> 1.全部安装：会根据项目中的`package.json`文件中的信息，下载所有项目所依赖的包。

```
npm install 
或者 
npm i
```

> 2.具体安装：安装指定的依赖包，指定依赖包的版本。

```
// 一般安装
npm install xxx
// 只用于开发环境
npm install xxx --save-dev
<!-- 会发布于生产环境 -->
npm install xxx --save
<!-- 指定固定版本的依赖包 -->
npm install xxx@1.0.1
```

- <span id='7'>卸载指定依赖包<span>-----<span>[返回表](#back)</span>

```
npm uninstall  xxx
```

- <span id='8'>查看已安装的包<span>-----<span>[返回表](#back)</span>

```
<!-- 当前 -->
npm list
<!-- 全局 -->
npm list -g 
```

- <span id='9'>`npm` 帮助命令<span>-----<span>[返回表](#back)</span>

```
npm --help
```

- <span id='10'>更新指定包<span>-----<span>[返回表](#back)</span>

```
npm update xxx 
```

- <span id='11'>查看配置信息<span>-----<span>[返回表](#back)</span>

```
npm config list
```

- <span id='12'>查看安装包路径<span>-----<span>[返回表](#back)</span>

```
<!-- 当前 -->
npm root
<!-- 全局 -->
npm root -g
```

- <span id='13'>查看是否安装对应包以及版本信息<span>-----<span>[返回表](#back)</span>

```
npm ls xxx 
<!-- 全局查询 -->
npm ls xxx -g 
```
[返回表](#back)<br/>
[返回顶部](#top)<br/>
[返回README](/README.md)