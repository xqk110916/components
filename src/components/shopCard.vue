<template>
  <div class="card">
    <img src="@/public/img/shopLogo.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'shopCard'
  }
</script>

<style lang="scss" scoped>
.card {
  height: 3.5rem;
  padding: .3rem .2rem;
  box-sizing: border-box;

  img {
    width: 1rem;
    height: 1em;
  }
}
</style>