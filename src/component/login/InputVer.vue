<template lang="pug">
	section.input_ver
		input(
			ref="input"
			v-bind="$attrs"
			v-model="value"
			@input="inputValue"
		)
		button.ver(
			:class="{clickAllow}"
			@click="clickVer"
		) {{showCount}}
		img.close(
			v-show="closeShow"
			@click="clickClose"
			src="~img/close_icon.png"
		)
</template>

<script>
export default {
  props: {
    // 正则清除
    clear: {
      type: String
		},
		// 是否可点击
		clickAllow: {
			type: Boolean,
		},
		// 获取验证码事件
		getVer: {
			type: Function,
			required: true,
		}
  },
  data() {
    return {
      value: '',
      count: 60,
      runCount: false, // 是否计时中
      closeShow: false // 是否显示清空按钮
    }
  },
  computed: {
    showCount() {
      if (!this.runCount) return '获取验证码'
      return this.count + 's'
    }
  },
  methods: {
    /**
     * input 事件监听替换真实数据
     * @param {object} e 事件
     */
    inputValue(e) {
      let input = this.$refs.input
      let val = input.value
			val = val.replace(/\D/g, '')

			if(val.length > 0) this.closeShow = true
			else this.closeShow = false

      this.value = val
      this.$emit('input', val)
    },
    /**
     * 点击获取验证码按钮
     */
    clickVer() {
      if (this.runCount || !this.clickAllow) return

      this.getVer()
				.then(() => {
					this.runCount = true
					this.count = 120
					setInterval(() => {
						this.count -= 1
						if (this.count <= 0) {
							this.runCount = false
						}
					}, 1000)
				})
    },
    /**
     * 点击显示出来的关闭按钮
     */
    clickClose() {
      this.value = ''
			this.closeShow = false
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="less" scoped>
.input_ver {
  position: relative;
  display: flex;
  align-items: center;
  & > input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
		border-bottom: 0.01rem solid rgba(255, 255, 255, 0.56);
		color: white;
    &:focus {
      border-bottom-color: white;
    }
  }
  & > .ver {
    position: absolute;
    top: e('calc(50% - .16rem)');
    right: 0;
    width: 32%;
    height: 0.32rem;
    text-align: center;
    border: none;
    background: transparent;
    border-left: 0.01rem solid rgba(255, 255, 255, 0.56);
    color: rgba(255, 255, 255, 0.56);
	}

	.clickAllow {
		color: white;
	}

  .close {
    position: absolute;
    top: e('calc(50% - .07rem)');
    right: 1.16rem;
    width: 0.14rem;
    height: auto;
  }

  ::-webkit-input-placeholder {
    color: white;
    opacity: 0.56;
  }

  ::-ms-input-placeholder {
    color: white;
    opacity: 0.56;
  }

  ::-moz-placeholder {
    color: white;
    opacity: 0.56;
  }
}
</style>
