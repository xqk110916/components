<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <router-view></router-view>
    </van-pull-refresh>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import reSize from '@/public/resize.js'
import bottomNav from '@/components/bottom-navBar.vue'
export default {
  name: 'index',
  data(){
    return {
      isLoading: false,
    }
  },
  created() {
    this.reSize()
    window.addEventListener('resize', this.reSize)
  },
  methods: {
    reSize() {
      reSize()
    },
    onRefresh() {
      console.log("刷新")
      window.location.reload(true)
    },

  },
  components: {
    bottomNav,
  }
}
</script>

<style lang="scss">
@import '../public/reset.mobile.css';   //引入重置样式文件
img {
  vertical-align: top;
}
</style>
