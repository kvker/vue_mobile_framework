<template lang="pug">
.content
	button(
		@click="$emit('toggleAccordion')"
	) 点我打开左侧栏
	div 页面3
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
button {
	width: 1rem;
	height: .52rem;
	color: white;
	background: red;
}
</style>
