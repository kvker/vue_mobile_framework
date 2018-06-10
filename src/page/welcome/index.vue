<template lang="pug">
	.page.welcome
		span 欢迎使用本系统，正在验证登录情况...
</template>

<script lang="coffee">
export default
	mounted: ->
		setTimeout ->
			@$router.push('/account')
		, 300
</script>

<style lang="sass" scoped>
.welcome
	justify-content: center
	align-items: center
</style>
