<template lang="pug">
  .goods-item
    img.img(
      src="#"
    )
    .detail
      span HB-73551
      span.total ￥500.00 x 2
    .price
      del ￥1000.00
      .discount 9折
      .real(v-if="false") ￥1000.00
      .discounted(v-else) ￥900.00
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.goods-item {
  display: flex;
  align-items: center;
  height: 0.76rem;
  padding: 0.08rem 0;
  .img {
    width: 0.6rem;
    height: auto;
  }
  .detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    .total {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
  .price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
    del {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
    }
    @discountColor: #ff4063;
    .discount {
      width: 0.36rem;
      line-height: 0.18rem;
      background: rgba(255, 64, 99, 0.09);
      border-radius: 2px;
      font-size: 12px;
      color: @discountColor;
      text-align: center;
      transform: scale(0.75);
    }
    .discounted {
      color: @discountColor;
    }
  }
}
</style>
