<template lang="pug">
	.page.welcome
		span 欢迎使用本系统，正在验证登录情况...
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/account')
    }, 300)
  }
}
</script>

<style lang="less" scoped>
.welcome {
  justify-content: center;
  align-items: center;
}
</style>
