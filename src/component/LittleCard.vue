<template lang="pug">
  button.little-card(
    :class="{isChecked: item.isChecked === 1}"
    @click="click"
  ) {{item.ctFuncName}}
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    click() {
      this.$emit('click', {
        item: this.item
      })
    }
  },
}
</script>

<style lang="less" scoped>
.little-card {
  width: 0.8rem;
  height: 0.4rem;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  margin-right: 0.08rem;
}
.isChecked {
  position: relative;
  font-size: 14px;
  color: #ff4063;
  background: rgba(255, 64, 99, 0.1);
  border-radius: 2px;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    border-top: 0;
    border-left: .14rem solid transparent;
    border-right: 0 solid transparent;
    border-bottom: .14rem solid #FF4063;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: .02rem;
    right: .03rem;
    width: .02rem;
    height: .05rem;
    border: solid white;
    border-width: 0 0.01rem 0.01rem 0;
    transform: rotate(45deg);
  }
}
</style>
