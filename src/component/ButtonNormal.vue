<template lang="pug">
  button(
    @click="$emit('click')"
  ) {{text}}
</template>

<script>
export default {
  props: {
    text: {
      rype: String
    }
  }
}
</script>

<style lang="less" scoped>
button {
  font-size: .14rem;
  border: 0.01rem solid #d8d8d8;
  border-radius: 0.04rem;
  background: #FF4063;
}
</style>
