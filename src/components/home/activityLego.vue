<template>
  <div class="lego">
    <div class="top">
      <div class="text">
        <h3>品质套餐</h3>
        <p>搭配齐全吃得好</p>
        <router-link to="/" tag="p" class="link">立即抢购 > </router-link>
      </div>
      <img src="../../public/img/lego.png">
    </div>
    <div class="bottom">
      <div class="left">
        <svg class="icon icon-vip" aria-hidden="true">
          <use xlink:href="#icon-VIP"></use>
        </svg>
        <span class="vip-weight-text">超级会员</span>
        <span class="vip-text">每月领20元红包</span>
      </div>
      <div class="right">
        <span class="vip-right-text">立即开通 > </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'activityLego',
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
.lego {
  height: 3.06rem; 
  box-sizing: border-box;
  padding: 0 .2rem;
  margin-top: 5px;

  .top {
    height: 2.2rem;
    box-sizing: border-box;
    position: relative;
    background: #f7f7f7;
    padding: .24rem 0 0 .30rem;

    .text {
      float: left;
      h3 {
        font-size: 17px;
        font-weight: 700;
        margin-bottom: .1rem;
      }
      p {
        font-size: 13px;
        margin-bottom: .18rem;
      }
      .link {
        font-size: 12px;
        color: #af8260;
        font-weight: 700;
      }
    }

    img {
      width: 2.82rem;
      float: right;
    }
    
  }

  .bottom {
    height: .8rem;
    background: #feedc1;
    padding: 0 .2rem 0 .3rem;
    margin: .1rem 0 .12rem;
    position: relative;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon-vip {
      width: .34rem; 
      height: .34rem;
      color: #644f1b;
      margin-right: .14rem;
    }

    .vip-weight-text {
      font-size: .28rem;
      color: #644f1b;
      font-weight: 700;
      margin-right: .1rem;
    }

    .vip-text, .vip-right-text {
      font-size: .22rem;
      color: #644f1b;
    }

  }
}
</style>