<template lang="pug">
	section.input_line
		input(
			ref="input"
			type="password"
			v-bind="$attrs"
			v-model="value"
			@input="inputValue"
		)
		img.eye(
			v-show="closeShow"
			@click="clickClose"
			:src="src"
		)
</template>

<script>
import eye from 'img/eye.png'
import eyeOff from 'img/eye_off.png'
import closeIcon from 'img/close_icon.png'

export default {
  props: {
    // 正则清除
    clear: {
      type: RegExp
    }
  },
  computed: {
    /**
     * 图片链接
     */
    src() {
			let src = eyeOff
      if (this.openEye) src = eye
      return src
    }
  },
  data() {
    return {
      value: '',
      closeShow: false, // 是否显示清空按钮
      openEye: false
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

      if (val.length > 0) this.closeShow = true
      else this.closeShow = false

      this.value = val
      this.$emit('input', val)
    },
    /**
     * 点击显示出来的关闭按钮
     */
    clickClose() {
			this.openEye = !this.openEye
			this.$refs.input.type = this.openEye ? 'text' : 'password'
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
  .eye {
    position: absolute;
    top: e('calc(50% - .07rem)');
    right: 0.06rem;
    width: 0.14rem;
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
