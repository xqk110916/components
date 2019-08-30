<template>
  <div class="home">
    <header>
      <i class="el-icon-location-outline"></i>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        
      }
    },
    created() {

    },
  }
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;

  header {
    height: 2rem;
    background: #409EFF;
    i {
      font-size: .24rem;
      color: #fff;
    }
  }
}
</style>