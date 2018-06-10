<template lang="pug">
	.page.type-single
		header.navigator
			p.left(@click="$router.go(-1)")
				i.iconfont(
					v-html="'&#xe619'"
				)
				| 返回
			p.title(v-html="obj.title ? obj.title : '批次'")
			p.right(
				@click="$emit('callback', {result, title: obj.title})"
			) {{obj.right || '完成'}}
		.content
			.cell(
					v-for="(item, index) of obj.items" :key="index"
				)
				label.full
					input.radio(
						type='radio'
						:value='item'
						v-model='result')
					p.title {{item[showKey] || item}}
					p.description {{item[showKey] || item}}
					.show-box
			//- span {{result}}
</template>

<script lang="coffee">
export default
	props:
		obj:
			type: Object
			required: true
		showKey:
			type: String
	data: ->
		{
			isRadio: false
			result: this.obj.items[0]
		}
	mounted: ->
		this.isRadio = this.$route.query.type is 'radio'
</script>

<style lang="sass">
.type-single
	background: white
	padding: 0.16rem
	.navigator
		display: flex
		justify-content: space-between
		align-items: center
		width: 100%
		height: 0.4rem
		padding: 0 .16rem
		border-bottom: 0.01rem solid rgba(0, 0, 0, 0.09)
		.left
		.right
			width: 0.8rem
		.right
			text-align: right
	.content
		margin-top: .4rem
	.cell
		display: flex
		align-items: center
		width: 100%
		height: 0.56rem
		border-bottom: 0.01rem solid rgba(0, 0, 0, 0.09)
		label
			position: relative
			cursor: pointer
			input
				cursor: pointer
				visibility: hidden
				margin-right: 0.2rem
			input:checked + .title + .description + .show-box::before
				background: red
			$width: 0.18rem
			.show-box
				position: absolute
				top: 0
				left: 0
				display: flex
				justify-content: center
				align-items: center
				width: $width
				height: $width
				border-radius: 50%
				border: 0.01rem solid red
				background: transparent
				&::before
					content: ''
					width: 0.08rem
					height: 0.08rem
					border-radius: 0.04rem
					background: transparent
		.full
			display: flex
			align-items: center
			width: 100%
			.description
				margin-left: 0.2rem
				color: rgba(0, 0, 0, 0.45)
</style>
