<template lang="pug">
button.select(
  v-on='$listeners'
)
  .left
    span {{title}}
    span.star(
      v-if="starShow"
    ) *
  .right
    input.input(
      disabled
      v-bind="$attrs"
    )
    span.arrow >
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    starShow: {
      type: Boolean
    }
  }
}
</script>

<style lang="less" scoped>
.select {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.52rem;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0.09);
  .left,
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    width: 0.8rem;
    .star {
      font-size: 14px;
      color: #ff4063;
      letter-spacing: 0;
    }
  }
  .right {
    flex: 1;
    .input {
      width: 2rem;
    }
    .arrow {
      transform: scale(0.8, 1.6);
      color: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
