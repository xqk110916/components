<template>
  <div class="swiper-items">
    <van-swipe @change="onChange" ref="swipe" :loop="false">
      <van-swipe-item v-for="(item, i) in datas" :key="i">
        <div class="item" v-for="(list, index) in 10" :key="index">
          <img src="../../public/img/page1.jpg">
          <span>美食</span>
        </div>
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator"> 
        <div v-for="(item, i) in datas" :key="i" :class="['pointer', current + 1 == item?'active' : '']" @click="handlerClick(item)"></div>
      </div>
    </van-swipe>
    
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data() {
      return {
        datas: 2,
        current: 0,
      }
    },
    created () {
      this.getImages()
    },
    methods: {
      getImages() {
        
      },
      group(params) {
        if(params.length >= 10) {
          let imgs = params.slice(0, 10)
          let arr =  params.slice(11, params.length)
          this.datas.push(imgs)
          this.group(arr)
        } else {
          if(!params.length) return
          let imgs = params.slice(0, params.length)
          this.datas.push(imgs)
        }
      },
      onChange(index) {
        this.current = index;
      },
      handlerClick(index) {
        this.current = index - 1
        console.log(this.$refs.swipe)
        this.$refs.swipe.swipeTo(this.current)
      }
    },
  }
</script>

<style lang="scss" scoped>
.swiper-items {
  // height: 3rem;

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

  .custom-indicator {
    width: 100%;
    height: 12px;
    display: flex;
    justify-content: center;

    .pointer {
      width: 10px;
      height: 2px;
      background: #000;
      opacity: .2;
      margin: 10px 2px;
    }

    .active {
      background: #fe7100;
    }
  }
}
</style>