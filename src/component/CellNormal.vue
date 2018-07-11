<template lang="pug">
  button.cell-normal(
    v-on="$listeners"
  )
    p.title {{title}}
    section.right
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

<style scoped lang="less">
.cell-normal {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 0.52rem;
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0.09);
  .title {
    color: rgba(0, 0, 0, 0.85);
    width: 50%;
    text-align: left;
  }
  .right {
    display: flex;
    align-items: center;
    width: 50%;
    .title, .placeholder {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .title {
      margin-right: 0.4rem;
    }
    .placeholder {
      color: #aaa;
      margin-right: 0.08rem;
    }
  }
  .arrow {
    transform: scale(0.8, 1.6);
    color: rgba(0, 0, 0, 0.4);
  }
}
</style>
