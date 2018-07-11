<template lang="pug">
  button.cell-normal
    p {{title}}
    section.right
      input.input(
        v-bind="$attrs"
        v-on="$listeners"
      )
      p.arrow >
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    result: {
      type: String
    }
  }
}
</script>

<style scoped lang="less">
.cell-normal {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: .52rem;
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0.09);
  .right {
    display: flex;
    align-items: center;
    .title {
      margin-right: 0.4rem;
    }
    .input {
      color: #aaa;
      margin-right: .08rem;
    }
  }
  .arrow {
    transform: scale(0.8, 1.6);
    color: rgba(0, 0, 0, 0.4);
  }
}
</style>
