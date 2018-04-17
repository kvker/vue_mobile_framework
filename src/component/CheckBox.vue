<template lang="pug">
	label
		input(
			type="checkbox"
			v-model="checked"
		)
		span.title {{title}}
		.show-box
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      checked: false
    }
  },
  watch: {
    checked(val) {
      this.$emit('changeChecked', { checked: val, item: this.title })
    }
  }
}
</script>

<style lang="less" scoped>
@redColor: #FF4063;

label {
	position: relative;
  cursor: pointer;

  input {
		visibility: hidden;
		margin-right: .08rem;
	}


  input:checked + .title + .show-box {
		background: @redColor;
	}
	input:checked + .title + .show-box::before {
		border: solid white;
    border-width: 0 2px 2px 0;
  }

	@top: .01rem;
	@width: 0.18rem;

  .show-box {
    position: absolute;
    top: @top;
    left: @top;
    display: flex;
    justify-content: center;
    align-items: center;
    width: @width;
    height: @width;
		border: 0.01rem solid @redColor;
		border-radius: .02rem;
    background: transparent;

    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 6px;
      width: 3px;
      height: 8px;
      border: solid transparent;
      border-width: 0 2px 2px 0;
			transform: rotate(45deg);
    }
  }
}
</style>
