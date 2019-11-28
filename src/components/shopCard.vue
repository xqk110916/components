<template>
  <div class="card">
    <div class="content">
      <div class="left">
        <img src="@/public/img/shopLogo.jpg" alt="商铺logo">
      </div>
      <div class="right">
        <div>
          <p class="shopName">商铺商铺商铺商铺</p>
        </div>
        <div class="star">
          <van-rate v-model="star" size="12" allow-half readonly/>
          <span class="text">{{ star }}</span>
          <span class="text"> 月售9999+单 </span>
        </div>
        <div class="moneylimit">
          <span> ¥20起送 </span>
          <span> 免费配送 </span>
        </div>
      </div>
      <svg class="icon extend" aria-hidden="true" @click="extend">
        <use xlink:href="#icon-ellipsis2"></use>
      </svg>
    </div>
    <div class="bottom">
      <div class="tag">
        <span class="tags">其他快餐</span>
        <span class="tags">品质联盟</span>
      </div>
      <div class="activity" :style="{overflow: xia ? 'hidden': 'visible'}">
        <div class="unfold" @click="extend">
          <span>5个活动</span>
          <svg class="icon xia" aria-hidden="true">
              <use :xlink:href="xia ? '#icon-xia1': '#icon-xia'"></use>
          </svg>
        </div>
        
        <p> <span class="bk">折</span> 满10减5, 满20减7, 满30减8 </p>
        <p> <span class="bk">折</span> 折扣商品五折起 </p>
        <p> <span class="bk">折</span> 折扣商品五折起 </p>
        <p> <span class="bk">折</span> 折扣商品五折起 </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shopCard',
    data() {
      return {
        star: 3,
        xia: true,
      }
    },
    methods: {
      extend() {
        this.xia = !this.xia
      },
    }
  }
</script>

<style lang="scss" scoped>
.card {
  // height: 3.5rem;
  padding: .3rem .2rem;
  box-sizing: border-box;
  // display: flex;

  .content {
    position: relative;
    width: 355px;
    height: 1.1rem;
    display: flex;
    .left {
      padding: .05rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
    
    .right {
      margin-left: .15rem;
      font-size: .22rem;
      .shopName {
        font-size: .3rem;
        font-weight: 700;
      }

      .star {
        margin-top: .05rem;
      }

      .text {
        margin-left: .1rem;
        font-size: .22rem;
        color: #666;
      }

      .moneylimit {
        color: #666;
        font-size: .22rem;

        span {
          padding: 0 3px;
          border-right: 1px solid #999;
        }
        span:last-child {
          border-right: none;
        }
      }
    }

    .extend {
      position: absolute;
      width: .4rem;
      height: .4rem;
      top: 0;
      right: 0;
    }
  }

  .bottom {
    margin-left: 1.25rem;
    margin-top: .2rem;
    font-size: .2rem;
    .tag {
      .tags {
        display: inline-block;
        border: 1px solid rgba(180,180,180,.6);
        color: #666;
        margin: .05rem; 
      }
    }

    .activity {
      height: .74rem;
      margin-top: .27rem;
      color: #666;
      position: relative;

      .unfold {
        position: absolute;
        right: 0;
        top: 0;
        font-size: .2rem;
        .xia {
          width: .2rem;
          height: .2rem;
        }
      }
      
      
      p {
        margin-bottom: .1rem;
      }
      p:last-child {
        margin-top: 0;
      }
    }
  }
}
</style>