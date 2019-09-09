<template>
  <div class="swiper-items clearfix">
    <div class="swiper-box">
      <div class="item" v-for="item in 10" :key="item">
        <img src="../public/img/page1.jpg">
        <span>美食</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data() {
      return {
        imgs: [],   //获取轮播图片数组
        data: [],
      }
    },
    created () {
      this.getImages()
    },
    methods: {
      getImages() {
        
      },
      group() {
        let copy = []
        let arr = JSON.parse(JSON.stringify(this.imgs))
        function classify(arr) {
          if(arr.length >= 5) {
            copy.push(arr.splice(0, 5))
            return group(arr)
          } else {
            copy.push(arr)
          }
        }
        classify(arr)
        this.data = copy
      }
    },
  }
</script>

<style lang="scss" scoped>
.swiper-items {
  height: 3.54rem;

  .item {
    width: 20%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: .22rem;
      width: .9rem; 
      height: .9rem;
    }
    span {
      margin-top: .1rem;
      color: #666;
      font-size: 16px;
    }
  }
}
</style>