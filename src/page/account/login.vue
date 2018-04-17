<template lang="pug">
	.page.login
		figure.logo
			img(src="~img/logo.png")
			figcaption
		section.form
			.types
				button(
					:class="{selected: isPassword}"
					@click="isPassword = true"
				) 密码登录
				button(
					:class="{selected: !isPassword}"
					@click="isPassword = false"
				) 验证码登录
			input-line(
				class="input"
				:clear="onlyNum"
				:special="true"
				autofocus
				@input="inputUsername"
				:placeholder='isPassword ? "请输入手机号码/账号" : "请输入手机号码"'
			)
			input-line-password(
				v-if="isPassword"
				class="input"
				:special="true"
				@input="inputPassword"
				placeholder='请输入密码'
			)
			input-ver(
				v-else
				class="input"
				:special="true"
				@input="inputVer"
				:clickAllow="verClickAllow"
				placeholder='请输入验证码'
				:getVer="clickGetVer"
			)
			section.tools
				check-box(
					v-show="isPassword"
					:defaultChecked="autoLogin"
					@changeChecked="changeAutoLoginChecked"
					title="自动登录"
				)
				.empty(
					v-show="!isPassword"
				)
				router-link.forget(to="/account/login/forget") 忘记密码?
			button-normal.login-button(
				@click="clickLogin"
				text="登 录")
		section.footer
			router-link.regist(to="/account/login/regist") 新用户注册->
		include ../../pug/router
</template>

<script>
import InputLinePassword from 'component/login/InputLinePassword.vue'
import InputLine from 'component/login/InputLine.vue'
import InputVer from 'component/login/InputVer.vue'
import CheckBox from 'component/login/CheckBox.vue'

export default {
  components: {
    InputLine,
    InputVer,
    InputLinePassword,
    CheckBox
  },
  data() {
    return {
      username: '', // 用户名
      password: '', // 密码
      ver: '', // 验证码
      onlyNum: /\D/g,
      isPassword: true, // 是否密码登录
      verClickAllow: false, // 获取验证码是否可以点击
			autoLogin: true, // 自动登录状态,
    }
  },
  computed: {
  },
  methods: {
    /**@author zwei
     * 用户名输入框内容同步更新
     * @param {String} val 内容
     */
    inputUsername(val) {
      this.verClickAllow = val.length === 11
      this.username = val
    },
    /**@author zwei
     * 密码输入框内容同步更新
     * @param {String} val 内容
     */
    inputPassword(val) {
      this.password = val
    },
    /**@author zwei
     * 验证码输入框内容同步更新
     * @param {String} val 内容
     */
    inputVer(val) {
      this.ver = val
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
    /**
     * 点击登录
     */
    clickLogin() {
			// if (!this.checkAccountInfo()) return
			this.$router.push('/core')
    },
    /**
     * 检查用户名与密码
     * @return {Boolean} 返回是否合法
     */
    checkAccountInfo() {
      let passFull = this.username.length >= 6 && this.password.length >= 6
      let verFull = this.username.length >= 6 && this.ver.length >= 1
      if (passFull || verFull) {
        return true
      }

      if (this.username.length < 6) alert('用户名太短')
      else if (this.password.length < 6 && this.isPassword) alert('密码太短')
      else if (this.ver.length < 1 && !this.isPassword) alert('验证码太短')
      return false
    },
    /**@author zwei
     * 自动登录勾选状态
     */
    changeAutoLoginChecked(paylaod) {
      this.autoLogin = paylaod.checked
    }
  }
}
</script>

<style lang="less" scoped>
.opa {
  opacity: 0.56;
}
.login {
  justify-content: center;
  align-items: center;
  background: url(~img/account_back.png);
  background-size: cover;
  color: white;
  .logo,
  .footer {
    position: absolute;
    left: 0;
    display: flex;
    width: 100%;
  }
  .logo {
    top: 0.7rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    img {
      width: 1rem;
      height: 1rem;
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    .types {
      display: flex;
      justify-content: space-around;
      button {
        color: white;
        background: transparent;
        border: none;
        .opa;
      }
      .selected {
        color: white;
        opacity: 1;
      }
    }
    .input {
      width: 3rem;
      height: 0.4rem;
      margin-top: 0.2rem;
    }
    .login-button {
      width: 3rem;
      height: 0.4rem;
      margin-top: 0.2rem;
      border: 0.01rem solid #d8d8d8;
      border-radius: 0.2rem;
      background: white;
      font-size: 0.14rem;
      color: #ff4036;
    }
  }
  .tools {
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    .password-ctrl {
      display: flex;
      justify-content: space-between;
    }
    .ver {
      margin-left: 0.2rem;
    }
    .forget {
      .opa;
    }
  }
  .footer {
    bottom: 0.4rem;
    justify-content: center;
    align-items: center;
    height: 0.32rem;
    .regist {
      .opa;
    }
  }
}
</style>

