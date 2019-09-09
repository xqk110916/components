<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import reSize from '@/public/resize.js'
export default {
  name: 'index',
  data(){
    return {}
  },
  created() {
    this.reSize()
    window.addEventListener('resize', this.reSize)
  },
  methods: {
    reSize() {
      reSize()
    },
  }
}
</script>

<style lang="scss">
@import '../public/reset.mobile.css';   //引入重置样式文件

</style>
