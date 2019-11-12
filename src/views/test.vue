<template>
  <div class="warpper">
    <recommend></recommend>
  </div>
</template>

<script>
  import recommend from '@/components/home/recommend.vue'
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      recommend
    }
  }
</script>

<style lang="scss" scoped>
.warpper {
  box-sizing: border-box;
  margin-top: 10px;
  height: 100vh;
}
</style>