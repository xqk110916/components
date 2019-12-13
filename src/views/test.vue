<template>
  <div class="warpper">
    <!-- <recommend></recommend> -->
    <!-- <shop-card class="top"></shop-card> -->
    <order-card  v-for="n in 3" :key="n"></order-card>
    <bottom-nav-bar></bottom-nav-bar>
  </div>
</template>

<script>
  // import recommend from '@/components/home/recommend.vue'
  // import shopCard from '@/components/shopCard.vue'
  import bottomNavBar from '@/components/bottom-navBar.vue'
  import orderCard from '@/components/order-card.vue'
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      // recommend,
      // shopCard,
      bottomNavBar,
      orderCard
    }
  }
</script>

<style lang="scss" scoped>
.warpper {
  box-sizing: border-box;
  margin-top: 10px;
  height: 100vh;
  background: #eee;

  .top {
    margin-top: 10px;
  }
}
</style>