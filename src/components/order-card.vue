<template>
  <div class="order-item">
    <img src="@/public/img/shopLogo.jpg" alt="商铺logo">
    <div class="content">
      <div class="top-shop">
        <div class="f">
          <p><span class="name">家乐福(杭州涌金店)</span> <van-icon name="arrow" class="icon" size="12" /> </p>
          <span class="status">订单已送达</span>
        </div>
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
  background: #fff;

  img {
    width: .64rem;
    height: .64rem;
  }

  .content {
    width: 100%;
    margin-left: .2rem;
    padding: 0 .26rem .2rem 0;
    .top-shop {
      display: flex;
      flex-direction: column;
      padding-bottom: .1rem;
      border-bottom: 1px solid #ccc;

      .f {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #333;

        .name {
          max-width: 3.4rem;
          overflow: hidden;
          font-size: .32rem;
        }
        .icon {
          margin-left: .12rem;
        }
        .status {
          font-size: 13px;
        }
      }
      
      .time {
        font-size: .22rem;
        color: #999;
      }
      
      
    }

    .bottom-details {
      padding: .2rem .18rem .2rem 0;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .shop-details {
        color: #666;
      }

      .price {
        font-weight: 700;
        color: #333;
      }
    }
  }
  
}
</style>