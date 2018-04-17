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
		},
		defaultChecked: {
			type: Boolean,
		}
  },
  data() {
    return {
      checked: this.defaultChecked,
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
label {
	position: relative;
  cursor: pointer;

  input {
    cursor: pointer;
		visibility: hidden;
		margin-right: .2rem;
	}

	.title {
		opacity: .56;
	}

  input:checked + .title + .show-box {
		background: white;
	}
	input:checked + .title + .show-box::before {
		border: solid #f99;
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
    border: 0.01rem solid rgba(255, 255, 255, .56);
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
