<template>
  <div class="warpper">
    <recommend></recommend>
    <shop-card class="top"></shop-card>
  </div>
</template>

<script>
  import recommend from '@/components/home/recommend.vue'
  import shopCard from '@/components/shopCard.vue'
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      recommend,
      shopCard
    }
  }
</script>

<style lang="scss" scoped>
.warpper {
  box-sizing: border-box;
  margin-top: 10px;
  height: 100vh;

  .top {
    margin-top: 10px;
  }
}
</style>