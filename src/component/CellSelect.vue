<template lang="pug">
	button.cell-select(
		v-on="$listeners"
	)
		section.left
			//- p.title {{title}}
			p.placeholder(v-if="!result") {{placeholder}}
			p.result(v-else) {{result}}
		p.arrow >
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    placeholder: {
      type: String
    },
    result: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.cell-select {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
	border-bottom: 0.01rem solid rgba(0, 0, 0, 0.45);
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
}
</style>
