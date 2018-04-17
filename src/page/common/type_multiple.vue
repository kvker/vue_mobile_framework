<template lang="pug">
	.page.type-multiple
		header.navigator
			p.left(@click="$router.go(-1)")
				i.iconfont(
					v-html="'&#xe619;'"
				)
				| 返回
			p.title(v-html="obj.title?obj.title:'经营类目'")
			p.right(
				@click="$emit('callback', {results,title: obj.title})"
			) {{`完成(${results.length})`}}
		.content
			.cell(
				v-for="(item, index) of obj.items" :key="index"
			)
				label.full
					input(
						type="checkbox"
						:value="item"
						v-model="results"
					)
					span.title {{item[showKey]}}
					.show-box
			//- span {{results}}
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      required: true
		},
		showKey: {
			type: String,
		}
  },
  data() {
    return {
      isRadio: false,
      result: '',
      results: []
    }
  },
  mounted() {
    log(this.obj)
    this.isRadio = this.$route.query.type === 'radio'
  },
  methods: {
    changeChecked(obj) {
      console.log(obj)
      if (obj.checked) {
        this.results.push(obj.item)
      } else {
        this.results.remove(obj.item)
      }
    }
  }
}
</script>

<style lang="less">
@redColor: #ff4063;

.type-multiple {
  background: white;
  padding: 0.16rem;
  .navigator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 0.4rem;
		padding: 0 .16rem;
    border-bottom: 0.01rem solid rgba(0, 0, 0, 0.09);
    .left,
    .right {
      width: 0.8rem;
    }
    .right {
      text-align: right;
    }
	}
	.content {
		margin-top: .4rem;
	}
  .cell {
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.56rem;
    label {
      position: relative;
      cursor: pointer;

      input {
        cursor: pointer;
        visibility: hidden;
        margin-right: 0.2rem;
      }

      input:checked + .title + .show-box {
        background: @redColor;
      }

      input:checked + .title + .show-box::before {
        border: solid white;
        border-width: 0 2px 2px 0;
      }

      @width: 0.18rem;
      @top: 0.01rem;

      .show-box {
        position: absolute;
        top: @top;
        left: @top;
        display: flex;
        justify-content: center;
        align-items: center;
        width: @width;
        height: @width;
				border: 0.01rem solid @redColor;
				border-radius: .02rem;
        background: transparent;

        &::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 6px;
          width: 3px;
          height: 8px;
          border: solid transparent;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
    .full {
      width: 100%;
    }
  }
}
</style>
