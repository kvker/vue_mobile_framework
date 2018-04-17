<template lang="pug">
	.page.regist
		.top
			back-circle(
				@click="$router.go(-1)"
			)
			p.title 注册
		section.form
			input-line(
				class="input"
				:autofocus="true"
				autofocus
				@input="inputUsername"
				placeholder='请输入手机号码'
				type='number'
			)
			input-ver(
				class="input"
				@input="inputVer"
				:clickAllow="verClickAllow"
				placeholder='请输入验证码'
				:getVer="clickGetVer"
			)
			input-line(
				class="input"
				@input="inputPassword"
				type="password"
				placeholder='请设置密码'
			)
			cell-select(
				class="cell-select"
				title="业务类型"
				placeholder="请选择业务类型"
				:result="type.ctName"
				@click="clickTypeSelect"
			)
			cell-select(
				class="cell-select"
				title="经营类目"
				placeholder="请选择经营类目(可多选)"
				:result="category"
				@click="clickCategorySelect"
			)
			input-line(
				class="input"
				@input="inputApply"
				placeholder='请输入邀请码(非必填)'
			)
			button-normal.login-button(
				@click="clickRegist"
				text="注册")
		section.delegate-area
			check-box(
				@changeChecked="changeDelegateChecked"
				title="同意"
			)
			a.delegate(
				@click="clickDelegate"
			) 买卖通用户协议
		transition(:name="transitionName")
			router-view(
				:obj="routerObj"
				:showKey="this.isType ? 'ctName' : 'gcName'"
				@callback="routerCallback"
			)
</template>

<script>
export default {
  data() {
    return {
			routerObj: {}, // 路由携带参数
      onlyNum: /\D/g,
      type: '',
      category: '',
      delegateChecked: false,
			verClickAllow: false, // 获取验证码是否可以点击
			username: '',
			password: '',
			ver: '',
			isType: false, // 是否为业务类型
    }
	},
	computed: {
		typeObj() {
			return {
				// items: this.types,
				items: [{
					ctId: 1,
					ctName: '一批'
				}],
				title: '业务类型'
			}
		},
		categoryObj() {
			return {
				items: this.categorys,
        title: '经营类目'
			}
		}
	},
	mounted() {
	},
  methods: {
		/**@author zwei
		 * 用户名同步更新
		 * @param {String} val 内容
		 */
    inputUsername(val) {
			this.verClickAllow = val.length === 11
			this.username = val
		},
		/**@author zwei
		 * 验证码同步更新
		 * @param {String} val 内容
		 */
		inputVer(val) {
			// console.log(val)
			this.ver = val
		},
		/**@author zwei
		 * 密码同步更新
		 * @param {String} val 内容
		 */
    inputPassword(val) {
			// console.log(val)
			this.password = val
    },
		/**@author zwei
		 * 点击前往业务类型
		 */
    clickTypeSelect() {
			this.isType = true
			this.routerObj = this.typeObj
      this.$router.push('/account/login/regist/type_single')
		},
		/**@author zwei
		 * 点击前往经营类目
		 */
    clickCategorySelect() {
			this.isType = false
			this.routerObj = this.categoryObj
      this.$router.push('/account/login/regist/type_multiple')
		},
		/**@author zwei
		 * 邀请码同步更新
		 * @param {String} val 内容
		 */
    inputApply(val) {
      // console.log(val)
		},
		/**@author zwei
		 * 点击注册
		 */
		clickRegist() {
			if(!this.delegateChecked) {
				alert('请同意买卖通用户协议')
			}
			else if(this.username.length < 6) {
				alert('用户名太短')
			}
			else if(this.ver.length < 1) {
				alert('验证码太短')
			}
			else if(this.password.length < 6) {
				alert('密码太短')
			}
			else if(this.type.length < 1) {
				alert('请选择业务类型')
			}
			else if(this.category.length < 1) {
				alert('请选择经营类目')
			}
			else {
				this.$router.push('/account')
			}
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
		/**@author zwei
		 * 点击用户协议
		 */
    clickDelegate() {
      this.$router.push('/account/login/regist/delegate')
		},
		/**@author zwei
		 * 检测用户协议是否勾选
		 * @param {Object} payload 回调载体
		 */
    changeDelegateChecked(payload) {
      this.delegateChecked = payload.checked
		},
		/**@author zwei
		 * 前往类型选择的回调
		 * @param {Object} obj 回调参数
		 */
    routerCallback(obj) {
      this.$router.go(-1)
		},
  }
}
</script>

<style lang="less" scoped>
.regist {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  background: white;
  .top {
    width: 100%;
    margin-top: 0.2rem;
    padding-left: 0.24rem;
    .title {
      font-weight: 800;
      font-size: 0.32rem;
      margin-top: 0.08rem;
    }
  }
  .logo,
  .footer {
    position: absolute;
    left: 0;
    display: flex;
    width: 100%;
    z-index: -1;
  }
  .logo {
    top: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 2rem;
    margin: 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    margin-top: 0.32rem;
    .input {
      width: 3rem;
      height: 0.4rem;
			margin-top: 0.2rem;
			&:focus {
      	border-color: #aaa;
  		}
    }
    .cell-select {
      width: 3rem;
      height: 0.4rem;
			margin-top: 0.2rem;
			border-color: #eee;
    }
    .login-button {
      color: white;
      width: 3rem;
      height: 0.48rem;
      border-radius: 0.24rem;
      margin-top: 0.2rem;
    }
  }
  .tools {
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    .ver {
      margin-left: 0.2rem;
    }
  }
  .footer {
    bottom: 0;
    justify-content: center;
    align-items: center;
    height: 0.32rem;
  }
  .delegate-area {
		display: flex;
		align-items: center;
		margin-top: 0.16rem;
		font-size: .12rem;
    .delegate {
      text-decoration: underline;
      color: #ff4063;
      opacity: 0.85;
      font-size: 0.14rem;
    }
  }
  .typeShow {
    transform: translateX(0);
  }
}
</style>
