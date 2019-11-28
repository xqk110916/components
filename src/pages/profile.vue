<template>
  <div class="my">
    <header>
      <div class="header-content" @click="checkInfo">
        <van-image round width="1.2rem" height="1.2rem" src="http://pic4.zhimg.com/v2-06273e88b28b75cc0cbe4cee51312cf7_b.jpg" />
        <div class="header-info">
          <p class="name">用户名用户名用户名</p>
          <p class="phone">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouji"></use>
            </svg>
            13837375959
          </p>
        </div>
        <div>
          <van-icon name="arrow" size=".35rem" color="#fff" />
        </div>
      </div>
    </header>
    <div class="maininfo">
      <router-link to="">
        <p class="red">0个</p>
        <p class="text">红包</p>
      </router-link>
      <router-link to="">
        <p class="green">0个</p>
        <p class="text">金币</p>
      </router-link>
    </div>

    <van-cell title="我的地址" class="list lacation" icon="map-marked" is-link />

    <van-cell-group class="activity list">
      <van-cell title="金币商城"  icon="bag" is-link />
      <van-cell title="分享那20元红包"  icon="gift" is-link />
    </van-cell-group>

    <van-cell-group class="other list">
      <van-cell title="我的客服"  icon="service" is-link />
      <van-cell title="下载饿了么APP"  icon="gem" is-link />
      <van-cell title="规则中心"  icon="label" is-link />
    </van-cell-group>

    <router-link to="" tag="p" class="Privacy">隐私介绍</router-link>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    data() {
      return {

      }
    },
    created() {

    },
    methods: {
      checkInfo() {
  
      },
    }
  }
</script>

<style lang="scss" scoped>
.my {
  height: 100vh;
  background: #f5f5f5;

  header {
    height: 2.2rem;
    background: linear-gradient(90deg,#0af,#0085ff);

    .header-content {
      padding: .5rem .3rem;
      display: flex;
      .header-info {
        width: 5.14rem;
        box-sizing: border-box;
        padding-left: .3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        .name {
          font-size: .42rem;
          font-weight: 700;
          color: #fff;
        }
        .phone {
          font-size: .24rem;
          color: #fff;

          .icon {
            width: .3rem;
            height: .3rem;
          }
        }
      }
    }
  }

  .maininfo {
    height: 1.67rem;
    display: flex;
    background: #fff;
    .red {
      color: rgb(255, 95, 62);
      font-size: .52rem;
    }
    .green {
      color: rgb(106, 194, 11);
      font-size: .52rem;
    }
    .text {
      font-size: .24rem;
    }

    a {
      width: 50%;
      height: 100%;
      display: inline-block;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    a:last-child {
      border-left: 1px solid #eee;
    }
  }
  
  .van-icon-map-marked {
    color: rgb(74, 165, 240);
  }
  .van-icon-bag {
    color: rgb(148, 217, 74);
  }
  .van-icon-gift {
    color: rgb(252, 123, 83);
  }
  .van-icon-service {
    color: rgb(74, 165, 240);
  }
  .van-icon-gem {
    color: rgb(74, 165, 240);
  }
  .van-icon-label {
    color: rgb(74, 165, 240);
  }

  .list {
    margin-top: .25rem;
  }

  .Privacy {
    color: #4da6f0;
    text-align: center;
    font-size: .3rem;
    margin-top: .25rem;
  }
}
</style>