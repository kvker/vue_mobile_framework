<template lang="pug">
#accordion(
	:class="fromClass"
	@click="$emit('toggleAccordion')"
)
	slot(name="content")
</template>

<script>

export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    from: {
      type: String,
    },
  },
  data(){
    return {
    }
  },
  computed: {
    /**
     * 从哪里出现，依赖于 show
     * @return {String} 返回的 class 名字，代表从哪里出来
     */
    fromClass() {
      let fromClass = '' // 从哪里出现
      if(!this.show) return fromClass

      switch(this.from) {
        case 'top': fromClass = 'fromTop'; break
        case 'right': fromClass = 'fromRight'; break
        case 'bottom': fromClass = 'fromBottom'; break
        default: fromClass = 'fromLeft'
      }
      return fromClass
    }
  }
}
</script>

<style lang="less" scoped>
#accordion {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform .3s ease;
}
.top {
  top: -100%;
  left: 0;
}
.fromTop {
  transform: translateY(100%);
}
.right {
  top: 0;
  right: -100%;
}
.fromRight {
  transform: translateX(-100%);
}
.bottom {
  bottom: -100%;
  left: 0;
}
.fromBottom {
  transform: translateY(-100%);
}
.left {
  top: 0;
  left: -100%;
}
.fromLeft {
  transform: translateX(100%);
}
</style>
