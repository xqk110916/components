<template>
  <div class="home">
    <header>
      <van-icon name="location" color="#fff" size=".36rem" />
      <!-- <i class="el-icon-location-outline"></i> -->
      <span>定安名都</span>
      <i class="el-icon-caret-bottom"></i>
    </header>
    <van-sticky>
      <div class="search">
        <router-link tag="p" class="content" to="">
          <!-- <i class="el-icon-search"></i> -->
          <van-icon name="search" color="#999" size=".3rem" />
          <span>搜索饿了吗商家或商品名称</span>
        </router-link>
      </div>
    </van-sticky>
    
    <swipe></swipe>  
    <activity-lego></activity-lego>

    <div class="twoFlanksLine merchant">
      推荐商家
    </div>
    <recommend></recommend>
  </div>
</template>                                                                                                                                                                                                                                                                                                                                                                                                                           

<script>
  import swipe from '@/components/home/swiper-item.vue'   //轮播组件
  import activityLego from '@/components/home/activityLego.vue'   //会员推广LOGO
  import recommend from '@/components/home/recommend.vue'   //过滤菜单项组件
  export default {
    name: 'home',
    data() {
      return {
        search: '',
      }
    },
    created() {

    },
    components: {
      swipe,
      activityLego,
      recommend,
    }
  }
</script>

<style lang="scss" scoped>
.home {
  height: 200vh;

  header {
    background: #409EFF;
    padding: 2.666667vw 3.733333vw 0;
    padding-top: .28rem;
    line-height: .453333rem;

    .el-icon-location-outline {
      font-size: .36rem;
      color: #fff;
    }
    .el-icon-caret-bottom {
      font-size: .25rem;
      color: #fff;
      margin-top: -.1rem;
    }
    span {
      color: #fff;
      font-weight: 700;
      margin: 0 1.333333vw;
      font-size: .453333rem;
      max-width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .search {
    background: #409EFF;
    box-sizing: border-box;
    padding: .15rem .28rem;
    position: sticky;
    z-index: 999;
    top: 0;
    font-size: .373333rem;
    font-family: simsun;
    line-height: .373333rem;

    .content {
      background: #fff;
      height: .63rem;
      border-radius: 5px;
      line-height: .63rem;
      text-align: center;

      span {
        font-family: simsun;
        color: #999;
        font-size: .373333rem;
      }
      .van-icon-search {
        margin-right: .05rem;
      }
    }
  }

  .merchant {
    height: .72rem;
    margin-top: .08rem;
  }
}
</style>