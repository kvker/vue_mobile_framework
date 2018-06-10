<template lang="pug">
.content
	button(
		@click="$emit('toggleAccordion')"
	) 点我打开左侧栏
	div 页面2
</template>

<script lang="coffee">
export default {}
</script>

<style lang="sass" scoped>
button
	width: 1rem
	height: .52rem
	color: white
	background: red
</style>
