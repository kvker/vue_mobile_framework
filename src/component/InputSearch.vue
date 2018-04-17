<template lang="pug">
	section.search-input
		input.input(
			v-bind="$attrs"
			autofocus
			@keydown.enter="enter"
		)
		img.search
</template>

<script>
export default {
	props: {
	},
	methods: {
		enter(e) {
			console.log(e)
		}
	}
}
</script>

<style lang="less" scoped>
	.search-input {
		width: 100%;
		height: .4rem;
		border-bottom: .01rem solid #d8d8d8;
	}
</style>
