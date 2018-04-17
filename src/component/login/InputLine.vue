<template lang="pug">
	section.input_line
		input(
			ref="input"
			v-bind="$attrs"
			v-model="value"
			@input="inputValue"
		)
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
      type: RegExp
    }
  },
  data() {
    return {
			value: '',
			closeShow: false, // 是否显示清空按钮
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
			if (this.clear) val = val.replace(this.clear, '')

			if(val.length > 0) this.closeShow = true
			else this.closeShow = false

      this.value = val
      this.$emit('input', val)
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
.input_line {
	position: relative;
  & > input {
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: 0.01rem solid #eee;
		background: transparent;
		color: white;
    &:focus {
      border-bottom-color: white;
    }
	}
	.close {
		position: absolute;
		top: e('calc(50% - .07rem)');
		right: .06rem;
		width: .14rem;
		height: auto;
	}
}

::-webkit-input-placeholder {
	color: rgba(255, 255, 255, .65);
	opacity: .56;
}

::-ms-input-placeholder {
	color: rgba(255, 255, 255, .65);
	opacity: .56;
}

::-moz-placeholder {
	color: rgba(255, 255, 255, .65);
	opacity: .56;
}
</style>
