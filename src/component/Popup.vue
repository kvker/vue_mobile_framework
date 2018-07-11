<template lang="pug">
  .overlay(
    ref="popup"
    :class="{show}"
    @click.one="show = false"
  )
    .popup(@click.stop="")
      .title {{title}}
      slot
      footer
        button.cancel(
          @click="$emit('clickCancel')"
        ) {{cancel || '取消'}}
        button(
          @click="$emit('clickConfirm')"
        ) {{confirm || '确定'}}

</template>

<script>
export default {
  // data() {
  //   return {
  //   }
  // },
  props: {
    title: {
      type: String,
    },
    show: {
      type: Boolean,
    },
    cancel: {
      type: Object,
      //required: true
    },
    confirm: {
      type: Object,
      //required: true
    }
  },
  mounted() {
    log(this.show)
    let popup = this.$refs.popup;
    //popup.style.display = "block";
  },
}
</script>

<style lang="less" scoped>
.overlay{
  display: none;
  background-color: rgba(0, 0, 0, .3);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  >.popup {
    background-color: #fff;
    position: fixed;
    min-width: 2.84rem;
    box-shadow: 0 .04rem .16rem 3 #000;
    border-radius: .04rem;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: .16rem .16rem 0;
    >.title {
      font-size: .16rem;
      padding-bottom: .08rem;
    }
    button {
      width: 50%;
      height: .28rem;
      margin: .1rem 0;
    }
    .cancel {
      color: #999;
      border-right: .01rem solid #eee;
    }
  }
}
.show {
  display: flex;
}
</style>
