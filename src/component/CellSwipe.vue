<template lang="pug">
	section.cell-swipe(
		@touchstart="touchstart"
		@touchend="touchend"
	)
		.ctrls
			button.ctrl(
				@click="$emit('clickFirst')"
			)
				img(
					src="~icon/edit.png"
				)
			button.ctrl(
				@click="$emit('clickSecond')"
			)
				img(
					src="~icon/delete.png"
				)
		slot
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    touchstart(e) {
      this.touchX = e.touches[0].clientX
    },
    touchend(e) {
			let direction = e.changedTouches[0].clientX - this.touchX

			let swipeOpen = null
			let enableDirection = 30
			if (direction < -enableDirection) swipeOpen = true
			else if(direction > enableDirection) swipeOpen = false
			if(swipeOpen !== null) this.$emit('change', {swipeOpen})
    }
  }
}
</script>

<style lang="less">
.cell-swipe {
	position: relative;
  display: flex;
  justify-content: flex-end;
	height: 100%;
	.ctrls {
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 0;
		.ctrl {
			height: 100%;
			flex: 1;
			background: #FF4063;
			img {
				width: auto;
				height: .2rem;
			}
		}
	}
}
</style>
