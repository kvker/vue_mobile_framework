[安装](#install)

[代码规范](#rule)

[api 调用规范](#api)

[注释](#comments)

[代码](#code)

[路由](#route)

[组件](#component)

[其他](#other)

### install
1. 临时使用淘宝NPM: `npm --registry https://registry.npm.taobao.org install express`

2. 持久使用使用淘宝NPM: `npm config set registry https://registry.npm.taobao.org`

3. 使用cnpm: `npm install -g cnpm --registry=https://registry.npm.taobao.org`

4. 安装: `npm i`

5. 预启动开发服务: `npm run dev`


### rule
1. 组件、es6模块，scss模块的命名。
	原则：字段、变量、参数、方法、类的命名是否真实反映它们所代表的事物, 是否够望文生义?
	vue组件采用帕斯卡命名法（每一个单词首字母大写），来源：vaue官方文档推荐
	js 模快采用驼峰命名法（从第二个单词起，首字母大写），来源《ECMAScript 6 入门》 等书籍

2. 重要组件、模快 必须加上头部注释，需要写出组件、模快 的用途等等信息，方便后期找到对应的开发者,示例：

	```js
		/*!
		* @fileoverview
		*	列表页面的搜索功能的核心实现
		*
		* @Author Gao.Kaiyong
		* @Date 2017/5/27
		*
		*/
	```

### api
1. api 必须按照 功能模快，划分成一个个 es6 模快进行统一管理。
2. 禁止直接在页面中编写远程调用 api 的代码，严格按需加载。
3. api 接口，必须有简单的说明：

	```js
		/**
		*   系统用户登录
		*
		* @param params
		* @returns {*}
		*/
	```

### comments
> As short as possible（如无必要，勿增注释）：尽量提高代码本身的清晰性、可读性。

> As long as necessary（如有必要，尽量详尽）：合理的注释、空行排版等，可以让代码更易阅读、更具美感。

1. 方法上面必须要有说明，注明 方法的作用，入参，返回值 等等基本信息，示例：

	```js
		/**
		*   修改系统用户密码
		*
		* @param params
		* @returns {*}
		*/
	```
2. 业务逻辑较复杂，或者作用不清晰的代码必须有添加注释，以帮助其他人更好的理解。
3. 预期的错误必须被正确处理，比如 axios 的网络错误等等。

### code
1. 代码复用: 根据“三振法”, 如果代码被复制一次，虽然不喜欢这种方式，但通常没什么问题。但如果再一次被复制，就应该通过提取公共的部分来重构它。

2. 代码的位置是否正确？比如涉及订单的新代码是否在订单服务相关的位置？

> 2017年07月31日新增内容:

1. 代码审计每个月1次
2. 按照checklist 一条条 核对
	1. 参考代码审查规范文档
	2. tab 和空格 不能混用
3. 每一个功能块的明确的可以执行落地的规范，比如第一项，第二项做什么等等
4. api 参数说明没有必要，可以看 rap
5. 组件需要加上参数说明
6. console.log 去掉
7. 严格执行 代码审查
8. view菜单目录按照模块来划分


### route
> pug 内容携带两个可选参数

	```pug
	transition(:name="transitionName")
		router-view(
			:items="routerItems"
			@callback="routerCallback"
		)
	```

> vue 文件添加下面内容，pug 与 js 中

	```js
	include ../../pug/router

	import mixinWatch from 'mixin/watch'
	mixins: [mixinWatch],
	```

> 路由 js 中配置，需要一个空组件做默认显示，才能有不删除父组件的动画效果

	```js
	import Empty from 'page/common/empty.vue'
	{ path: '', component: Empty },
	```

### component

组件名|属性|属性解释|事件|事件解释|备注
- | - | - | - | - | -
BackCircle|-|-|click|点击事件|-
ButtonNormal|text|显示文字|click|-|-
CellCheckBox|title<br>placeholder<br>result|title: checkbox 匹配的文字<br>placeholder: 未选择内容之前显示的文字<br>result: 选择内容后显示的文字|-|-|-
CellNormal|title<br>placeholder<br>result|title: checkbox 匹配的文字<br>placeholder: 未选择内容之前显示的文字<br>result: 选择内容后显示的文字|click|click: 点击事件|-
Confirm|obj.title<br>obj.cancel<br>obj.confirm|title: 标题<br>cancel: 取消按钮，可选<br>confirm: 确认按钮，可选|clickCancel<br>clickConfirm|clickCancel: 点击取消事件<br>clickConfirm: 点击确定事件|需要携带一个匿名 slot 作为内容

### other
1. 每次 会议纪要，checkList 放到 SVN
2. 格式化工具规范