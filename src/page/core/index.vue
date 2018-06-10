<template lang="pug">
.page
	accordion.self-css(
		@toggleAccordion="toggleAccordion"
		:class="accordionFrom"
		:from="accordionFrom"
		:show="accordionShow"
	)
		template(slot="content")
			.code
				i.iconfont &#xe7b5;
				span 推荐邀请
			.user-link
				.user-logo
					img(:src="defaultImg")
				i.iconfont &#xe620;
			.user-name 王小贝
			.user-count
				i.iconfont &#xe61c;
				span 积分999
			.shop-list
				p 四季青门店
			.user-option
				.option-item
					i.iconfont &#xe64c;
					span 设置
				.option-item(@click="$router.push('/account')")
					i.iconfont &#xe61f;
					span 退出登录
	.content-container(
		:class="{ scale: accordionShow }"
	)
		router-view(
			@toggleAccordion="toggleAccordion"
		)
		tabbar(
			@clickItem="clickTabbarItem"
		)
</template>

<script lang="coffee">
import defaultImg from 'icon/defaultHead.png'

export default
	data: ->
		{
			accordionShow: false # 是否显示折叠面板
			navigatorTitle: '' # 导航的 title
			hasLogin: false # 是否已经登录, 默认 null 是未知欢迎页
			accordionFrom: 'left' # 折叠面板出现方位
			defaultImg: defaultImg
		}
	methods:
		toggleAccordion: ->
			this.accordionShow = !this.accordionShow
		clickTabbarItem: (item) ->
			this.navigatorTitle = item.name
			this.$router.push(item.path)
		checkLoginStatus: (hasLogin) ->
			this.hasLogin = hasLogin
</script>

<style lang="sass" scoped>
.content-container
	position: relative
	flex: 1
	background: white
	transition: all .3s linear
	& > .content
		position: absolute
		left: 0
		top: 0
		width: 100%
		height: e('calc(100% - .52rem)')
.scale
	transform: translateX(55%) scale(.7)
.self-css
	padding-left: .32rem
	background-image: linear-gradient(-225deg, rgba(0,0,0,0.56) 0%, #000000 100%)
.code
	padding: .33rem .16rem .42rem
	display: flex
	flex-direction: row-reverse
	color: rgba(255,255,255,0.85)
	font-size: 14px
	align-items: center
	>i
		margin-left: 0.1rem
.code-pic
	width: .18rem
	height: .18rem
	border: 1px solid #fff
	margin-left: .08rem
.user-link
	height: .7rem
	margin-bottom: .16rem
	display: flex
	align-items: center
	color: #fff
.user-logo
	width: .7rem
	height: .7rem
	border-radius: 50%
	border: 1px solid #fff
	overflow: hidden
	margin-right: 1.3rem
	>img
		width: 100%
		height: 100%
.user-name
	color: #fff
	font-size: 20px
	margin-bottom: .08rem
.user-count
	font-size: 12px
	color: rgba(255,255,255,0.9)
	margin-bottom: .12rem
	display: flex
	align-items: center
	>i
		margin-right: .08rem
.shop-list
	height: 2.8rem
	overflow-y: auto
	>p
		padding: 0
		margin-bottom: .08rem
		color: rgba(255,255,255,0.45)
		font-size: 12px
.user-option
	position: absolute
	bottom: .36rem
	left: .32rem
	right: 0
	.option-item
		color: #fff
		display: flex
		align-items: center
		&:first-child
			margin-bottom: .2rem
		>i
			margin-right: 0.1rem
</style>
