<template lang="pug">
	section.confirm(
		:class="{show}"
	)
		section.content
			p.title {{obj.title}}
			slot
			section.ctrl
				button.cancel(
					@click="$emit('clickCancel')"
				)
					p {{obj.cancel || '取消'}}
				button(
					@click="$emit('clickConfirm')"
				) {{obj.confirm || '确定'}}
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    obj: {
      type: Object,
      required: true
    }
	},
	data() {
		return {
		}
	}
}
</script>

<style lang="less" scoped>
.confirm {
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 2.84rem;
    height: 2.1rem;
    background: white;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    .title {
      margin: 0.16rem 0 0 0.16rem;
    }
    .ctrl {
      display: flex;
      align-items: center;
      width: 100%;
      border-top: 0.01rem solid rgba(0, 0, 0, 0.09);
      button {
        width: 50%;
        height: 0.48rem;
      }
      .cancel {
				color: rgba(0, 0, 0, 0.45);
				p {
					border-right: 0.01rem solid rgba(0, 0, 0, 0.09);
				}
      }
    }
  }
}
.show {
  display: flex;
}
</style>
