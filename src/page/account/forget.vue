<template lang="pug">
	.page.forget
		.top
			back-circle(
				@click="$router.go(-1)"
			)
			p.title 忘记密码
		section.form
			input-line(
				class="input"
				:autofocus="true"
				:clear="/[^\\d]/g"
				autofocus
				@input="inputUsername"
				placeholder='请输入手机号码'
			)
			input-ver(
				class="input"
				@input="inputVer"
				:clickAllow="verClickAllow"
				placeholder='请输入验证码'
				:getVer="clickGetVer"
			)
			button-normal.login-button(
				:class="{enable}"
				@click="clickSendPassword"
				text="发送密码至手机")
</template>

<script>
export default {
	data() {
		return {
			username: '', // 用户名
			ver: '', // 验证码
			verClickAllow: false, // 获取验证码是否可点
      onlyNum: /\D/g,
		}
	},
	computed: {
		/**@author zwei
		 * 发送密码至手机是否激活
		 */
		enable() {
			return this.verClickAllow && this.ver.length > 0
		}
	},
  methods: {
		/**@author zwei
     * 用户名输入框内容同步更新
     * @param {String} val 内容
     */
    inputUsername(val) {
			this.verClickAllow = val.length > 0
			this.username = val
		},
		/**@author zwei
     * 验证码输入框内容同步更新
     * @param {String} val 内容
     */
    inputVer(val) {
			console.log(val)
			this.ver = val
		},
		/**@author zwei
     * 点击“发送密码至手机”按钮
     * @param {String} val 内容
     */
		clickSendPassword() {
			if(!this.enable) return
			this.$router.go(-1)
		},
		/**@author zwei
		 * 点击获取验证码
		 * @return {Promise} 返回一个用来执行倒计时
		 */
		clickGetVer() {
			return new Promise((res, rej) => {
				alert('测试使用，无实际小效果')
				res()
			})
		},
  }
}
</script>

<style lang="less" scoped>
.forget {
  display: flex;
  flex-direction: column;
	align-items: center;
	color: #333;
	background: white;
	.top {
		width: 100%;
		margin-top: .2rem;
		padding-left: .24rem;
		.title {
			font-weight: 800;
			font-size: .32rem;
			margin-top: .08rem;
		}
	}
  .form {
    display: flex;
		flex-direction: column;
		margin-top: .32rem;
    .input {
      width: 3rem;
      height: 0.4rem;
      margin-top: 0.2rem;
    }
    .login-button {
      color: white;
      width: 3rem;
			height: 0.4rem;
			border-radius: .2rem;
			margin-top: 0.32rem;
			background: rgba(0,0,0,0.25);
		}
		.enable {
			background: #FF4063;
		}
  }
}
</style>
