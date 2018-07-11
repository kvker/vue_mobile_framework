<template lang="pug">
  .page.delegate
    navigator(
      left="返回"
      title="用户协议"
      @clickLeft="$router.go(-1)"
    )
</template>

<script lang="coffee">
export default
  data: ->
    {
      isRadio: false
      result: ''
      results: []
    }
  mounted: ->
    this.isRadio = this.$route.query.type is 'radio'
</script>

<style lang="sass" scoped>
.delegate
  background: white
  .navigator
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    height: 0.4rem
    .left,
    .right
      width: 0.8rem
    .right
      text-align: right
</style>
