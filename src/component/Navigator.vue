<template lang="pug">
header.navigator(
	:class="className"
)
	p.left(@click="$emit('clickLeft')" v-html="left")
	p.title(v-html="title")
	p.rightMiddle(@click="$emit('clickRightMiddle')" v-html="rightMiddle")
	p.right(@click="$emit('clickRight')" v-html="right")
</template>

<script>
export default {
	props: {
		className: {
			type: String
		},
		left: {
			type: String,
			default: "<i class='iconfont'>&#xe619;</i>返回",
		},
		title: {
			type: String
		},
		right: {
			type: String,
		},
		rightMiddle: {
			type: String,
		}
	},
}
</script>

<style lang="less" scoped>
.navigator {
	position: relative;
	width: 100%;
	height: .4rem;
	line-height: .4rem;
	padding: 0;
	text-align: center;
	font-size: .18rem;
	background-color: #f5f5f5;
	.title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.left, .right, .rightMiddle{
		font-size: .14rem;
		width: .6rem;
		position: absolute;
		top: 0;
		right: 0;
	}
	.left {
		left: 0;
		text-align: left;
		padding-left: 0.13rem;
	}
	.right {
		text-align: right;
		padding-right: .16rem;
	}
	.rightMiddle{
		width: 0.3rem;
		text-align: right;
		right: 0.6rem;
	}
}
.navigator.red{
	background: linear-gradient(-269deg, #ff4063 0%, #ff738c 100%);
	color: #fff;
}
</style>
