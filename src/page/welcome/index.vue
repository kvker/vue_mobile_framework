<template lang="pug">
	.page.welcome
		span 欢迎使用本系统，正在验证登录情况...
</template>

<script>
export default {
  mounted() {
    this.checkLoginStatus()
  },
  computed: {
    ...Vuex.mapGetters(['autoLogin'])
  },
  methods: {
    ...Vuex.mapActions('account', ['login']),
    /**
     * 核查登录情况，触发修改 App 登录状态值
		 * welcome 页会检测之前是否有勾选自动登录，若有则 welcome 会执行一次 localStorage 数据登录，成功直接前往 core，失败前往 account
     */
    checkLoginStatus() {
			if (!this.autoLogin) {
				this.$router.push('/account')
				return
			}

			this.login({
				api: this.$config.api.ACCOUNT_LOGIN,
				data: {
					personLoginOrMobile: localStorage.getItem('iHappyAutoLoginUsername'),
					personPassword: localStorage.getItem('iHappyAutoLoginMD5Password'),
					scope: 'person'
				}
			}).then(res => {
				if (res) this.$router.push('/core')
				else this.$router.push('/account')
			})
    }
  }
}
</script>

<style lang="less" scoped>
.welcome {
  justify-content: center;
  align-items: center;
}
</style>
