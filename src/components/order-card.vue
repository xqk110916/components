<template>
  <div class="order-item">
    <img src="@/public/img/shopLogo.jpg" alt="商铺logo">
    <div class="content">
      <div class="top-shop">
        <span class="name">家乐福(杭州涌金店)<van-icon name="arrow" size="12" /></span>
        <span class="time">2019-10-10 16:23</span>
      </div>
      <div class="bottom-details">
        <span class="shop-details">皮蛋瘦肉粥等3件商品</span>
        <span class="price"> ¥12.50 </span>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'orderCard',
    data() {
      return {

      }
    },
    methods: {},
    props: {

    },
  }
</script>

<style lang="scss" scoped>
.order-item {
  height: 1.85rem;
  box-sizing: border-box;
  margin-top: .2rem;
  padding: .28rem 0 0 .3rem;
  font-size: 12px;
  display: flex;

  img {
    width: .64rem;
    height: .64rem;
  }

  .content {
    margin-left: .2rem;
    padding: 0 .26rem .2rem 0;
    .top-shop {
      max-width: 3.4rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .name {
        font-size: .32rem;
        color: #333;
      }
      .time {
        font-size: .22rem;
        color: #999;
      }
    }
  }
  
}
</style>