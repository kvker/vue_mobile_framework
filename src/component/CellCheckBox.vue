<template lang="pug">
	.cell-check-box
		.top(
			@click.self="clickTop"
		)
			label
				input(
					type="checkbox"
					:checked="item.isChecked"
					@change="changeChecked"
				)
				span.title {{item.ctFuncName}}
				.show-box
			p.arrow(
				:class="{rotate: contentShow}"
			) >
		.content(
			:class="{contentShow}"
		)
			slot
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    placeholder: {
      type: String
    },
    result: {
      type: String
    }
  },
  data() {
    return {
      contentShow: false // 是否显示下方内容
    }
  },
  methods: {
    clickTop() {
      this.contentShow = !this.contentShow
    },
    changeChecked(e) {
      this.$emit('changeChecked', {
				item: this.item,
				isChecked: e.target.checked ? 1 : 0
			})
    }
  }
}
</script>

<style lang="less" scoped>
.cell-check-box {
  .top {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.52rem;
    background: transparent;
    border: none;
    border-bottom: 0.01rem solid rgba(0, 0, 0, 0.09);
    .left {
      display: flex;
      align-items: center;
      .title {
        margin-right: 0.4rem;
      }
      .placeholder {
        color: #aaa;
      }
    }
    .arrow {
      transform: scale(0.8, 1.6);
      color: rgba(0, 0, 0, 0.4);
    }
    .rotate {
      transform: rotateZ(90deg) scale(0.8, 1.6);
    }
    @redColor: #ff4063;

    label {
      position: relative;
      cursor: pointer;

      input {
        visibility: hidden;
        margin-right: 0.08rem;
      }

      input:checked + .title + .show-box {
        background: @redColor;
      }
      input:checked + .title + .show-box::before {
        border: solid white;
        border-width: 0 2px 2px 0;
      }

      @top: 0.01rem;
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
        border-radius: 0.02rem;
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
  }
  .content {
    display: none;
  }
  .contentShow {
    display: block;
  }
}
</style>
