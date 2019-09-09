<template>
  <div class="home">
    <header>
      <i class="el-icon-location-outline"></i>
      <span>定安名都</span>
      <i class="el-icon-caret-bottom"></i>
    </header>
    <div class="search">
      <router-link tag="p" class="content" to="">
        <i class="el-icon-search"></i>
        <span>搜索饿了吗商家或商品名称</span>
      </router-link>
    </div>
    <carousel></carousel>
  </div>
</template>                                                                                                                                                                                                                                                                                                                                                                                                                           

<script>
  import carousel from '@/components/swiper-item.vue'
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
      carousel,
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
      .el-icon-search {
        color: #999;
        font-size: .3rem;
      }
    }
  }
}
</style>