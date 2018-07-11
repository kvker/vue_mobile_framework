<template lang="pug">
  section.cell-fold
    section.top(
      @click.self="clickTop"
    )
      p.title {{title}}
      cell-swipe(
        @change="swipeChange"
        @clickFirst="$emit('clickFirst')"
        @clickSecond="$emit('clickSecond')"
      )
        section.right(
          :class="{swipeOpen}"
        )
          button.icon(
            @click="$emit('clickIcon')"
          ) +
          p.arrow(
            v-show="!noArrow"
            :class="{rotate: contentShow}"
          ) >
        section.under
    section.content(
      :class="{contentShow}"
    )
      slot
</template>

<script>
import CellSwipe from 'component/CellSwipe.vue'

export default {
  components: {
    CellSwipe
  },
  props: {
    title: {
      type: String
    },
    noArrow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      contentShow: false, // 是否显示下方内容
      swipeOpen: false // 是否左划展开
    }
  },
  methods: {
    /**
     * 点击上方事件，展开或取消展开
     */
    clickTop() {
      this.contentShow = !this.contentShow
    },
    swipeChange(obj) {
      this.swipeOpen = obj.swipeOpen
    }
  }
}
</script>

<style lang="less" scoped>
.cell-fold {
  position: relative;
  .top {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.52rem;
    border-bottom: 0.01rem solid #d8d8d8;
    background: white;
    .right {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1rem;
      height: 100%;
      transition: transform 0.3s linear;
      background: white;
      .icon {
        border: none;
        color: #999;
        font-weight: 800;
        font-size: 0.18rem;
      }
      .arrow {
        margin-right: .08rem;
        transform: rotateZ(-90deg) scale(0.8, 1.6);
        color: rgba(0, 0, 0, 0.4);
        transition: transform .1s linear;
      }
      .rotate {
        transform: rotateZ(90deg) scale(0.8, 1.6);
      }
    }
    .swipeOpen {
      transform: translateX(-100%);
    }
    .under {
      position: absolute;
    }
  }
  .content {
    display: none;
  }
  .contentShow {
    display: block;
  }
}
</style>
