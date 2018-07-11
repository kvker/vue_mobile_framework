<template lang="pug">
  button.back-circle(
    v-on="$listeners"
  )
    img(
      src="~img/left-arrow.png"
    )
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.back-circle {
  @width: .32rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: @width;
  height: @width;
  border: none;
  padding: 0;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
